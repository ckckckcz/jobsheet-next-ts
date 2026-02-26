import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        nama: "Riovaldo Alfiyan Fahmi Rahman",
        nim: "2341720209"
    });
}
