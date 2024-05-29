import { findUserFromSession, getTaskByDate } from "@/app/backend";
import { validateSession } from "@/utils/validate-session";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
    const validationResponse = await validateSession(request);

    if (validationResponse.status !== 200) {
        return NextResponse.json({ success: false, message: 'Invalid session or origin' });
    }

    const sessionToken = request.cookies.get('auth_session');
    const sessionData = sessionToken?.value as string;
    const user = await findUserFromSession(sessionData);
    console.log("SERVER USER BÖYLE DİYOR!", user);
    if (!user) {
        return NextResponse.json({ success: false, message: 'User not found' });
    }
    const date = request.nextUrl.searchParams.get('date') as string;
    console.log("DATE", date);
    const tasks = await getTaskByDate(user, date);
    return NextResponse.json(tasks);
}

