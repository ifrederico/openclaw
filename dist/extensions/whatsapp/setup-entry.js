import { a as defineSetupPluginEntry } from "../../core-DzCPHG4M.js";
import { n as resolveWhatsAppGroupIntroHint } from "../../whatsapp-shared-C06ynsZL.js";
import { n as resolveWhatsAppGroupToolPolicy, t as resolveWhatsAppGroupRequireMention } from "../../group-policy-Cd2Xw7hu.js";
import { t as whatsappSetupAdapter } from "../../setup-core-6dgWfUa7.js";
import { i as whatsappSetupWizardProxy, n as createWhatsAppPluginBase } from "../../shared-ct07geG3.js";
import "../../api-DghXwKtm.js";
import { d as webAuthExists } from "../../auth-store-BgZZySKE.js";
//#region extensions/whatsapp/src/channel.setup.ts
const whatsappSetupPlugin = { ...createWhatsAppPluginBase({
	groups: {
		resolveRequireMention: resolveWhatsAppGroupRequireMention,
		resolveToolPolicy: resolveWhatsAppGroupToolPolicy,
		resolveGroupIntroHint: resolveWhatsAppGroupIntroHint
	},
	setupWizard: whatsappSetupWizardProxy,
	setup: whatsappSetupAdapter,
	isConfigured: async (account) => await webAuthExists(account.authDir)
}) };
//#endregion
//#region extensions/whatsapp/setup-entry.ts
var setup_entry_default = defineSetupPluginEntry(whatsappSetupPlugin);
//#endregion
export { setup_entry_default as default, whatsappSetupPlugin };
