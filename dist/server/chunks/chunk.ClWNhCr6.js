import '@astrojs/internal-helpers/path';
import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import { D as DEFAULT_404_COMPONENT } from './chunk.Dwxe70VL.js';
import 'clsx';
import { escape } from 'html-escaper';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function template({
  title,
  pathname,
  statusCode = 404,
  tabTitle,
  body
}) {
  return `<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>${tabTitle}</title>
		<style>
			:root {
				--gray-10: hsl(258, 7%, 10%);
				--gray-20: hsl(258, 7%, 20%);
				--gray-30: hsl(258, 7%, 30%);
				--gray-40: hsl(258, 7%, 40%);
				--gray-50: hsl(258, 7%, 50%);
				--gray-60: hsl(258, 7%, 60%);
				--gray-70: hsl(258, 7%, 70%);
				--gray-80: hsl(258, 7%, 80%);
				--gray-90: hsl(258, 7%, 90%);
				--black: #13151A;
				--accent-light: #E0CCFA;
			}

			* {
				box-sizing: border-box;
			}

			html {
				background: var(--black);
				color-scheme: dark;
				accent-color: var(--accent-light);
			}

			body {
				background-color: var(--gray-10);
				color: var(--gray-80);
				font-family: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;
				line-height: 1.5;
				margin: 0;
			}

			a {
				color: var(--accent-light);
			}

			.center {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 100vh;
				width: 100vw;
			}

			h1 {
				margin-bottom: 8px;
				color: white;
				font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
				font-weight: 700;
				margin-top: 1rem;
				margin-bottom: 0;
			}

			.statusCode {
				color: var(--accent-light);
			}

			.astro-icon {
				height: 124px;
				width: 124px;
			}

			pre, code {
				padding: 2px 8px;
				background: rgba(0,0,0, 0.25);
				border: 1px solid rgba(255,255,255, 0.25);
				border-radius: 4px;
				font-size: 1.2em;
				margin-top: 0;
				max-width: 60em;
			}
		</style>
	</head>
	<body>
		<main class="center">
			<svg class="astro-icon" xmlns="http://www.w3.org/2000/svg" width="64" height="80" viewBox="0 0 64 80" fill="none"> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="white"/> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="url(#paint0_linear_738_686)"/> <path d="M0 51.6401C0 51.6401 10.6488 46.4654 21.3274 46.4654L29.3786 21.6102C29.6801 20.4082 30.5602 19.5913 31.5538 19.5913C32.5474 19.5913 33.4275 20.4082 33.7289 21.6102L41.7802 46.4654C54.4274 46.4654 63.1076 51.6401 63.1076 51.6401C63.1076 51.6401 45.0197 2.48776 44.9843 2.38914C44.4652 0.935933 43.5888 0 42.4073 0H20.7022C19.5206 0 18.6796 0.935933 18.1251 2.38914C18.086 2.4859 0 51.6401 0 51.6401Z" fill="white"/> <defs> <linearGradient id="paint0_linear_738_686" x1="31.554" y1="75.4423" x2="39.7462" y2="48.376" gradientUnits="userSpaceOnUse"> <stop stop-color="#D83333"/> <stop offset="1" stop-color="#F041FF"/> </linearGradient> </defs> </svg>
			<h1>${statusCode ? `<span class="statusCode">${statusCode}: </span> ` : ""}<span class="statusMessage">${title}</span></h1>
			${body || `
				<pre>Path: ${escape(pathname)}</pre>
			`}
			</main>
	</body>
</html>`;
}

const DEFAULT_404_ROUTE = {
  component: DEFAULT_404_COMPONENT,
  generate: () => "",
  params: [],
  pattern: /\/404/,
  prerender: false,
  pathname: "/404",
  segments: [[{ content: "404", dynamic: false, spread: false }]],
  type: "page",
  route: "/404",
  fallbackRoutes: [],
  isIndex: false
};
function ensure404Route(manifest) {
  if (!manifest.routes.some((route) => route.route === "/404")) {
    manifest.routes.push(DEFAULT_404_ROUTE);
  }
  return manifest;
}
async function default404Page({ pathname }) {
  return new Response(
    template({
      statusCode: 404,
      title: "Not found",
      tabTitle: "404: Not Found",
      pathname
    }),
    { status: 404, headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}
default404Page.isAstroComponentFactory = true;
const default404Instance = {
  default: default404Page
};

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/ryanx30x/Projects/spacehey/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/500","isIndex":false,"type":"page","pattern":"^\\/500\\/?$","segments":[[{"content":"500","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/500.astro","pathname":"/500","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/advancedsearch","isIndex":false,"type":"page","pattern":"^\\/advancedsearch\\/?$","segments":[[{"content":"advancedsearch","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/advancedsearch.astro","pathname":"/advancedsearch","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/advertise","isIndex":false,"type":"page","pattern":"^\\/advertise\\/?$","segments":[[{"content":"advertise","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/advertise.astro","pathname":"/advertise","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/blogs/edit","isIndex":false,"type":"page","pattern":"^\\/blogs\\/edit\\/?$","segments":[[{"content":"blogs","dynamic":false,"spread":false}],[{"content":"edit","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blogs/edit.astro","pathname":"/blogs/edit","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/blogs","isIndex":true,"type":"page","pattern":"^\\/blogs\\/?$","segments":[[{"content":"blogs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blogs/index.astro","pathname":"/blogs","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/brand","isIndex":false,"type":"page","pattern":"^\\/brand\\/?$","segments":[[{"content":"brand","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/brand.astro","pathname":"/brand","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/browse","isIndex":false,"type":"page","pattern":"^\\/browse\\/?$","segments":[[{"content":"browse","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/browse.astro","pathname":"/browse","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/bulletins","isIndex":false,"type":"page","pattern":"^\\/bulletins\\/?$","segments":[[{"content":"bulletins","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/bulletins.astro","pathname":"/bulletins","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/credits","isIndex":false,"type":"page","pattern":"^\\/credits\\/?$","segments":[[{"content":"credits","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/credits.astro","pathname":"/credits","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/extra","isIndex":false,"type":"page","pattern":"^\\/extra\\/?$","segments":[[{"content":"extra","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/extra.astro","pathname":"/extra","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/favorites","isIndex":false,"type":"page","pattern":"^\\/favorites\\/?$","segments":[[{"content":"favorites","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/favorites.astro","pathname":"/favorites","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/feeds","isIndex":false,"type":"page","pattern":"^\\/feeds\\/?$","segments":[[{"content":"feeds","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/feeds.astro","pathname":"/feeds","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/forums","isIndex":false,"type":"page","pattern":"^\\/forums\\/?$","segments":[[{"content":"forums","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/forums.astro","pathname":"/forums","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/groups","isIndex":false,"type":"page","pattern":"^\\/groups\\/?$","segments":[[{"content":"groups","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/groups.astro","pathname":"/groups","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/help","isIndex":false,"type":"page","pattern":"^\\/help\\/?$","segments":[[{"content":"help","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/help.astro","pathname":"/help","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/invite","isIndex":false,"type":"page","pattern":"^\\/invite\\/?$","segments":[[{"content":"invite","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/invite.astro","pathname":"/invite","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/layouts","isIndex":false,"type":"page","pattern":"^\\/layouts\\/?$","segments":[[{"content":"layouts","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/layouts.astro","pathname":"/layouts","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/messages/send","isIndex":false,"type":"page","pattern":"^\\/messages\\/send\\/?$","segments":[[{"content":"messages","dynamic":false,"spread":false}],[{"content":"send","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/messages/send.astro","pathname":"/messages/send","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/messages","isIndex":true,"type":"page","pattern":"^\\/messages\\/?$","segments":[[{"content":"messages","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/messages/index.astro","pathname":"/messages","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/news","isIndex":false,"type":"page","pattern":"^\\/news\\/?$","segments":[[{"content":"news","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/news.astro","pathname":"/news","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/press","isIndex":false,"type":"page","pattern":"^\\/press\\/?$","segments":[[{"content":"press","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/press.astro","pathname":"/press","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/privacy","isIndex":false,"type":"page","pattern":"^\\/privacy\\/?$","segments":[[{"content":"privacy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy.astro","pathname":"/privacy","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/resetpassword","isIndex":false,"type":"page","pattern":"^\\/resetpassword\\/?$","segments":[[{"content":"resetpassword","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/resetpassword.astro","pathname":"/resetpassword","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/rules","isIndex":false,"type":"page","pattern":"^\\/rules\\/?$","segments":[[{"content":"rules","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rules.astro","pathname":"/rules","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.Br_IuvKv.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/search","isIndex":false,"type":"page","pattern":"^\\/search\\/?$","segments":[[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/search.astro","pathname":"/search","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/shop","isIndex":false,"type":"page","pattern":"^\\/shop\\/?$","segments":[[{"content":"shop","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/shop.astro","pathname":"/shop","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/signup","isIndex":false,"type":"page","pattern":"^\\/signup\\/?$","segments":[[{"content":"signup","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/signup.astro","pathname":"/signup","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/support","isIndex":false,"type":"page","pattern":"^\\/support\\/?$","segments":[[{"content":"support","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/support.astro","pathname":"/support","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/terms","isIndex":false,"type":"page","pattern":"^\\/terms\\/?$","segments":[[{"content":"terms","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/terms.astro","pathname":"/terms","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/updates","isIndex":false,"type":"page","pattern":"^\\/updates\\/?$","segments":[[{"content":"updates","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/updates.astro","pathname":"/updates","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/userbulletins","isIndex":false,"type":"page","pattern":"^\\/userbulletins\\/?$","segments":[[{"content":"userbulletins","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/userbulletins.astro","pathname":"/userbulletins","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/[...username]/blocked","isIndex":false,"type":"page","pattern":"^(?:\\/(.*?))?\\/blocked\\/?$","segments":[[{"content":"...username","dynamic":true,"spread":true}],[{"content":"blocked","dynamic":false,"spread":false}]],"params":["...username"],"component":"src/pages/[...username]/blocked.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/[...username]/blog/edit","isIndex":false,"type":"page","pattern":"^(?:\\/(.*?))?\\/blog\\/edit\\/?$","segments":[[{"content":"...username","dynamic":true,"spread":true}],[{"content":"blog","dynamic":false,"spread":false}],[{"content":"edit","dynamic":false,"spread":false}]],"params":["...username"],"component":"src/pages/[...username]/blog/edit.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/[...username]/blog","isIndex":true,"type":"page","pattern":"^(?:\\/(.*?))?\\/blog\\/?$","segments":[[{"content":"...username","dynamic":true,"spread":true}],[{"content":"blog","dynamic":false,"spread":false}]],"params":["...username"],"component":"src/pages/[...username]/blog/index.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/[...username]/bulletins/postbulletin","isIndex":false,"type":"page","pattern":"^(?:\\/(.*?))?\\/bulletins\\/postbulletin\\/?$","segments":[[{"content":"...username","dynamic":true,"spread":true}],[{"content":"bulletins","dynamic":false,"spread":false}],[{"content":"postbulletin","dynamic":false,"spread":false}]],"params":["...username"],"component":"src/pages/[...username]/bulletins/postbulletin.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/[...username]/bulletins","isIndex":true,"type":"page","pattern":"^(?:\\/(.*?))?\\/bulletins\\/?$","segments":[[{"content":"...username","dynamic":true,"spread":true}],[{"content":"bulletins","dynamic":false,"spread":false}]],"params":["...username"],"component":"src/pages/[...username]/bulletins/index.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/[...username]/comments","isIndex":false,"type":"page","pattern":"^(?:\\/(.*?))?\\/comments\\/?$","segments":[[{"content":"...username","dynamic":true,"spread":true}],[{"content":"comments","dynamic":false,"spread":false}]],"params":["...username"],"component":"src/pages/[...username]/comments.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/[...username]/deleteaccount","isIndex":false,"type":"page","pattern":"^(?:\\/(.*?))?\\/deleteaccount\\/?$","segments":[[{"content":"...username","dynamic":true,"spread":true}],[{"content":"deleteaccount","dynamic":false,"spread":false}]],"params":["...username"],"component":"src/pages/[...username]/deleteaccount.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/[...username]/edit","isIndex":false,"type":"page","pattern":"^(?:\\/(.*?))?\\/edit\\/?$","segments":[[{"content":"...username","dynamic":true,"spread":true}],[{"content":"edit","dynamic":false,"spread":false}]],"params":["...username"],"component":"src/pages/[...username]/edit.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/[...username]/editblurbs","isIndex":false,"type":"page","pattern":"^(?:\\/(.*?))?\\/editblurbs\\/?$","segments":[[{"content":"...username","dynamic":true,"spread":true}],[{"content":"editblurbs","dynamic":false,"spread":false}]],"params":["...username"],"component":"src/pages/[...username]/editblurbs.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/[...username]/editdetails","isIndex":false,"type":"page","pattern":"^(?:\\/(.*?))?\\/editdetails\\/?$","segments":[[{"content":"...username","dynamic":true,"spread":true}],[{"content":"editdetails","dynamic":false,"spread":false}]],"params":["...username"],"component":"src/pages/[...username]/editdetails.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/[...username]/editinterests","isIndex":false,"type":"page","pattern":"^(?:\\/(.*?))?\\/editinterests\\/?$","segments":[[{"content":"...username","dynamic":true,"spread":true}],[{"content":"editinterests","dynamic":false,"spread":false}]],"params":["...username"],"component":"src/pages/[...username]/editinterests.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/[...username]/editlinks","isIndex":false,"type":"page","pattern":"^(?:\\/(.*?))?\\/editlinks\\/?$","segments":[[{"content":"...username","dynamic":true,"spread":true}],[{"content":"editlinks","dynamic":false,"spread":false}]],"params":["...username"],"component":"src/pages/[...username]/editlinks.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/[...username]/editmood","isIndex":false,"type":"page","pattern":"^(?:\\/(.*?))?\\/editmood\\/?$","segments":[[{"content":"...username","dynamic":true,"spread":true}],[{"content":"editmood","dynamic":false,"spread":false}]],"params":["...username"],"component":"src/pages/[...username]/editmood.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/[...username]/editphoto","isIndex":false,"type":"page","pattern":"^(?:\\/(.*?))?\\/editphoto\\/?$","segments":[[{"content":"...username","dynamic":true,"spread":true}],[{"content":"editphoto","dynamic":false,"spread":false}]],"params":["...username"],"component":"src/pages/[...username]/editphoto.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/[...username]/editstatus","isIndex":false,"type":"page","pattern":"^(?:\\/(.*?))?\\/editstatus\\/?$","segments":[[{"content":"...username","dynamic":true,"spread":true}],[{"content":"editstatus","dynamic":false,"spread":false}]],"params":["...username"],"component":"src/pages/[...username]/editstatus.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/[...username]/exportdata","isIndex":false,"type":"page","pattern":"^(?:\\/(.*?))?\\/exportdata\\/?$","segments":[[{"content":"...username","dynamic":true,"spread":true}],[{"content":"exportdata","dynamic":false,"spread":false}]],"params":["...username"],"component":"src/pages/[...username]/exportdata.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/[...username]/forums","isIndex":true,"type":"page","pattern":"^(?:\\/(.*?))?\\/forums\\/?$","segments":[[{"content":"...username","dynamic":true,"spread":true}],[{"content":"forums","dynamic":false,"spread":false}]],"params":["...username"],"component":"src/pages/[...username]/forums/index.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/[...username]/friendrequests","isIndex":false,"type":"page","pattern":"^(?:\\/(.*?))?\\/friendrequests\\/?$","segments":[[{"content":"...username","dynamic":true,"spread":true}],[{"content":"friendrequests","dynamic":false,"spread":false}]],"params":["...username"],"component":"src/pages/[...username]/friendrequests.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/[...username]/friends","isIndex":false,"type":"page","pattern":"^(?:\\/(.*?))?\\/friends\\/?$","segments":[[{"content":"...username","dynamic":true,"spread":true}],[{"content":"friends","dynamic":false,"spread":false}]],"params":["...username"],"component":"src/pages/[...username]/friends.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/[...username]/layouts/create","isIndex":false,"type":"page","pattern":"^(?:\\/(.*?))?\\/layouts\\/create\\/?$","segments":[[{"content":"...username","dynamic":true,"spread":true}],[{"content":"layouts","dynamic":false,"spread":false}],[{"content":"create","dynamic":false,"spread":false}]],"params":["...username"],"component":"src/pages/[...username]/layouts/create.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/[...username]/layouts","isIndex":true,"type":"page","pattern":"^(?:\\/(.*?))?\\/layouts\\/?$","segments":[[{"content":"...username","dynamic":true,"spread":true}],[{"content":"layouts","dynamic":false,"spread":false}]],"params":["...username"],"component":"src/pages/[...username]/layouts/index.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/[...username]/resetpassword","isIndex":false,"type":"page","pattern":"^(?:\\/(.*?))?\\/resetpassword\\/?$","segments":[[{"content":"...username","dynamic":true,"spread":true}],[{"content":"resetpassword","dynamic":false,"spread":false}]],"params":["...username"],"component":"src/pages/[...username]/resetpassword.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/[...username]/settings","isIndex":false,"type":"page","pattern":"^(?:\\/(.*?))?\\/settings\\/?$","segments":[[{"content":"...username","dynamic":true,"spread":true}],[{"content":"settings","dynamic":false,"spread":false}]],"params":["...username"],"component":"src/pages/[...username]/settings.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/entry.D1a3JxQZ.js"},{"type":"external","value":"/entry.DFwqf4PB.js"}],"styles":[{"type":"external","src":"/_astro/global.socialsite.assets.BwimDz7q.css"}],"routeData":{"route":"/[...username]","isIndex":true,"type":"page","pattern":"^(?:\\/(.*?))?\\/?$","segments":[[{"content":"...username","dynamic":true,"spread":true}]],"params":["...username"],"component":"src/pages/[...username]/index.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://www.himoot.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/ryanx30x/Projects/spacehey/src/pages/500.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/blocked.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/blog/edit.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/blog/index.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/bulletins/index.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/bulletins/postbulletin.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/comments.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/deleteaccount.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/edit.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/editblurbs.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/editdetails.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/editinterests.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/editlinks.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/editmood.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/editphoto.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/editstatus.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/exportdata.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/forums/index.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/friendrequests.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/friends.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/index.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/layouts/create.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/layouts/index.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/resetpassword.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/[...username]/settings.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/advancedsearch.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/advertise.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/blogs/edit.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/blogs/index.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/brand.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/browse.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/bulletins.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/credits.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/extra.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/favorites.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/feeds.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/forums.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/groups.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/help.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/invite.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/layouts.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/messages/index.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/messages/send.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/news.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/press.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/privacy.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/resetpassword.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/rules.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/search.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/shop.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/signup.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/support.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/terms.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/updates.astro",{"propagation":"none","containsHead":true}],["/Users/ryanx30x/Projects/spacehey/src/pages/userbulletins.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/500@_@astro":"pages/500.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/advancedsearch@_@astro":"pages/advancedsearch.astro.mjs","\u0000@astro-page:src/pages/advertise@_@astro":"pages/advertise.astro.mjs","\u0000@astro-page:src/pages/blogs/edit@_@astro":"pages/blogs/edit.astro.mjs","\u0000@astro-page:src/pages/blogs/index@_@astro":"pages/blogs.astro.mjs","\u0000@astro-page:src/pages/brand@_@astro":"pages/brand.astro.mjs","\u0000@astro-page:src/pages/browse@_@astro":"pages/browse.astro.mjs","\u0000@astro-page:src/pages/bulletins@_@astro":"pages/bulletins.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/credits@_@astro":"pages/credits.astro.mjs","\u0000@astro-page:src/pages/extra@_@astro":"pages/extra.astro.mjs","\u0000@astro-page:src/pages/favorites@_@astro":"pages/favorites.astro.mjs","\u0000@astro-page:src/pages/feeds@_@astro":"pages/feeds.astro.mjs","\u0000@astro-page:src/pages/forums@_@astro":"pages/forums.astro.mjs","\u0000@astro-page:src/pages/groups@_@astro":"pages/groups.astro.mjs","\u0000@astro-page:src/pages/help@_@astro":"pages/help.astro.mjs","\u0000@astro-page:src/pages/invite@_@astro":"pages/invite.astro.mjs","\u0000@astro-page:src/pages/layouts@_@astro":"pages/layouts.astro.mjs","\u0000@astro-page:src/pages/messages/send@_@astro":"pages/messages/send.astro.mjs","\u0000@astro-page:src/pages/messages/index@_@astro":"pages/messages.astro.mjs","\u0000@astro-page:src/pages/news@_@astro":"pages/news.astro.mjs","\u0000@astro-page:src/pages/press@_@astro":"pages/press.astro.mjs","\u0000@astro-page:src/pages/privacy@_@astro":"pages/privacy.astro.mjs","\u0000@astro-page:src/pages/resetpassword@_@astro":"pages/resetpassword.astro.mjs","\u0000@astro-page:src/pages/rules@_@astro":"pages/rules.astro.mjs","\u0000@astro-page:src/pages/search@_@astro":"pages/search.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/shop@_@astro":"pages/shop.astro.mjs","\u0000@astro-page:src/pages/signup@_@astro":"pages/signup.astro.mjs","\u0000@astro-page:src/pages/support@_@astro":"pages/support.astro.mjs","\u0000@astro-page:src/pages/terms@_@astro":"pages/terms.astro.mjs","\u0000@astro-page:src/pages/updates@_@astro":"pages/updates.astro.mjs","\u0000@astro-page:src/pages/userbulletins@_@astro":"pages/userbulletins.astro.mjs","\u0000@astro-page:src/pages/[...username]/blocked@_@astro":"pages/_---username_/blocked.astro.mjs","\u0000@astro-page:src/pages/[...username]/blog/edit@_@astro":"pages/_---username_/blog/edit.astro.mjs","\u0000@astro-page:src/pages/[...username]/blog/index@_@astro":"pages/_---username_/blog.astro.mjs","\u0000@astro-page:src/pages/[...username]/bulletins/postbulletin@_@astro":"pages/_---username_/bulletins/postbulletin.astro.mjs","\u0000@astro-page:src/pages/[...username]/bulletins/index@_@astro":"pages/_---username_/bulletins.astro.mjs","\u0000@astro-page:src/pages/[...username]/comments@_@astro":"pages/_---username_/comments.astro.mjs","\u0000@astro-page:src/pages/[...username]/deleteaccount@_@astro":"pages/_---username_/deleteaccount.astro.mjs","\u0000@astro-page:src/pages/[...username]/edit@_@astro":"pages/_---username_/edit.astro.mjs","\u0000@astro-page:src/pages/[...username]/editblurbs@_@astro":"pages/_---username_/editblurbs.astro.mjs","\u0000@astro-page:src/pages/[...username]/editdetails@_@astro":"pages/_---username_/editdetails.astro.mjs","\u0000@astro-page:src/pages/[...username]/editinterests@_@astro":"pages/_---username_/editinterests.astro.mjs","\u0000@astro-page:src/pages/[...username]/editlinks@_@astro":"pages/_---username_/editlinks.astro.mjs","\u0000@astro-page:src/pages/[...username]/editmood@_@astro":"pages/_---username_/editmood.astro.mjs","\u0000@astro-page:src/pages/[...username]/editphoto@_@astro":"pages/_---username_/editphoto.astro.mjs","\u0000@astro-page:src/pages/[...username]/editstatus@_@astro":"pages/_---username_/editstatus.astro.mjs","\u0000@astro-page:src/pages/[...username]/exportdata@_@astro":"pages/_---username_/exportdata.astro.mjs","\u0000@astro-page:src/pages/[...username]/forums/index@_@astro":"pages/_---username_/forums.astro.mjs","\u0000@astro-page:src/pages/[...username]/friendrequests@_@astro":"pages/_---username_/friendrequests.astro.mjs","\u0000@astro-page:src/pages/[...username]/friends@_@astro":"pages/_---username_/friends.astro.mjs","\u0000@astro-page:src/pages/[...username]/layouts/create@_@astro":"pages/_---username_/layouts/create.astro.mjs","\u0000@astro-page:src/pages/[...username]/layouts/index@_@astro":"pages/_---username_/layouts.astro.mjs","\u0000@astro-page:src/pages/[...username]/resetpassword@_@astro":"pages/_---username_/resetpassword.astro.mjs","\u0000@astro-page:src/pages/[...username]/settings@_@astro":"pages/_---username_/settings.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/[...username]/index@_@astro":"pages/_---username_.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","/Users/ryanx30x/Projects/spacehey/node_modules/astro/dist/env/setup.js":"chunks/chunk.Cr6XTFvb.js","\u0000@astrojs-manifest":"manifest_GtpnWXM3.mjs","astro:scripts/page.js":"entry.DFwqf4PB.js","/astro/hoisted.js?q=0":"entry.Br_IuvKv.js","/astro/hoisted.js?q=1":"entry.D1a3JxQZ.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/global.socialsite.assets.DVphszI2.js","/_astro/global.socialsite.assets.CX1BSlY-.js","/_astro/global.socialsite.assets.BwimDz7q.css","/3.jpg","/entry.Br_IuvKv.js","/entry.D1a3JxQZ.js","/entry.DFwqf4PB.js","/favicon.ico","/favicon.svg","/main.css","/img/Background Layer 2.sketch","/img/autquiaut.png","/img/avatar.svg","/img/default.png","/img/logo_optimized.svg","/scripts/cookieconsent-init.js","/scripts/cookieconsent.js","/scripts/darkmode.js","/css/all.css","/css/all.min.css","/css/brands.css","/css/brands.min.css","/css/duotone.css","/css/duotone.min.css","/css/fontawesome.css","/css/fontawesome.min.css","/css/light.css","/css/light.min.css","/css/regular.css","/css/regular.min.css","/css/sharp-light.css","/css/sharp-light.min.css","/css/sharp-regular.css","/css/sharp-regular.min.css","/css/sharp-solid.css","/css/sharp-solid.min.css","/css/sharp-thin.css","/css/sharp-thin.min.css","/css/solid.css","/css/solid.min.css","/css/svg-with-js.css","/css/svg-with-js.min.css","/css/thin.css","/css/thin.min.css","/css/v4-font-face.css","/css/v4-font-face.min.css","/css/v4-shims.css","/css/v4-shims.min.css","/css/v5-font-face.css","/css/v5-font-face.min.css","/team/an.png","/team/hooterbby.jpg","/team/malek2.png","/webfonts/fa-brands-400.ttf","/webfonts/fa-brands-400.woff2","/webfonts/fa-duotone-900.ttf","/webfonts/fa-duotone-900.woff2","/webfonts/fa-light-300.ttf","/webfonts/fa-light-300.woff2","/webfonts/fa-regular-400.ttf","/webfonts/fa-regular-400.woff2","/webfonts/fa-solid-900.ttf","/webfonts/fa-solid-900.woff2","/webfonts/fa-thin-100.ttf","/webfonts/fa-thin-100.woff2","/webfonts/fa-v4compatibility.ttf","/webfonts/fa-v4compatibility.woff2","/js/all.js","/js/all.min.js","/js/brands.js","/js/brands.min.js","/js/conflict-detection.js","/js/conflict-detection.min.js","/js/duotone.js","/js/duotone.min.js","/js/fontawesome.js","/js/fontawesome.min.js","/js/light.js","/js/light.min.js","/js/regular.js","/js/regular.min.js","/js/sharp-light.js","/js/sharp-light.min.js","/js/sharp-regular.js","/js/sharp-regular.min.js","/js/sharp-solid.js","/js/sharp-solid.min.js","/js/sharp-thin.js","/js/sharp-thin.min.js","/js/solid.js","/js/solid.min.js","/js/thin.js","/js/thin.min.js","/js/v4-shims.js","/js/v4-shims.min.js","/img/gif/cat_optimized.gif","/img/merch/merch1.jpg","/img/merch/merch2.jpg","/img/merch/merch3.jpg","/img/merch/merch4.jpg","/img/merch/merch5.jpg","/img/merch/merch6.jpg","/img/merch/merch7.jpg","/entry.DFwqf4PB.js"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"serverIslandNameMap":[],"experimentalEnvGetSecretEnabled":false});

export { AstroIntegrationLogger as A, DEFAULT_404_ROUTE as D, Logger as L, default404Instance as d, ensure404Route as e, getEventPrefix as g, levels as l, manifest as m };
