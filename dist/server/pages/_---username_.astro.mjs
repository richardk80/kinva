/* empty css                       */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, e as addAttribute, u as unescapeHTML } from '../chunks/chunk.5Qftb6w9.js';
import 'kleur/colors';
import { a as $$BubbleBox, $ as $$RegularBox } from '../chunks/chunk.CQiHANRw.js';
import { $ as $$SmallLink } from '../chunks/chunk.TkxoEAro.js';
import { $ as $$ProfileImage } from '../chunks/chunk.DiOj7qfK.js';
import { a as $$Icon, $ as $$Layout } from '../chunks/chunk.CjRQmwsE.js';
import 'clsx';
import { $ as $$NonRegularBox } from '../chunks/chunk.Imhl1IcL.js';
import { $ as $$Image } from '../chunks/chunk.CgOza8fp.js';
export { renderers } from '../renderers.mjs';

const $$Astro$d = createAstro("https://www.himoot.com");
const $$UserDetailEditLinks = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$UserDetailEditLinks;
  const username = "astro";
  const { hidden } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center space-x-5"> ${hidden ? "" : renderTemplate`<p class="text-[11.52px] ml-0.5">${renderComponent($$result, "SmallLink", $$SmallLink, { "href": `/${username}/settings`, "link": "edit photo" })}</p>`} ${hidden ? "" : renderTemplate`<p class="text-[11.52px] ml-0.5">${renderComponent($$result, "SmallLink", $$SmallLink, { "href": `/${username}/edit`, "link": "edit profile" })}</p>`} </div>`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/profile/UserDetailEditLinks.astro", void 0);

const $$Astro$c = createAstro("https://www.himoot.com");
const $$Mood = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Mood;
  const { hidden, onlinenow } = Astro2.props;
  return renderTemplate`${onlinenow ? renderTemplate`${maybeRenderHead()}<div class="flex items-center space-x-2 ml-0.5"><span class="flex items-center space-x-1.5 blink">${renderComponent($$result, "Icon", $$Icon, { "class": "h-[20px] w-auto fill-orange-400 -mt-[0.8px]", "name": "online" })}<span class="mr-1 font-semibold text-green-400 text-xs">Online Now!</span></span></div>` : ""}<div class="flex items-center ml-0.5"> <p class="font-semibold text-xs">Mood:</p> <p class="text-xs ml-1 text-balance">Happy</p> </div> ${hidden ? "" : renderTemplate`<p class="text-xs ml-0.5">${renderComponent($$result, "SmallLink", $$SmallLink, { "href": "/astro/editmood", "link": "edit mood" })}</p>`} <div class="flex items-center ml-0.5"> <p class="font-semibold text-xs">Status:</p> <p class="text-xs ml-1 text-balance">Writing code</p> </div> ${hidden ? "" : renderTemplate`<p class="text-xs ml-0.5">${renderComponent($$result, "SmallLink", $$SmallLink, { "href": "/astro/editstatus", "link": "edit status" })}</p>`}`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/profile/Mood.astro", void 0);

const $$BottomUserDetailLinks = createComponent(($$result, $$props, $$slots) => {
  const username = "astro";
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center"> <p class="text-xs font-semibold text-black">View My:
</p><div class="flex items-center space-x-1 ml-1"> ${[
    ["text-xs font-semibold text-blue-600 hover:text-red-600 hover:underline", `/${username}/blog`, "Blog", "text-black text-xs font-medium", "-"],
    ["text-xs font-semibold text-blue-600 hover:text-red-600 hover:underline", `/${username}/bulletins`, "Bulletins", "text-black text-xs font-medium", "-"],
    ["text-xs font-semibold text-blue-600 hover:text-red-600 hover:underline", `/${username}/forums`, "Forums", "text-black text-xs font-normal", ""]
  ].map(([classname, href, link, dividercss, divider]) => renderTemplate`<a${addAttribute(classname, "class")}${addAttribute(href, "href")}>${link}</a>
                    <span${addAttribute(dividercss, "class")}>${divider}</span>`)} </div>  </div>`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/profile/BottomUserDetailLinks.astro", void 0);

const $$Astro$b = createAstro("https://www.himoot.com");
const $$UserDetailBox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$UserDetailBox;
  const { name, onlinenow } = Astro2.props;
  const username = "astro";
  const hidden = true;
  return renderTemplate`${renderComponent($$result, "BubbleBox", $$BubbleBox, { "widthcss": "w-[304px]", "name": "Astro", "name2": "[edit name]", "hidden": hidden, "pclass": "flex items-center justify-between text-base font-semibold text-white h-6 mx-2 mt-0.5", "backgroundColor": "bg-blue-400", "borderColor": "border-blue-400", "aclass": "text-[10px] -mt-0.5 font-normal hover:underline text-white", "aurl": `/${username}/settings` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute("ml-3.5 mt-1 mb-1" , "class")}> <div class="flex items-center space-x-2 -ml-2 mb-1 -mt-0.5"> ${renderComponent($$result2, "UserDetailEditLinks", $$UserDetailEditLinks, { "hidden": hidden })} </div> <div class="flex justify-between mt-1.5 mb-2"> ${renderComponent($$result2, "ProfileImage", $$ProfileImage, { "width": 160, "height": 160, "imgclass": "bg-blue-50 box-border mb-0.5 -ml-1.5", "srcurl": "/img/avatar.svg", "altText": `${name}'s Profile Picture` })} </div> <div class="box-border space-y-1 -ml-2"> ${renderComponent($$result2, "Mood", $$Mood, { "hidden": hidden, "onlinenow": onlinenow })} <div class="mb-2 ml-0.5"> ${renderComponent($$result2, "BottomUserDetailLinks", $$BottomUserDetailLinks, {})} </div> </div> </div> ` })}`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/profile/UserDetailBox.astro", void 0);

const $$AddFriendModal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="hs-vertically-centered-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto" data-hs-backdrop="static" data-hs-overlay-keyboard="false"> <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center"> <div class="w-3/4 flex flex-col bg-white"> <div class="py-4 pr-4 pl-3 overflow-y-auto"> <p class="text-gray-800 text-xs">
Would you like to send a friend request to this person?<br>
They will be able to accept or decline your request.
</p> </div> <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t"> <button type="button" class="py-2 px-2 inline-flex items-center gap-x-2 text-xs font-semibold border border-transparent bg-blue-400 text-white hover:bg-blue-500" data-hs-overlay="#hs-vertically-centered-modal">
Send Request
</button> <button type="button" class="py-2 px-2 inline-flex items-center gap-x-2 text-xs font-medium border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-100" data-hs-overlay="#hs-vertically-centered-modal">
Cancel
</button> </div> </div> </div> </div>`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/main/AddFriendModal.astro", void 0);

createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="hs-vertically-centered-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto" data-hs-backdrop="static" data-hs-overlay-keyboard="false"> <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center"> <div class="w-3/4 flex flex-col bg-white"> <div class="py-4 pr-4 pl-3 overflow-y-auto"> <p class="text-gray-800 text-xs">
Do you want to remove this friend?<br>
This will remove them from your friends list
</p> </div> <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t"> <button type="button" class="py-2 px-2 inline-flex items-center gap-x-2 text-xs font-semibold border border-transparent bg-red-600 text-white hover:bg-red-500" data-hs-overlay="#hs-vertically-centered-modal">
Confirm
</button> <button type="button" class="py-2 px-2 inline-flex items-center gap-x-2 text-xs font-medium border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-100" data-hs-overlay="#hs-vertically-centered-modal">
Cancel
</button> </div> </div> </div> </div>`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/main/RemoveFriendModal.astro", void 0);

const $$Astro$a = createAstro("https://www.himoot.com");
const $$ContactButtons = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ContactButtons;
  const name = "Astro";
  return renderTemplate`${renderTemplate`${renderComponent($$result, "NonRegularBox", $$NonRegularBox, { "widthcss": "w-[304px]", "name": "Contacting", "username": name, "pclass": "flex items-center ml-2 text-xs font-semibold text-white mt-0.5", "backgroundColor": "bg-blue-400", "borderColor": "border-blue-400" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="py-1"><div class="flex items-center justify-around"><div class="flex flex-col space-y-1"><a class="flex items-start text-blue-600 fill-blue-600 font-semibold text-[11.2px] hover:text-red-600 hover:fill-red-600 w-fit group space-x-2" href="/">${renderComponent($$result2, "Icon", $$Icon, { "class": "h-[16px] w-auto group-hover:no-underline", "name": "instant" })}<span class="group-hover:underline">Send Message</span></a><a class="flex items-start text-blue-600 fill-blue-600 font-semibold text-[11.2px] hover:text-red-600 hover:fill-red-600 w-fit group space-x-1 cursor-pointer" data-hs-overlay="#hs-vertically-centered-modal" data-hs-overlay-keyboard="false">${renderComponent($$result2, "Icon", $$Icon, { "class": "h-[16px] w-auto group-hover:no-underline", "name": `${"user-minus" }` })}<span class="group-hover:underline">${`${"Cancel Request" }`}</span></a><a class="flex items-start text-blue-600 fill-blue-600 font-semibold text-[11.2px] hover:text-red-600 hover:fill-red-600 w-fit group space-x-2" href="/messages/send">${renderComponent($$result2, "Icon", $$Icon, { "class": "h-[16px] w-auto group-hover:no-underline", "name": "send" })}<span class="group-hover:underline">Instant Message</span></a><a class="flex items-start text-blue-600 fill-blue-600 font-semibold text-[11.2px] hover:text-red-600 hover:fill-red-600 w-fit group space-x-1.5 -ml-0.5" href="/">${renderComponent($$result2, "Icon", $$Icon, { "class": "h-[16px] w-auto group-hover:no-underline", "name": "group-plus" })}<span class="group-hover:underline ml-0.5">Add to Group</span></a></div><div class="flex flex-col space-y-1"><a class="flex items-start text-blue-600 fill-blue-600 font-semibold text-[11.2px] hover:text-red-600 hover:fill-red-600 w-fit group space-x-1.5" href="/">${renderComponent($$result2, "Icon", $$Icon, { "class": "h-[15px] w-auto group-hover:no-underline", "name": "share" })}<span class="group-hover:underline">Forward to Friend</span></a><a class="flex items-start text-blue-600 fill-blue-600 font-semibold text-[11.2px] hover:text-red-600 hover:fill-red-600 w-fit group space-x-1" href="/">${renderComponent($$result2, "Icon", $$Icon, { "class": "h-[16px] w-auto group-hover:no-underline", "name": "circle-star" })}<span class="group-hover:underline">Add as Favorites</span></a><a class="flex items-start text-blue-600 fill-blue-600 font-semibold text-[11.2px] hover:text-red-600 hover:fill-red-600 w-fit group space-x-1" href="/">${renderComponent($$result2, "Icon", $$Icon, { "class": "h-[16px] w-auto group-hover:no-underline", "name": "ban" })}<span class="group-hover:underline">Block User</span></a><a class="flex items-start text-blue-600 fill-blue-600 font-semibold text-[11.2px] hover:text-red-600 hover:fill-red-600 w-fit group space-x-1.5" href="/">${renderComponent($$result2, "Icon", $$Icon, { "class": "h-[15px] w-auto group-hover:no-underline", "name": "flag" })}<span class="group-hover:underline">Report User</span></a></div></div></div>${renderTemplate`${renderComponent($$result2, "AddFriendModal", $$AddFriendModal, {})}`}` })}` }`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/profile/ContactButtons.astro", void 0);

const $$Astro$9 = createAstro("https://www.himoot.com");
const $$UserURL = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$UserURL;
  return renderTemplate`${maybeRenderHead()}<p class="text-xs font-semibold text-black"></p><p class="text-xs font-semibold">${`Astro's` } Profile URL:</p> <div class="flex items-center justify-between"> <p class="text-xs">https://www.himoot.com/astro</p> ${"" } </div> `;
}, "/Users/ryanx30x/Projects/spacehey/src/components/profile/UserURL.astro", void 0);

const $$Astro$8 = createAstro("https://www.himoot.com");
const $$ProfileLinkBox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ProfileLinkBox;
  const { hidden } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-[304px] h-[43.3438px] border-2 border-blue-400 flex"> <div class="mx-2 my-auto w-full"> ${renderComponent($$result, "UserURL", $$UserURL, { "hidden": hidden })} </div> </div>`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/profile/ProfileLinkBox.astro", void 0);

const $$Astro$7 = createAstro("https://www.himoot.com");
const $$Interests = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Interests;
  const { name, general, music, movies, television, books, heroes } = Astro2.props;
  const username = "astro";
  const hidden = true;
  return renderTemplate`${renderComponent($$result, "BubbleBox", $$BubbleBox, { "widthcss": "w-[304px]", "username2": `Astro's` , "name": "Interests", "name2": "[edit interests]", "hidden": hidden, "pclass": "flex items-center justify-between mx-2 text-xs font-semibold text-white mt-0.5 flex flex-grow", "backgroundColor": "bg-blue-400", "borderColor": "border-blue-400", "aclass": "text-[10px] -mt-0.5 font-normal hover:underline text-white", "aurl": `/${username}/editinterests` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-1 space-y-1"> <div class="flex items-stretch space-x-1"> <div class="w-1/3 bg-blue-200"> <p class="text-xs font-semibold text-blue-600 my-auto pl-1 pt-0.5">
General:
</p> </div> <div class="w-2/3 bg-blue-100"> <p class="text-xs py-0.5 px-1 my-auto w-full text-balance">${unescapeHTML(general)}</p> </div> </div> <div class="flex items-stretch space-x-1"> <div class="w-1/3 bg-blue-200"> <p class="text-xs font-semibold text-blue-600 my-auto pl-1 pt-0.5">
Music:
</p> </div> <div class="w-2/3 bg-blue-100"> <p class="text-xs py-0.5 px-1 my-auto w-full text-balance">${unescapeHTML(music)}</p> </div> </div> <div class="flex items-stretch space-x-1"> <div class="w-1/3 bg-blue-200"> <p class="text-xs font-semibold text-blue-600 my-auto pl-1 pt-0.5">
Movies:
</p> </div> <div class="w-2/3 bg-blue-100"> <p class="text-xs py-0.5 px-1 my-auto w-full text-balance">${unescapeHTML(movies)}</p> </div> </div> <div class="flex items-stretch space-x-1"> <div class="w-1/3 bg-blue-200"> <p class="text-xs font-semibold text-blue-600 my-auto pl-1 pt-0.5">
Television:
</p> </div> <div class="w-2/3 bg-blue-100"> <p class="text-xs py-0.5 px-1 my-auto w-full text-balance">${unescapeHTML(television)}</p> </div> </div> <div class="flex items-stretch space-x-1"> <div class="w-1/3 bg-blue-200"> <p class="text-xs font-semibold text-blue-600 my-auto pl-1 pt-0.5">
Books:
</p> </div> <div class="w-2/3 bg-blue-100"> <p class="text-xs py-0.5 px-1 my-auto w-full text-balance">${unescapeHTML(books)}</p> </div> </div> <div class="flex items-stretch space-x-1"> <div class="w-1/3 bg-blue-200"> <p class="text-xs font-semibold text-blue-600 my-auto pl-1 pt-0.5">
Heroes:
</p> </div> <div class="w-2/3 bg-blue-100"> <p class="text-xs py-0.5 px-1 my-auto w-full text-balance">${unescapeHTML(heroes)}</p> </div> </div> </div> ` })}`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/profile/Interests.astro", void 0);

const $$Astro$6 = createAstro("https://www.himoot.com");
const $$Details = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Details;
  const { name, statuswords, herefor, hometown, ethnicity, zodiac, smoke, drink, education, occupation } = Astro2.props;
  const username = "astro";
  const hidden = true;
  return renderTemplate`${renderComponent($$result, "BubbleBox", $$BubbleBox, { "username2": `Astro's` , "name": "Details", "name2": "[edit details]", "hidden": hidden, "pclass": "flex items-center justify-between mx-2 text-xs font-semibold text-white mt-0.5 flex flex-grow", "backgroundColor": "bg-blue-400", "borderColor": "border-blue-400", "aclass": "text-[10px] -mt-0.5 font-normal hover:underline text-white", "aurl": `/${username}/editdetails` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-1 space-y-1"> <div class="flex items-stretch space-x-1"> <div class="w-1/3 bg-blue-200"> <p class="text-xs font-semibold text-blue-600 my-auto pl-1 pt-0.5">
Status:
</p> </div> <div class="w-2/3 bg-blue-100"> <p class="text-xs py-0.5 px-1 my-auto w-full text-balance">${unescapeHTML(statuswords)}</p> </div> </div> <div class="flex items-stretch space-x-1"> <div class="w-1/3 bg-blue-200"> <p class="text-xs font-semibold text-blue-600 my-auto pl-1 pt-0.5">
Here For:
</p> </div> <div class="w-2/3 bg-blue-100"> <p class="text-xs py-0.5 px-1 my-auto w-full text-balance">${unescapeHTML(herefor)}</p> </div> </div> <div class="flex items-stretch space-x-1"> <div class="w-1/3 bg-blue-200"> <p class="text-xs font-semibold text-blue-600 my-auto pl-1 pt-0.5">
Hometown:
</p> </div> <div class="w-2/3 bg-blue-100"> <p class="text-xs py-0.5 px-1 my-auto w-full text-balance">${unescapeHTML(hometown)}</p> </div> </div> <div class="flex items-stretch space-x-1"> <div class="w-1/3 bg-blue-200"> <p class="text-xs font-semibold text-blue-600 my-auto pl-1 pt-0.5">
Ethnicity:
</p> </div> <div class="w-2/3 bg-blue-100"> <p class="text-xs py-0.5 px-1 my-auto w-full text-balance">${unescapeHTML(ethnicity)}</p> </div> </div> <div class="flex items-stretch space-x-1"> <div class="w-1/3 bg-blue-200"> <p class="text-xs font-semibold text-blue-600 my-auto pl-1 pt-0.5">
Zodiac:
</p> </div> <div class="w-2/3 bg-blue-100"> <p class="text-xs py-0.5 px-1 my-auto w-full text-balance">${unescapeHTML(zodiac)}</p> </div> </div> <div class="flex items-stretch space-x-1"> <div class="w-1/3 bg-blue-200"> <p class="text-xs font-semibold text-blue-600 my-auto pl-1 pt-0.5">
Smoke:
</p> </div> <div class="w-2/3 bg-blue-100"> <p class="text-xs py-0.5 px-1 my-auto w-full text-balance">${unescapeHTML(smoke)}</p> </div> </div> <div class="flex items-stretch space-x-1"> <div class="w-1/3 bg-blue-200"> <p class="text-xs font-semibold text-blue-600 my-auto pl-1 pt-0.5">
Drink:
</p> </div> <div class="w-2/3 bg-blue-100"> <p class="text-xs py-0.5 px-1 my-auto w-full text-balance">${unescapeHTML(drink)}</p> </div> </div> <div class="flex items-stretch space-x-1"> <div class="w-1/3 bg-blue-200"> <p class="text-xs font-semibold text-blue-600 my-auto pl-1 pt-0.5">
Education:
</p> </div> <div class="w-2/3 bg-blue-100"> <p class="text-xs py-0.5 px-1 my-auto w-full text-balance">${unescapeHTML(education)}</p> </div> </div> <div class="flex items-stretch space-x-1"> <div class="w-1/3 bg-blue-200"> <p class="text-xs font-semibold text-blue-600 my-auto pl-1 pt-0.5">
Occupation:
</p> </div> <div class="w-2/3 bg-blue-100"> <p class="text-xs py-0.5 px-1 my-auto w-full text-balance">${unescapeHTML(occupation)}</p> </div> </div> </div> ` })}`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/profile/Details.astro", void 0);

const $$Astro$5 = createAstro("https://www.himoot.com");
const $$UserBox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$UserBox;
  const { friendship, requested } = Astro2.props;
  const name = "Astro";
  return renderTemplate`${friendship ? renderTemplate`${maybeRenderHead()}<div class="h-[82.2656px] border-2 border-orange-400/60 flex"><div class="mx-auto my-auto">${requested ? renderTemplate`<p class="text-[14.976px] font-semibold text-red-600">Friend Request Sent</p>` : renderTemplate`<p class="text-[14.976px] font-semibold text-red-600">${name} is your Friend</p>`}</div></div>` : ""}`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/profile/UserBox.astro", void 0);

const $$Astro$4 = createAstro("https://www.himoot.com");
const $$BlogEntry = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BlogEntry;
  return renderTemplate`${renderComponent($$result, "BubbleBox", $$BubbleBox, { "username2": `Astro's` , "name": "Latest Blog Entries", "name2": "[view blog]", "pclass": "flex items-center justify-between text-xs font-semibold text-red-600", "backgroundColor": "bg-white", "borderColor": "border-white", "aclass": "text-[10px] -mt-0.5 font-normal hover:underline text-black", "aurl": `/astro/blog` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="space-y-2 -ml-0.5"> <p class="text-xs">${"There are" } no blog entries yet</p> </div> ` })}`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/profile/BlogEntry.astro", void 0);

const $$Astro$3 = createAstro("https://www.himoot.com");
const $$FriendSpace = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$FriendSpace;
  const { name, friendcount } = Astro2.props;
  const peoplecount = 8;
  let friendnum = peoplecount;
  return renderTemplate`${renderComponent($$result, "RegularBox", $$RegularBox, { "widthcss": "w-[100%]", "username2": `Astro's` , "name": "Friend Space", "name2": "[view all]", "pclass": "flex items-center justify-between mx-2 text-xs font-semibold text-red-600 mt-0.5", "backgroundColor": "bg-orange-400/60", "borderColor": "border-orange-400/60", "aclass": "text-[10px] -mt-0.5 font-normal hover:underline text-black", "aurl": `/astro/friends` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="text-xs font-semibold ml-2 pt-1">${`Astro has` } <span class="text-red-600">${peoplecount }</span> ${friendcount === 1 ? "friend" : "friends"}</p> <div${addAttribute("grid grid-flow-dense grid-cols-4 pt-1 pb-0.5 pl-[1px]" , "class")}> ${[...Array(friendnum)].map(() => renderTemplate`<div${addAttribute("py-1 px-1" , "class")}> ${renderTemplate`<a href="/astro" title="Visit Astro's Hi Moot profile"> <div class="flex items-center justify-center flex-col hover:underline text-xs font-semibold text-blue-600 hover:text-red-600"> <p>${`Astro`}</p> ${renderComponent($$result2, "Image", $$Image, { "width": 95, "height": 95, "loading": "eager", "src": "/img/avatar.svg", "alt": "Astro's profile picture" })} </div> </a>` } </div>`)} </div> ` })}`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/profile/FriendSpace.astro", void 0);

const $$Astro$2 = createAstro("https://www.himoot.com");
const $$Blurbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Blurbs;
  const hidden = true;
  const { aboutme, textmeet } = Astro2.props;
  const username = "astro";
  return renderTemplate`${renderComponent($$result, "BubbleBox", $$BubbleBox, { "widthcss": "min-w-full", "username2": `Astro's` , "name": "Blurbs", "name2": "[edit blurbs]", "hidden": hidden, "pclass": "flex items-center justify-between mx-2 text-xs font-semibold text-red-600 mt-0.5 flex flex-grow", "backgroundColor": "bg-orange-400/60", "borderColor": "border-orange-400/60", "aclass": "text-[10px] -mt-0.5 font-normal hover:underline text-black", "aurl": `/${username}/editblurbs` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="my-1 ml-2 mr-3 space-y-2"> <div> <h2 class="text-red-600 text-[12.8px] font-semibold mb-1">About Me:</h2> <p class="text-black text-xs whitespace-wrap break-words align-baseline h-full w-full text-balance">${unescapeHTML(aboutme)}</p> </div> <div> <h2 class="text-red-600 text-[12.8px] font-semibold mb-1">Who I'd Like to Meet:</h2> <p class="text-black text-xs whitespace-normal break-words align-baseline h-full w-full text-balance">${unescapeHTML(textmeet)}</p> </div> </div> ` })}`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/profile/Blurbs.astro", void 0);

const $$Astro$1 = createAstro("https://www.himoot.com");
const $$FriendComments = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FriendComments;
  const { self, comments } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "RegularBox", $$RegularBox, { "username2": `Astro's` , "name": "Friend Comments", "name2": "[view all]", "pclass": "flex items-center justify-between mx-2 text-xs font-semibold text-red-600 mt-0.5", "backgroundColor": "bg-orange-400/60", "borderColor": "border-orange-400/60", "aclass": "text-[10px] -mt-0.5 font-normal hover:underline text-black", "aurl": "/astro/comments" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-2 py-1 space-x-2 space-y-2 flex items-center"> <p class="text-black font-semibold text-xs">${`Astro has` } <span class="text-red-600">0</span> ${comments === 1 ? "comment" : "comments"} ${renderTemplate`<span class="font-semibold text-xs">${renderComponent($$result2, "SmallLink", $$SmallLink, { "href": "/", "link": "add comment" })}</span>` } </p> </div> ` })}`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/profile/FriendComments.astro", void 0);

const $$Astro = createAstro("https://www.himoot.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pages = [{ username: "astro" }];
  const { username } = Astro2.params;
  const page = pages.find((page2) => page2.username === username);
  if (!page) {
    Astro2.response.status = 404;
    Astro2.response.statusText = "Not found";
  }
  const name = "Astro";
  const friendship = false;
  const requested = false;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${name}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-12 grid-flow-row-dense"> <div class="col-span-full"> <div class="flex items-start justify-between gap-x-2"> <!-- Left Column --> <div class="flex flex-col gap-y-2"> ${renderComponent($$result2, "UserDetailBox", $$UserDetailBox, {})} ${renderTemplate`${renderComponent($$result2, "ContactButtons", $$ContactButtons, {})}`} ${renderComponent($$result2, "ProfileLinkBox", $$ProfileLinkBox, {})} ${renderComponent($$result2, "Details", $$Details, {})} ${renderComponent($$result2, "Interests", $$Interests, {})} </div> <!-- Right Column --> <div class="flex flex-col gap-y-2 w-full"> ${renderComponent($$result2, "UserBox", $$UserBox, { "friendship": friendship, "requested": requested })} <div${addAttribute("-mt-1", "class")}> ${renderComponent($$result2, "BlogEntry", $$BlogEntry, {})} </div> ${renderComponent($$result2, "Blurbs", $$Blurbs, {})} ${renderComponent($$result2, "FriendSpace", $$FriendSpace, {})} ${renderComponent($$result2, "FriendComments", $$FriendComments, { "self": true })} </div> </div> </div> </div> ` })}`;
}, "/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/index.astro", void 0);

const $$file = "/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/index.astro";
const $$url = "/[...username]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
