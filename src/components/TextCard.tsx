import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { CinematicOverlay } from "./CinematicOverlay";
import { displayFont } from "../fonts";
import { PALETTE } from "../constants";

type Props = {
  lines: string[];
  size?: "normal" | "big";
  durationInFrames: number;
};

// A full-bleed teaser card: one or two lines on a dark ground, the way an
// adventure-novel movie trailer cuts to text between shots.
export const TextCard: React.FC<Props> = ({
  lines,
  size = "normal",
  durationInFrames,
}) => {
  const frame = useCurrentFrame();

  const entrance = interpolate(frame, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const exit = interpolate(
    frame,
    [durationInFrames - 12, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const opacity = Math.min(entrance, exit);
  const scale = interpolate(frame, [0, durationInFrames], [0.97, 1.02], {
    extrapolateRight: "clamp",
  });

  const isBig = size === "big";
  const bigTextLength = lines.join(" ").length;
  const bigFontSize = bigTextLength <= 8 ? 132 : 88;
  const bigLetterSpacing = bigTextLength <= 8 ? 14 : 5;

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(ellipse at 50% 50%, ${PALETTE.background} 0%, ${PALETTE.backgroundDeep} 100%)`,
      }}
    >
      <CinematicOverlay />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: "0 90px",
          textAlign: "center",
          opacity,
          transform: `scale(${scale})`,
        }}
      >
        {isBig && (
          <div
            style={{
              width: 90,
              height: 2,
              background: PALETTE.ember,
              marginBottom: 36,
              opacity: 0.8,
            }}
          />
        )}
        {lines.map((line, i) => (
          <div
            key={i}
            style={{
              fontFamily: displayFont,
              fontWeight: isBig ? 700 : 600,
              fontSize: isBig ? bigFontSize : 60,
              letterSpacing: isBig ? bigLetterSpacing : 0.5,
              lineHeight: 1.35,
              maxWidth: 900,
              color: isBig ? PALETTE.ember : PALETTE.cream,
              textShadow: "0 8px 30px rgba(0,0,0,0.6)",
            }}
          >
            {line}
          </div>
        ))}
        {isBig && (
          <div
            style={{
              width: 90,
              height: 2,
              background: PALETTE.ember,
              marginTop: 36,
              opacity: 0.8,
            }}
          />
        )}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
