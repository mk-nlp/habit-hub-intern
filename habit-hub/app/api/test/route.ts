import { testScrypt } from "@/utils/password";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
    const { password } = await request.json();
    const result = await testScrypt(password);
    return NextResponse.json(result);
}