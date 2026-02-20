export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-50 relative overflow-hidden">

      {/* Decorative background */}
      <div className="absolute left-0 top-32 w-40 h-40 bg-cyan-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute right-10 bottom-20 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-40" />

      <main className="relative z-10">
        {children}
      </main>

    </div>
  );
}