"use client";

import React from "react";

const EventCard = ({ event, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(event)}
      className="bg-white rounded-2xl shadow p-4 cursor-pointer hover:border-blue-500 border transition mb-4"
    >
      <h2 className="text-xl font-bold text-gray-800 mb-1">{event.title}</h2>
      <p className="text-gray-500">{event.city}</p>
      <button className="mt-2 px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
        تفاصيل
      </button>
    </div>
  );
};

export default EventCard;