import { i as defineChannelPluginEntry } from "../../core-DzCPHG4M.js";
import { t as zaloPlugin } from "../../channel-BJ-P373S.js";
import { n as setZaloRuntime } from "../../runtime-DHg2-zfH.js";
//#region extensions/zalo/index.ts
var zalo_default = defineChannelPluginEntry({
	id: "zalo",
	name: "Zalo",
	description: "Zalo channel plugin",
	plugin: zaloPlugin,
	setRuntime: setZaloRuntime
});
//#endregion
export { zalo_default as default, setZaloRuntime, zaloPlugin };
