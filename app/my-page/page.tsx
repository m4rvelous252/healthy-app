import MyChart from './MyChart';
import MyMealList from './MyMealList';
import MyProcess from './MyProcess';

const MyPage = () => {
  return (
    <main className="flex flex-grow flex-col items-center justify-center">
      {/* Overview */}
      <div className="flex w-full lg:max-w-screen-2xl">
        <MyProcess />
        <MyChart />
      </div>
      {/* Filter */}
      <MyMealList />
    </main>
  );
};
export default MyPage;
