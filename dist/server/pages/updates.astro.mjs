/* empty css                       */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/chunk.5Qftb6w9.js';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/chunk.CjRQmwsE.js';
export { renderers } from '../renderers.mjs';

const $$Updates = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Updates" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mx-[50px] mb-8"> <h1 class="text-[25.6px] font-semibold mb-2 text-balance">Updates</h1> </main> ` })}`;
}, "/Users/ryanx30x/Projects/spacehey/src/pages/updates.astro", void 0);

const $$file = "/Users/ryanx30x/Projects/spacehey/src/pages/updates.astro";
const $$url = "/updates";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Updates,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
