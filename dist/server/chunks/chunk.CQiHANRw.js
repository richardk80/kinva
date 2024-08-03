import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderSlot } from './chunk.5Qftb6w9.js';
import 'kleur/colors';
import 'clsx';

const $$Astro$1 = createAstro("https://www.himoot.com");
const $$RegularBox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RegularBox;
  const { widthcss, backgroundColor, borderColor, name, pclass, username, username2, name2, aclass, aurl } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(widthcss, "class")}> <div${addAttribute(["py-0.5", backgroundColor], "class:list")}> <div${addAttribute(pclass, "class")}> <p> ${username2} ${name} ${username} </p> <a${addAttribute(aclass, "class")}${addAttribute(aurl, "href")}>${name2}</a> </div> </div> <div${addAttribute(["border-2 border-solid", borderColor], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/main/RegularBox.astro", void 0);

const $$Astro = createAstro("https://www.himoot.com");
const $$BubbleBox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BubbleBox;
  const { widthcss, backgroundColor, borderColor, name, pclass, username, username2, name2, aclass, aurl, hidden } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(widthcss, "class")}> <div${addAttribute(["py-0.5", backgroundColor], "class:list")}> <div${addAttribute(pclass, "class")}> <p>${username2} ${name} ${username} </p> ${hidden ? "" : renderTemplate`<a${addAttribute(aclass, "class")}${addAttribute(aurl, "href")}>${name2}</a>`} </div> </div> <div${addAttribute(["border-2 border-solid", borderColor], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/main/BubbleBox.astro", void 0);

export { $$RegularBox as $, $$BubbleBox as a };
