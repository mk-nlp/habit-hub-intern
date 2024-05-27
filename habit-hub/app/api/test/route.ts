import { testScrypt } from "@/utils/password";

export async function POST(request: Request, response: Response) {
    const { password } = await request.json();
    await testScrypt(password).then((result) => {
        return Response.json({ success: result });
    }
    );



}