'use client';

import Button from '@/components/common/Button';
import PageWidth from '@/components/common/PageWidth';
import Spinner from '@/components/common/Spinner';
import { CupIcon, KnifeIcon } from '@/components/icon';
import HexagonItem from '@/app/my-page/HexagonItem';
import MealThumbnail from '@/app/my-page/MealThumbnail';
import useLoadMore from '@/util/hooks/useLoadMore';
import { z } from 'zod';

const filterList = [
  {
    label: 'Morning',
    value: 'morning',
    icon: <KnifeIcon />,
  },
  {
    label: 'Lunch',
    value: 'lunch',
    icon: <KnifeIcon />,
  },
  {
    label: 'Dinner',
    value: 'dinner',
    icon: <KnifeIcon />,
  },
  {
    label: 'Snack',
    value: 'snack',
    icon: <CupIcon />,
  },
];

const MealSchema = z.object({
  src: z.string(),
  info: z.string(),
});

const MyMealList = () => {
  const {
    list: mealList,
    loading,
    handleLoadMore,
    parentRef,
    total,
  } = useLoadMore<{
    src: string;
    info: string;
  }>('/api/my-meal', { pageSize: 8 });

  return (
    <div className="w-full flex-1 bg-white pb-16 pt-6">
      <PageWidth className=" flex flex-col items-center justify-center overflow-visible">
        <div className="mb-6 grid w-full grid-cols-2 items-center justify-center gap-2 md:grid-cols-4">
          {filterList.map(({ value, ...rest }) => (
            <HexagonItem key={value} {...rest} />
          ))}
        </div>
        <div
          className="mb-7 grid w-full grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4"
          ref={parentRef}
        >
          {mealList.map((meal, index) => (
            <MealThumbnail {...meal} key={meal.src + index} />
          ))}
        </div>
        {loading ? (
          <Spinner />
        ) : (
          mealList.length < total && (
            <Button onClick={() => handleLoadMore()} className="px-20 py-3">
              記録をもっと見る
            </Button>
          )
        )}
      </PageWidth>
    </div>
  );
};

export default MyMealList;
