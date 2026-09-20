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
// teaser, building to the archive reveal ("ENYA") before the CTA.
export const BEATS: Beat[] = [
  {
    type: "text",
    duration: 55,
    lines: ["In un mondo che si è fermato,"],
  },
  {
    type: "image",
    duration: 60,
    src: "/images/ruins-street-walk.webp",
    direction: "in",
    objectPosition: "center 35%",
  },
  {
    type: "text",
    duration: 60,
    lines: ["un ragazzo non ha mai smesso", "di cercare."],
  },
  {
    type: "image",
    duration: 55,
    src: "/images/fountain-drink.webp",
    direction: "out",
    objectPosition: "center 40%",
  },
  {
    type: "image",
    duration: 55,
    src: "/images/childhood-home-doorstep.webp",
    direction: "in",
    objectPosition: "center 45%",
    panX: 15,
  },
  {
    type: "text",
    duration: 50,
    lines: ["Ogni rovina nasconde un ricordo."],
  },
  {
    type: "image",
    duration: 55,
    src: "/images/newsstand-newspaper.webp",
    direction: "out",
    objectPosition: "center 40%",
  },
  {
    type: "image",
    duration: 55,
    src: "/images/campfire-reading.webp",
    direction: "in",
    objectPosition: "center 50%",
  },
  {
    type: "text",
    duration: 55,
    lines: ["Ma non è solo la memoria", "a guidarlo."],
  },
  {
    type: "image",
    duration: 60,
    src: "/images/archive-lighter-nati.webp",
    direction: "in",
    objectPosition: "center 42%",
    panX: -15,
  },
  {
    type: "text",
    duration: 45,
    lines: ["Sta cercando un nome:"],
  },
  {
    type: "text",
    duration: 60,
    lines: ["ENYA"],
    size: "big",
  },
  {
    type: "image",
    duration: 60,
    src: "/images/road-embrace.webp",
    direction: "out",
    objectPosition: "center 40%",
  },
  {
    type: "image",
    duration: 55,
    src: "/images/farmhouse-kneel-smile.webp",
    direction: "in",
    objectPosition: "center 45%",
    panX: 15,
  },
  {
    type: "cta",
    duration: 148,
  },
];

export const TOTAL_BEAT_FRAMES = BEATS.reduce((sum, b) => sum + b.duration, 0);
