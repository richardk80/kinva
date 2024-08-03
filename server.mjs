import { createServer } from 'astro/server';
import { handler } from './dist/server/entry.mjs';

export default async function() {
  const server = await createServer(handler);
  return server;
}