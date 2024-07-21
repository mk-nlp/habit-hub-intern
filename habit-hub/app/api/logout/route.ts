import { logOut } from "@/app/backend";
import { NextRequest, NextResponse } from "next/server";
import { lucia } from "@/auth";
import { validateSession } from "@/utils/validate-session";
import { findUserFromSession } from "@/app/backend";


export async function POST(request: NextRequest, response: NextResponse) {
    const validationResponse = await validateSession(request);
    if (validationResponse.status !== 200) {
        return NextResponse.json({ success: false, message: 'Invalid session or origin' });
    }
    const sessionToken = request.cookies.get('auth_session');
    const sessionData = sessionToken?.value as string;
    const userIdFromSession = await findUserFromSession(sessionData);
    if (!userIdFromSession) {
        return NextResponse.json({ success: false, message: 'User not found' });
    }
    await logOut(userIdFromSession);

    return new Response(null, {
        status: 200,
        headers: {
            Location: "/login",
            "Set-Cookie": "",
        }
    }); 

    
   

}


