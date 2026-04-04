import { i as defineChannelPluginEntry } from "../../core-DzCPHG4M.js";
import { b as setMSTeamsRuntime } from "../../graph-users-DM_ps8bO.js";
import { t as msteamsPlugin } from "../../channel-ZhE2oBO0.js";
//#region extensions/msteams/index.ts
var msteams_default = defineChannelPluginEntry({
	id: "msteams",
	name: "Microsoft Teams",
	description: "Microsoft Teams channel plugin (Bot Framework)",
	plugin: msteamsPlugin,
	setRuntime: setMSTeamsRuntime
});
//#endregion
export { msteams_default as default, msteamsPlugin, setMSTeamsRuntime };
