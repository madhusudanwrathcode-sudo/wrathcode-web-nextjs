"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background: "#090908",
          color: "#f3efe6",
          fontFamily: "Georgia, serif",
          padding: "2rem",
        }}
      >
        <div style={{ maxWidth: "36rem" }}>
          <p style={{ letterSpacing: "0.18em", textTransform: "uppercase", color: "#e2b15a" }}>
            Wrathcode
          </p>
          <h1 style={{ fontSize: "2.5rem", lineHeight: 1.1 }}>The site hit a fault.</h1>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: "1.5rem",
              background: "#ff4d1c",
              color: "#090908",
              border: 0,
              padding: "0.7rem 1rem",
              font: "inherit",
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
