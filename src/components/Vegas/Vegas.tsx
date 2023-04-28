import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Vegas: FC = () => {
  const router = useRouter();
  const [state, setState] = useState({
    heroHeight: router.pathname === '/' ? 730 : 480,
  });

  useEffect(() => {
    setHeroHeight();
    window.addEventListener('resize', setHeroHeight, { passive: true });

    jQuery('.vegas_bg').vegas({
      timer: false,
      animation: 'kenburns',
      delay: 12500,
      transition: 'fade',
      slides: [{ src: '/images/slider-img/img1.jpg' }, { src: '/images/slider-img/img2.jpg' }],
    });
  }, []);

  useEffect(() => {
    setHeroHeight();
  }, [router.pathname]);

  const setHeroHeight = () => {
    const bodyWidth = (document.getElementById('portfolio-body') as HTMLDivElement).offsetWidth;

    if (router.pathname === '/') {
      if (bodyWidth >= 751) {
        setState({
          heroHeight: 730,
        });
      } else {
        setState({
          heroHeight: 480,
        });
      }
    } else {
      if (bodyWidth >= 751) {
        setState({
          heroHeight: 440,
        });
      } else {
        setState({
          heroHeight: 360,
        });
      }
    }
  };

  return (
    <div
      className={`site-hero vegas_bg ${
        [360, 440, 480].includes(state.heroHeight) ? 'with-margin-top' : ''
      }`}
      style={{ height: state.heroHeight }}
    >
      <div className="site-hero__title-box">
        <h1 className="h1">WEB-development</h1>
        <h2 className="h2">Professional Full-Stack engineering with NodeJS and React</h2>
      </div>
    </div>
  );
};

export default Vegas;
