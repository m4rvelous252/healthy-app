import { inter } from '@/helper/font';
import clsx from 'clsx';
import Link from 'next/link';
import { FC } from 'react';

interface HexagonItemProps {
  label: string;
  icon: React.ReactNode;
}

const HexagonItem: FC<HexagonItemProps> = ({ icon, label }) => {
  return (
    <div className="flex h-[136px] min-w-[136px] items-center justify-center px-[10px]">
      <div className="flex h-full w-full cursor-pointer flex-col items-center justify-center bg-[url(/Hexagon.svg)] bg-center bg-no-repeat">
        {icon}
        <span className={clsx(inter.className, 'text-xl leading-6 text-white')}>
          {label}
        </span>
      </div>
    </div>
  );
};
export default HexagonItem;
