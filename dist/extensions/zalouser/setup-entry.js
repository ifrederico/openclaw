import { a as defineSetupPluginEntry } from "../../core-DzCPHG4M.js";
import { n as zalouserSetupAdapter, t as zalouserSetupWizard } from "../../setup-surface-xfkrjqt6.js";
import { t as createZalouserPluginBase } from "../../shared-CEmCu2pS.js";
//#region extensions/zalouser/src/channel.setup.ts
const zalouserSetupPlugin = { ...createZalouserPluginBase({
	setupWizard: zalouserSetupWizard,
	setup: zalouserSetupAdapter
}) };
//#endregion
//#region extensions/zalouser/setup-entry.ts
var setup_entry_default = defineSetupPluginEntry(zalouserSetupPlugin);
//#endregion
export { setup_entry_default as default, zalouserSetupPlugin };
