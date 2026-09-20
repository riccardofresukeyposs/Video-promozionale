import {
  AbsoluteFill,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

type Props = {
  src: string;
  durationInFrames: number;
  direction?: "in" | "out";
  objectPosition?: string;
  panX?: number;
};

export const KenBurnsImage: React.FC<Props> = ({
  src,
  durationInFrames,
  direction = "in",
  objectPosition = "center",
  panX = 0,
}) => {
  const frame = useCurrentFrame();

  const scale =
    direction === "in"
      ? interpolate(frame, [0, durationInFrames], [1.05, 1.22], {
          extrapolateRight: "clamp",
        })
      : interpolate(frame, [0, durationInFrames], [1.22, 1.05], {
          extrapolateRight: "clamp",
        });

  const translateX = interpolate(frame, [0, durationInFrames], [0, panX], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ overflow: "hidden", backgroundColor: "#0a0705" }}>
      <Img
        src={staticFile(src)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition,
          transform: `scale(${scale}) translateX(${translateX}px)`,
        }}
      />
    </AbsoluteFill>
  );
};
