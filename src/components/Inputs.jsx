
import React from 'react';

function Inputs({ setUnits }) {
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-full items-center justify-center space-x-4">
        <div className="flex flex-row w-full items-center justify-center">
          <button
            className="text-2xl font-medium text-white transition ease-out hover:scale-125"
            onClick={() => setUnits("metric")}
          >
            °C
          </button>
          <p className="text-2xl font-medium text-white mx-1">|</p>
          <button
            className="text-2xl font-medium text-white transition ease-out hover:scale-125"
            onClick={() => setUnits("imperial")}
          >
            °F
          </button>
        </div>
      </div>
    </div>
  );
}

export default Inputs;
