import RecordCategory from '@/app/my-record/RecordCategory';
import PageWidth from '@/components/common/PageWidth';
import BodyRecord from './BodyRecord';
import MyDiary from './MyDiary';
import MyExercise from './MyExercise';

const RecordCategoryList = [
  {
    imgSrc: '/MyRecommend-1.jpg',
    title: 'body record',
    description: '自分のカラダの記録',
  },
  {
    imgSrc: '/MyRecommend-2.jpg',
    title: 'my exercise',
    description: '自分の運動の記録',
  },
  {
    imgSrc: '/MyRecommend-3.jpg',
    title: 'my diary',
    description: '自分の日記',
  },
];

const MyRecord = () => {
  return (
    <main className="w-full flex-grow bg-light pb-16 pt-14">
      <PageWidth className="flex flex-col gap-14">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] gap-12">
          {RecordCategoryList.map((category) => (
            <RecordCategory {...category} key={category.title} />
          ))}
        </div>
        <div className="flex h-80 w-full bg-dark-500">
          <BodyRecord />
        </div>
        <MyExercise />
        <div className="w-full">
          <MyDiary />
        </div>
      </PageWidth>
    </main>
  );
};
export default MyRecord;
