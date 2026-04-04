import { n as writeJsonFileAtomically } from "./json-store-Bwo-RrS7.js";
import { i as resolveMatrixCredentialsPath, n as loadMatrixCredentials } from "./credentials-read-_LKLylL4.js";
import "./runtime-api-DyGypntr.js";
//#region extensions/matrix/src/matrix/credentials.ts
async function saveMatrixCredentials(credentials, env = process.env, accountId) {
	const credPath = resolveMatrixCredentialsPath(env, accountId);
	const existing = loadMatrixCredentials(env, accountId);
	const now = (/* @__PURE__ */ new Date()).toISOString();
	await writeJsonFileAtomically(credPath, {
		...credentials,
		createdAt: existing?.createdAt ?? now,
		lastUsedAt: now
	});
}
async function touchMatrixCredentials(env = process.env, accountId) {
	const existing = loadMatrixCredentials(env, accountId);
	if (!existing) return;
	existing.lastUsedAt = (/* @__PURE__ */ new Date()).toISOString();
	await writeJsonFileAtomically(resolveMatrixCredentialsPath(env, accountId), existing);
}
//#endregion
export { saveMatrixCredentials, touchMatrixCredentials };
