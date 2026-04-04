import { t as definePluginEntry } from "../../plugin-entry-DA7dUJNL.js";
import { t as buildOpenAICodexCliBackend } from "../../cli-backend-D--e0vXw.js";
import { t as buildOpenAIImageGenerationProvider } from "../../image-generation-provider-oUIqmVNr.js";
import { n as openaiCodexMediaUnderstandingProvider, r as openaiMediaUnderstandingProvider } from "../../media-understanding-provider-DSlbjx4F.js";
import { t as buildOpenAICodexProviderPlugin } from "../../openai-codex-provider-VNhxGXm1.js";
import { t as buildOpenAIProvider } from "../../openai-provider-CfiuF2Gv.js";
import { t as buildOpenAISpeechProvider } from "../../speech-provider-B9rsHePZ.js";
//#region extensions/openai/index.ts
var openai_default = definePluginEntry({
	id: "openai",
	name: "OpenAI Provider",
	description: "Bundled OpenAI provider plugins",
	register(api) {
		api.registerCliBackend(buildOpenAICodexCliBackend());
		api.registerProvider(buildOpenAIProvider());
		api.registerProvider(buildOpenAICodexProviderPlugin());
		api.registerSpeechProvider(buildOpenAISpeechProvider());
		api.registerMediaUnderstandingProvider(openaiMediaUnderstandingProvider);
		api.registerMediaUnderstandingProvider(openaiCodexMediaUnderstandingProvider);
		api.registerImageGenerationProvider(buildOpenAIImageGenerationProvider());
	}
});
//#endregion
export { openai_default as default };
