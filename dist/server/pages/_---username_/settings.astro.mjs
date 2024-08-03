/* empty css                          */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, e as addAttribute } from '../../chunks/chunk.5Qftb6w9.js';
import 'kleur/colors';
import { a as $$Icon, $ as $$Layout } from '../../chunks/chunk.CjRQmwsE.js';
import { $ as $$NonRegularBox } from '../../chunks/chunk.Imhl1IcL.js';
import { $ as $$SmallLink } from '../../chunks/chunk.TkxoEAro.js';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.himoot.com");
const $$Settings = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Settings;
  const username = "astro";
  const { email, name, id } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Account Settings" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto w-[690px] mb-5 form"> <h1 class="text-[25.6px] font-semibold text-balance mb-3">Account Settings</h1> <form class="space-y-2" method="post" enctype="application/json"> ${renderComponent($$result2, "NonRegularBox", $$NonRegularBox, { "name": "Basic Details", "pclass": "flex items-center justify-between mx-2 text-sm font-semibold text-white mb-0.5 mt-1", "backgroundColor": "bg-blue-400", "borderColor": "border-blue-400" }, { "default": ($$result3) => renderTemplate` <div class="m-2"> <span class="text-[12.8px] ml-0.5">Profile Image:</span> <img src="/img/avatar.svg" class="w-40 h-40"> <div class="mt-1"> <label for="file-upload" class="py-0.5 px-[58.5px] bg-gray-100 hover:bg-gray-200 text-xs border border-gray-400 focus:outline-none cursor-pointer">
Upload
</label> <input id="file-upload" type="file" class="hidden"> </div> <label class="block"> <span class="text-[12.8px] ml-0.5">Account ID:</span> <input type="text" name="id" class="max-w-[20ch] py-1 px-2 block w-full border border-gray-300 text-sm focus:border-gray-300 focus:ring-transparent" value="546786"${addAttribute(id, "value")} disabled> </label> <label class="block"> <span class="text-[12.8px] ml-0.5">Email Address:</span> <input type="email" name="email" class="py-1 px-2 block w-full border border-gray-300 text-sm focus:border-gray-300 focus:ring-transparent"${addAttribute(email, "value")}> </label> <label class="block"> <span class="text-[12.8px] ml-0.5">Your Name:</span> <input type="text" name="name" class="py-1 px-2 block w-full border border-gray-300 text-sm focus:border-gray-300 focus:ring-transparent"${addAttribute(name, "value")}> </label> <label class="block"> <span class="text-[12.8px]">Username: (optional)</span> <div class="mb-4"> <div class="flex items-center"> <span class="inline-flex items-center min-w-fit bg-blue-400 text-sm text-white border-l border-t border-b border-gray-300 py-1 px-2">https://www.himoot.com/</span> <input type="text" name="username" class="py-1 px-2 block w-full border-l-0 border-r border-t border-b border-gray-300 text-sm focus:z-10 focus:border-gray-300 focus:ring-0 focus:ring-transparent"${addAttribute(username, "value")}> </div> </div> <div class="w-full text-xs bg-blue-200 border border-blue-300 py-1 px-2"> <p class="mb-3">If you set a username, you will get a custom URL for your profile.</p> <p class="mb-3">Example: <span class="font-semibold">https://www.himoot.com/username</span></p> <p><span class="font-semibold">Attention:</span> If you change your username, your previous profile URL will not work anymore and your username will be openly available to other users!
</p> </div> </label> </div> ` })} ${renderComponent($$result2, "NonRegularBox", $$NonRegularBox, { "name": "Privacy", "pclass": "flex items-center justify-between mx-2 text-sm font-semibold text-white mb-0.5 mt-1", "backgroundColor": "bg-blue-400", "borderColor": "border-blue-400" }, { "default": ($$result3) => renderTemplate` <div class="m-2"> <label class="block mb-2"> <span class="text-[12.8px] ml-0.5">Show online status on your profile:</span> <select class="py-1 px-3 pr-9 block w-full border border-gray-300 text-sm focus:border-gray-300 focus:ring-transparent"> <option>Yes</option> <option>No</option> </select> </label> <label class="block mb-2"> <span class="text-[12.8px] ml-0.5">Who can start an IM conversation with you:</span> <select class="py-1 px-3 pr-9 block w-full border border-gray-300 text-sm focus:border-gray-300 focus:ring-transparent"> <option>Your Friends</option> <option>Everyone</option> <option>No One</option> </select> </label> <label class="block"> <span class="text-[12.8px]">Who can view your Profile:</span> <select class="py-1 px-3 pr-5 block w-full border border-gray-300 text-sm focus:border-gray-300 focus:ring-transparent mb-4"> <option>Everyone (Public)</option> <option>Only Friends (Private)</option> </select> <div class="w-full bg-blue-200 border border-blue-300 px-2 py-1"> <p class="text-xs mb-1">If your profile is set to <span class="font-semibold">private</span>, only friends can view the content of your profile.</p> <p class="text-xs">Comments, forums, public blog entries, and other content posted by you will stay public.</p> </div> </label> </div> ` })} ${renderComponent($$result2, "NonRegularBox", $$NonRegularBox, { "name": "Security & Account Access", "pclass": "flex items-center justify-between mx-2 text-sm font-semibold text-white mb-0.5 mt-1", "backgroundColor": "bg-blue-400", "borderColor": "border-blue-400" }, { "default": ($$result3) => renderTemplate` <div class="m-2"> <div class="flex items-center space-x-1"> <p class="text-sm">2-Factor Authentication:</p> <div class="flex items-center space-x-1"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "fill-green-600 h-4 w-4" , "name": "circle-check"  })} <p class="font-semibold text-sm">${"Enabled" }</p> <p class="text-xs">${renderComponent($$result3, "SmallLink", $$SmallLink, { "href": "" , "link": "disable"  })}</p> </div> </div> </div> ` })} </form> <div class="mt-2.5"> <button class="py-0.5 px-2 bg-gray-100 hover:bg-gray-200 text-xs border border-black" type="submit">Save All</button> </div> <div class="space-y-2 mt-2.5"> <p class="text-[12.8px] font-semibold">More Options</p> <li class="ml-1 list-disc list-[circle] list-outside text-xs">
To change your password, please <a class="text-blue-600 hover:text-red-600 hover:underline"${addAttribute(`/${username}/resetpassword`, "href")}>click here</a>.
</li> <li class="ml-1 list-disc list-[circle] list-outside text-xs">
To export your account data, please <a class="text-blue-600 hover:text-red-600 hover:underline"${addAttribute(`/${username}/exportdata`, "href")}>click here</a>.
</li> <li class="ml-1 list-disc list-[circle] list-outside text-xs">
To permanently delete your account and all your data, please <a class="text-blue-600 hover:text-red-600 hover:underline"${addAttribute(`/${username}/deleteaccount`, "href")}>click here</a>.
</li> <li class="ml-1 list-disc list-[circle] list-outside text-xs">
To manage cookies settings, please <a class="text-blue-600 hover:text-red-600 hover:underline cursor-pointer" data-cc="c-settings" href="#">click here</a>.
</li> </div> </div>` })}`;
}, "/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/settings.astro", void 0);

const $$file = "/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/settings.astro";
const $$url = "/[...username]/settings";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
        __proto__: null,
        default: $$Settings,
        file: $$file,
        url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
