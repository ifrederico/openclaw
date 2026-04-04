import { t as getChatChannelMeta } from "./chat-meta-Cdrnv7R-.js";
import { n as describeAccountSnapshot } from "./account-helpers-DqNwQN08.js";
import { c as createScopedChannelConfigAdapter, t as adaptScopedAccountAccessor } from "./channel-config-helpers-B0S2z66F.js";
import { n as createChannelPluginBase } from "./core-DzCPHG4M.js";
import { t as formatAllowFromLowercase } from "./allow-from-BJ5FBYvV.js";
import { a as resolveDefaultDiscordAccountId, n as listDiscordAccountIds, o as resolveDiscordAccount } from "./accounts-1saJz5CZ.js";
import "./runtime-api-k53prQCT.js";
import { t as inspectDiscordAccount } from "./account-inspect-A6udP-xG.js";
import { n as createDiscordSetupWizardProxy } from "./setup-core-BqVrB607.js";
import { t as DiscordChannelConfigSchema } from "./config-schema-DRFMe0EI.js";
//#region extensions/discord/src/shared.ts
const DISCORD_CHANNEL = "discord";
async function loadDiscordChannelRuntime() {
	return await import("./channel.runtime-DO1_Crz1.js");
}
const discordSetupWizard = createDiscordSetupWizardProxy(async () => (await loadDiscordChannelRuntime()).discordSetupWizard);
const discordConfigAdapter = createScopedChannelConfigAdapter({
	sectionKey: DISCORD_CHANNEL,
	listAccountIds: listDiscordAccountIds,
	resolveAccount: adaptScopedAccountAccessor(resolveDiscordAccount),
	inspectAccount: adaptScopedAccountAccessor(inspectDiscordAccount),
	defaultAccountId: resolveDefaultDiscordAccountId,
	clearBaseFields: ["token", "name"],
	resolveAllowFrom: (account) => account.config.dm?.allowFrom,
	formatAllowFrom: (allowFrom) => formatAllowFromLowercase({ allowFrom }),
	resolveDefaultTo: (account) => account.config.defaultTo
});
function createDiscordPluginBase(params) {
	return createChannelPluginBase({
		id: DISCORD_CHANNEL,
		setupWizard: discordSetupWizard,
		meta: { ...getChatChannelMeta(DISCORD_CHANNEL) },
		capabilities: {
			chatTypes: [
				"direct",
				"channel",
				"thread"
			],
			polls: true,
			reactions: true,
			threads: true,
			media: true,
			nativeCommands: true
		},
		streaming: { blockStreamingCoalesceDefaults: {
			minChars: 1500,
			idleMs: 1e3
		} },
		reload: { configPrefixes: ["channels.discord"] },
		configSchema: DiscordChannelConfigSchema,
		config: {
			...discordConfigAdapter,
			isConfigured: (account) => Boolean(account.token?.trim()),
			describeAccount: (account) => describeAccountSnapshot({
				account,
				configured: Boolean(account.token?.trim()),
				extra: { tokenSource: account.tokenSource }
			})
		},
		setup: params.setup
	});
}
//#endregion
export { discordConfigAdapter as n, createDiscordPluginBase as t };
