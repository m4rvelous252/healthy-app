import { inter } from '@/helper/font';
import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';

interface RecordCategoryProps {
  title: string;
  description: string;
  imgSrc: string;
}

const RecordCategory: FC<RecordCategoryProps> = ({
  description,
  imgSrc,
  title,
}) => {
  return (
    <div className="relative w-fit bg-primary-300 p-6">
      <div className="relative h-60 w-60 bg-black">
        <Image
          fill
          className="object-cover opacity-25 mix-blend-luminosity"
          src={imgSrc}
          alt={title}
        />
      </div>
      <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-[10px]">
        <span
          className={clsx(
            inter.className,
            'w-full text-center text-2xl uppercase text-primary-300 '
          )}
        >
          {title}
        </span>
        <span className="w-fit min-w-[160px] bg-primary-400 px-2 py-1">
          {description}
        </span>
      </div>
    </div>
  );
};
export default RecordCategory;
