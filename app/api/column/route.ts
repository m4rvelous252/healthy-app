import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

const columnList = [
  {
    id: uuidv4(),
    imgSrc: '/column-1.jpg',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    tags: ['魚料理', '和食', 'DHA'],
    date: '2021.05.17',
    time: '23:25',
  },
  {
    id: uuidv4(),
    imgSrc: '/column-2.jpg',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    tags: ['魚料理', '和食', 'DHA'],
    date: '2021.05.17',
    time: '23:25',
  },
  {
    id: uuidv4(),
    imgSrc: '/column-3.jpg',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    tags: ['魚料理', '和食', 'DHA'],
    date: '2021.05.17',
    time: '23:25',
  },
  {
    id: uuidv4(),
    imgSrc: '/column-4.jpg',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    tags: ['魚料理', '和食', 'DHA'],
    date: '2021.05.17',
    time: '23:25',
  },
  {
    id: uuidv4(),
    imgSrc: '/column-5.jpg',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    tags: ['魚料理', '和食', 'DHA'],
    date: '2021.05.17',
    time: '23:25',
  },
  {
    id: uuidv4(),
    imgSrc: '/column-6.jpg',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    tags: ['魚料理', '和食', 'DHA'],
    date: '2021.05.17',
    time: '23:25',
  },
  {
    id: uuidv4(),
    imgSrc: '/column-7.jpg',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    tags: ['魚料理', '和食', 'DHA'],
    date: '2021.05.17',
    time: '23:25',
  },
  {
    id: uuidv4(),
    imgSrc: '/column-8.jpg',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    tags: ['魚料理', '和食', 'DHA'],
    date: '2021.05.17',
    time: '23:25',
  },
  {
    id: uuidv4(),
    imgSrc: '/column-5.jpg',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    tags: ['魚料理', '和食', 'DHA'],
    date: '2021.05.17',
    time: '23:25',
  },
  {
    id: uuidv4(),
    imgSrc: '/column-3.jpg',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    tags: ['魚料理', '和食', 'DHA'],
    date: '2021.05.17',
    time: '23:25',
  },
  {
    id: uuidv4(),
    imgSrc: '/column-8.jpg',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    tags: ['魚料理', '和食', 'DHA'],
    date: '2021.05.17',
    time: '23:25',
  },
  {
    id: uuidv4(),
    imgSrc: '/column-6.jpg',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    tags: ['魚料理', '和食', 'DHA'],
    date: '2021.05.17',
    time: '23:25',
  },
  {
    id: uuidv4(),
    imgSrc: '/column-7.jpg',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    tags: ['魚料理', '和食', 'DHA'],
    date: '2021.05.17',
    time: '23:25',
  },
  {
    id: uuidv4(),
    imgSrc: '/column-1.jpg',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    tags: ['魚料理', '和食', 'DHA'],
    date: '2021.05.17',
    time: '23:25',
  },
  {
    id: uuidv4(),
    imgSrc: '/column-4.jpg',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    tags: ['魚料理', '和食', 'DHA'],
    date: '2021.05.17',
    time: '23:25',
  },
  {
    id: uuidv4(),
    imgSrc: '/column-2.jpg',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    tags: ['魚料理', '和食', 'DHA'],
    date: '2021.05.17',
    time: '23:25',
  },
  {
    id: uuidv4(),
    imgSrc: '/column-4.jpg',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    tags: ['魚料理', '和食', 'DHA'],
    date: '2021.05.17',
    time: '23:25',
  },
  {
    id: uuidv4(),
    imgSrc: '/column-8.jpg',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    tags: ['魚料理', '和食', 'DHA'],
    date: '2021.05.17',
    time: '23:25',
  },
  {
    id: uuidv4(),
    imgSrc: '/column-5.jpg',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    tags: ['魚料理', '和食', 'DHA'],
    date: '2021.05.17',
    time: '23:25',
  },
  {
    id: uuidv4(),
    imgSrc: '/column-7.jpg',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    tags: ['魚料理', '和食', 'DHA'],
    date: '2021.05.17',
    time: '23:25',
  },
  {
    id: uuidv4(),
    imgSrc: '/column-6.jpg',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    tags: ['魚料理', '和食', 'DHA'],
    date: '2021.05.17',
    time: '23:25',
  },
  {
    id: uuidv4(),
    imgSrc: '/column-3.jpg',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    tags: ['魚料理', '和食', 'DHA'],
    date: '2021.05.17',
    time: '23:25',
  },
  {
    id: uuidv4(),
    imgSrc: '/column-2.jpg',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    tags: ['魚料理', '和食', 'DHA'],
    date: '2021.05.17',
    time: '23:25',
  },
  {
    id: uuidv4(),
    imgSrc: '/column-1.jpg',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    tags: ['魚料理', '和食', 'DHA'],
    date: '2021.05.17',
    time: '23:25',
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get('page')) || 0;
  const pageSize = Number(searchParams.get('pageSize')) || 8;
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: columnList.slice(page * pageSize, (page + 1) * pageSize),
        total: columnList.length,
      });
    }, 1000);
  });
  return new NextResponse(JSON.stringify(data), { status: 200 });
}
