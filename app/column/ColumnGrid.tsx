'use client';

import Button from '@/components/common/Button';
import Spinner from '@/components/common/Spinner';
import ColumnThumbnail from '@/app/column/ColumnThumbnail';
import { Column } from '@/helper/types';
import useLoadMore from '@/util/hooks/useLoadMore';

const ColumnGrid = () => {
  const {
    list: columnList,
    loading,
    handleLoadMore,
    parentRef,
    total,
  } = useLoadMore<Column>('/api/column', { pageSize: 8 });

  return (
    <div className="flex w-full flex-col items-center justify-center gap-[26px]">
      <div className="grid grid-cols-4 gap-2" ref={parentRef}>
        {columnList.map((column) => (
          <ColumnThumbnail key={column.id} {...column} />
        ))}
      </div>
      {loading ? (
        <Spinner />
      ) : (
        columnList.length < total && (
          <Button onClick={handleLoadMore} className="w-72">
            コラムをもっと見る
          </Button>
        )
      )}
    </div>
  );
};

export default ColumnGrid;
