import Header from "@/components/layout/Header";

export default function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      {children}
    </div>
  );
}

