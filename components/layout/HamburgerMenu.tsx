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
  }
]

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      {open ? (
        <CloseIcon className='cursor-pointer' onClick={() => setOpen(false)} />
      ) : (
        <MenuIcon className='cursor-pointer' onClick={() => setOpen(true)} />
      )}
      {open && <div className="absolute grid right-0">
        {menuItems.map(({label, href}) => (
          <Link onClick={() => setOpen(false)} className='py-[23px] px-8 min-w-[280px] bg-gray border-y border-t-light/[0.15] border-b-dark-600/25' key={label} href={href}>{label}</Link>
        ))}
      </div> } 
    </div>
  );
};
export default HamburgerMenu;
