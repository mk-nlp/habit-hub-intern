import { findUserFromSession } from "@/app/backend";
import { validateSession } from "@/utils/validate-session";
import { NextRequest, NextResponse } from "next/server";
import { findUserDetails } from "@/app/backend";

export async function GET(request: NextRequest, response: NextResponse) {
    const validationResponse = await validateSession(request);

    if (validationResponse.status !== 200) {
        return NextResponse.json({ success: false, message: 'Invalid session or origin' });
    }

    const sessionToken = request.cookies.get('auth_session');
    const sessionData = sessionToken?.value as string;
    const user = await findUserFromSession(sessionData);
    const userDetails = await findUserDetails(user);
    const detailsToSend = {username: userDetails.username, email: userDetails.email};
    if (!user) {
        return NextResponse.json({ success: false, message: 'User not found' });
    }
    return NextResponse.json(detailsToSend);
}