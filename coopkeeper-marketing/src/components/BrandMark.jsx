export default function BrandMark({ size = 36, className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex items-center justify-center rounded-xl2 text-white shadow-card ${className}`}
      style={{
        width: size,
        height: size,
        background: "linear-gradient(135deg, #F5B37C 0%, #E07A3A 100%)",
      }}
    >
      <svg
        viewBox="0 0 32 32"
        width={Math.round(size * 0.62)}
        height={Math.round(size * 0.62)}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 4c5 0 9 3.7 9 8.4 0 2.5-1.1 4.8-3 6.4.6 1.1 1.9 2 3.3 2.4.6.1.5 1 0 1.1-2.9.6-6.3.3-8.7-1.6-.2-.2-.5-.2-.8-.2-5.8 0-9-3.6-9-8.1C6.8 7.7 11 4 16 4Z"
          fill="currentColor"
        />
        <circle cx="20" cy="11" r="1.4" fill="#fffaf3" />
      </svg>
    </span>
  );
}
