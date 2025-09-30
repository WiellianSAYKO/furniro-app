import { NextRequest, NextResponse } from "next/server";
import Backendless from "@/lib/backendless";

export async function POST (req: NextRequest) {
   try {
      // 01. GET data from request
      const data =await req.json();
      console.log(data)

      // 02. Check data into database
      const response = await Backendless.UserService.login(
        data?.username,
        data?.password,
        false

      );
      console.log(response);
      // 03. Sending response
      return NextResponse.json({
        message: 'successfully login account',
        data: response,
      })
   } catch (error: any) {
      return NextResponse.json({
        message: error?.message,
      });
    
   }
}