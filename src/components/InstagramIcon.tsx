type Props = {
  size?: number;
  color?: string;
};

// Generic camera-in-rounded-square glyph used as a stand-in social icon,
// not a reproduction of Instagram's trademarked logo artwork.
export const InstagramIcon: React.FC<Props> = ({ size = 48, color = "#f5ecdd" }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <rect
        x="4"
        y="4"
        width="40"
        height="40"
        rx="12"
        stroke={color}
        strokeWidth="2.6"
      />
      <circle cx="24" cy="24" r="9.5" stroke={color} strokeWidth="2.6" />
      <circle cx="34" cy="14" r="2.2" fill={color} />
    </svg>
  );
};
