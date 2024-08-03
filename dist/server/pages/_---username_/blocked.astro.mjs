/* empty css                          */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../chunks/chunk.Dwxe70VL.js';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/chunk.CZFltgPO.js';
export { renderers } from '../../renderers.mjs';

const $$Blocked = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Your User Block List" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mx-[50px] mb-8"> <h1 class="text-[25.6px] font-semibold mb-2 text-balance">Your User Block List</h1> <a class="text-blue-600 hover:text-red-600 hover:underline text-xs" href="/">« Back to your homepage</a> </main> ` })}`;
}, "/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/blocked.astro", void 0);

const $$file = "/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/blocked.astro";
const $$url = "/[...username]/blocked";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Blocked,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
