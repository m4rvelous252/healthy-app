import Button from '@/components/common/Button';
import { KnifeIcon } from '@/components/icon';
import ColumnThumbnail from '@/components/tmp/ColumnThumbnail';
import HexagonItem from '@/components/tmp/HexagonItem';
import MealThumbnail from '@/components/tmp/MealThumbnail';
import RecordCategory from '@/components/tmp/RecordCategory';
import { inter } from '@/helper/font';

export default function Home() {
  return (
    <main className="">
      <p className={inter.className}>Healthy </p>
      <p>自分の記録</p>
      <Button>記録をもっと見る</Button>
      <HexagonItem icon={<KnifeIcon />} label="Knife" />
      <MealThumbnail info="05.21.Morning" src="/Meal1.png" />
      <RecordCategory
        description="自分のカラダの記録"
        imgSrc="/Category1.png"
        title="body record"
      />
      <ColumnThumbnail
        date="2021.05.17"
        imgSrc="/Column1.png"
        tags={['魚料理', '和食', 'DHA']}
        time='23:25'
        title="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…"
      />
    </main>
  );
}
