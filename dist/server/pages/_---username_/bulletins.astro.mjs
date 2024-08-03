/* empty css                          */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, e as addAttribute } from '../../chunks/chunk.Dwxe70VL.js';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/chunk.CZFltgPO.js';
import '../../chunks/chunk.BMXEsAS5.js';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.himoot.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const username = "astro";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Your Bulletins" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mx-[50px] mb-8"> <h1 class="text-[25.6px] font-semibold mb-2 text-balance">Your Bulletins</h1> ${"" } <a class="text-blue-600 hover:text-red-600 hover:underline text-xs"${addAttribute(`/${username}`, "href")}>« Back to ${`Astro's` } profile</a> </main> ` })}`;
}, "/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/bulletins/index.astro", void 0);

const $$file = "/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/bulletins/index.astro";
const $$url = "/[...username]/bulletins";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
