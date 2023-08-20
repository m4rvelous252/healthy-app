import PageWidth from '@/components/common/PageWidth';
import { inter } from '@/helper/font';
import clsx from 'clsx';
import ColumnGrid from './ColumnGrid';

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
const ColumnPage = async () => {
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
        <ColumnGrid />
      </PageWidth>
    </main>
  );
};
export default ColumnPage;
