import Button from '@/components/common/Button';
import PageWidth from '@/components/common/PageWidth';
import ColumnThumbnail from '@/components/tmp/ColumnThumbnail';
import { inter } from '@/helper/font';
import clsx from 'clsx';

const ColumnCategoryList = [
  {
    en: 'recommended column',
    ja: 'オススメ',
  },
  {
    en: 'recommended diet',
    ja: 'ダイエット',
  },
  {
    en: 'recommended beauty',
    ja: '美容',
  },
  {
    en: 'recommended health',
    ja: '健康',
  },
];

const columnList = [
  {
    imgSrc: '/column-1.jpg',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    tags: ['魚料理', '和食', 'DHA'],
    date: '2021.05.17',
    time: '23:25',
  },
  {
    imgSrc: '/column-2.jpg',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    tags: ['魚料理', '和食', 'DHA'],
    date: '2021.05.17',
    time: '23:25',
  },
  {
    imgSrc: '/column-3.jpg',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    tags: ['魚料理', '和食', 'DHA'],
    date: '2021.05.17',
    time: '23:25',
  },
  {
    imgSrc: '/column-4.jpg',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    tags: ['魚料理', '和食', 'DHA'],
    date: '2021.05.17',
    time: '23:25',
  },
  {
    imgSrc: '/column-5.jpg',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    tags: ['魚料理', '和食', 'DHA'],
    date: '2021.05.17',
    time: '23:25',
  },
  {
    imgSrc: '/column-6.jpg',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    tags: ['魚料理', '和食', 'DHA'],
    date: '2021.05.17',
    time: '23:25',
  },
  {
    imgSrc: '/column-7.jpg',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    tags: ['魚料理', '和食', 'DHA'],
    date: '2021.05.17',
    time: '23:25',
  },
  {
    imgSrc: '/column-8.jpg',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    tags: ['魚料理', '和食', 'DHA'],
    date: '2021.05.17',
    time: '23:25',
  },
];

const ColumnPage = () => {
  return (
    <main className="flex-grow">
      <PageWidth className="flex w-full flex-col gap-14 pb-16 pt-14">
        <div className="flex w-full gap-8">
          {ColumnCategoryList.map((category, index) => (
            <div
              key={category.en + index}
              className="flex aspect-[3/2] w-full min-w-[216px] flex-col items-center justify-center gap-2 bg-dark-600 py-6"
            >
              <p
                className={clsx(
                  inter.className,
                  'w-52 text-center text-[22px] uppercase leading-7 tracking-[0.11px] text-primary-300'
                )}
              >
                {category.en}
              </p>
              <div className="h-px w-14 bg-light"></div>
              <p className="text-light">{category.ja}</p>
            </div>
          ))}
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-[26px]">
          <div className="grid grid-cols-4 gap-2">
            {columnList.map((column, index) => (
              <ColumnThumbnail key={column.title + index} {...column} />
            ))}
          </div>
          <Button className="w-72">コラムをもっと見る</Button>
        </div>
      </PageWidth>
    </main>
  );
};
export default ColumnPage;
