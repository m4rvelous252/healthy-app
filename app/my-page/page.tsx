import MyChart from './MyChart';
import MyMealList from './MyMealList';
import MyProcess from './MyProcess';

const MyPage = async () => {
  return (
    <main className="flex flex-grow flex-col items-center justify-center">
      <div className="flex w-full lg:max-w-screen-2xl">
        <MyProcess />
        <MyChart />
      </div>
      <MyMealList />
    </main>
  );
};
export default MyPage;
