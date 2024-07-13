import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Trenerji = () => {
  const [animate, setAnimate] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // When the component comes into view, set animate to true
  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  return (
    <div className='bg-[#C5C1C0] font-oswald py-10'>
      <div className='flex flex-col items-center justify-center mb-10'>
        <h1 className='text-3xl font-bold text-center text-[#0A1612]'>TRENERJI</h1>
        <div className='border-b-4 border-institute w-12 text-center mt-5'></div>
      </div>
      <div
        className='flex flex-col md:flex-row justify-center items-center'
        ref={ref}
      >
        {/*Trener 1 */}
        <div className='flex flex-col text-center justify-center items-center m-10'>
          <Link className='max-w-80' to='/trenerji/'>
            <StaticImage
              src='https://res.cloudinary.com/dbssbnuph/image/upload/f_auto,q_auto/v1/kickbox-ziri/nejc2_k2jmjg'
              alt='erin'
              className={`w-full h-full max-h-80 hover:opacity-70 transition-opacity duration-300 ease-in-out cursor-pointer ${
                animate
                  ? 'animate-fade-down animate-once animate-duration-1000 animate-delay-200'
                  : ''
              }`}
            />
          </Link>

          <div>
            <Link
              className='text-[#0A1612] text-2xl mt-10 hover:text-[#1A2930] cursor-pointer'
              to='/trenerji/'
            >
              Jernej Sever
            </Link>
            <p className='text-[#1A2930]'>
              Predsednik kluba / trener odraslih skupin
            </p>
          </div>
        </div>

        {/*Trener 2 */}
        <div className='flex flex-col text-center justify-center items-center m-10'>
          <Link className='max-w-80' to='/trenerji/'>
            <StaticImage
              src='https://res.cloudinary.com/dbssbnuph/image/upload/f_auto,q_auto/v1/kickbox-ziri/erin_pwgu7l'
              alt='erin'
              className={`w-full h-full max-h-80 hover:opacity-70 transition-opacity duration-300 ease-in-out cursor-pointer ${
                animate
                  ? 'animate-fade-down animate-once animate-duration-1000 animate-delay-200'
                  : ''
              }`}
            />
          </Link>

          <div>
            <Link
              className='text-[#0A1612] text-2xl mt-10 hover:text-[#1A2930] cursor-pointer'
              to='/trenerji/'
            >
              Erin Ćoralić
            </Link>
            <p className='text-[#1A2930]'>
            Trener otroških in tekmovalnih skupin
            </p>
          </div>
        </div>

        {/*Trener 3 */}
        <div className='flex flex-col text-center justify-center items-center m-10'>
          <Link className='max-w-80' to='/trenerji/'>
            <StaticImage
              src='https://res.cloudinary.com/dbssbnuph/image/upload/f_auto,q_auto/v1/kickbox-ziri/benjamin_p8erry'
              alt='erin'
              className={`w-full h-full max-h-80 hover:opacity-70 transition-opacity duration-300 ease-in-out cursor-pointer ${
                animate
                  ? 'animate-fade-down animate-once animate-duration-1000 animate-delay-200'
                  : ''
              }`}
            />
          </Link>

          <div>
            <Link
              className='text-[#0A1612] text-2xl mt-10 hover:text-[#1A2930] cursor-pointer'
              to='/trenerji/'
            >
              Benjamin Bajuk
            </Link>
            <p className='text-[#1A2930]'>Trener odraslih skupin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trenerji;
