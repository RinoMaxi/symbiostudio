export default function HomePage() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/symbio-backgr.png')" }}
    >
      <div className="flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-8xl font-extrabold leading-tight tracking-wide">
          SYMBIO
        </h1>

        <p className="text-3xl font-semibold mt-4 tracking-wider">
          A SOCIAL PLACE
        </p>

        <p className="text-2xl mt-2 tracking-wider">
          WHERE HUMANS AND AI THINK TOGETHER
        </p>
      </div>
    </div>
  );
}
