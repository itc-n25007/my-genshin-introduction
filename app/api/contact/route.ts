import { NextResponse } from "next/server";
import { client } from "@/app/_libs/microcms";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await client.create({
      endpoint: "contact",
      content: {
        name: body.name,
        email: body.email,
        message: body.message,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
