// components/FakeSocketListener.js
"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectEvents } from "@/store/eventsSlice";

let previousEventCount = 0;

const FakeSocketListener = () => {
  const events = useSelector(selectEvents);

  useEffect(() => {
    if (Array.isArray(events) && events.length > previousEventCount) {
      const latestEvent = events[events.length - 1];
      console.log(" تم استقبال رسالة من السوكيت الوهمي:", {
        type: "new_event",
        data: latestEvent.title,
      });

      previousEventCount = events.length;
    }
  }, [events]);

  return null;
};

export default FakeSocketListener;
