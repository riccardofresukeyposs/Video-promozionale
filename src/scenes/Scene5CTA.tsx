import { AbsoluteFill, useCurrentFrame } from "remotion";
import { CinematicOverlay } from "../components/CinematicOverlay";
import { RevealLine } from "../components/RevealLine";
import { InstagramIcon } from "../components/InstagramIcon";
import { displayFont, bodyFont } from "../fonts";
import { INSTAGRAM_HANDLE, PALETTE } from "../constants";

export const Scene5CTA: React.FC = () => {
  const frame = useCurrentFrame();

  const pulse = 1 + Math.sin(frame / 10) * 0.02;

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(ellipse at 50% 35%, ${PALETTE.rust}33 0%, ${PALETTE.backgroundDeep} 70%)`,
      }}
    >
      <CinematicOverlay />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: "0 90px",
          textAlign: "center",
        }}
      >
        <RevealLine delay={4}>
          <div
            style={{
              fontFamily: displayFont,
              fontWeight: 700,
              fontSize: 78,
              lineHeight: 1.1,
              color: PALETTE.cream,
              marginBottom: 56,
            }}
          >
            Strade di
            <br />
            cenere e speranza
          </div>
        </RevealLine>

        <RevealLine delay={30}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "18px 32px",
              borderRadius: 999,
              border: `1.5px solid ${PALETTE.ember}`,
              transform: `scale(${pulse})`,
            }}
          >
            <InstagramIcon size={40} color={PALETTE.ember} />
            <span
              style={{
                fontFamily: bodyFont,
                fontWeight: 500,
                fontSize: 32,
                color: PALETTE.cream,
              }}
            >
              @{INSTAGRAM_HANDLE}
            </span>
          </div>
        </RevealLine>

        <RevealLine delay={54}>
          <div
            style={{
              fontFamily: bodyFont,
              fontWeight: 500,
              fontSize: 30,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: PALETTE.creamDim,
              marginTop: 40,
            }}
          >
            Segui la storia →
          </div>
        </RevealLine>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
