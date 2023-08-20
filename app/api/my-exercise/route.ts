import { v4 as uuidv4 } from 'uuid';

const ExerciseList = new Array(19).fill({
  id: uuidv4(),
  name: '家事全般（立位・軽い）',
  calories: 26,
  time: '10 min',
  createdAt: new Date(),
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get('page'));
  const pageSize = Number(searchParams.get('pageSize'));
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data:
          page && pageSize
            ? ExerciseList.slice(page * pageSize, (page + 1) * pageSize)
            : ExerciseList,
        total: ExerciseList.length,
      });
    }, 1000);
  });
  return new Response(JSON.stringify(data), { status: 200 });
}
