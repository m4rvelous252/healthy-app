import Button from '@/components/common/Button';
import PageWidth from '@/components/common/PageWidth';
import { CupIcon, KnifeIcon } from '@/components/icon';
import HexagonItem from '@/components/tmp/HexagonItem';
import MealThumbnail from '@/components/tmp/MealThumbnail';
import React from 'react';

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

const MealList = [
  {
    src: '/l01.jpg',
    info: '05.21.Morning',
  },
  {
    src: '/l02.jpg',
    info: '05.21.Morning',
  },
  {
    src: '/l03.jpg',
    info: '05.21.Morning',
  },
  {
    src: '/m01.jpg',
    info: '05.21.Morning',
  },
  {
    src: '/m02.jpg',
    info: '05.21.Morning',
  },
  {
    src: '/m03.jpg',
    info: '05.21.Morning',
  },
  {
    src: '/s01.jpg',
    info: '05.21.Morning',
  },
  {
    src: '/d01.jpg',
    info: '05.21.Morning',
  },
  {
    src: '/d02.jpg',
    info: '05.21.Morning',
  },
];

const MyMealList = () => {
  return (
    <div className="w-full flex-1 bg-white pb-16 pt-6">
      <PageWidth className="flex flex-col items-center justify-center">
        <div className="mb-6 flex items-center justify-center gap-16">
          {filterList.map(({ value, ...rest }) => (
            <HexagonItem key={value} {...rest} />
          ))}
        </div>
        <div className="mb-7 grid w-full grid-cols-4 gap-2">
          {MealList.map((meal, index) => (
            <MealThumbnail {...meal} key={meal.src + index} />
          ))}
        </div>
        <Button className="px-20 py-3">記録をもっと見る</Button>
      </PageWidth>
    </div>
  );
};

export default MyMealList;
