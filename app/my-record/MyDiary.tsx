'use client';

import Button from '@/components/common/Button';
import Spinner from '@/components/common/Spinner';
import { DiaryEntries } from '@/helper/types';
import useLoadMore from '@/util/hooks/useLoadMore';

const MyDiary = () => {
  const {
    list: myDiaryList,
    handleLoadMore,
    loading,
    parentRef,
    total
  } = useLoadMore<DiaryEntries>('/api/my-diary', { pageSize: 10 });

  return (
    <div className="flex w-full flex-col items-center gap-[30px]">
      <div
        className="grid w-full grid-cols-[repeat(auto-fit,_minmax(231px,_1fr))] gap-3"
        ref={parentRef}
      >
        {myDiaryList.map((diary) => (
          <div
            key={diary.id}
            className="aspect-square w-full min-w-[231px] border-2 border-gray p-4"
          >
            <p>{new Date(diary.createdAt).toLocaleDateString()}</p>
            <p>{new Date(diary.createdAt).toLocaleTimeString()}</p>
            <p className="mt-2 line-clamp-6">{diary.content}</p>
          </div>
        ))}
      </div>
      {loading ? (
        <Spinner />
      ) : (
        myDiaryList.length < total && (
          <Button onClick={handleLoadMore}>自分の日記をもっと見る</Button>
        )
      )}
    </div>
  );
};

export default MyDiary;
