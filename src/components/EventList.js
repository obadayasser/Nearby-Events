"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEventsAsync, selectEvents, setSelectedEvent } from "@/store/eventsSlice";
import EventCard from "./EventCard";

const EventList = () => {
  const dispatch = useDispatch();
  const events = useSelector(selectEvents);

  useEffect(() => {
    dispatch(fetchEventsAsync());
  }, [dispatch]);

  const handleSelect = (event) => {
    dispatch(setSelectedEvent(event));
  };

  return (
    <div className="space-y-4">
      {events.map((event) => (
        <EventCard key={event.id} event={event} onSelect={handleSelect} />
      ))}
    </div>
  );
};

export default EventList;