"use client";

import { useState } from "react";
import dynamic from "next/dynamic";


const EventMap = dynamic(() => import("@/components/EventMap"), { ssr: false });
const EventList = dynamic(() => import("@/components/EventList"), { ssr: false });
const FakeSocketListener = dynamic(() => import("@/components/FakeSocketListener"), { ssr: false });
const AddEventModal = dynamic(() => import("@/components/AddEventModal"), { ssr: false });
const AddEventButton = dynamic(() => import("@/components/AddEventButton"), { ssr: false });

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <FakeSocketListener />
      <section>
        <EventList />
      </section>

      <section>
        <EventMap onMapClickLocation={setSelectedLocation} />
      </section>

      <AddEventModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedLocation={selectedLocation}
      />

      <AddEventButton onClick={() => setModalOpen(true)} />
    </main>
  );
}

