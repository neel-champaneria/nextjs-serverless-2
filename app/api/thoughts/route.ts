import db from "@/libs/db";

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { text } = await request.json();
  const thought = await db.thought.create({
    data: { text },
  });
  return Response.json({ message: "Thought Created" }, { status: 201 });
}
