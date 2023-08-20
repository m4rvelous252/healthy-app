import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

const DiaryEntries = new Array(19).fill({}).map((_, index) => ({
  id: uuidv4(),
  title: 'My first diary entry',
  content:
    index +
    '私の日記の記録が一部表示されます。  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  createdAt: new Date(),
}));

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get('page')) || 0;
  const pageSize = Number(searchParams.get('pageSize')) || 8;
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: DiaryEntries.slice(page * pageSize, (page + 1) * pageSize),
        total: DiaryEntries.length,
      });
    }, 1000);
  });
  return new NextResponse(JSON.stringify(data), { status: 200 });
}
