import { AbsoluteFill } from "remotion";

// Warm color-grade vignette + grain, layered on top of every scene so the
// four source photos and the text-only CTA all read as one consistent look.
export const CinematicOverlay: React.FC = () => {
  return (
    <AbsoluteFill>
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(0,0,0,0) 45%, rgba(10,7,5,0.25) 88%, rgba(10,7,5,0.45) 100%)",
        }}
      />
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,7,5,0.2) 0%, rgba(10,7,5,0) 20%, rgba(10,7,5,0) 68%, rgba(10,7,5,0.55) 100%)",
        }}
      />
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(160deg, rgba(232,182,113,0.10) 0%, rgba(10,7,5,0) 45%)",
          mixBlendMode: "overlay",
        }}
      />
      <AbsoluteFill
        style={{
          opacity: 0.03,
          mixBlendMode: "overlay",
          backgroundSize: "180px 180px",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </AbsoluteFill>
  );
};
