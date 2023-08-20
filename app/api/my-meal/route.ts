import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

const MealList = [
  {
    id: uuidv4(),
    src: '/l01.jpg',
    info: '05.21.Morning',
  },
  {
    id: uuidv4(),
    src: '/l02.jpg',
    info: '05.21.Morning',
  },
  {
    id: uuidv4(),
    src: '/l03.jpg',
    info: '05.21.Morning',
  },
  {
    id: uuidv4(),
    src: '/m01.jpg',
    info: '05.21.Morning',
  },
  {
    id: uuidv4(),
    src: '/m02.jpg',
    info: '05.21.Morning',
  },
  {
    id: uuidv4(),
    src: '/m03.jpg',
    info: '05.21.Morning',
  },
  {
    id: uuidv4(),
    src: '/s01.jpg',
    info: '05.21.Morning',
  },
  {
    id: uuidv4(),
    src: '/d01.jpg',
    info: '05.21.Morning',
  },
  {
    id: uuidv4(),
    src: '/d02.jpg',
    info: '05.21.Morning',
  },
  {
    id: uuidv4(),
    src: '/s01.jpg',
    info: '05.21.Morning',
  },
  {
    id: uuidv4(),
    src: '/d01.jpg',
    info: '05.21.Morning',
  },
  {
    id: uuidv4(),
    src: '/d02.jpg',
    info: '05.21.Morning',
  },
  {
    id: uuidv4(),
    src: '/s01.jpg',
    info: '05.21.Morning',
  },
  {
    id: uuidv4(),
    src: '/d01.jpg',
    info: '05.21.Morning',
  },
  {
    id: uuidv4(),
    src: '/d02.jpg',
    info: '05.21.Morning',
  },
  {
    id: uuidv4(),
    src: '/s01.jpg',
    info: '05.21.Morning',
  },
  {
    id: uuidv4(),
    src: '/d01.jpg',
    info: '05.21.Morning',
  },
  {
    id: uuidv4(),
    src: '/d02.jpg',
    info: '05.21.Morning',
  },
  {
    id: uuidv4(),
    src: '/s01.jpg',
    info: '05.21.Morning',
  },
  {
    id: uuidv4(),
    src: '/d01.jpg',
    info: '05.21.Morning',
  },
  {
    id: uuidv4(),
    src: '/d02.jpg',
    info: '05.21.Morning',
  },
  {
    id: uuidv4(),
    src: '/s01.jpg',
    info: '05.21.Morning',
  },
  {
    id: uuidv4(),
    src: '/d01.jpg',
    info: '05.21.Morning',
  },
  {
    id: uuidv4(),
    src: '/d02.jpg',
    info: '05.21.Morning',
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get('page')) || 0;
  const pageSize = Number(searchParams.get('pageSize')) || 8;
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: MealList.slice(page * pageSize, (page + 1) * pageSize),
        total: MealList.length,
      });
    }, 1000);
  });
  return new NextResponse(JSON.stringify(data), { status: 200 });
}
