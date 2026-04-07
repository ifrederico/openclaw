import { t as definePluginEntry } from "../../plugin-entry-9sXOq4uc.js";
import { t as buildElevenLabsSpeechProvider } from "../../speech-provider-OhXLM8Wr.js";
//#region extensions/elevenlabs/index.ts
var elevenlabs_default = definePluginEntry({
	id: "elevenlabs",
	name: "ElevenLabs Speech",
	description: "Bundled ElevenLabs speech provider",
	register(api) {
		api.registerSpeechProvider(buildElevenLabsSpeechProvider());
	}
});
//#endregion
export { elevenlabs_default as default };
