import { r as readSessionUpdatedAt } from "./store-C1XtW9hV.js";
import "./sessions-C_xBS7FP.js";
import { l as resolveStorePath } from "./paths-UazeViO92.js";
import { a as resolveEnvelopeFormatOptions } from "./envelope-C2z9fFcf.js";
//#region src/channels/session-envelope.ts
function resolveInboundSessionEnvelopeContext(params) {
	const storePath = resolveStorePath(params.cfg.session?.store, { agentId: params.agentId });
	return {
		storePath,
		envelopeOptions: resolveEnvelopeFormatOptions(params.cfg),
		previousTimestamp: readSessionUpdatedAt({
			storePath,
			sessionKey: params.sessionKey
		})
	};
}
//#endregion
export { resolveInboundSessionEnvelopeContext as t };
