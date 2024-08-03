/* empty css                       */
import { b as createAstro, c as createComponent, r as renderTemplate, d as renderHead } from '../chunks/chunk.5Qftb6w9.js';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.himoot.com");
const $$500 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$500;
  const { error } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><title>Server error - Custom 500</title>${renderHead()}</head> <body> <h1>Server error</h1> <p>${error instanceof Error ? error.message : "Unknown error"}</p> </body></html>`;
}, "/Users/ryanx30x/Projects/spacehey/src/pages/500.astro", void 0);

const $$file = "/Users/ryanx30x/Projects/spacehey/src/pages/500.astro";
const $$url = "/500";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$500,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
