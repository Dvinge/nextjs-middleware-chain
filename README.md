# NextJS Middleware Chain

This repository contains the code examples from the blog post [Supercharging NextJS with Chainable Middlewares 🔗](https://blog.kdj.dk/posts/nextjs-middleware-chain/).

## Overview

A practical implementation of chainable middleware pattern for NextJS applications. This approach helps you:

- Keep your middleware code organized and maintainable
- Make middleware components reusable across projects
- Simplify testing of individual middleware components
- Chain multiple middlewares in a clean, functional way

## Examples

The repository includes examples of:

- A middleware chain implementation
- Friday detector middleware (because why not? 🍺)
- Banana counter middleware (essential for any project 🍌)

## Usage

```typescript
import { middlewareChain } from "./middleware/middleware-chain";
import { withBananaCounter } from "./middleware/with-banana-counter";
import { withFridayDetector } from "./middleware/with-friday-detector";

export const middleware = middlewareChain(
  withBananaCounter,
  withFridayDetector
)(baseHandler);
```

## License

MIT