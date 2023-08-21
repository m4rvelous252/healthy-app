import Link from 'next/link';
import Logo from '../common/Logo';
import PageWidth from '../common/PageWidth';
import { ChallengeIcon, InfoIcon, MemoIcon } from '../icon';
import HamburgerMenu from './HamburgerMenu';

const HeaderItems = [
  {
    href: '/my-record',
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
    <header className="w-full bg-dark-500">
      <PageWidth className="flex items-center gap-4">
        <Link href={'/my-page'}>
          <Logo />
        </Link>
        <div className="flex flex-1 items-center justify-end">
          {HeaderItems.map(({ href, icon, label }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center gap-2 p-2 pr-4 text-light hover:text-primary-400"
            >
              {icon}
              <span className="hidden min-w-[96px] md:block"> {label}</span>
            </Link>
          ))}
        </div>
        <HamburgerMenu />
      </PageWidth>
    </header>
  );
};
export default Header;
