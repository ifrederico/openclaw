import { t as definePluginEntry } from "../../plugin-entry-DA7dUJNL.js";
import { t as createProviderApiKeyAuthMethod } from "../../provider-api-key-auth-D5oXnzg9.js";
import "../../provider-auth-api-key-CGg1PVyN.js";
import { n as buildFalImageGenerationProvider } from "../../image-generation-provider-BWbwCzQ7.js";
import { n as applyFalConfig, t as FAL_DEFAULT_IMAGE_MODEL_REF } from "../../onboard-DqRxj_YE.js";
//#region extensions/fal/index.ts
const PROVIDER_ID = "fal";
var fal_default = definePluginEntry({
	id: PROVIDER_ID,
	name: "fal Provider",
	description: "Bundled fal image generation provider",
	register(api) {
		api.registerProvider({
			id: PROVIDER_ID,
			label: "fal",
			docsPath: "/providers/models",
			envVars: ["FAL_KEY"],
			auth: [createProviderApiKeyAuthMethod({
				providerId: PROVIDER_ID,
				methodId: "api-key",
				label: "fal API key",
				hint: "Image generation API key",
				optionKey: "falApiKey",
				flagName: "--fal-api-key",
				envVar: "FAL_KEY",
				promptMessage: "Enter fal API key",
				defaultModel: FAL_DEFAULT_IMAGE_MODEL_REF,
				expectedProviders: ["fal"],
				applyConfig: (cfg) => applyFalConfig(cfg),
				wizard: {
					choiceId: "fal-api-key",
					choiceLabel: "fal API key",
					choiceHint: "Image generation API key",
					groupId: "fal",
					groupLabel: "fal",
					groupHint: "Image generation",
					onboardingScopes: ["image-generation"]
				}
			})]
		});
		api.registerImageGenerationProvider(buildFalImageGenerationProvider());
	}
});
//#endregion
export { fal_default as default };
