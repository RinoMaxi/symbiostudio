export default function CommonsItemPage({ params }: { params: { id: string } }) {
  return (
    <main className="w-full min-h-screen px-6 py-16">
      <h1 className="text-3xl mb-8">Commons Item</h1>
      <p>Item ID: {params.id}</p>
      <p>Loading item details...</p>
    </main>
  );
}