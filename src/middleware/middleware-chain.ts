import type { NextMiddleware } from 'next/server';

export function middlewareChain(...middlewares: ((next: NextMiddleware) => NextMiddleware)[]) {
  return function chain(final: NextMiddleware): NextMiddleware {
    return middlewares.reduceRight((next, middleware) => middleware(next), final);
  };
}