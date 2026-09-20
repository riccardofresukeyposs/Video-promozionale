import { Composition } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import {
  VIDEO_WIDTH,
  VIDEO_HEIGHT,
  VIDEO_FPS,
  VIDEO_DURATION_IN_FRAMES,
  TRANSITION_FRAMES,
  SCENE_DURATIONS,
} from "./constants";
import { Scene1Title } from "./scenes/Scene1Title";
import { Scene2Diary } from "./scenes/Scene2Diary";
import { Scene3Bond } from "./scenes/Scene3Bond";
import { Scene4Journey } from "./scenes/Scene4Journey";
import { Scene5CTA } from "./scenes/Scene5CTA";

export const VideoPromozionale: React.FC = () => {
  const transition = () => (
    <TransitionSeries.Transition
      presentation={fade()}
      timing={linearTiming({ durationInFrames: TRANSITION_FRAMES })}
    />
  );

  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={SCENE_DURATIONS.title}>
        <Scene1Title />
      </TransitionSeries.Sequence>
      {transition()}
      <TransitionSeries.Sequence durationInFrames={SCENE_DURATIONS.diary}>
        <Scene2Diary />
      </TransitionSeries.Sequence>
      {transition()}
      <TransitionSeries.Sequence durationInFrames={SCENE_DURATIONS.bond}>
        <Scene3Bond />
      </TransitionSeries.Sequence>
      {transition()}
      <TransitionSeries.Sequence durationInFrames={SCENE_DURATIONS.journey}>
        <Scene4Journey />
      </TransitionSeries.Sequence>
      {transition()}
      <TransitionSeries.Sequence durationInFrames={SCENE_DURATIONS.cta}>
        <Scene5CTA />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};

export const MyComposition = () => {
  return (
    <Composition
      id="VideoPromozionale"
      component={VideoPromozionale}
      durationInFrames={VIDEO_DURATION_IN_FRAMES}
      fps={VIDEO_FPS}
      width={VIDEO_WIDTH}
      height={VIDEO_HEIGHT}
    />
  );
};
