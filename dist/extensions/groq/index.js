import { t as definePluginEntry } from "../../plugin-entry-9sXOq4uc.js";
import { t as groqMediaUnderstandingProvider } from "../../media-understanding-provider-DqjRm1-o.js";
//#region extensions/groq/index.ts
var groq_default = definePluginEntry({
	id: "groq",
	name: "Groq Media Understanding",
	description: "Bundled Groq audio transcription provider",
	register(api) {
		api.registerMediaUnderstandingProvider(groqMediaUnderstandingProvider);
	}
});
//#endregion
export { groq_default as default };
