"use client";

import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useSelector } from "react-redux";
import {
  selectEvents,
  selectSelectedEvent,
} from "@/store/eventsSlice";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const center = [30.0444, 31.2357];

const MapPanTo = ({ selectedEvent }) => {
  const map = useMap();

  useEffect(() => {
    if (selectedEvent) {
      map.panTo([selectedEvent.lat, selectedEvent.lng]);
    }
  }, [selectedEvent, map]);

  return null;
};
const MapClickHandler = ({ onSelectLocation }) => {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      onSelectLocation({ lat, lng });
    },
  });
  return null;
};

const EventMap = ({ onMapClickLocation }) => {
  const events = useSelector(selectEvents);
  const selectedEvent = useSelector(selectSelectedEvent);

  const [tempLocation, setTempLocation] = useState(null);

  const handleLocationSelect = (coords) => {
    setTempLocation(coords);
    onMapClickLocation?.(coords); 
  };

  return (
    <MapContainer
      center={center}
      zoom={6}
      style={{ height: "400px", width: "100%" }}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {Array.isArray(events) &&
        events.map((event) => (
          <Marker
            key={event.id}
            position={[event.lat, event.lng]}
            title={event.title}
          />
        ))}

      {tempLocation && (
        <Marker position={[tempLocation.lat, tempLocation.lng]} />
      )}

      <MapPanTo selectedEvent={selectedEvent} />
      <MapClickHandler onSelectLocation={handleLocationSelect} />
    </MapContainer>
  );
};

export default EventMap;
