/* empty css                             */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, e as addAttribute } from '../../../chunks/chunk.Dwxe70VL.js';
import 'kleur/colors';
import { $ as $$Layout } from '../../../chunks/chunk.CZFltgPO.js';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://www.himoot.com");
const $$Create = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Create;
  const url = "http://localhost:3000";
  const response = await fetch(`${url}/api/v1/data`);
  const data = await response.json();
  const { username } = Astro2.params;
  const page = data.find((page2) => page2.username === username);
  if (!page) return Astro2.redirect("/404");
  const { name, hidden } = page;
  let parts = name.split(" ");
  parts.shift();
  parts.join(" ");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Create Layout" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mx-[50px] mb-8"> <h1 class="text-[19.2px] font-semibold mb-1">Create Layout</h1> <p class="mb-2"><a class="text-blue-600 hover:text-red-600 hover:underline text-xs"${addAttribute(`/${username}/layouts`, "href")}>« Back to your layouts</a></p> <a class="text-blue-600 hover:text-red-600 hover:underline text-xs" href="/">« Back to your homepage</a> </main> ` })}`;
}, "/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/layouts/create.astro", void 0);

const $$file = "/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/layouts/create.astro";
const $$url = "/[...username]/layouts/create";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Create,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
