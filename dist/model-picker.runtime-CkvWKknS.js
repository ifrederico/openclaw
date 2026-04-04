import { t as resolvePluginProviders } from "./providers.runtime-DfKoBqxo.js";
import { i as runProviderModelSelectedHook, n as resolveProviderPluginChoice } from "./provider-wizard-DLyHaSil.js";
import { n as resolveProviderModelPickerFlowContributions, r as resolveProviderModelPickerFlowEntries } from "./provider-flow-DIdINlpH.js";
import { n as runProviderPluginAuthMethod } from "./provider-auth-choice-o6zBHmtf.js";
//#region src/commands/model-picker.runtime.ts
const modelPickerRuntime = {
	resolveProviderModelPickerContributions: resolveProviderModelPickerFlowContributions,
	resolveProviderModelPickerEntries: resolveProviderModelPickerFlowEntries,
	resolveProviderPluginChoice,
	runProviderModelSelectedHook,
	resolvePluginProviders,
	runProviderPluginAuthMethod
};
//#endregion
export { modelPickerRuntime };
