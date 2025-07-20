"use client";

import { useState } from "react";
import EventList from "@/components/EventList";
import EventMap from "@/components/EventMap";
import AddEventModal from "@/components/AddEventModal";
import AddEventButton from "@/components/AddEventButton";
import FakeSocketListener from "@/components/FakeSocketListener";

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
