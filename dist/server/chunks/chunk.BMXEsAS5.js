import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute } from './chunk.Dwxe70VL.js';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://www.himoot.com");
const $$SmallLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SmallLink;
  const { href, link } = Astro2.props;
  return renderTemplate`[${maybeRenderHead()}<a class="text-blue-600 hover:text-red-600 hover:underline"${addAttribute(href, "href")}>${link}</a>]`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/main/SmallLink.astro", void 0);

export { $$SmallLink as $ };
