import CounterWithZustand from '@/components/CounterWithZustand';

export default function Zustand() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-r from-indigo-600 to-pink-500 p-8 space-y-12">
      <div className="flex flex-col items-center justify-center p-10 bg-white shadow-xl rounded-lg transform transition duration-500 hover:scale-105">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Zustand Counter</h1>
        <CounterWithZustand />
      </div>
    </main>
  );
}
