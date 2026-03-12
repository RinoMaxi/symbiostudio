import BaseLayout from "./BaseLayout";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <BaseLayout>
      <main className="container mx-auto px-6 py-12">
        {children}
      </main>
    </BaseLayout>
  );
}

