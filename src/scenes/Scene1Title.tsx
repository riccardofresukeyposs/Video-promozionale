import { AbsoluteFill } from "remotion";
import { KenBurnsImage } from "../components/KenBurnsImage";
import { CinematicOverlay } from "../components/CinematicOverlay";
import { RevealLine } from "../components/RevealLine";
import { displayFont, bodyFont } from "../fonts";
import { PALETTE, SCENE_DURATIONS } from "../constants";

export const Scene1Title: React.FC = () => {
  return (
    <AbsoluteFill>
      <KenBurnsImage
        src="/images/portrait-serious.webp"
        durationInFrames={SCENE_DURATIONS.title}
        direction="in"
        objectPosition="center 30%"
      />
      <CinematicOverlay />
      <AbsoluteFill
        style={{
          justifyContent: "flex-end",
          alignItems: "flex-start",
          padding: "0 80px 160px 80px",
        }}
      >
        <RevealLine delay={10}>
          <div
            style={{
              fontFamily: bodyFont,
              fontWeight: 500,
              fontSize: 30,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: PALETTE.ember,
              marginBottom: 18,
            }}
          >
            Una storia di sopravvivenza
          </div>
        </RevealLine>
        <RevealLine delay={22}>
          <div
            style={{
              fontFamily: displayFont,
              fontWeight: 700,
              fontSize: 94,
              lineHeight: 1.05,
              color: PALETTE.cream,
              textShadow: "0 6px 30px rgba(0,0,0,0.6)",
            }}
          >
            Strade di
            <br />
            cenere e speranza
          </div>
        </RevealLine>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
