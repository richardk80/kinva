/* empty css                       */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/chunk.Dwxe70VL.js';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/chunk.CZFltgPO.js';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ' <script>\n// Function to handle the page redirection\nfunction redirectPage() {\n  setTimeout(() => {\n    window.location.href = "/";\n  }, 10000); // Adjusted to 10 seconds to match the countdown\n}\n\n// Function to handle the countdown display\nfunction countdown() {\n  let timeLeft = 10; // Encapsulate within the function to avoid global scope\n\n  function tick() {\n    timeLeft--;\n    document.getElementById("seconds").textContent = timeLeft.toString();\n    if (timeLeft > 0) {\n      setTimeout(tick, 1000);\n    }\n  }\n\n  setTimeout(tick, 1000);\n}\n\n// Initialize the functions\nredirectPage();\ncountdown();\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "Page Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-[810px] flex items-start"> <div class="mx-auto mb-2 font-medium"> <h1 class="text-[25.6px] font-bold text-center mb-3 text-balance">Page Not Found</h1> <img class="mb-3" src="/img/gif/cat_optimized.gif" alt="GIF" loading="eager"> <p class="text-[9px] text-center mb-6">Courtesy of: <a class="text-blue-600 hover:text-red-600 mb-3" href="https://twitter.com/prguitarman" target="_blank">Chris Torres</a></p> <p class="text-[10px] text-center">Redirecting to your homepage in <span class="text-red-600 font-semibold" id="seconds">10</span> seconds</p> </div> </div> ` }));
}, "/Users/ryanx30x/Projects/spacehey/src/pages/404.astro", void 0);

const $$file = "/Users/ryanx30x/Projects/spacehey/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
