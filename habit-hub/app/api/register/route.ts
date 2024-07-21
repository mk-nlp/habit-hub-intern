import { addUser } from "@/app/backend";

export async function POST(request: Request, response: Response) {
  const { name, email, password } = await request.json();
  const result = await addUser(name, email, password);
  if (!result.success) {
    return Response.json({ success: false });
  }
  return Response.json({ success: true });
}
