export default function Home() {
  return (
    <main
      style={{
        fontFamily: "system-ui, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#FAFAFA",
        color: "#171717",
        textAlign: "center",
        padding: "24px",
      }}
    >
      <h1 style={{ fontSize: "32px", letterSpacing: "-1.28px", marginBottom: "8px" }}>
        🚀 It's live
      </h1>
      <p style={{ fontSize: "16px", color: "#4D4D4D", marginBottom: "24px" }}>
        This static site was deployed through the Phase 0 pipeline.
      </p>
      <code
        style={{
          fontSize: "13px",
          background: "#F2F2F2",
          padding: "8px 16px",
          borderRadius: "6px",
        }}
      >
        Build time: {new Date().toISOString()}
      </code>
    </main>
  );
}
