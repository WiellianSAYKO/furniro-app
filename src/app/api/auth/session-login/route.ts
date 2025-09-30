import { NextRequest, NextResponse } from "next/server";
import Backendless from "@/lib/backendless";

export async function POST (req: NextRequest) {
   try {
      const data = await req.json()
      const response = await Backendless.Data.of("Users").findById(
       data?.objectId
      );
      console.log(response)
      return NextResponse.json({
        message: 'successfully login account',
        data: response,
      })
   } catch (error) {
   const message =
    error instanceof SyntaxError
      ? "Invalid JSON body"
      : error instanceof Error
      ? error.message
      : "Unknown error";

  return NextResponse.json({ message }, { status: 400 });

   }
}