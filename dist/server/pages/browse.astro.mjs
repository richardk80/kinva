/* empty css                       */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, e as addAttribute } from '../chunks/chunk.Dwxe70VL.js';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/chunk.CZFltgPO.js';
import { $ as $$ProfileImage } from '../chunks/chunk.D54gfmkk.js';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.himoot.com");
const $$Browse = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Browse;
  const filterItems = [
    { href: "/", smallname: "", firstcss: "text-blue-600 hover:text-red-600 font-semibold", secondcss: "text-blue-600 hover:text-red-600 ml-1 font-semibold hover:underline", name: "All Users", dividerCss: "text-black ml-1 cursor-default font-medium text-xs", divider: "-" },
    { href: "/browse", smallname: "newusers", firstcss: "text-blue-600 hover:text-red-600 font-semibold", secondcss: "text-blue-600 hover:text-red-600 ml-1 hover:underline", name: "New Users", dividerCss: "text-black ml-1 cursor-default font-medium text-xs", divider: "-" },
    { href: "/browse", smallname: "onlineusers", firstcss: "text-blue-600 hover:text-red-600 font-semibold", secondcss: "text-blue-600 hover:text-red-600 ml-1 hover:underline", name: "Online Users", dividerCss: "text-black ml-1 cursor-default font-medium text-xs", divider: "" }
  ];
  const friendItems = [
    { href: "/", smallname: "includefriends", firstcss: "text-blue-600 hover:text-red-600 font-semibold", secondcss: "text-blue-600 hover:text-red-600 ml-1 font-semibold hover:underline", name: "Include Friends", dividerCss: "text-black ml-1 cursor-default font-medium text-xs", divider: "-" },
    { href: "/browse", smallname: "excludefriends", firstcss: "text-blue-600 hover:text-red-600 font-semibold", secondcss: "text-blue-600 hover:text-red-600 ml-1 hover:underline", name: "Exclude Friends", dividerCss: "text-black ml-1 cursor-default font-medium text-xs", divider: "" }
  ];
  const currentPath = new URL(Astro2.request.url).pathname.slice(1);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Browse" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="text-black"> <div class="mx-auto w-[700px] px-[8px]"> <h1 class="text-[25.6px] font-semibold mb-3 text-balance">Browse</h1> <div class="flex items-stretch text-xs mb-3"> <p class="text-xs text-black cursor-default font-semibold">Filter:</p> ${filterItems.map((filter) => renderTemplate`<a${addAttribute(filter.href, "href")}${addAttribute(currentPath === filter.smallname ? filter.firstcss : filter.secondcss, "class")}>${filter.name}</a>
					    	<div${addAttribute(filter.dividerCss, "class")}>${filter.divider}</div>`)} </div> <div class="flex items-stretch text-xs mb-3"> <p class="text-xs text-black cursor-default font-semibold">Friends:</p> ${friendItems.map((friend) => renderTemplate`<a${addAttribute(friend.href, "href")}${addAttribute(currentPath === friend.smallname ? friend.firstcss : friend.secondcss, "class")}>${friend.name}</a>
					    	<div${addAttribute(friend.dividerCss, "class")}>${friend.divider}</div>`)} </div> <div class="py-0.5 bg-orange-400/60"> <div class="flex justify-between items-center mx-2"> <p class="text-xs font-semibold text-red-600 mt-1 cursor-default">Active Users</p> <a class="text-black text-[10.24px] hover:underline" href="#">[random]</a> </div> </div> <div class="border-2 border-orange-400/60 border-solid"> <div class="px-3 py-3"> ${[...Array(50)].map(() => renderTemplate`<div class="my-[5px] mx-[20px] inline-block"> <a class="text-blue-600 hover:text-red-600 hover:underline" href="/astro" title="Visit Astro's profile"> <p class="text-xs flex justify-center font-semibold">Astro</p> ${renderComponent($$result2, "ProfileImage", $$ProfileImage, { "width": 90, "height": 90, "imgclass": "hover:no-underline mt-1", "srcurl": "/img/avatar.svg", "altText": "Astro's profile picture" })} </a> </div>`)} </div> </div> </div> <div class="flex items-center justify-between pt-2 px-[104px]"> <a class="text-[10.24px] text-blue-600 hover:text-red-600 font-normal hover:underline" href="/invite">Invite your friends to join Hi Moot!</a> <a rel="next" href="/"> <button type="button" class="py-0.5 px-2 bg-gray-100 hover:bg-gray-200 text-xs text-black border border-black border-solid focus:outline-none flex" type="submit" aria-label="search">Next Page</button> </a> </div> </main> ` })}`;
}, "/Users/ryanx30x/Projects/spacehey/src/pages/browse.astro", void 0);

const $$file = "/Users/ryanx30x/Projects/spacehey/src/pages/browse.astro";
const $$url = "/browse";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Browse,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
