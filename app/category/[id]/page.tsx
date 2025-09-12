import { getGameFromgenres } from "@/app/api/api";
import GameCard from "@/app/components/GameCard";

export default async function GenreDetails({ params, searchParams }: { params: { id: string }, searchParams: { page?: string } }) {
  const page = Number(searchParams?.page || 1);
  const data = await getGameFromgenres(params.id);
  const games = data?.results || [];

  return (
    <main className="px-4 sm:px-6 lg:px-8 mt-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-white">Category #{params.id}</h1>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
        {games.map((game: any) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </main>
  );
}


