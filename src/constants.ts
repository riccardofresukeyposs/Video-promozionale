export const VIDEO_WIDTH = 1080;
export const VIDEO_HEIGHT = 1920;
export const VIDEO_FPS = 30;

export const TRANSITION_FRAMES = 20;

export const SCENE_DURATIONS = {
  title: 200,
  diary: 220,
  bond: 180,
  journey: 180,
  cta: 200,
} as const;

export const VIDEO_DURATION_IN_FRAMES =
  Object.values(SCENE_DURATIONS).reduce((a, b) => a + b, 0) -
  TRANSITION_FRAMES * 4;

export const PALETTE = {
  background: "#120d0a",
  backgroundDeep: "#0a0705",
  ember: "#e8b671",
  emberDark: "#c9863f",
  rust: "#a9583a",
  cream: "#f5ecdd",
  creamDim: "#d8c8ae",
};

export const INSTAGRAM_HANDLE = "strade.di.cenere.e.speranza";
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;
