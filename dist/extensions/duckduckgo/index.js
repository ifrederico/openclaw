import { t as definePluginEntry } from "../../plugin-entry-9sXOq4uc.js";
import { t as createDuckDuckGoWebSearchProvider } from "../../ddg-search-provider-6L_ppRJw.js";
//#region extensions/duckduckgo/index.ts
var duckduckgo_default = definePluginEntry({
	id: "duckduckgo",
	name: "DuckDuckGo Plugin",
	description: "Bundled DuckDuckGo web search plugin",
	register(api) {
		api.registerWebSearchProvider(createDuckDuckGoWebSearchProvider());
	}
});
//#endregion
export { duckduckgo_default as default };
