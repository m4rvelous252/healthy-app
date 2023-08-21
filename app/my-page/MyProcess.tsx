import CircularProgress from '@/components/common/CircularProgress';
import { inter } from '@/helper/font';
import clsx from 'clsx';
import Image from 'next/image';

const MyProcess = () => {
  return (
    <div className="relative">
      <div className="relative pt-[58.51%] md:min-w-[540px]">
        <Image
          src={'/d01.jpg'}
          alt="my process"
          className="object-cover"
          fill
        />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <CircularProgress
          label={
            <span className={clsx(inter.className, 'flex items-end gap-1')}>
              <span className="text-lg leading-[22px]">05/21</span>
              <span className="text-2xl leading-[30px]">75%</span>
            </span>
          }
          value={75}
        />
      </div>
    </div>
  );
};

export default MyProcess;
