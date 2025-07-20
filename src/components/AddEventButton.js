
"use client";

import React from "react";

const AddEventButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg text-lg"
    >
      + أضف حدث
    </button>
  );
};

export default AddEventButton;
