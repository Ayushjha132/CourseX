

import { NextResponse } from 'next/server';

// For handling GET requests
export async function GET() {
    return NextResponse.json({ message: "hello world" }, { status: 200 });
}
