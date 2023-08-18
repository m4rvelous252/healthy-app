import Image from 'next/image';
import { FC } from 'react';

interface ColumnThumbnailProps {
  imgSrc: string;
  date: string;
  time: string;
  title: string;
  tags: string[];
}

const ColumnThumbnail: FC<ColumnThumbnailProps> = ({
  date,
  imgSrc,
  tags,
  time,
  title,
}) => {
  return (
    <div className='w-[234px]'>
      <div className="relative h-[234px] w-full">
        <Image fill src={imgSrc} alt={title} className="object-cover" />
        <span
          className={
            'absolute bottom-0 bg-primary-300 p-2 text-[15px] leading-[18px] tracking-[0.15px]'
          }
        >
          {date} {time}
        </span>
      </div>
      <p className='line-clamp-2 font-light'>{title}</p>
      <div className="flex gap-2 text-primary-400 text-xs leading-[22px] tracking-[0.06px]">
        {tags.map((tag) => (
          <p key={tag}>#{tag}</p>
        ))}
      </div>
    </div>
  );
};
export default ColumnThumbnail;
