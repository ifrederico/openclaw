import { t as definePluginEntry } from "../../plugin-entry-9sXOq4uc.js";
import { t as buildOpenAIImageGenerationProvider } from "../../image-generation-provider-Bgk3NimI.js";
import { n as openaiCodexMediaUnderstandingProvider, r as openaiMediaUnderstandingProvider } from "../../media-understanding-provider-C5d_lVIj.js";
import { t as buildOpenAICodexProviderPlugin } from "../../openai-codex-provider-DebxnCK7.js";
import { t as buildOpenAIProvider } from "../../openai-provider-De9lHybw.js";
import { a as resolveOpenAISystemPromptContribution, i as resolveOpenAIPromptOverlayMode } from "../../prompt-overlay-314xN3hs.js";
import { t as buildOpenAIRealtimeTranscriptionProvider } from "../../realtime-transcription-provider-BR6XZU7_.js";
import { t as buildOpenAIRealtimeVoiceProvider } from "../../realtime-voice-provider-DXh8hGc1.js";
import { t as buildOpenAISpeechProvider } from "../../speech-provider-D8BnVoXP.js";
import { t as buildOpenAIVideoGenerationProvider } from "../../video-generation-provider-BUzE5WDl.js";
//#region extensions/openai/index.ts
var openai_default = definePluginEntry({
	id: "openai",
	name: "OpenAI Provider",
	description: "Bundled OpenAI provider plugins",
	register(api) {
		const promptOverlayMode = resolveOpenAIPromptOverlayMode(api.pluginConfig);
		const buildProviderWithPromptContribution = (provider) => ({
			...provider,
			resolveSystemPromptContribution: (ctx) => resolveOpenAISystemPromptContribution({
				mode: promptOverlayMode,
				modelProviderId: provider.id,
				modelId: ctx.modelId
			})
		});
		api.registerProvider(buildProviderWithPromptContribution(buildOpenAIProvider()));
		api.registerProvider(buildProviderWithPromptContribution(buildOpenAICodexProviderPlugin()));
		api.registerImageGenerationProvider(buildOpenAIImageGenerationProvider());
		api.registerRealtimeTranscriptionProvider(buildOpenAIRealtimeTranscriptionProvider());
		api.registerRealtimeVoiceProvider(buildOpenAIRealtimeVoiceProvider());
		api.registerSpeechProvider(buildOpenAISpeechProvider());
		api.registerMediaUnderstandingProvider(openaiMediaUnderstandingProvider);
		api.registerMediaUnderstandingProvider(openaiCodexMediaUnderstandingProvider);
		api.registerVideoGenerationProvider(buildOpenAIVideoGenerationProvider());
	}
});
//#endregion
export { openai_default as default };
