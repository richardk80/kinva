/* empty css                       */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/chunk.5Qftb6w9.js';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/chunk.CjRQmwsE.js';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.himoot.com");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Search" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mx-[50px] mb-8"> <h1 class="font-semibold text-[25.6px] mb-3">Search</h1> <section aria-label="Search Results"> <div class="py-0.5 bg-orange-400/60"> <div class="flex justify-between items-center mx-2"> <p id="searchReadout" class="text-xs font-semibold text-black mt-1 cursor-default"></p> </div> </div> <div class="border-2 border-orange-400/60 border-solid"> <div class="px-3 pt-6 pb-7 -my-5"> <ul id="searchResults" class="flex items-center inline-block space-x-5 text-xs font-semibold mt-0.5"></ul> </div> </div> </section> </main> ` })} `;
}, "/Users/ryanx30x/Projects/spacehey/src/pages/search.astro", void 0);

const $$file = "/Users/ryanx30x/Projects/spacehey/src/pages/search.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Search,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
