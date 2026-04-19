// A friendly little hen, SVG. ~120x110 by default. Scales fine.
export default function ChickenIllustration({ size = 120, className = "" }) {
  return (
    <svg
      width={size}
      height={Math.round(size * 0.92)}
      viewBox="0 0 120 110"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* ground shadow */}
      <ellipse cx="60" cy="102" rx="34" ry="4" fill="#E07A3A" opacity="0.12" />
      {/* legs */}
      <path d="M47 88 v12" stroke="#8A3E15" strokeWidth="3" strokeLinecap="round" />
      <path d="M60 88 v12" stroke="#8A3E15" strokeWidth="3" strokeLinecap="round" />
      {/* feet */}
      <path d="M42 100 h10 M42 100 l4 4 M52 100 l-4 4" stroke="#8A3E15" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M55 100 h10 M55 100 l4 4 M65 100 l-4 4" stroke="#8A3E15" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* body */}
      <path
        d="M30 70 C 25 45 50 25 70 30 C 92 36 98 60 95 76 C 93 88 78 92 62 92 C 44 92 33 86 30 70 Z"
        fill="#FBF7F0"
        stroke="#2A2420"
        strokeWidth="2.2"
      />
      {/* wing */}
      <path
        d="M60 58 C 74 50 88 58 90 72 C 92 84 78 88 68 86 C 58 84 54 74 60 58 Z"
        fill="#FDE4D0"
        stroke="#2A2420"
        strokeWidth="2"
      />
      {/* wing feather lines */}
      <path d="M68 70 q6 2 12 6" stroke="#E07A3A" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <path d="M66 76 q8 1 16 4" stroke="#E07A3A" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      {/* head */}
      <circle cx="38" cy="42" r="13" fill="#FBF7F0" stroke="#2A2420" strokeWidth="2.2" />
      {/* comb */}
      <path
        d="M30 31 q2 -6 6 -6 q1 3 2 5 q3 -4 6 -3 q0 3 -1 6 Z"
        fill="#E07A3A"
        stroke="#8A3E15"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* wattle */}
      <path d="M33 52 q2 6 6 4" fill="#E07A3A" stroke="#8A3E15" strokeWidth="1.4" />
      {/* beak */}
      <path d="M26 42 l-6 2 l6 3 Z" fill="#F4C24E" stroke="#8A3E15" strokeWidth="1.4" strokeLinejoin="round" />
      {/* eye */}
      <circle cx="35" cy="40" r="1.6" fill="#2A2420" />
      <circle cx="35.5" cy="39.5" r="0.5" fill="#FFFCF7" />
    </svg>
  );
}
