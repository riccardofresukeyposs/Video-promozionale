import { AbsoluteFill } from "remotion";
import { KenBurnsImage } from "../components/KenBurnsImage";
import { CinematicOverlay } from "../components/CinematicOverlay";
import { RevealLine } from "../components/RevealLine";
import { displayFont, bodyFont } from "../fonts";
import { PALETTE, SCENE_DURATIONS } from "../constants";

export const Scene3Bond: React.FC = () => {
  return (
    <AbsoluteFill>
      <KenBurnsImage
        src="/images/portrait-smile.webp"
        durationInFrames={SCENE_DURATIONS.bond}
        direction="in"
        objectPosition="center 25%"
        panX={-20}
      />
      <CinematicOverlay />
      <AbsoluteFill
        style={{
          justifyContent: "flex-end",
          alignItems: "flex-start",
          padding: "0 80px 160px 80px",
        }}
      >
        <RevealLine delay={8}>
          <div
            style={{
              fontFamily: bodyFont,
              fontWeight: 500,
              fontSize: 28,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: PALETTE.ember,
              marginBottom: 16,
            }}
          >
            Il suo unico compagno
          </div>
        </RevealLine>
        <RevealLine delay={20}>
          <div
            style={{
              fontFamily: displayFont,
              fontWeight: 700,
              fontSize: 68,
              lineHeight: 1.15,
              color: PALETTE.cream,
              textShadow: "0 6px 24px rgba(0,0,0,0.6)",
              maxWidth: 880,
            }}
          >
            Non è mai davvero solo.
          </div>
        </RevealLine>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
