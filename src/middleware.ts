import { NextRequest, NextResponse } from "next/server";
import { middlewareChain } from "./middleware/middleware-chain";
import { withBananaCounter } from "./middleware/with-banana-counter";
import { withFridayDetector } from "./middleware/with-friday-detector";

const baseHandler = async (request: NextRequest): Promise<NextResponse> => {
  return new Response(undefined, {
    status: 200,
    headers: new Headers(request.headers),
  }) as NextResponse;
};

export const middleware = middlewareChain(
  withBananaCounter, // Count bananas 🍌
  withFridayDetector // Finally, detect Fridays 🍺
)(baseHandler);


export const config = {
  matcher: [
    '/',
  ],
};
