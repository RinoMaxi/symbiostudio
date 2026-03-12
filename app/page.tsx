import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center text-white">
      <Image
        src="/symbio-backgr.png"
        alt="background"
        fill
        className="object-cover"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">SymbioStudio</h1>
        <p className="text-xl opacity-90">
          Where creativity and structure meet.
        </p>
      </div>
    </div>
  );
}



