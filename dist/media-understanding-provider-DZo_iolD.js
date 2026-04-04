import { n as describeImagesWithModel, t as describeImageWithModel } from "./image-runtime-38ig9H63.js";
import "./media-understanding-CvgkUkIb.js";
//#region extensions/anthropic/media-understanding-provider.ts
const anthropicMediaUnderstandingProvider = {
	id: "anthropic",
	capabilities: ["image"],
	describeImage: describeImageWithModel,
	describeImages: describeImagesWithModel
};
//#endregion
export { anthropicMediaUnderstandingProvider as t };
