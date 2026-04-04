import { n as describeImagesWithModel, t as describeImageWithModel } from "./image-runtime-38ig9H63.js";
import "./media-understanding-CvgkUkIb.js";
//#region extensions/openrouter/media-understanding-provider.ts
const openrouterMediaUnderstandingProvider = {
	id: "openrouter",
	capabilities: ["image"],
	describeImage: describeImageWithModel,
	describeImages: describeImagesWithModel
};
//#endregion
export { openrouterMediaUnderstandingProvider as t };
