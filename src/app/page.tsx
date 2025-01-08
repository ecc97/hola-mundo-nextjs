
const greeting = (): string => {
  return 'Hola Mundo';
}

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-7xl text-center text-white font-bold text-shadow-glow">
        {greeting()}
      </h1>
    </div>
  );
}
