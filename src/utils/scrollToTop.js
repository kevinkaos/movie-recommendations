import { useEffect } from 'react';

const ScrollToTop = () => {
  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } catch (_) {
      window.scrollTo(0, 0);
    }
  });

  return null;
};

export default ScrollToTop;
