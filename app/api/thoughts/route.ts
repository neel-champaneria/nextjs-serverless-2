import db from "@/libs/db";

import { NextRequest, NextResponse } from "next/server";

export const runtime = process.env.NODE_ENV === "development" ? "node" : "edge";

export async function POST(request: NextRequest) {
  const { text } = await request.json();
  const thought = await db.thought.create({
    data: { text },
  });
  return Response.json({ message: "Thought Created" }, { status: 201 });
}

export async function GET(request: NextRequest) {
  const thoughts = await db.thought.findMany();
  return Response.json({ thoughts });
}
