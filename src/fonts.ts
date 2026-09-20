import { loadFont as loadDisplayFont } from "@remotion/google-fonts/PlayfairDisplay";
import { loadFont as loadBodyFont } from "@remotion/google-fonts/WorkSans";

export const { fontFamily: displayFont } = loadDisplayFont("normal", {
  weights: ["600", "700"],
});

export const { fontFamily: bodyFont } = loadBodyFont("normal", {
  weights: ["300", "400", "500"],
});
