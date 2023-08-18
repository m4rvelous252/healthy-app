import Link from 'next/link';
import PageWidth from '../common/PageWidth';

const FooterItems = [
  {
    href: '#',
    label: '会員登録',
  },
  {
    href: '#',
    label: '運営会社',
  },
  {
    href: '#',
    label: '利用規約',
  },
  {
    href: '#',
    label: '個人情報の取扱について',
  },
  {
    href: '#',
    label: '特定商取引法に基づく表記',
  },
  {
    href: '#',
    label: 'お問い合わせ',
  },
];

const Footer = () => {
  return (
    <div className="w-full bg-dark-500">
      <PageWidth className="flex py-14 justify-between">
        {FooterItems.map(({ href, label }) => (
          <Link key={label} href={href}>{label}</Link>
        ))}
      </PageWidth>
    </div>
  );
};
export default Footer;
