export const metadata = {
  title: "Vercel India — Test Deploy",
  description: "Phase 0 pipeline test app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
