import "./shared-eU74a-tC.js";
//#region extensions/microsoft-foundry/shared-runtime.ts
function getFoundryTokenCacheKey(params) {
	return `${params?.subscriptionId ?? ""}:${params?.tenantId ?? ""}`;
}
//#endregion
export { getFoundryTokenCacheKey as t };
