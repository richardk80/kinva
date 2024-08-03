import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent } from './chunk.Dwxe70VL.js';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './chunk.BTqCLof_.js';

const $$Astro = createAstro("https://www.himoot.com");
const $$ProfileImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProfileImage;
  const { width, height, imgclass, srcurl, altText, titleText } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Image", $$Image, { "width": width, "height": height, "class": imgclass, "loading": "eager", "src": srcurl, "alt": altText, "title": titleText })}`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/home/ProfileImage.astro", void 0);

export { $$ProfileImage as $ };
