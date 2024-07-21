import { github, lucia } from "@/auth";
import { OAuth2RequestError } from "arctic";
import { generateIdFromEntropySize } from "lucia";
import { parseCookies } from "oslo/cookie";
import { checkGithubUser } from "@/app/backend";
import { addUserWithGithub } from "@/app/backend";

export async function GET(request: Request) {
    const cookies = parseCookies(request.headers.get("Cookie") ?? "");
	const stateCookie = cookies.get("github_oauth_state") ?? null;
    const url = new URL(request.url);
	const state = url.searchParams.get("state");
	const code = url.searchParams.get("code");
    if (!state || !stateCookie || !code || stateCookie !== state) {
		return new Response(null, {
			status: 400
		});
	}
    try {
		const tokens = await github.validateAuthorizationCode(code);
		const githubUserResponse = await fetch("https://api.github.com/user", {
			headers: {
				Authorization: `Bearer ${tokens.accessToken}`
			}
		});
		const githubUserResult: GitHubUserResult = await githubUserResponse.json();
        if (!githubUserResult || !githubUserResult.id) {
            throw new Error("Invalid GitHub user response");
        }
        const existingUser = await checkGithubUser(githubUserResult.id);

        if (existingUser && existingUser.length > 0) {
            const session = await lucia.createSession(existingUser[0].id, {});
            const sessionCookie = lucia.createSessionCookie(session.id);
            return new Response(null, {
                status: 302,
                headers: {
                    Location: "/",
                    "Set-Cookie": sessionCookie.serialize()
                }
            });
        }

        const userId = generateIdFromEntropySize(10); // 16 characters long
		await addUserWithGithub(userId, githubUserResult.login, githubUserResult.id);
        const session = await lucia.createSession(userId, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		return new Response(null, {
			status: 302,
			headers: {
				Location: "/",
				"Set-Cookie": sessionCookie.serialize()
			}
		});
	} catch (e) {
		console.log(e);
		if (e instanceof OAuth2RequestError) {
			// bad verification code, invalid credentials, etc
			return new Response(null, {
				status: 400
			});
		}
		return new Response(null, {
			status: 500
		});
	}
}




interface GitHubUserResult {
	id: number;
	login: string; // username
}