import { r as resolveGatewayService } from "./service-BaabAHxx.js";
import { t as resolveNodeService } from "./node-service-dIMNmgWe.js";
import { t as formatDaemonRuntimeShort } from "./status.format-5grY1b2s.js";
import { t as readServiceStatusSummary } from "./status.service-summary-B_OFOgVP.js";
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
