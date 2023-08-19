'use client';

import { useState } from 'react';
import { CloseIcon, MenuIcon } from '../icon';
import Link from 'next/link';

const menuItems = [
  {
    href: '#',
    label: '自分の記録',
  },
  {
    href: '#',
    label: '体重グラフ',
  },
  {
    href: '#',
    label: '目標',
  },
  {
    href: '#',
    label: '選択中のコース',
  },
  {
    href: '/column',
    label: 'コラム一覧',
  },
  {
    href: '#',
    label: '設定',
  },
];

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      {open ? (
        <CloseIcon className="cursor-pointer" onClick={() => setOpen(false)} />
      ) : (
        <MenuIcon className="cursor-pointer" onClick={() => setOpen(true)} />
      )}
      {open && (
        <div className="absolute right-0 z-10 grid">
          {menuItems.map(({ label, href }) => (
            <Link
              onClick={() => setOpen(false)}
              className="min-w-[280px] border-y border-b-dark-600/25 border-t-light/[0.15] bg-gray px-8 py-[23px] text-light"
              key={label}
              href={href}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
export default HamburgerMenu;
