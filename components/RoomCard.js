import Link from "next/link";
import { ArrowRight } from "./Icons";

export default function RoomCard({ room, featured = false }) {
  return (
    <article className={`group ${featured ? "lg:col-span-2" : ""}`}>
      <Link href={`/rooms/${room.slug}`} className="block">
        <div className={`image-frame ${featured ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
          <img
            src={room.image}
            alt={`${room.name} at Ri Thor Homestay`}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
            loading="lazy"
          />
          <div className="absolute inset-x-4 bottom-4 flex items-end justify-between">
            <span className="rounded-full bg-black/35 px-3 py-1.5 text-xs text-white backdrop-blur-md">
              Up to {room.guests} guests
            </span>
            <span className="grid size-11 place-items-center rounded-full bg-white text-black transition-transform group-hover:rotate-45">
              <ArrowRight />
            </span>
          </div>
        </div>
        <div className="mt-5 flex items-start justify-between gap-5">
          <div>
            <h3 className="font-display text-2xl">{room.name}</h3>
            <p className="mt-2 max-w-md text-sm leading-6 text-black/55">{room.short}</p>
          </div>
          <p className="whitespace-nowrap text-sm text-black/50">{room.price}</p>
        </div>
      </Link>
    </article>
  );
}