import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useCallback, useEffect, useState } from 'react';

const useLoadMore = <T>(
  endpoint: string,
  options?: { pageSize: number }
) => {
  const [list, setList] = useState<T[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [parent] = useAutoAnimate();

  useEffect(() => {
    const fetchList = async () => {
      setLoading(true);
      const res = await fetch(
        `${endpoint}?page=${page}&pageSize=${options?.pageSize || 8}`
      );
      const { data, total }: { data: T[], total: number } = await res.json();
      setList(data);
      setTotal(total);
      setLoading(false);
    };
    fetchList();
  }, []);

  const handleLoadMore = useCallback(async () => {
    setLoading(true);
    const res = await fetch(
      `${endpoint}?page=${page + 1}&pageSize=${options?.pageSize || 8}`
    );
    const { data }: { data: T[] } = await res.json();
    setList((prev) => [...prev, ...data]);
    setPage((prev) => prev + 1);
    setLoading(false);
  }, [page, endpoint, options?.pageSize]);

  return { list, loading, handleLoadMore, parentRef: parent, total };
};

export default useLoadMore;
