"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEventAsync } from "@/store/eventsSlice";

const AddEventModal = ({ isOpen, onClose, selectedLocation }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedLocation) {
      setError("يرجى اختيار موقع على الخريطة.");
      return;
    }
    try {
      await dispatch(
        addEventAsync({
          title,
          city,
          lat: selectedLocation.lat,
          lng: selectedLocation.lng,
        })
      ).unwrap();

      onClose();
      setTitle("");
      setCity("");
      setError("");
    } catch (err) {
      console.error("فشل في إضافة الحدث:", err);
      setError("حدث خطأ أثناء إضافة الحدث.");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="modal-title"
      aria-modal="true"
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-[9999] pointer-events-none"
    >
      <div className="relative pointer-events-auto bg-white rounded-xl p-6 w-full max-w-md shadow-xl backdrop-blur-sm border border-gray-200">
        <h2 className="text-xl font-bold mb-4" id="modal-title">
          إضافة حدث جديد
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            autoFocus
            placeholder="عنوان الحدث"
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="المدينة"
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <p className="text-sm text-gray-600">
            اختر الموقع بالنقر على الخريطة (ثم أضف الحدث)
          </p>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200"
          >
            أضف
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 text-sm text-red-500 hover:underline"
        >
          إغلاق
        </button>
      </div>
    </div>
  );
};

export default AddEventModal;
