import { NextRequest, NextResponse } from 'next/server';
import { validateSession } from '@/utils/validate-session';

export async function GET(request: NextRequest, response: NextResponse) {
    const validationResponse = await validateSession(request);

    if (validationResponse.status !== 200) {
        return NextResponse.json({ success: false, message: 'Invalid session or origin' });
    }

    return NextResponse.json({ success: true, message: 'Valid session' });
}
