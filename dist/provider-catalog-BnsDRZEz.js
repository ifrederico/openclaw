import { g as QWEN_MODEL_CATALOG, u as QWEN_BASE_URL } from "./models-Do9K5CJI.js";
//#region extensions/qwen/provider-catalog.ts
function buildQwenProvider() {
	return {
		baseUrl: QWEN_BASE_URL,
		api: "openai-completions",
		models: QWEN_MODEL_CATALOG.map((model) => ({ ...model }))
	};
}
const buildModelStudioProvider = buildQwenProvider;
//#endregion
export { buildQwenProvider as n, buildModelStudioProvider as t };
