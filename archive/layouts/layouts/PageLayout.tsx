import BaseLayout from "./BaseLayout";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <BaseLayout>
      <main className="pt-24 container mx-auto px-6 py-12">
        {children}
      </main>
    </BaseLayout>
  );
}


