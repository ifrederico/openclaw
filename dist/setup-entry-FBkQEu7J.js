import { ox as defineSetupPluginEntry } from "./pi-embedded-DhFkhMap.js";
import { i as createSlackPluginBase, n as slackSetupAdapter, t as slackSetupWizard } from "./setup-surface-c2Gpaz7W.js";
//#region extensions/slack/src/channel.setup.ts
const slackSetupPlugin = { ...createSlackPluginBase({
	setupWizard: slackSetupWizard,
	setup: slackSetupAdapter
}) };
//#endregion
//#region extensions/slack/setup-entry.ts
var setup_entry_default = defineSetupPluginEntry(slackSetupPlugin);
//#endregion
export { slackSetupPlugin as n, setup_entry_default as t };
