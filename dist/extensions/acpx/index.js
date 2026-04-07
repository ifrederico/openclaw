import { n as tryDispatchAcpReplyHook } from "../../acp-runtime-AJ7GbEX-.js";
import "../../runtime-api-Dqknsos0.js";
import { n as createAcpxPluginConfigSchema, t as createAcpxRuntimeService } from "../../register.runtime-ujmdBVbu.js";
//#region extensions/acpx/index.ts
const plugin = {
	id: "acpx",
	name: "ACPX Runtime",
	description: "Embedded ACP runtime backend with plugin-owned session and transport management.",
	configSchema: () => createAcpxPluginConfigSchema(),
	register(api) {
		api.registerService(createAcpxRuntimeService({ pluginConfig: api.pluginConfig }));
		api.on("reply_dispatch", tryDispatchAcpReplyHook);
	}
};
//#endregion
export { plugin as default };
