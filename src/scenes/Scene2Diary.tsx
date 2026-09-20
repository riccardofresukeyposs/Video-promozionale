import { AbsoluteFill } from "remotion";
import { KenBurnsImage } from "../components/KenBurnsImage";
import { CinematicOverlay } from "../components/CinematicOverlay";
import { RevealLine } from "../components/RevealLine";
import { displayFont } from "../fonts";
import { PALETTE, SCENE_DURATIONS } from "../constants";

export const Scene2Diary: React.FC = () => {
  return (
    <AbsoluteFill>
      <KenBurnsImage
        src="/images/desk-writing.webp"
        durationInFrames={SCENE_DURATIONS.diary}
        direction="out"
        objectPosition="center 38%"
      />
      <CinematicOverlay />
      <AbsoluteFill
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "0 80px 200px 80px",
          textAlign: "center",
        }}
      >
        <RevealLine delay={8}>
          <div
            style={{
              fontFamily: displayFont,
              fontWeight: 600,
              fontSize: 56,
              lineHeight: 1.3,
              color: PALETTE.cream,
              textShadow: "0 6px 24px rgba(0,0,0,0.6)",
            }}
          >
            In un mondo che è finito,
          </div>
        </RevealLine>
        <RevealLine delay={28}>
          <div
            style={{
              fontFamily: displayFont,
              fontWeight: 600,
              fontSize: 56,
              lineHeight: 1.3,
              color: PALETTE.ember,
              textShadow: "0 6px 24px rgba(0,0,0,0.6)",
            }}
          >
            resta chi non si arrende.
          </div>
        </RevealLine>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
