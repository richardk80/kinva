/* empty css                       */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, e as addAttribute } from '../chunks/chunk.5Qftb6w9.js';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/chunk.CjRQmwsE.js';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.himoot.com");
const $$Resetpassword = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Resetpassword;
  const url = "http://localhost:3000";
  const response = await fetch(`${url}/api/v1/data`);
  const data = await response.json();
  const { username } = Astro2.params;
  const page = data.find((page2) => page2.username === username);
  if (!page) return Astro2.redirect("/404");
  const { name, friendcount, collectionId, id, avatar, friendship } = page;
  let parts = name.split(" ");
  let firstName = parts.shift();
  parts.join(" ");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Reset Password" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mx-[50px] mb-8"> <h1 class="text-[25.6px] font-semibold mb-2 text-balance">Reset Password</h1> <a class="text-blue-600 hover:text-red-600 hover:underline text-xs"${addAttribute(`/${username}`, "href")}>« Back to ${firstName}'s profile</a> </main> ` })}`;
}, "/Users/ryanx30x/Projects/spacehey/src/pages/resetpassword.astro", void 0);

const $$file = "/Users/ryanx30x/Projects/spacehey/src/pages/resetpassword.astro";
const $$url = "/resetpassword";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Resetpassword,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
