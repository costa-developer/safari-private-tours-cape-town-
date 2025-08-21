import { getAllBlogs } from "@/lib/blogmarkdown";
import { NextResponse } from "next/server";

export async function GET() {
  const projects = getAllBlogs(["title", "slug", "date", "coverImage"]);
  return NextResponse.json(projects);
}
