import { addUser } from "@/app/backend";

export async function POST(request: Request, response: Response) {
  const { name, email, password } = await request.json();
  await addUser(name, email, password);
  return Response.json({ success: true });
}
