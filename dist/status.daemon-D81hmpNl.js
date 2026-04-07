import { r as resolveGatewayService } from "./service-DO4b04e2.js";
import { t as resolveNodeService } from "./node-service-Cd2a6lrp.js";
import { t as formatDaemonRuntimeShort } from "./status.format-BhWyQ78z.js";
import { t as readServiceStatusSummary } from "./status.service-summary-13cZNc1t.js";
//#region src/commands/status.daemon.ts
async function buildDaemonStatusSummary(serviceLabel) {
	const summary = await readServiceStatusSummary(serviceLabel === "gateway" ? resolveGatewayService() : resolveNodeService(), serviceLabel === "gateway" ? "Daemon" : "Node");
	return {
		label: summary.label,
		installed: summary.installed,
		loaded: summary.loaded,
		managedByOpenClaw: summary.managedByOpenClaw,
		externallyManaged: summary.externallyManaged,
		loadedText: summary.loadedText,
		runtimeShort: formatDaemonRuntimeShort(summary.runtime)
	};
}
async function getDaemonStatusSummary() {
	return await buildDaemonStatusSummary("gateway");
}
async function getNodeDaemonStatusSummary() {
	return await buildDaemonStatusSummary("node");
}
//#endregion
export { getNodeDaemonStatusSummary as n, getDaemonStatusSummary as t };
