/* empty css                          */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, e as addAttribute } from '../../chunks/chunk.Dwxe70VL.js';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/chunk.CZFltgPO.js';
export { renderers } from '../../renderers.mjs';

const $$Edit = createComponent(($$result, $$props, $$slots) => {
  const username = "";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Edit Your Profile" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mx-[50px] mb-8"> <h1 class="text-[25.6px] font-semibold mb-2 text-balance">Edit Your Profile</h1> <a class="text-blue-600 hover:text-red-600 hover:underline text-xs"${addAttribute(`/${username}`, "href")}>« Back to your profile</a> </main> ` })}`;
}, "/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/edit.astro", void 0);

const $$file = "/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/edit.astro";
const $$url = "/[...username]/edit";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Edit,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
