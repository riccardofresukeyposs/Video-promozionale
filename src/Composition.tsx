import React from "react";
import { Composition } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import {
  VIDEO_WIDTH,
  VIDEO_HEIGHT,
  VIDEO_FPS,
  TRANSITION_FRAMES,
} from "./constants";
import { BEATS, TOTAL_BEAT_FRAMES } from "./beats";
import { TextCard } from "./components/TextCard";
import { ImageBeatScene } from "./components/ImageBeatScene";
import { Scene5CTA } from "./scenes/Scene5CTA";

const VIDEO_DURATION_IN_FRAMES =
  TOTAL_BEAT_FRAMES - TRANSITION_FRAMES * (BEATS.length - 1);

export const VideoPromozionale: React.FC = () => {
  return (
    <TransitionSeries>
      {BEATS.map((beat, index) => (
        <React.Fragment key={index}>
          <TransitionSeries.Sequence durationInFrames={beat.duration}>
            {beat.type === "text" && (
              <TextCard
                lines={beat.lines}
                size={beat.size}
                durationInFrames={beat.duration}
              />
            )}
            {beat.type === "image" && (
              <ImageBeatScene
                src={beat.src}
                durationInFrames={beat.duration}
                direction={beat.direction}
                objectPosition={beat.objectPosition}
                panX={beat.panX}
              />
            )}
            {beat.type === "cta" && <Scene5CTA />}
          </TransitionSeries.Sequence>
          {index < BEATS.length - 1 && (
            <TransitionSeries.Transition
              presentation={fade()}
              timing={linearTiming({ durationInFrames: TRANSITION_FRAMES })}
            />
          )}
        </React.Fragment>
      ))}
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
