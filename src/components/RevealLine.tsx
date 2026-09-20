import { spring, useCurrentFrame, useVideoConfig } from "remotion";

type Props = {
  delay?: number;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

// A single line of text that eases up and fades in, used for every
// on-screen caption so the reveal timing feels the same across scenes.
export const RevealLine: React.FC<Props> = ({ delay = 0, style, children }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 200, mass: 0.6 },
  });

  return (
    <div
      style={{
        opacity: progress,
        transform: `translateY(${(1 - progress) * 28}px)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
