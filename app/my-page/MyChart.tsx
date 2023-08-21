'use client';

import Spinner from '@/components/common/Spinner';
import { BodyRecord } from '@/helper/types';
import { useEffect, useState } from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const MyChart = () => {
  const [data, setData] = useState<BodyRecord[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch('/api/body-record');
      const { data }: { data: BodyRecord[] } = await res.json();
      setData(
        data.map((d) => ({
          ...d,
          date: new Date(d.date).getMonth() + 1 + '月',
        }))
      );
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="flex-grow bg-dark-600 pr-12 pt-3 md:pr-24">
      {loading ? (
        <div className="flex h-full w-full items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <ResponsiveContainer>
          <LineChart data={data}>
            <Line
              type="monotone"
              dataKey={'weight'}
              stroke="#FFCC21"
              strokeWidth={3}
              unit={'kg'}
            />
            <Line
              type="monotone"
              dataKey={'muscle'}
              stroke="#8FE9D0"
              strokeWidth={3}
              unit={'%'}
            />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tick={{ stroke: '#fff' }}
            />
            <YAxis tickCount={0} domain={[0, 100]} stroke="#777" />
            <CartesianGrid horizontal={false} />
            <Tooltip wrapperClassName="bg-dark-500" />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default MyChart;
