/* empty css                          */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../chunks/chunk.5Qftb6w9.js';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/chunk.CjRQmwsE.js';
export { renderers } from '../../renderers.mjs';

const $$Edit = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Edit Blog Entry" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mx-[50px] mb-8"> <h1 class="text-[25.6px] font-semibold mb-2 text-balance">Edit Blog Entry</h1> <a class="text-blue-600 hover:text-red-600 hover:underline text-xs" href="/blogs">« Back to blogs</a> </main> ` })}`;
}, "/Users/ryanx30x/Projects/spacehey/src/pages/blogs/edit.astro", void 0);

const $$file = "/Users/ryanx30x/Projects/spacehey/src/pages/blogs/edit.astro";
const $$url = "/blogs/edit";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Edit,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
