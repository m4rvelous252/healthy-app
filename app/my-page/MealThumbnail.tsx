import { inter } from '@/helper/font';
import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';

interface MealThumbnailProps {
  src: string;
  info: string;
}

const MealThumbnail: FC<MealThumbnailProps> = ({ info, src }) => {
  return (
    <div className="relative min-w-[234px] pt-[100%]">
      <Image fill src={src} alt={info} className="object-cover" />
      <span
        className={clsx(
          inter.className,
          'absolute bottom-0 bg-primary-300 p-2 text-[15px] leading-[18px] tracking-[0.15px] text-light'
        )}
      >
        {info}
      </span>
    </div>
  );
};
export default MealThumbnail;
