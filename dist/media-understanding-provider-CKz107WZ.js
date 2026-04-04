import { n as describeImagesWithModel, t as describeImageWithModel } from "./image-runtime-38ig9H63.js";
import "./media-understanding-CvgkUkIb.js";
//#region extensions/zai/media-understanding-provider.ts
const zaiMediaUnderstandingProvider = {
	id: "zai",
	capabilities: ["image"],
	describeImage: describeImageWithModel,
	describeImages: describeImagesWithModel
};
//#endregion
export { zaiMediaUnderstandingProvider as t };
