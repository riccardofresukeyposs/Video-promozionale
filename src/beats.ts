export type TextBeat = {
  type: "text";
  duration: number;
  lines: string[];
  size?: "normal" | "big";
};

export type ImageBeat = {
  type: "image";
  duration: number;
  src: string;
  direction?: "in" | "out";
  objectPosition?: string;
  panX?: number;
};

export type CtaBeat = {
  type: "cta";
  duration: number;
};

export type Beat = TextBeat | ImageBeat | CtaBeat;

// The trailer's spine: text cards and photos alternate like an adventure-novel
// teaser. Enya (the protagonist) is introduced early; the archive scene later
// builds to what he's really after — not a person, a direction for his life.
export const BEATS: Beat[] = [
  {
    type: "text",
    duration: 55,
    lines: ["In un mondo che si è fermato,"],
  },
  {
    type: "image",
    duration: 55,
    src: "/images/ruins-street-walk.webp",
    direction: "in",
    objectPosition: "center 35%",
  },
  {
    type: "text",
    duration: 55,
    lines: ["ENYA"],
    size: "big",
  },
  {
    type: "text",
    duration: 50,
    lines: ["non ha mai smesso di camminare."],
  },
  {
    type: "image",
    duration: 50,
    src: "/images/fountain-drink.webp",
    direction: "out",
    objectPosition: "center 40%",
  },
  {
    type: "image",
    duration: 50,
    src: "/images/childhood-home-doorstep.webp",
    direction: "in",
    objectPosition: "center 45%",
    panX: 15,
  },
  {
    type: "text",
    duration: 48,
    lines: ["Ogni rovina nasconde un ricordo."],
  },
  {
    type: "image",
    duration: 50,
    src: "/images/newsstand-newspaper.webp",
    direction: "out",
    objectPosition: "center 40%",
  },
  {
    type: "image",
    duration: 50,
    src: "/images/campfire-reading.webp",
    direction: "in",
    objectPosition: "center 50%",
  },
  {
    type: "text",
    duration: 50,
    lines: ["Ma i ricordi non gli bastano più."],
  },
  {
    type: "image",
    duration: 55,
    src: "/images/archive-lighter-nati.webp",
    direction: "in",
    objectPosition: "center 42%",
    panX: -15,
  },
  {
    type: "text",
    duration: 42,
    lines: ["Cerca solo una cosa:"],
  },
  {
    type: "text",
    duration: 58,
    lines: ["UNA DIREZIONE."],
    size: "big",
  },
  {
    type: "image",
    duration: 55,
    src: "/images/road-embrace.webp",
    direction: "out",
    objectPosition: "center 40%",
  },
  {
    type: "image",
    duration: 50,
    src: "/images/farmhouse-kneel-smile.webp",
    direction: "in",
    objectPosition: "center 45%",
    panX: 15,
  },
  {
    type: "cta",
    duration: 157,
  },
];

export const TOTAL_BEAT_FRAMES = BEATS.reduce((sum, b) => sum + b.duration, 0);
