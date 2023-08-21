import { NextResponse } from 'next/server';

const FILTER_OPTIONS = ['day', 'week', 'month', 'year'] as const;
type FilterOption = (typeof FILTER_OPTIONS)[number];

// record for a year
const BODY_RECORDS = [
  { date: '2021.06.17', weight: 78, muscle: 28 },
  { date: '2021.07.17', weight: 77, muscle: 30 },
  { date: '2021.08.17', weight: 77, muscle: 31 },
  { date: '2021.09.17', weight: 75, muscle: 31 },
  { date: '2021.10.17', weight: 75, muscle: 32 },
  { date: '2021.11.17', weight: 75, muscle: 32 },
  { date: '2021.12.17', weight: 78, muscle: 35 },
  { date: '2022.01.17', weight: 77, muscle: 35 },
  { date: '2022.02.17', weight: 75, muscle: 35 },
  { date: '2022.03.17', weight: 75, muscle: 36 },
  { date: '2022.04.17', weight: 73, muscle: 36 },
  { date: '2022.05.17', weight: 70, muscle: 36 },
];

export async function GET() {
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: BODY_RECORDS,
      });
    }, 1000);
  });
  return new NextResponse(JSON.stringify(data), { status: 200 });
}
