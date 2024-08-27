import React from 'react';

function TopButton({ setQuery, isSnowboarding }) {
  const bikingPlaces = [
    { id: 1, name: 'Heritage', location: 'Slinger, US' },
    { id: 2, name: 'Camrock', location: 'Lake Ripley, US' },
    { id: 3, name: 'Palos', location: 'Palos hills, US' },
    { id: 4, name: 'Far Side Park', location: 'Shawondasse, US' },
    { id: 5, name: 'Silver Lake', location: 'Camp Lake, US' },
  ];

  const snowboardingPlaces = [
    { id: 1, name: 'Cascade Mountain', location: 'Dekorra, US' },
    { id: 2, name: 'Alpine Valley', location: 'East Troy, US' },
    { id: 3, name: 'Chestnut Mountain', location: 'Shawondasse, US' },
    { id: 4, name: 'Wilmot', location: 'Camp Lake, US' },
    { id: 5, name: 'Granite Peak', location: 'Wausau, US' },
  ];

  const places = isSnowboarding ? snowboardingPlaces : bikingPlaces;

  return (
    <div className="flex item-center justify-around my-6">
      {places.map((place) => (
        <button
          key={place.id}
          className="text-white text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in"
          onClick={() => setQuery({ q: place.location })}
        >
          {place.name}
        </button>
      ))}
    </div>
  );
}

export default TopButton;
