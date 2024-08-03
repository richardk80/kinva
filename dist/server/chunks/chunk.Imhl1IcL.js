import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderSlot } from './chunk.5Qftb6w9.js';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://www.himoot.com");
const $$NonRegularBox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$NonRegularBox;
  const { widthcss, backgroundColor, borderColor, name, pclass, username, username2 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(widthcss, "class")}> <div${addAttribute(["py-0.5", backgroundColor], "class:list")}> <div${addAttribute(pclass, "class")}> <p class="flex items-center"> ${username2} ${name} ${username} </p> </div> </div> <div${addAttribute(["border-2 border-solid", borderColor], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/main/NonRegularBox.astro", void 0);

export { $$NonRegularBox as $ };
