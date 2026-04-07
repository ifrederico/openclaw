import { i as discordSetupAdapter, r as createDiscordPluginBase } from "./channel-BFKD0Knj.js";
import { n as createDiscordSetupWizardProxy } from "./setup-core-BgAoiaKc.js";
//#endregion
//#region extensions/discord/src/channel.setup.ts
const discordSetupPlugin = { ...createDiscordPluginBase({
	setupWizard: createDiscordSetupWizardProxy(async () => (await import("./setup-surface-EN1BlVSt.js")).discordSetupWizard),
	setup: discordSetupAdapter
}) };
//#endregion
export { discordSetupPlugin as t };
