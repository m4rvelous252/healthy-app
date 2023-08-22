import Link from 'next/link';
import Logo from '../common/Logo';
import NotificationIconWrapper from '../common/NotificationIconWrapper';
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
    notificationNumber: 10,
  },
];

const Header = () => {
  return (
    <header className="w-full bg-dark-500">
      <PageWidth className="flex items-center justify-between gap-4">
        <Link href={'/my-page'}>
          <Logo />
        </Link>
        <div className="flex items-center justify-center md:flex-1 md:justify-end">
          {HeaderItems.map(({ href, icon, label, notificationNumber }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center gap-2 p-2 text-light hover:text-primary-400 md:pr-4"
            >
              <NotificationIconWrapper notificationNumber={notificationNumber}>
                {icon}
              </NotificationIconWrapper>
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
