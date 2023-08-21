'use client';

import Spinner from '@/components/common/Spinner';
import { inter } from '@/helper/font';
import { Exercise } from '@/helper/types';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

const MyExercise = () => {
  const [exerciseList, setExerciseList] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchMyExerciseData = async () => {
      setLoading(true);
      const res = await fetch(`/api/my-exercise`);
      const {
        data,
      }: {
        data: Exercise[];
      } = await res.json();
      setExerciseList(data);
      setLoading(false);
    };
    fetchMyExerciseData();
  }, []);

  return (
    <div className="flex h-[264px] w-full flex-col gap-1 bg-dark-500 p-6 pt-4 text-light">
      <div className={clsx(inter.className, 'flex')}>
        <span
          className={clsx(
            'w-24 text-base uppercase leading-[18px] tracking-[0.15px]'
          )}
        >
          My Exercise
        </span>
        <span className="text-[22px] leading-[27px] tracking-[0.11px]">
          {new Date().toLocaleDateString()}
        </span>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <ul className="custom-scrollbar grid h-full gap-x-6 gap-y-2 overflow-y-scroll pr-2 md:grid-cols-2">
          {exerciseList.map((exercise) => (
            <li
              key={exercise.id}
              className="flex gap-2 border-b border-b-gray pb-2"
            >
              <span className="pt-2 text-[5px] font-light">● </span>
              <div className="flex-grow">
                <p className="text-base font-light leading-[22px] tracking-[0.075px]">
                  {exercise.name}
                </p>
                <p
                  className={clsx(
                    inter.className,
                    'text-base leading-[18px] tracking-[0.075px] text-primary-300'
                  )}
                >
                  {exercise.calories}kcal
                </p>
              </div>
              <p
                className={clsx(
                  inter.className,
                  'text-lg leading-[22px] tracking-[0.09px] text-primary-300'
                )}
              >
                {exercise.time}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyExercise;
