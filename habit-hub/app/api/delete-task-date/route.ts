import { findUserFromSession, deleteTaskByDate } from "@/app/backend";
import { validateSession } from "@/utils/validate-session";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest, response: NextResponse) {
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
    const date = request.nextUrl.searchParams.get('date') as string;
    const tasks = await deleteTaskByDate(user, date);
    return NextResponse.json(tasks);
}

