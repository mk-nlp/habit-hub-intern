import { getUserByName } from "@/app/backend";

import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest, response: NextResponse) {
    const params =  request.nextUrl.searchParams;
    const name = params.get("name") as string;
    const user = await getUserByName(name);
    console.log(user);
    return Response.json(user);
}