import Link from "next/link";
import Image from "next/image";
import { getGenres } from "@/app/api/api";

export default async function CategoriesPage() {
  const data = await getGenres();
  const genres = data?.results || [];

  return (
    <main className="px-3 sm:px-6 lg:px-8 mt-8 sm:mt-10">
      <h1 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Categories</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
        {genres.map((g: { id: number; name: string; image_background?: string; games_count?: number }) => (
          <Link key={g.id} href={`/category/${g.id}`} className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition">
            <div className="relative aspect-[16/9]">
              {g.image_background ? (
                <Image src={g.image_background} alt={g.name} fill sizes="(max-width:768px) 100vw, 20vw" className="object-cover group-hover:scale-105 transition" />
              ) : (
                <div className="w-full h-full bg-white/5" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent" />
            </div>
            <div className="absolute bottom-2 sm:bottom-3 left-2 right-2 sm:left-3 sm:right-3 flex items-center justify-between">
              <div className="text-white text-sm sm:text-base font-medium">{g.name}</div>
              {typeof g.games_count === 'number' ? (
                <span className="text-[10px] sm:text-[11px] text-gray-200 bg-black/60 px-2 py-0.5 rounded-full border border-white/10">{g.games_count}</span>
              ) : null}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}


