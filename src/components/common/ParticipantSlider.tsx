import React, { useState } from 'react';

const ParticipantSlider = () => {
  const [participants, setParticipants] = useState(0);
  const maxParticipants = 6;

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParticipants(Number(event.target.value));
  };

  const calculateSlider = () => {
    const percentage = (participants / maxParticipants) * 100;
    return `linear-gradient(to right, #0073FF ${percentage}%, #78788029 ${percentage}%)`;
  };

  return (
    <div className='w-full text-center'>
      <div className='w-full bg-[#FAFAFA] border rounded-[10px] py-3'>
        <input
          id='maxCapacity'
          type='range'
          min={0}
          max={maxParticipants}
          value={participants}
          onChange={handleSliderChange}
          style={{
            background: calculateSlider(),
          }}
          className='w-[340px] h-[4px] rounded-[5px] outline-none appearance-none transition duration-300 my-5 mx-auto'
        />
        <div className='flex justify-between text-[#7B7D83] text-sm mx-6'>
          <p>{participants}명</p>
          <p>{maxParticipants}명</p>
        </div>
      </div>
    </div>
  );
};

export default ParticipantSlider;
