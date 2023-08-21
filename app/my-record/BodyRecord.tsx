'use client';

import Spinner from '@/components/common/Spinner';
import { inter } from '@/helper/font';
import { BodyRecord } from '@/helper/types';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const CHART_OPTIONS = ['日', '週', '月', '年'] as const;

const BodyRecord = () => {
  const [data, setData] = useState<BodyRecord[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedOption, setSelectedOption] =
    useState<(typeof CHART_OPTIONS)[number]>('年');
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
    <div className="flex flex-grow flex-col bg-dark-600 py-4 pr-16">
      <span className={clsx(inter.className, 'ml-6 flex text-light')}>
        <span
          className={clsx(
            'w-24 text-base uppercase leading-[18px] tracking-[0.15px]'
          )}
        >
          Body Record
        </span>
        <span className="text-[22px] leading-[27px] tracking-[0.11px]">
          {new Date().toLocaleDateString()}
        </span>
      </span>
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
      <div className="ml-8 flex justify-start gap-4">
        {CHART_OPTIONS.map((option) => (
          <button
            key={option}
            className={clsx(
              'rounded-xl px-5 pb-1 text-base leading-[22px] tracking-[0.075px]',
              option === selectedOption
                ? 'bg-primary-300 text-light'
                : 'bg-light text-primary-300'
            )}
            onClick={() => setSelectedOption(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BodyRecord;
