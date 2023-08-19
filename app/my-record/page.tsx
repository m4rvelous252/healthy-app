import PageWidth from '@/components/common/PageWidth';
import RecordCategory from '@/components/tmp/RecordCategory';
import BodyRecord from './BodyRecord';
import MyExercise from './MyExercise';
import MyDiary from './MyDiary';

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
        <div className="flex gap-12">
          {RecordCategoryList.map((category) => (
            <RecordCategory {...category} key={category.title} />
          ))}
        </div>
        <div className="h-80 w-full bg-dark-500">
          <BodyRecord />
        </div>
        <div className="h-[264px] w-full bg-dark-500">
          <MyExercise />
        </div>
        <div className="w-full">
          <MyDiary />
        </div>
      </PageWidth>
    </main>
  );
};
export default MyRecord;
