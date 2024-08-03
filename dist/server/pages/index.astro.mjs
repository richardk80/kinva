/* empty css                       */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, e as addAttribute, f as renderSlot, u as unescapeHTML } from '../chunks/chunk.5Qftb6w9.js';
import 'kleur/colors';
import { a as $$Icon, $ as $$Layout } from '../chunks/chunk.CjRQmwsE.js';
import { $ as $$RegularBox, a as $$BubbleBox } from '../chunks/chunk.CQiHANRw.js';
import { $ as $$ProfileImage } from '../chunks/chunk.DiOj7qfK.js';
import 'clsx';
import { $ as $$NonRegularBox } from '../chunks/chunk.Imhl1IcL.js';
import { $ as $$SmallLink } from '../chunks/chunk.TkxoEAro.js';
import RelativeTime from '@yaireo/relative-time';
export { renderers } from '../renderers.mjs';

const $$Astro$5 = createAstro("https://www.himoot.com");
const $$CoolPeople$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$CoolPeople$1;
  return renderTemplate`${renderComponent($$result, "RegularBox", $$RegularBox, { "name": "Cool New People", "pclass": "flex items-center justify-between mx-2 text-xs font-semibold text-red-600 mt-0.5", "backgroundColor": "bg-orange-400/60", "borderColor": "border-orange-400/60", "aclass": "text-[10px] -mt-0.5 font-normal hover:underline text-black", "aurl": "/browse" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex items-start justify-center mt-1 mb-1.5 mx-1.5 space-x-5"> ${[
    [`Astro`, `/astro`, "_self", `Visit Astro's profile`, "flex items-center justify-center flex-col hover:underline text-xs font-semibold text-blue-600 hover:text-red-600", "/img/avatar.svg", `Astro's profile picture`],
    [`Astro`, `/astro`, "_self", `Visit Astro's profile`, "flex items-center justify-center flex-col hover:underline text-xs font-semibold text-blue-600 hover:text-red-600", "/img/avatar.svg", `Astro's profile picture`],
    [`Astro`, `/astro`, "_self", `Visit Astro's profile`, "flex items-center justify-center flex-col hover:underline text-xs font-semibold text-blue-600 hover:text-red-600", "/img/avatar.svg", `Astro's profile picture`],
    [`Astro`, `/astro`, "_self", `Visit Astro's profile`, "flex items-center justify-center flex-col hover:underline text-xs font-semibold text-blue-600 hover:text-red-600", "/img/avatar.svg", `Astro's profile picture`]
  ].map(([name, href, target, title, divclass, img, alt]) => renderTemplate`<div> <a${addAttribute(href, "href")}${addAttribute(target, "target")}${addAttribute(title, "title")}> <div${addAttribute(divclass, "class")}> <p class="mb-0.5">${name}</p> ${renderComponent($$result2, "ProfileImage", $$ProfileImage, { "width": 96, "height": 96, "srcurl": img, "altText": alt })} </div> </a> </div>`)} </div> ` })}`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/login/CoolPeople.astro", void 0);

createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${[...Array(38)].map(() => renderTemplate`${maybeRenderHead()}<div class="h-0.5 w-2 bg-blue-400"></div>`)}`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/login/LoginDivider.astro", void 0);

createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="border-2 border-black w-[304px] h-[149px] flex"> <div class="m-auto"> <form class="flex justify-center grid grid-flow-row space-y-1"> <h1 class="text-[12.8px] font-semibold text-blue-600 text-center">Member Login</h1> <div> <input type="text" class="w-40 h-6 border-2 border-black placeholder:text-xs text-xs pl-1.5" placeholder="Username..." value="" autocomplete="on"> </div> <div> <input type="password" class="w-40 h-6 border-2 border-black placeholder:text-xs text-xs pl-1.5" placeholder="Password..." value="" autocomplete="on"> </div> <div class="flex justify-end items-center space-x-2"> <button class="px-2 py-0.5 border-2 border-orange-600 bg-orange-600 hover:brightness-110 hover:text-white"> <p class="text-sm text-white hover:underline">Signup</p> </button> <button class="px-2 py-0.5 border-2 border-blue-600 bg-blue-600 hover:brightness-110 hover:text-white"> <p class="text-sm text-white hover:underline">Login</p> </button> </div> <a class="text-xs text-blue-600 hover:text-red-600 hover:underline flex justify-end font-semibold" href="/resetpassword">Forget Password?</a> </form> </div> </div>`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/login/LoginBox.astro", void 0);

const $$IDBoxOne = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-[197.5px] h-[120px] bg-gradient-to-r from-blue-50 to-blue-100 to-90% border-t-2 border-b-2 border-l-2 border-blue-300"> <div class="-mt-2"> <div class="pt-3 pb-1 px-2 space-y-0.5"> <h1 class="text-[14.976px] text-blue-600 font-semibold">Retro Social</h1> <p class="text-xs text-balance">All the things you missed most about social networks are back: bulletins, blogs, forums and more.</p> <p class="text-red-600 hover:no-underline text-xs flex justify-end">» <a class="text-blue-600 hover:text-red-600 hover:underline ml-1" href="/signup">Join Today</a></p> </div> </div> </div>`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/login/IDBoxes/IDBoxOne.astro", void 0);

const $$IDBoxTwo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-[197.5px] h-[120px] bg-gradient-to-r from-blue-50 to-blue-100 to-90% border-t-2 border-b-2 border-l-2 border-blue-300"> <div class="-mt-2"> <div class="pt-3 pb-1 px-2 space-y-0.5"> <h1 class="text-[14.976px] text-blue-600 font-semibold">Privacy Friendly</h1> <p class="text-xs text-balance">No algorithms, tracking or personalized ads. Just a safe space for you and your friends to hang out online.</p> <p class="text-red-600 hover:no-underline text-xs flex justify-end">» <a class="text-blue-600 hover:text-red-600 hover:underline ml-1" href="/browse">Browse Profiles</a></p> </div> </div> </div>`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/login/IDBoxes/IDBoxTwo.astro", void 0);

const $$IDBoxThree = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-[197.5px] h-[120px] bg-gradient-to-r from-blue-50 to-blue-100 to-90% border-t-2 border-b-2 border-l-2 border-blue-300"> <div class="-mt-2"> <div class="pt-3 pb-1 px-2 space-y-0.5"> <h1 class="text-[14.976px] text-blue-600 font-semibold">Fully Customizable</h1> <p class="text-xs text-balance">Featuring custom HTML and CSS, you get the freedom you need to make your profile truly yours space.</p> <p class="text-red-600 hover:no-underline text-xs flex justify-end">» <a class="text-blue-600 hover:text-red-600 hover:underline ml-1" href="/layouts">Discover Layouts</a></p> </div> </div> </div>`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/login/IDBoxes/IDBoxThree.astro", void 0);

const $$IDBoxFour = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-[197.5px] h-[120px] bg-gradient-to-r from-blue-50 to-blue-100 to-90% border-2 border-blue-300"> <div class="-mt-2"> <div class="pt-3 pb-1 px-2 space-y-0.5"> <h1 class="text-[14.976px] text-blue-600 font-semibold">900,000 People</h1> <p class="text-xs text-balance">Join over 900,000 people already on Hi Moot, have fun and meet new like-minded people.</p> <p class="text-red-600 hover:no-underline text-xs flex justify-end">» <a class="text-blue-600 hover:text-red-600 hover:underline ml-1" href="/signup">Signup Now</a></p> </div> </div> </div>`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/login/IDBoxes/IDBoxFour.astro", void 0);

createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "IDBoxOne", $$IDBoxOne, {})} ${renderComponent($$result, "IDBoxTwo", $$IDBoxTwo, {})} ${renderComponent($$result, "IDBoxThree", $$IDBoxThree, {})} ${renderComponent($$result, "IDBoxFour", $$IDBoxFour, {})}`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/login/IDBoxes/FourBoxes.astro", void 0);

const $$TopRightUserDetailLinks = createComponent(($$result, $$props, $$slots) => {
  const username = "astro";
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col space-y-2"> ${[
    ["Edit Profile", `/${username}/edit`],
    ["Edit Status", `/${username}/editstatus`],
    ["Edit Your Links", `/${username}/editlinks`],
    ["Add/Edit Photo", `/${username}/editphoto`],
    ["Manage Blog", `/${username}/blog`],
    ["Account Settings", `/${username}/settings`]
  ].map(([link, href]) => renderTemplate`<a class="text-xs font-semibold text-blue-600 hover:text-red-600 hover:underline w-fit"${addAttribute(href, "href")}>${link}</a>`)} </div>`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/home/TopRightUserDetailLinks.astro", void 0);

const $$BottomUserDetailLinks = createComponent(($$result, $$props, $$slots) => {
  const username = "astro";
  return renderTemplate`${maybeRenderHead()}<p class="text-xs font-semibold text-black">View:
<a class="text-xs font-semibold text-blue-600 hover:text-red-600 hover:underline"${addAttribute(`/${username}`, "href")}>Profile</a> <span class="text-black text-xs font-medium">-</span> <a class="text-xs font-semibold text-blue-600 hover:text-red-600 hover:underline"${addAttribute(`/${username}/blog`, "href")}>Blog</a> <span class="text-black text-xs font-medium">-</span> <a class="text-xs font-semibold text-blue-600 hover:text-red-600 hover:underline"${addAttribute(`/${username}/bulletins`, "href")}>Bulletins</a> <span class="text-black text-xs font-medium">-</span> <a class="text-xs font-semibold text-blue-600 hover:text-red-600 hover:underline"${addAttribute(`/${username}/forums`, "href")}>Forums</a> <a class="text-xs font-semibold text-blue-600 hover:text-red-600 hover:underline"${addAttribute(`/${username}/layouts`, "href")}>Layouts</a> <span class="text-black text-xs font-medium">-</span> <a class="text-xs font-semibold text-blue-600 hover:text-red-600 hover:underline"${addAttribute(`/${username}/friends`, "href")}>Friends</a> <span class="text-black text-xs font-medium">-</span> <a class="text-xs font-semibold text-blue-600 hover:text-red-600 hover:underline"${addAttribute(`/${username}/blocked`, "href")}>Blocked</a> <span class="text-black text-xs font-medium">-</span> <a class="text-xs font-semibold text-blue-600 hover:text-red-600 hover:underline"${addAttribute(`/${username}/friendrequests`, "href")}>Requests</a> </p>`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/home/BottomUserDetailLinks.astro", void 0);

const $$Astro$4 = createAstro("https://www.himoot.com");
const $$UserDetailBox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$UserDetailBox;
  const username = "astro";
  const name = "Astro";
  return renderTemplate`${renderComponent($$result, "NonRegularBox", $$NonRegularBox, { "widthcss": "w-[304px]", "name": "Hello Astro!", "pclass": "flex items-center ml-2 text-base font-semibold text-white mt-0.5 h-6", "backgroundColor": "bg-blue-400", "borderColor": "border-blue-400" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-2 mt-2 mb-1 space-y-1"> <div class="flex justify-between"> <a${addAttribute(`/${username}`, "href")}> ${renderComponent($$result2, "ProfileImage", $$ProfileImage, { "width": 160, "height": 160, "imgclass": "bg-blue-100 box-border mb-0.5", "srcurl": "/img/avatar.svg", "altText": `${name}'s Profile Picture`, "titleText": `Visit ${name}'s Profile` })} </a> ${renderComponent($$result2, "TopRightUserDetailLinks", $$TopRightUserDetailLinks, {})} </div> <div class="box-border space-y-1"> ${renderComponent($$result2, "BottomUserDetailLinks", $$BottomUserDetailLinks, {})} </div> </div> ` })}`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/home/UserDetailBox.astro", void 0);

const $$Astro$3 = createAstro("https://www.himoot.com");
const $$MyMailBox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$MyMailBox;
  const { widthcss, backgroundColor, borderColor, name, pclass, count } = Astro2.props;
  const { messagenum } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(widthcss, "class")}> <div${addAttribute(["py-0.5", backgroundColor], "class:list")}> <div${addAttribute(pclass, "class")}> <p class="flex items-center"> ${name} </p> ${messagenum > 0 ? renderTemplate`<p class="-mt-0.5 ml-1"${addAttribute(`You have ${messagenum} ${messagenum == 1 ? "message" : "messages"}`, "title")}> ${count} </p>` : ""} </div> </div> <div${addAttribute(["border-2 border-solid", borderColor], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/main/MyMailBox.astro", void 0);

const $$Astro$2 = createAstro("https://www.himoot.com");
const $$MyMail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MyMail;
  const { messagenum } = Astro2.props;
  const username = "astro";
  return renderTemplate`${renderComponent($$result, "MyMailBox", $$MyMailBox, { "widthcss": "w-[304px]", "name": "My Mail", "count": messagenum > 0 ? `(${messagenum})` : "", "pclass": "flex items-center ml-2 text-xs font-semibold text-white mt-0.5", "backgroundColor": "bg-blue-400", "borderColor": "border-blue-400" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-1 px-5"> <div class="flex items-center justify-between"> <div class="flex flex-col space-y-1"> <a class="flex items-center text-blue-600 fill-blue-600 font-semibold text-[11.2px] hover:text-red-600 hover:fill-red-600 w-fit group space-x-1" href="/"> ${renderComponent($$result2, "Icon", $$Icon, { "class": "h-[16px] w-auto group-hover:no-underline -mt-0.5", "name": "envelope" })} <span class="group-hover:underline">Inbox</span> </a> <a class="flex items-center text-blue-600 fill-blue-600 font-semibold text-[11.2px] hover:text-red-600 hover:fill-red-600 w-fit group space-x-1" href="/"> ${renderComponent($$result2, "Icon", $$Icon, { "class": "h-[16px] w-auto group-hover:no-underline", "name": "sent" })} <span class="group-hover:underline">Sent</span> </a> </div> <div class="flex flex-col space-y-1"> <a class="flex items-center text-blue-600 fill-blue-600 font-semibold text-[11.2px] hover:text-red-600 hover:fill-red-600 w-fit group space-x-1" href="/bulletins"> ${renderComponent($$result2, "Icon", $$Icon, { "class": "h-[16px] w-[16px] group-hover:no-underline", "name": "users" })} <span class="group-hover:underline">Friend Requests</span> </a> <a class="flex items-center text-blue-600 fill-blue-600 font-semibold text-[11.2px] hover:text-red-600 hover:fill-red-600 w-fit group space-x-1"${addAttribute(`${username}/bulletins/postbulletin`, "href")}> ${renderComponent($$result2, "Icon", $$Icon, { "class": "h-[15px] w-[16px] group-hover:no-underline", "name": "post" })} <span class="group-hover:underline">Post Bulletin</span> </a> </div> </div> </div> ` })}`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/home/MyMail.astro", void 0);

const $$ProfileLinkBox = createComponent(($$result, $$props, $$slots) => {
  const username = "astro";
  return renderTemplate`${maybeRenderHead()}<div class="w-[304px] h-[26.69px] border-2 border-blue-400 flex"> <div class="mx-auto -mt-[2px]"> <a class="text-[12.8px] font-semibold text-blue-600 hover:text-red-600 hover:underline"${addAttribute(`/${username}`, "href")}>View Your Profile</a> </div> </div>`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/home/ProfileLinkBox.astro", void 0);

const $$UpdatesBox = createComponent(($$result, $$props, $$slots) => {
  const updates = [
    { updatetext: "Update 1" },
    { updatetext: "Update 2" },
    { updatetext: "Update 3" },
    { updatetext: "Update 4" }
  ];
  return renderTemplate`${renderComponent($$result, "BubbleBox", $$BubbleBox, { "widthcss": "w-[304px]", "name": "Updates", "name2": "[view all]", "pclass": "flex items-center justify-between mx-2 text-xs font-semibold text-black mt-0.5 flex flex-grow", "backgroundColor": "bg-blue-200", "borderColor": "border-blue-200", "aclass": "text-[10px] -mt-0.5 font-normal hover:underline text-black", "aurl": "/updates" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-1 mb-1 ml-2.5 mr-2.5 space-y-1.5 text-black"> ${updates.map(
    (update) => renderTemplate`<p class="text-xs text-balance">» ${update.updatetext}</p>`
  )} </div> ` })}`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/home/UpdatesBox.astro", void 0);

const $$BlogEntry = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="space-y-2"> <div class="text-xs font-semibold text-black ">Your Latest Blog Entries <span class="font-semibold">${renderComponent($$result, "SmallLink", $$SmallLink, { "href": "/astro/blog/edit", "link": "New Entry" })}</span></div> <p class="text-xs">You have no blog entries yet</p> </div>`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/home/BlogEntry.astro", void 0);

const $$InfoBox = createComponent(($$result, $$props, $$slots) => {
  const friendcount = 50;
  const profileviews = 200;
  const datetoday = (/* @__PURE__ */ new Date()).toLocaleDateString(void 0, { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
  const startDate = "01-01-2020";
  const createdDate = new RelativeTime().from(new Date(startDate));
  return renderTemplate`${renderComponent($$result, "NonRegularBox", $$NonRegularBox, { "widthcss": "w-[150px]", "name": datetoday, "pclass": "flex items-center justify-center text-xs font-bold text-white mt-0.5", "backgroundColor": "bg-blue-800", "borderColor": "border-blue-800" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-2 text-black text-xs"> <div> <p class="font-bold text-center">Your Friends:</p> <a class="flex justify-center mx-auto font-semibold text-red-600 w-7 hover:underline" href="/astro/friends">${friendcount}</a> </div> <div class="mt-2"> <p class="font-semibold text-center">Profile Views:</p> <p class="flex justify-center font-semibold text-red-600">${unescapeHTML(profileviews)}</p> </div> <div class="mt-2"> <p class="font-semibold text-center">Joined:</p> <p class="flex justify-center font-semibold text-red-600">${unescapeHTML(createdDate)}</p> </div> </div> ` })}`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/home/InfoBox.astro", void 0);

const $$Astro$1 = createAstro("https://www.himoot.com");
const $$CoolPeople = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CoolPeople;
  return renderTemplate`${renderComponent($$result, "RegularBox", $$RegularBox, { "name": "Cool New People", "name2": "[view more]", "pclass": "flex items-center justify-between mx-2 text-xs font-semibold text-red-600 mt-0.5", "backgroundColor": "bg-orange-400/60", "borderColor": "border-orange-400/60", "aclass": "text-[10px] -mt-0.5 font-normal hover:underline text-black", "aurl": "/browse" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex items-start justify-center mt-0.5 mb-1.5 mx-1.5 space-x-6"> ${[
    [`Astro`, `/astro`, "_self", `Visit Astro's profile`, "flex items-center justify-center flex-col hover:underline text-xs font-semibold text-blue-600 hover:text-red-600", "/img/avatar.svg", `Astro's profile picture`],
    [`Astro`, `/astro`, "_self", `Visit Astro's profile`, "flex items-center justify-center flex-col hover:underline text-xs font-semibold text-blue-600 hover:text-red-600", "/img/avatar.svg", `Astro's profile picture`],
    [`Astro`, `/astro`, "_self", `Visit Astro's profile`, "flex items-center justify-center flex-col hover:underline text-xs font-semibold text-blue-600 hover:text-red-600", "/img/avatar.svg", `Astro's profile picture`],
    [`Astro`, `/astro`, "_self", `Visit Astro's profile`, "flex items-center justify-center flex-col hover:underline text-xs font-semibold text-blue-600 hover:text-red-600", "/img/avatar.svg", `Astro's profile picture`]
  ].map(([name, href, target, title, divclass, img, alt]) => renderTemplate`<div> <a${addAttribute(href, "href")}${addAttribute(target, "target")}${addAttribute(title, "title")}> <div${addAttribute(divclass, "class")}> <p class="mb-0.5">${name}</p> ${renderComponent($$result2, "ProfileImage", $$ProfileImage, { "width": 96, "height": 96, "srcurl": img, "altText": alt })} </div> </a> </div>`)} </div> ` })}`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/home/CoolPeople.astro", void 0);

const $$FriendsBulletins = createComponent(($$result, $$props, $$slots) => {
  const username = "astro";
  return renderTemplate`${renderComponent($$result, "RegularBox", $$RegularBox, { "name": "Bulletins", "name2": "[view all]", "pclass": "flex items-center justify-between mx-2 text-xs font-semibold text-black mt-0.5 flex flex-grow", "backgroundColor": "bg-blue-200", "borderColor": "border-blue-200", "aclass": "text-[10px] -mt-0.5 font-normal hover:underline", "aurl": `/${username}/bulletins` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <div class="grid grid-cols-3 border-b-2 border-blue-200 flex items-center"> <div class="py-1 col-span-1 border-r-2 border-blue-200"> <h2 class="text-black text-xs font-semibold flex justify-center">From</h2> </div> <div class="py-1 col-span-2"> <h2 class="text-black text-xs font-semibold flex justify-center">Subject</h2> </div> </div> <div class="grid grid-cols-3"> <div class="py-1 col-span-3"> <h2 class="text-black text-xs flex items-center justify-center font-semibold pt-0.5">No Bulletins - <a class="text-blue-600 hover:text-red-600 ml-1 hover:underline"${addAttribute(`/${username}/bulletins/postbulletin`, "href")}>Post Bulletin</a> </h2> </div> </div> </div> ` })}`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/home/FriendsBulletins.astro", void 0);

const $$Astro = createAstro("https://www.himoot.com");
const $$FriendRequests = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FriendRequests;
  const { friendrequests } = Astro2.props;
  const username = "astro";
  return renderTemplate`${renderComponent($$result, "NonRegularBox", $$NonRegularBox, { "name": "Friend Requests", "pclass": "flex items-center justify-between mx-2 text-xs font-semibold text-red-600 mt-0.5 mb-[1px]", "backgroundColor": "bg-orange-400/60", "borderColor": "border-orange-400/60" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-1 mb-1.5 mx-2 space-y-1"> <p class="text-black font-semibold text-xs">You have <span class="text-red-600">0</span> friend ${friendrequests === 1 ? "request" : "requests"}</p> <a class="mt-2"${addAttribute(`${username}/friendrequests`, "href")}> <button type="button" class="py-0.5 px-2 bg-gray-100 hover:bg-gray-200 text-xs text-black border border-black focus:outline-none">View All Requests</button> </a> </div> ` })}`;
}, "/Users/ryanx30x/Projects/spacehey/src/components/home/FriendRequests.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home"  }, { "default": ($$result2) => renderTemplate`${renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-12 grid-flow-row-dense"> <div class="col-span-full"> <div class="flex items-start justify-between gap-x-2"> <!-- Left Column --> <div class="flex flex-col gap-y-2"> ${renderComponent($$result2, "UserDetailBox", $$UserDetailBox, {})} ${renderComponent($$result2, "MyMail", $$MyMail, {})} ${renderComponent($$result2, "ProfileLinkBox", $$ProfileLinkBox, {})} ${renderComponent($$result2, "UpdatesBox", $$UpdatesBox, {})} </div> <!-- Right Column --> <div class="flex flex-col gap-y-2 w-full"> <div class="flex justify-between"> <div class="-mt-0.5"> ${renderComponent($$result2, "BlogEntry", $$BlogEntry, {})} </div> ${renderComponent($$result2, "InfoBox", $$InfoBox, {})} </div> ${renderComponent($$result2, "CoolPeople", $$CoolPeople, {})} ${renderComponent($$result2, "FriendsBulletins", $$FriendsBulletins, {})} ${renderComponent($$result2, "FriendRequests", $$FriendRequests, {})} </div> </div> </div> </div>` }` })}`;
}, "/Users/ryanx30x/Projects/spacehey/src/pages/index.astro", void 0);

const $$file = "/Users/ryanx30x/Projects/spacehey/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
