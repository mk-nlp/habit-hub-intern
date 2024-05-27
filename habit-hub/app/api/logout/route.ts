import { logOut } from "@/app/backend";
import { NextRequest, NextResponse } from "next/server";
import { lucia } from "@/auth";
import { validateSession } from "@/utils/validate-session";


export async function POST(request: NextRequest, response: NextResponse) {
    const validationResponse = await validateSession(request);
    console.log("VALIDATION RESPONSEUM DA RESPONSUM!", validationResponse);
    if (validationResponse.status !== 200) {
        return NextResponse.json({ success: false, message: 'Invalid session or origin' });
    }
    const id = request.nextUrl.searchParams.get('id') as string;
    await logOut(id);
    return NextResponse.json({ success: true });
}


