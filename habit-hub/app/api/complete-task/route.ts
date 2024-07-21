import { completeTask } from "@/app/backend";
import { validateSession } from "@/utils/validate-session";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
    const validationResponse = await validateSession(request);

    if (validationResponse.status !== 200) {
        return NextResponse.json({ success: false, message: 'Invalid session or origin' });
    }
    const {taskId} = await request.json();
    const tasks = await completeTask(taskId);
    return NextResponse.json(tasks);
}

