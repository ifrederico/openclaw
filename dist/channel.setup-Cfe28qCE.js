import { i as telegramSetupAdapter, r as telegramSetupWizard } from "./channel-DUs3mEss.js";
import { t as createTelegramPluginBase } from "./shared-DgaQ2oZH.js";
//#region extensions/telegram/src/channel.setup.ts
const telegramSetupPlugin = { ...createTelegramPluginBase({
	setupWizard: telegramSetupWizard,
	setup: telegramSetupAdapter
}) };
//#endregion
export { telegramSetupPlugin as t };
