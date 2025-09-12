import React from "react";
import Hero from "../components/Hero";
import { searchGames } from "../api/api";
import GameCard from "../components/GameCard";
import type { Game } from "@/app/types";

export default async function Home() {
  const { data } = await searchGames("", 1, [], 10);
  const games = data.results;
  return (
    <main>
      <Hero />
      {games && (
        <div className="px-4 sm:px-6 lg:px-8 mt-10">
          <h2 className="text-2xl font-bold text-white mb-6">Popular Games</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {games.map((game: Game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
