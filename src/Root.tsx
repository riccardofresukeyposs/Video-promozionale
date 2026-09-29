import "./index.css";
import { MyComposition } from "./Composition";
import { StradeTrailerComposition } from "./StradeTrailer";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <MyComposition />
      <StradeTrailerComposition />
    </>
  );
};
