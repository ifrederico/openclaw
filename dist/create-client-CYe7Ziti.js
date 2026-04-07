import { s as resolveValidatedMatrixHomeserverUrl } from "./config-T3IZ6LWB.js";
import { i as writeStorageMeta, r as resolveMatrixStoragePaths, t as maybeMigrateLegacyStorage } from "./storage-COxLyXiQ.js";
import fs from "node:fs";
//#region extensions/matrix/src/matrix/client/create-client.ts
let matrixCreateClientRuntimeDepsPromise;
async function loadMatrixCreateClientRuntimeDeps() {
	matrixCreateClientRuntimeDepsPromise ??= Promise.all([import("./sdk-D0eplwnp.js"), import("./logging-TBzY6fle.js")]).then(([sdkModule, loggingModule]) => ({
		MatrixClient: sdkModule.MatrixClient,
		ensureMatrixSdkLoggingConfigured: loggingModule.ensureMatrixSdkLoggingConfigured
	}));
	return await matrixCreateClientRuntimeDepsPromise;
}
async function createMatrixClient(params) {
	const { MatrixClient, ensureMatrixSdkLoggingConfigured } = await loadMatrixCreateClientRuntimeDeps();
	ensureMatrixSdkLoggingConfigured();
	const env = process.env;
	const homeserver = await resolveValidatedMatrixHomeserverUrl(params.homeserver, { dangerouslyAllowPrivateNetwork: params.allowPrivateNetwork });
	const userId = params.userId?.trim() || "unknown";
	const matrixClientUserId = params.userId?.trim() || void 0;
	const storagePaths = resolveMatrixStoragePaths({
		homeserver,
		userId,
		accessToken: params.accessToken,
		accountId: params.accountId,
		deviceId: params.deviceId,
		env
	});
	await maybeMigrateLegacyStorage({
		storagePaths,
		env
	});
	fs.mkdirSync(storagePaths.rootDir, { recursive: true });
	writeStorageMeta({
		storagePaths,
		homeserver,
		userId,
		accountId: params.accountId,
		deviceId: params.deviceId
	});
	const cryptoDatabasePrefix = `openclaw-matrix-${storagePaths.accountKey}-${storagePaths.tokenHash}`;
	return new MatrixClient(homeserver, params.accessToken, {
		userId: matrixClientUserId,
		password: params.password,
		deviceId: params.deviceId,
		encryption: params.encryption,
		localTimeoutMs: params.localTimeoutMs,
		initialSyncLimit: params.initialSyncLimit,
		storagePath: storagePaths.storagePath,
		recoveryKeyPath: storagePaths.recoveryKeyPath,
		idbSnapshotPath: storagePaths.idbSnapshotPath,
		cryptoDatabasePrefix,
		autoBootstrapCrypto: params.autoBootstrapCrypto,
		ssrfPolicy: params.ssrfPolicy,
		dispatcherPolicy: params.dispatcherPolicy
	});
}
//#endregion
export { createMatrixClient as t };
