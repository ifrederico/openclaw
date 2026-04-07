import { l as updateSessionStoreEntry } from "./store-C1XtW9hV.js";
import "./sessions-C_xBS7FP.js";
import { l as resolveStorePath } from "./paths-UazeViO92.js";
//#region src/agents/pi-embedded-subscribe.handlers.compaction.runtime.ts
async function reconcileSessionStoreCompactionCountAfterSuccess(params) {
	const { sessionKey, agentId, configStore, observedCompactionCount, now = Date.now() } = params;
	if (!sessionKey || observedCompactionCount <= 0) return;
	return (await updateSessionStoreEntry({
		storePath: resolveStorePath(configStore, { agentId }),
		sessionKey,
		update: async (entry) => {
			const currentCount = Math.max(0, entry.compactionCount ?? 0);
			const nextCount = Math.max(currentCount, observedCompactionCount);
			if (nextCount === currentCount) return null;
			return {
				compactionCount: nextCount,
				updatedAt: Math.max(entry.updatedAt ?? 0, now)
			};
		}
	}))?.compactionCount;
}
//#endregion
export { reconcileSessionStoreCompactionCountAfterSuccess };
