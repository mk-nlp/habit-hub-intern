import { logInUser } from "@/app/backend";
import { lucia } from "@/auth";

export async function POST(request: Request, response: Response) {
    const { email, password } = await request.json();
        const user = await logInUser(email, password);
        console.log("LOGIN LOGU", user);
        if (!user) {
            return Response.json({ Error: "Invalid username as password" });
        }
        const session = await lucia.createSession(user[0].id, {});
        const sessionCookie = lucia.createSessionCookie(session.id);
        return new Response(null, {
            status: 302,
            headers: {
                "Set-Cookie": sessionCookie.serialize(),
                },
            });
}
