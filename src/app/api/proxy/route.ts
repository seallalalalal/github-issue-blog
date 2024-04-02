import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
  const token = await getToken({
    req,
  });

  if (!token) {
    return NextResponse.json(
      {
        message: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }

  //The "access_toke" name is up to you; you need to check how you pass it on the JWT callback
  return Response.json({ accessToken: token["accessToken"] });
}
