/* empty css                       */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/chunk.5Qftb6w9.js';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/chunk.CjRQmwsE.js';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.himoot.com");
const $$Userbulletins = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Userbulletins;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Astro's Bulletins" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mx-[50px] mb-8"> <h1 class="text-[25.6px] font-semibold mb-2 text-balance">Astro's Bulletins</h1> </main> ` })}`;
}, "/Users/ryanx30x/Projects/spacehey/src/pages/userbulletins.astro", void 0);

const $$file = "/Users/ryanx30x/Projects/spacehey/src/pages/userbulletins.astro";
const $$url = "/userbulletins";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Userbulletins,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
