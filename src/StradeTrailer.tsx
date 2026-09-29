import {
  AbsoluteFill,
  Audio,
  Composition,
  OffthreadVideo,
  interpolate,
  staticFile,
  useVideoConfig,
} from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { VIDEO_FPS, TRANSITION_FRAMES } from "./constants";
import { TextCard } from "./components/TextCard";
import { Scene5CTA } from "./scenes/Scene5CTA";

// Dimensions and length of the pre-edited source clip (public/video/strade1.mp4),
// probed with @remotion/renderer's getVideoMetadata: 1080x1620, 30fps, ~16.17s.
const CLIP_WIDTH = 1080;
const CLIP_HEIGHT = 1620;
const CLIP_DURATION_IN_FRAMES = 485;

const OPENING_DURATION = 110;
const CLOSING_DURATION = 150;

const TOTAL_DURATION =
  OPENING_DURATION +
  CLIP_DURATION_IN_FRAMES +
  CLOSING_DURATION -
  TRANSITION_FRAMES * 2;

const MusicBed: React.FC = () => {
  const { durationInFrames, fps } = useVideoConfig();
  const fadeOutStart = durationInFrames - fps * 1.5;

  return (
    <Audio
      src={staticFile("/audio/tranquility.mp3")}
      volume={(f) =>
        interpolate(
          f,
          [0, fps, fadeOutStart, durationInFrames],
          [0, 0.35, 0.35, 0],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
        )
      }
    />
  );
};

export const StradeTrailerVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0705" }}>
      <MusicBed />
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={OPENING_DURATION}>
          <TextCard
            lines={[
              "Segui Enya",
              "lungo una strada piena",
              "di cenere, ricordi e speranza",
            ]}
            durationInFrames={OPENING_DURATION}
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: TRANSITION_FRAMES })}
        />

        <TransitionSeries.Sequence durationInFrames={CLIP_DURATION_IN_FRAMES}>
          <AbsoluteFill style={{ backgroundColor: "#0a0705" }}>
            <OffthreadVideo
              src={staticFile("/video/strade1.mp4")}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </AbsoluteFill>
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: TRANSITION_FRAMES })}
        />

        <TransitionSeries.Sequence durationInFrames={CLOSING_DURATION}>
          <Scene5CTA />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};

export const StradeTrailerComposition = () => {
  return (
    <Composition
      id="StradeTrailer"
      component={StradeTrailerVideo}
      durationInFrames={TOTAL_DURATION}
      fps={VIDEO_FPS}
      width={CLIP_WIDTH}
      height={CLIP_HEIGHT}
    />
  );
};
