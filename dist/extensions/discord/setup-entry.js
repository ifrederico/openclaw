import { a as defineSetupPluginEntry } from "../../core-DzCPHG4M.js";
import { r as discordSetupAdapter } from "../../setup-core-BqVrB607.js";
import { t as createDiscordPluginBase } from "../../shared-DOgp3y_O.js";
//#region extensions/discord/src/channel.setup.ts
const discordSetupPlugin = { ...createDiscordPluginBase({ setup: discordSetupAdapter }) };
//#endregion
//#region extensions/discord/setup-entry.ts
var setup_entry_default = defineSetupPluginEntry(discordSetupPlugin);
//#endregion
export { setup_entry_default as default, discordSetupPlugin };
