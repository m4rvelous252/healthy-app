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
    <div className="bg-primary-300 w-fit p-6">
      <div className="relative h-60 w-60">
        <Image fill className="object-cover" src={imgSrc} alt={title} />
        <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-[10px]">
          <span
            className={clsx(
              inter.className,
              'text-primary-300 w-full text-center text-2xl uppercase '
            )}
          >
            {title}
          </span>
          <span className="bg-primary-400 w-fit min-w-[160px] px-2 py-1">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
};
export default RecordCategory;
