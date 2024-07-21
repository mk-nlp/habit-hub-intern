import { logInUser } from "@/app/backend";
import { lucia } from "@/auth";

export async function POST(request: Request, response: Response) {
    const { email, password } = await request.json();
        const user = await logInUser(email, password);
       
        if (!user) {
            return Response.json({ Error: "Invalid username or password" });
        }
        const session = await lucia.createSession(user.id, {});
        const sessionCookie = lucia.createSessionCookie(session.id);
        return new Response(JSON.stringify({ message: "Logged in successfully" }), {
            status: 302,
            headers: {
                "Set-Cookie": sessionCookie.serialize(),
                },
            });
}
