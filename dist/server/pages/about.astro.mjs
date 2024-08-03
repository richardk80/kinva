/* empty css                       */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, a as renderComponent } from '../chunks/chunk.5Qftb6w9.js';
import 'kleur/colors';
import { a as $$Icon, $ as $$Layout } from '../chunks/chunk.CjRQmwsE.js';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$FollowButtons = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="space-y-8"> <h3 class="text-[14.976px] font-semibold flex items-center text-black">
Follow Hi Moot on:
<div class="flex items-center ml-1 space-x-2"> ${[
    ["flex items-center justify-center w-6 h-6 bg-black hover:bg-stone-700", "Follow Hi Moot on X", "https://x.com/himoot", "m-auto h-[16px] w-[16px] fill-white", "x-twitter"],
    ["flex items-center justify-center w-6 h-6 instagram hover:brightness-110", "Follow Hi Moot on Instagram", "https://instagram.com/himoot", "m-auto h-[20px] w-[20px] fill-white", "instagram"],
    ["flex items-center justify-center w-6 h-6 bg-red-600 hover:bg-red-500", "Subscribe to Hi Moot on YouTube", "https://www.youtube.com/himoot", "m-auto h-[16px] w-[16px] fill-white", "youtube"],
    ["flex items-center justify-center w-6 h-6 bg-black hover:bg-stone-700", "Follow Hi Moot on TikTok", "https://www.tiktok.com/@himoot", "m-auto h-[16px] w-[16px] fill-white", "tiktok"],
    ["flex items-center justify-center w-6 h-6 bg-blue-700 hover:bg-blue-600", "Follow Hi Moot on Facebook", "https://www.facebook.com/himoot", "m-auto h-[16px] w-[16px] fill-white", "facebook"]
  ].map(([buttonClass, buttonTitle, buttonHref, iconClass, iconName], iconIndex) => renderTemplate`<a${addAttribute(buttonClass, "class")}${addAttribute(buttonTitle, "title")}${addAttribute(buttonHref, "href")} target="_blank" rel="noopener"> ${renderComponent($$result, "Icon", $$Icon, { "key": iconIndex, "class": iconClass, "name": iconName })} </a>`)} </div> </h3> </div>`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/about/FollowButtons.astro", void 0);

const $$BottomAboutText = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h2 class="text-[19.2px] font-semibold mb-2 text-balance leading-2">Need Help?</h2> <div class="mb-2"> <p class="text-xs text-balance leading-2">If you need help with Hi Moot, please check out our <a class="text-blue-600  font-normal hover:text-red-600 hover:underline" href="/help">Help Center</a></p> </div> <h2 class="text-[19.2px] font-semibold mb-2 text-balance leading-2">How to Support Us</h2> <div class="mb-2 space-y-3"> <p class="text-xs text-balance leading-2">Hi Moot is a small, independent social network, funded by your donations</p> <p class="text-xs text-balance leading-2">Learn more about supporting us by buying merchandise or donating on the <a class="text-blue-600 font-normal hover:text-red-600 hover:underline" href="/support" title="Learn more about how you can support us">Support page</a></p> </div> <h2 class="text-[19.2px] font-semibold mb-2 text-balance leading-2">Contact Us</h2> <p class="mb-2 text-xs text-balance leading-2">For any other inquiries, please email us at <a class="text-red-600" href="mailto:support@himoot.com">support@himoot.com</a></p> <h2 class="text-[19.2px] font-semibold mb-2 text-balance leading-2">Press</h2> <div class="mb-2 space-y-3"> <p class="text-xs text-balance leading-2">To view our press releases, please visit our <a class="text-blue-600  font-normal hover:text-red-600 hover:underline" href="/press">Press Center</a></p> <p class="text-xs text-balance leading-2">If you have any press inquiries, please contact <a class="text-red-600" href="#">press@himoot.com</a></p> <p class="text-xs text-balance leading-2">To download our logo, please visit our <a class="text-blue-600 font-normal hover:text-red-600 hover:underline" href="/brand">Brand Resources</a></p> </div> <h2 class="text-[19.2px] font-semibold mb-2 text-balance leading-2">Disclaimer</h2> <p class="mb-8 text-xs text-balance leading-2">Hi Moot is not affiliated with MySpace<sup>®</sup> in any way</p>`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/about/BottomAboutText.astro", void 0);

const $$TopAboutText = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h2 class="text-[19.2px] font-semibold mb-2 text-balance">What is Hi Moot?</h2> <div class="mb-2 space-y-3"> <p class="text-xs text-balance">Hi Moot is a social network focused on privacy and customizability</p> <p class="text-xs text-balance">It is a friendly place to have fun, meet friends, and be creative</p> </div> <h2 class="text-[14.976px] font-semibold mb-2 text-balance">It is Retro Social</h2> <div class="mb-2 space-y-3"> <p class="text-xs leading-5 text-balance">Hi Moot has all the things you miss on social networks: bulletins, blogs, forums, instant messages and more</p> </div> <h2 class="text-[14.976px] font-semibold mb-2 text-balance">It is Fully Customizable</h2> <div class="mb-2 space-y-3"> <p class="text-xs leading-5 text-balance">Hi Moot allows you to add custom HTML and CSS code to your profile to give you all the freedom to make your profile truly your space</p> </div> <h2 class="text-[14.976px] font-semibold mb-2 text-balance">It is Privacy Friendly</h2> <div class="mb-2 space-y-3"> <p class="text-xs text-balance">Hi Moot has no algorithms, tracking, or personalized ads</p> <p class="text-xs text-balance">Feeds on Hi Moot are chronological and contain no suggested content begging for your attention</p> <p class="text-xs text-balance">You decide what you want to share and what content you would like to view</p> </div> <h2 class="text-[14.976px] font-semibold mb-2 text-balance">It is a Growing Community</h2> <div class="mb-2 space-y-3"> <p class="text-xs leading-5 text-balance">Hi Moot is a safe space for you and your friends to hang out online</p> <p class="text-xs text-balance">Join over 600,000 other users already on Hi Moot, have fun, and meet new like-minded people</p> <p class="text-xs leading-5 text-balance">Don't have an account yet? <a class="text-blue-600 font-normal hover:text-red-600 hover:underline" href="/signup">Join for free</a></p> </div>`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/about/TopAboutText.astro", void 0);

const $$VerifyButtons = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center space-x-44"> ${[
    ["https://validator.w3.org", "Valid HTML5", "w3c-html5"],
    ["https://jigsaw.w3.org/css-validator", "Valid CSS3", "w3c-css3"],
    ["https://validator.w3.org/feed", "Valid RSS", "w3c-rss"]
  ].map(([iconHref, iconTitle, iconName]) => renderTemplate`<a${addAttribute(iconHref, "href")} target="_blank" rel="noopener"${addAttribute(iconTitle, "title")}${addAttribute(iconTitle, "aria-label")}> ${renderComponent($$result, "Icon", $$Icon, { "class": "w-[80px] h-auto hover:brightness-110", "name": iconName, "alt": iconTitle })} </a>`)} </div>`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/about/VerifyButtons.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="px-24 pb-3"> <h1 class="text-[25.6px] font-semibold mb-2 text-balance">About</h1> ${renderComponent($$result2, "TopAboutText", $$TopAboutText, {})} ${renderComponent($$result2, "BottomAboutText", $$BottomAboutText, {})} <div class="mt-2"> ${renderComponent($$result2, "FollowButtons", $$FollowButtons, {})} <div class="mt-10"> ${renderComponent($$result2, "VerifyButtons", $$VerifyButtons, {})} </div> </div> </div> ` })}`;
}, "/Users/ryanx30x/Projects/spacehey/src/pages/about.astro", void 0);

const $$file = "/Users/ryanx30x/Projects/spacehey/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
