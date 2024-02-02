import Image from "next/image";
import Headers from "./components/headers/Headers";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Headers></Headers>
      <div className="flex flex-col items-center justify-center p-10">
        <div className="text-xl text-center">
          Menulis merupakan sebuah terapi. “Lepas Hari” merupakan sebuah
          platform atau tempat dimana kamu bisa menulis apapun yang terjadi,
          apapun isi hati mu, tanpa batasan, tanpa aturan, tanpa penilaian dari
          orang lain setelah menjalani harimu.
        </div>
        <button className="p-3 mt-4 border-2 border-white rounded hover:bg-slate-300">Mulai Cerita</button>
      </div>
    </main>
  );
}
