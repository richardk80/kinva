/* empty css                             */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../../chunks/chunk.5Qftb6w9.js';
import 'kleur/colors';
import { $ as $$Layout } from '../../../chunks/chunk.CjRQmwsE.js';
export { renderers } from '../../../renderers.mjs';

const $$Postbulletin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Post Bulletin" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Post Bulletin</h1> ` })}`;
}, "/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/bulletins/postbulletin.astro", void 0);

const $$file = "/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/bulletins/postbulletin.astro";
const $$url = "/[...username]/bulletins/postbulletin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Postbulletin,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
