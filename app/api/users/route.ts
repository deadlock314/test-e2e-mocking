import { NextResponse } from "next/server";

const users = [
  { id: 1, name: "Alice", email: "alice@email.com" },
  { id: 2, name: "Bob", email: "bob@email.com" },
  { id: 3, name: "Charlie", email: "charlie@email.com" },
];

export async function GET() {
  return NextResponse.json(users);
}
