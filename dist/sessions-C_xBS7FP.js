import { a as loadConfig } from "./io-CS2J_l4V.js";
import "./store-C1XtW9hV.js";
import { i as resolveMainSessionKey } from "./main-session-D-BGz7Y3.js";
import { l as resolveStorePath } from "./paths-UazeViO92.js";
import "./reset-C4TVXJqP.js";
import "./session-key-BoXu97OG.js";
import { t as loadSessionStore } from "./store-load-CibBc4QB.js";
import "./session-file-BJUO5Mr0.js";
import { t as parseSessionThreadInfo } from "./thread-info-Cm6rKKqU.js";
import "./transcript-CZTwHCfU.js";
import "./targets-DRZWnRxv.js";
//#region src/config/sessions/main-session.runtime.ts
function resolveMainSessionKeyFromConfig() {
	return resolveMainSessionKey(loadConfig());
}
//#endregion
//#region src/config/sessions/delivery-info.ts
function extractDeliveryInfo(sessionKey) {
	const { baseSessionKey, threadId } = parseSessionThreadInfo(sessionKey);
	if (!sessionKey || !baseSessionKey) return {
		deliveryContext: void 0,
		threadId
	};
	let deliveryContext;
	try {
		const store = loadSessionStore(resolveStorePath(loadConfig().session?.store));
		let entry = store[sessionKey];
		if (!entry?.deliveryContext && baseSessionKey !== sessionKey) entry = store[baseSessionKey];
		if (entry?.deliveryContext) {
			const resolvedThreadId = entry.deliveryContext.threadId ?? entry.lastThreadId ?? entry.origin?.threadId;
			deliveryContext = {
				channel: entry.deliveryContext.channel,
				to: entry.deliveryContext.to,
				accountId: entry.deliveryContext.accountId,
				threadId: resolvedThreadId != null ? String(resolvedThreadId) : void 0
			};
		}
	} catch {}
	return {
		deliveryContext,
		threadId
	};
}
//#endregion
export { resolveMainSessionKeyFromConfig as n, extractDeliveryInfo as t };
