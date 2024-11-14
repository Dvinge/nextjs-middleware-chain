import { NextFetchEvent, NextMiddleware, NextRequest } from 'next/server';

export function withFridayDetector(next: NextMiddleware) {
  return async function middleware(request: NextRequest, event: NextFetchEvent) {
    const requestHeaders = new Headers(request.headers);
    const isFriday = new Date().getDay() === 5;
    requestHeaders.set('x-friday', isFriday ? 'yes' : 'no');
    
    const modifiedRequest = new NextRequest(request, {
      headers: requestHeaders,
    });
    
    return next(modifiedRequest, event);
  };
}