"use client";
import Image from "next/image";
import React from "react";
import type { Game } from "@/app/types";
import Link from "next/link";

const GameCard = ({ game }: { game: Game }) => {
  return (
    <Link
      href={`/games/${game.id}`}
      className="group block relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition duration-300"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-br from-fuchsia-600/0 via-rose-500/0 to-purple-600/0 group-hover:from-fuchsia-600/20 group-hover:via-rose-500/10 group-hover:to-purple-600/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

      <div className="relative aspect-[16/9] overflow-hidden">
        {game.background_image ? (
          <Image
            src={game.background_image}
            alt={game.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition duration-300 group-hover:scale-105"
            priority={false}
          />
        ) : (
          <div className="w-full h-full bg-gray-800" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      </div>

      <div className="relative p-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-white text-sm font-semibold line-clamp-1">
            {game.name}
          </h3>
          <span className="shrink-0 rounded-full bg-black/60 text-emerald-300 text-[11px] px-2 py-0.5 border border-white/10">
            ★ {game.rating?.toFixed(1) ?? "-"}
          </span>
        </div>
        {game.genres && game.genres.length > 0 ? (
          <div className="mt-1 flex flex-wrap gap-1">
            {game.genres.slice(0, 2).map((g) => (
              <span
                key={g.id}
                className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-gray-200 border border-white/10"
              >
                {g.name}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-white/20" />
    </Link>
  );
};

export default GameCard;
