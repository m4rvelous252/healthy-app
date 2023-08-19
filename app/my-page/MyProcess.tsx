import Image from 'next/image';
import React from 'react';

const MyProcess = () => {
  return (
    <div>
      <div className="relative min-w-[540px] pt-[58.51%]">
        <Image
          src={'/d01.jpg'}
          alt="my process"
          className="object-cover"
          fill
        />
      </div>
    </div>
  );
};

export default MyProcess;
