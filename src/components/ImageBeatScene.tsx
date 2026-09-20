import { AbsoluteFill } from "remotion";
import { KenBurnsImage } from "./KenBurnsImage";
import { CinematicOverlay } from "./CinematicOverlay";

type Props = {
  src: string;
  durationInFrames: number;
  direction?: "in" | "out";
  objectPosition?: string;
  panX?: number;
};

// A pure photo beat: no caption, just the Ken Burns move and the color
// grade, cut in between the text cards.
export const ImageBeatScene: React.FC<Props> = ({
  src,
  durationInFrames,
  direction = "in",
  objectPosition = "center",
  panX = 0,
}) => {
  return (
    <AbsoluteFill>
      <KenBurnsImage
        src={src}
        durationInFrames={durationInFrames}
        direction={direction}
        objectPosition={objectPosition}
        panX={panX}
      />
      <CinematicOverlay />
    </AbsoluteFill>
  );
};
