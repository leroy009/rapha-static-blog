import { defineMiddleware } from "astro:middleware";
// src/middleware.ts
export const onRequest = defineMiddleware((context, next) => {
  return next().catch(err => {
    console.error('Server Error:', err);
    return new Response(JSON.stringify({
      error: err.message || 'Internal Server Error',
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  });
});