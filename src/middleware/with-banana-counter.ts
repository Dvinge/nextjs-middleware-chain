import { NextFetchEvent, NextMiddleware, NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function withBananaCounter(next: NextMiddleware) {
  return async function middleware(request: NextRequest, event: NextFetchEvent) {
    const response = await next(request, event);

    const modifiedResponse = NextResponse.next();
    response?.headers.forEach((value, key) => {
      modifiedResponse.headers.set(key, value);
    });
    modifiedResponse.headers.set('x-bananas', encodeURIComponent('🍌'));
    
    return modifiedResponse;
  };
}