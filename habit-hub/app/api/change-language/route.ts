import { findUserFromSession, changeUserLanguage } from "@/app/backend";
import { validateSession } from "@/utils/validate-session";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
    const validationResponse = await validateSession(request);

    if (validationResponse.status !== 200) {
        return NextResponse.json({ success: false, message: 'Invalid session or origin' });
    }

    const sessionToken = request.cookies.get('auth_session');
    const sessionData = sessionToken?.value as string;
    const user = await findUserFromSession(sessionData);
    if (!user) {
        return NextResponse.json({ success: false, message: 'User not found' });
    }
    const language = request.nextUrl.searchParams.get('language') as string;
    const tasks = await changeUserLanguage(user, language);
    return NextResponse.json(tasks);
}

