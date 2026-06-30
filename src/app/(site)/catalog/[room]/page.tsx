import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { allRoomsQuery, productsByRoomQuery } from "@/sanity/lib/queries";
import RoomClient from "./RoomClient";

export const revalidate = 60;

type Room = {
  _id: string;
  name: string;
  slug: string;
};

export default async function RoomPage({ params }: { params: Promise<{ room: string }> }) {
  const resolvedParams = await params;
  const roomId = resolvedParams.room;
  
  const rooms = await client.fetch<Room[]>(allRoomsQuery);
  const room = rooms.find(r => r.slug === roomId);
  
  if (!room) {
    return notFound();
  }

  const roomProducts = await client.fetch(productsByRoomQuery, { roomSlug: roomId });

  return (
    <RoomClient room={room} products={roomProducts} />
  );
}
