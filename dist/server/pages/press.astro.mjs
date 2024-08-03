/* empty css                       */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/chunk.Dwxe70VL.js';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/chunk.CZFltgPO.js';
export { renderers } from '../renderers.mjs';

const $$Press = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Press" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mx-[50px] mb-8"> <h1 class="text-[25.6px] font-semibold mb-2 text-balance">Press</h1> </main> ` })}`;
}, "/Users/ryanx30x/Projects/spacehey/src/pages/press.astro", void 0);

const $$file = "/Users/ryanx30x/Projects/spacehey/src/pages/press.astro";
const $$url = "/press";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Press,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
