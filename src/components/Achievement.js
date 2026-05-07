import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { useInView } from 'react-intersection-observer';

const Achievement = () => {
  const [animate, setAnimate] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className='relative w-full min-h-[700px] md:min-h-[950px] overflow-hidden font-oswald'
    >
      <div className='md:hidden absolute inset-0'>
        <StaticImage
          src='https://res.cloudinary.com/di4ms4xaz/image/upload/c_crop,w_360,h_620,x_720,y_60,q_100/v1777926318/dxjtvxe21rnroic8tits.jpg'
          alt='Dobitniki evropskih medalj'
          className='!absolute inset-0 w-full h-full'
          objectFit='cover'
          layout='fullWidth'
          quality={95}
          formats={['auto', 'webp', 'avif']}
          breakpoints={[480, 640, 750]}
        />
      </div>

      <div className='hidden md:block absolute inset-0'>
        <StaticImage
          src='https://res.cloudinary.com/di4ms4xaz/image/upload/q_100/v1777926318/dxjtvxe21rnroic8tits.jpg'
          alt='Dobitniki evropskih medalj'
          className='!absolute inset-0 w-full h-full'
          objectFit='cover'
          imgClassName='!object-[center_38%]'
          layout='fullWidth'
          quality={95}
          formats={['auto', 'webp', 'avif']}
          breakpoints={[480, 750, 1080]}
        />
      </div>

      <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent md:bg-gradient-to-r md:from-black/85 md:via-black/60 md:to-black/30 z-10'></div>

      <div className='relative z-20 flex items-end md:items-center min-h-[700px] md:min-h-[950px] pb-4 md:pb-0'>
        <div className='max-w-7xl mx-auto px-6 md:px-12 lg:max-w-none lg:px-12 xl:px-20 w-full'>
          <div
            className={`max-w-2xl text-text2 ${
              animate
                ? 'animate-fade-up md:animate-fade-right animate-duration-1000 animate-delay-200'
                : 'opacity-0'
            }`}
          >
            <h1 className='text-3xl md:text-5xl lg:text-6xl uppercase font-extrabold tracking-wide leading-tight'>
              Dobitniki evropskih medalj
            </h1>
            <div className='border-b-4 border-identifier w-16 mt-5'></div>
            <p className='leading-relaxed text-base md:text-lg mt-8'>
              Na mladinskem evropskem prvenstvu v karateju, ki je 7. februarja
              2025 potekalo v Bielsko-Biali na Poljskem, je naša članica Lia
              Krvina kot del slovenske reprezentance osvojila bronasto medaljo!
              Spremljal jo je tudi naš klubski in reprezentančni trener Erin
              Ćoralić.
            </p>
            <p className='leading-relaxed text-base md:text-lg mt-4'>
              V kategoriji kadetinj do 61 kg je Lia premagala tekmovalke iz
              Avstrije, Ukrajine, Turčije in Portugalske ter si z zmago proti
              Nemčiji priborila mesto na stopničkah.
            </p>
            <div className='mt-8'>
              <Link
                to='/o-nas/#ep'
                className='inline-flex items-center gap-2 text-sm text-text2 hover:text-identifier border-b-2 border-identifier pb-1 transition ease-in-out group'
              >
                PREBERI VEČ
                <FaArrowRight className='text-xs transition-transform group-hover:translate-x-1' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
