import Link from 'next/link';
import Logo from '../common/Logo';
import PageWidth from '../common/PageWidth';
import { ChallengeIcon, InfoIcon, MemoIcon } from '../icon';
import HamburgerMenu from './HamburgerMenu';

const HeaderItems = [
  {
    href: '/my-page',
    icon: <MemoIcon />,
    label: '自分の記録',
  },
  {
    href: '#',
    icon: <ChallengeIcon />,
    label: 'チャレンジ',
  },
  {
    href: '#',
    icon: <InfoIcon />,
    label: 'お知らせ',
  },
];

const Header = () => {
  return (
    <div className="w-full bg-dark-500">
      <PageWidth rootTag="header" className="flex items-center gap-4">
        <Link href={'/'}>
          <Logo />
        </Link>
        <div className="flex flex-1 items-center justify-end">
          {HeaderItems.map(({ href, icon, label }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center gap-2 p-2 pr-4 hover:text-primary-400"
            >
              {icon}
              <span className="min-w-[96px]"> {label}</span>
            </Link>
          ))}
        </div>
        <HamburgerMenu />
      </PageWidth>
    </div>
  );
};
export default Header;
