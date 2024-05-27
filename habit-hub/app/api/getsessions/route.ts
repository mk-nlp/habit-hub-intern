import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/app/backend';
import { validateSession } from '@/utils/validate-session';

export async function GET(request: NextRequest, response: NextResponse) {
    const validationResponse = await validateSession(request);
    console.log(validationResponse);

    if (validationResponse.status !== 200) {
        return NextResponse.json({ success: false, message: 'Invalid session or origin' });
    }
    const id = request.nextUrl.searchParams.get('id') as string;
    const sessionData = await getSession(id);
    return NextResponse.json(sessionData);
}


