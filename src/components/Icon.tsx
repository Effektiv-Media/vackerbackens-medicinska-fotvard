import type { SVGProps } from "react";

type IconName =
  | "shield-check"
  | "leaf"
  | "car"
  | "sparkle"
  | "home"
  | "heart"
  | "stethoscope"
  | "hand"
  | "drop"
  | "shoe"
  | "spark"
  | "phone"
  | "mail"
  | "map-pin"
  | "calendar"
  | "external"
  | "chevron-down"
  | "facebook"
  | "instagram";

const paths: Record<IconName, React.ReactNode> = {
  "shield-check": (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  leaf: (
    <>
      <path d="M20 4c-9 0-15 5-15 13 0 1 .2 2 .5 3" />
      <path d="M5 20c5-2 11-6 14-15" />
    </>
  ),
  car: (
    <>
      <path d="M5 17h14M6 17v2M18 17v2" />
      <path d="M4 13l2-5a2 2 0 012-2h8a2 2 0 012 2l2 5v4H4v-4z" />
      <circle cx="7.5" cy="14.5" r="1" />
      <circle cx="16.5" cy="14.5" r="1" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
    </>
  ),
  home: (
    <>
      <path d="M4 11l8-7 8 7" />
      <path d="M6 10v9h12v-9" />
      <path d="M10 19v-5h4v5" />
    </>
  ),
  heart: (
    <path d="M12 20s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.5-7 10-7 10z" />
  ),
  stethoscope: (
    <>
      <path d="M6 4v6a4 4 0 008 0V4" />
      <path d="M10 14v3a4 4 0 008 0v-1" />
      <circle cx="18" cy="14" r="2" />
    </>
  ),
  hand: (
    <>
      <path d="M9 11V5a1.5 1.5 0 113 0v6" />
      <path d="M12 11V4a1.5 1.5 0 113 0v8" />
      <path d="M15 12V6a1.5 1.5 0 113 0v8a6 6 0 01-6 6h-1a5 5 0 01-5-5v-3a1.5 1.5 0 113 0" />
    </>
  ),
  drop: (
    <path d="M12 3s6 7 6 11a6 6 0 11-12 0c0-4 6-11 6-11z" />
  ),
  shoe: (
    <>
      <path d="M3 16h18a0 0 0 010 0v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2z" />
      <path d="M3 16c0-3 2-4 4-5l4-2 2 2 6 2c2 .5 2 3 2 3" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
    </>
  ),
  phone: (
    <path d="M5 4h3l2 5-2 1a12 12 0 006 6l1-2 5 2v3a2 2 0 01-2 2A17 17 0 013 6a2 2 0 012-2z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  "map-pin": (
    <>
      <path d="M12 21s-7-7-7-12a7 7 0 0114 0c0 5-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 3v4M16 3v4" />
    </>
  ),
  external: (
    <>
      <path d="M14 4h6v6" />
      <path d="M20 4l-9 9" />
      <path d="M19 13v5a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h5" />
    </>
  ),
  "chevron-down": <path d="M6 9l6 6 6-6" />,
  facebook: (
    <path d="M14 7h3V4h-3a4 4 0 00-4 4v2H7v3h3v8h3v-8h3l1-3h-4V8a1 1 0 011-1z" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </>
  ),
};

export default function Icon({
  name,
  ...props
}: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}

export type { IconName };
