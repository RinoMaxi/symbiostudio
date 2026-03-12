import Image from "next/image";
import bg from "@/assets/images/symbio-backgr.png";
// app/page.tsx
export default function HomePage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src={bg}
        alt="SymbioStudio background"
        fill
        priority
        className="object-cover"
      />

      {/* Your existing hero content stays EXACTLY where it is */}
      <div className="relative z-10">
        {/* Whatever you already have in your hero goes here */}
      </div>
    </div>
  );
}


