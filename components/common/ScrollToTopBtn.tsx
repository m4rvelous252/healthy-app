'use client';

import { use, useEffect, useState } from 'react';
import { ScrollToTopIcon } from '../icon';
import clsx from 'clsx';

const ScrollToTopBtn = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);

    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  return (
    <ScrollToTopIcon
      className={clsx(
        visible ? 'block' : 'hidden',
        'fixed right-24 top-3/4 z-50 cursor-pointer'
      )}
      onClick={scrollToTop}
    />
  );
};

export default ScrollToTopBtn;
