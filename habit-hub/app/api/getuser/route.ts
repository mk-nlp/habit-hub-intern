import { getUserByName, getUserById } from "@/app/backend";

import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest, response: NextResponse) {
    const params =  request.nextUrl.searchParams;
    const name = params.get("name") as string;
    const user = await getUserByName(name);
    return Response.json(user);
}