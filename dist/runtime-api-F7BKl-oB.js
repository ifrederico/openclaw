import "./json-store-DmPegdww.js";
import "./routing-DdBDhOmH.js";
import "./channel-policy-DIVRdPsQ.js";
import "./channel-targets-BmwNqxOt.js";
import "./channel-reply-pipeline-DkatqAK5.js";
import "./setup-Dp8bIdbL.js";
import "./config-runtime-j3Yby-w5.js";
import "./inbound-reply-dispatch-DVuGVGeO.js";
import "./outbound-media-55sTJsgk.js";
import "./outbound-runtime-BSC4z6CP.js";
import "./ssrf-runtime-DGIvmaoK.js";
import "./media-runtime-teBRB60y.js";
import "./conversation-runtime-CTR2AQWz.js";
import "./acp-binding-runtime-DesvNeXO.js";
import "./channel-config-primitives-DiYud7LO.js";
import "./channel-actions-DLDrCW4b.js";
import "./channel-feedback-CG9vt7uF.js";
import "./channel-inbound-CGpq8y8o.js";
import "./channel-status-45SWZx-g.js";
//#region extensions/matrix/src/runtime-api.ts
function buildTimeoutAbortSignal(params) {
	const { timeoutMs, signal } = params;
	if (!timeoutMs && !signal) return {
		signal: void 0,
		cleanup: () => {}
	};
	if (!timeoutMs) return {
		signal,
		cleanup: () => {}
	};
	const controller = new AbortController();
	const timeoutId = setTimeout(controller.abort.bind(controller), timeoutMs);
	const onAbort = () => controller.abort();
	if (signal) if (signal.aborted) controller.abort();
	else signal.addEventListener("abort", onAbort, { once: true });
	return {
		signal: controller.signal,
		cleanup: () => {
			clearTimeout(timeoutId);
			signal?.removeEventListener("abort", onAbort);
		}
	};
}
//#endregion
export { buildTimeoutAbortSignal as t };
