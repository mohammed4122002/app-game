import Image from "next/image";
import { notFound } from "next/navigation";
import { getGame } from "@/app/api/api";

export default async function GameDetails({ params }: { params: { id: string } }) {
  const { id } = params;
  const { data, screenshots, similar } = await getGame(id);

  if (!data || data.detail === "Not found.") return notFound();

  const cover = data.background_image || data.background_image_additional;

  return (
    <main className="px-3 sm:px-6 lg:px-8 mt-8 sm:mt-10">
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="lg:col-span-2">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-white/10">
            {cover ? (
              <Image
                src={cover}
                alt={data.name}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full bg-white/5" />)
            }
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3">
              <h1 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold line-clamp-2 pr-2">{data.name}</h1>
              <span className="shrink-0 rounded-full bg-black/60 text-emerald-300 text-[11px] sm:text-xs px-2 sm:px-3 py-1 border border-white/10">
                ★ {Number(data.rating || 0).toFixed(1)}
              </span>
            </div>
          </div>

          {screenshots?.results?.length ? (
            <div className="mt-4 sm:mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
              {screenshots.results.slice(0, 6).map((s: any) => (
                <div key={s.id} className="relative aspect-[16/9] overflow-hidden rounded-xl ring-1 ring-white/10">
                  <Image src={s.image} alt={data.name} fill sizes="33vw" className="object-cover" />
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <aside className="lg:col-span-1 space-y-3 sm:space-y-4">
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-3 sm:p-4">
            <h2 className="text-white font-semibold mb-3">Overview</h2>
            <div className="text-sm text-gray-200 space-y-2">
              {data.released ? (
                <div className="flex items-center justify-between"><span className="text-gray-400">Release</span><span>{data.released}</span></div>
              ) : null}
              {data.metacritic ? (
                <div className="flex items-center justify-between"><span className="text-gray-400">Metacritic</span><span className="text-yellow-300">{data.metacritic}</span></div>
              ) : null}
              {data.playtime ? (
                <div className="flex items-center justify-between"><span className="text-gray-400">Playtime</span><span>{data.playtime}h</span></div>
              ) : null}
            </div>
            {data.parent_platforms?.length ? (
              <div className="mt-3">
                <div className="text-gray-400 text-sm mb-1">Platforms</div>
                <div className="flex flex-wrap gap-2">
                  {data.parent_platforms.map((p: any) => (
                    <span key={p.platform.id} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-gray-200 border border-white/10">
                      {p.platform.name}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
            {data.genres?.length ? (
              <div className="mt-3">
                <div className="text-gray-400 text-sm mb-1">Genres</div>
                <div className="flex flex-wrap gap-2">
                  {data.genres.map((g: any) => (
                    <span key={g.id} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-gray-200 border border-white/10">
                      {g.name}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          {similar?.results?.length ? (
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-3 sm:p-4">
              <h2 className="text-white font-semibold mb-3">Similar games</h2>
              <div className="space-y-3">
                {similar.results.slice(0, 6).map((g: any) => (
                  <div key={g.id} className="flex items-center gap-3">
                    <div className="relative w-16 h-10 overflow-hidden rounded-md ring-1 ring-white/10">
                      {g.background_image ? (
                        <Image src={g.background_image} alt={g.name} fill sizes="64px" className="object-cover" />
                      ) : null}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-white line-clamp-1">{g.name}</div>
                      <div className="text-[11px] text-gray-400">★ {Number(g.rating || 0).toFixed(1)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </aside>
      </section>

      {data.description_raw ? (
        <section className="mt-6 sm:mt-8 rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 sm:p-5">
          <h2 className="text-white font-semibold mb-3">About</h2>
          <p className="text-gray-200 text-sm leading-6 whitespace-pre-line">{data.description_raw}</p>
        </section>
      ) : null}
    </main>
  );
}


