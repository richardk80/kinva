/* empty css                          */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../chunks/chunk.Dwxe70VL.js';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/chunk.CZFltgPO.js';
import { $ as $$SmallLink } from '../../chunks/chunk.BMXEsAS5.js';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const username = "astro";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Your Layouts" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mx-[50px] mb-8"> <h1 class="text-[25.6px] font-semibold mb-2 text-balance">Your Layouts</h1> <p class="text-xs mb-2">${renderComponent($$result2, "SmallLink", $$SmallLink, { "href": `/${username}/layouts/create`, "link": "create layout" })}</p> <a class="text-blue-600 hover:text-red-600 hover:underline text-xs" href="/">« Back to your homepage</a> </main> ` })}`;
}, "/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/layouts/index.astro", void 0);

const $$file = "/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/layouts/index.astro";
const $$url = "/[...username]/layouts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
