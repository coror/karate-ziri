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
    <div className='bg-layout2 font-oswald py-8'>
      <div
        className={`transition-opacity duration-2000 transform ${
          animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
        ref={ref}
      >
        <div
          className={`flex flex-col items-center justify-center mb-10 pt-10 ${
            animate
              ? 'animate-fade-right animate-duration-1000 animate-delay-200 animate-ease-in-out'
              : ''
          } `}
        >
          <h1 className='text-3xl font-bold text-center text-text2'>
            TRENERJI
          </h1>
          <div className='border-b-4 border-identifier w-12 text-center mt-5'></div>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center'>
          {/*Trener 1 */}
          <div
            className={`flex flex-col text-center justify-center items-center m-8 lg:mx-8 ${
              animate
                ? 'animate-fade-right animate-once animate-duration-1000 animate-delay-1000'
                : ''
            }`}
          >
            <Link className='max-w-80' to='/trenerji/#jernej'>
              <StaticImage
                src='https://res.cloudinary.com/dbssbnuph/image/upload/t_benjamin4/v1720821140/kickbox-ziri/DSC_1393-Edit_kufse2'
                alt='jernej'
                className='rounded-full w-full h-full max-h-80 hover:brightness-75 transition-all duration-300 ease-in-out cursor-pointer'
              />
            </Link>

            <div className='mt-6'>
              <Link
                className='text-text1 text-2xl mt-10 hover:text-layout1 cursor-pointer'
                to='/trenerji/#jernej'
              >
                Jernej Sever
              </Link>
              <p className='text-layout1'>
                Vodja karate instituta / trener odraslih skupin
              </p>
            </div>
          </div>

          {/*Trener 2 */}
          <div
            className={`flex flex-col text-center justify-center items-center m-8 lg:mx-8 ${
              animate
                ? 'animate-fade-right animate-once animate-duration-1000 animate-delay-1000'
                : ''
            }`}
          >
            <Link className='max-w-80' to='/trenerji/#erin'>
              <StaticImage
                src='https://res.cloudinary.com/dbssbnuph/image/upload/f_auto,q_auto/v1/kickbox-ziri/DSC_1399-Edit_kw7z9t'
                alt='erin'
                className='rounded-full w-full h-full max-h-80 hover:brightness-75 transition-all duration-300 ease-in-out cursor-pointer'
              />
            </Link>

            <div className='mt-6'>
              <Link
                className='text-text1 text-2xl mt-10 hover:text-layout1 cursor-pointer'
                to='/trenerji/#erin'
              >
                Erin Ćoralić
              </Link>
              <p className='text-layout1'>
                Trener otroških in tekmovalnih skupin
              </p>
            </div>
          </div>

          {/*Trener 3 */}
          <div
            className={`flex flex-col text-center justify-center items-center m-8 lg:mx-8 ${
              animate
                ? 'animate-fade-right animate-once animate-duration-1000 animate-delay-1000'
                : ''
            }`}
          >
            <Link className='max-w-80' to='/trenerji/#benjamin'>
              <StaticImage
                src='https://res.cloudinary.com/dbssbnuph/image/upload/t_benjamin4/v1720820700/kickbox-ziri/DSC_1407-Edit_cefzx1'
                alt='benjamin'
                className='rounded-full w-full h-full max-h-80 hover:brightness-75 transition-all duration-300 ease-in-out cursor-pointer'
              />
            </Link>

            <div className='mt-6'>
              <Link
                className='text-text1 text-2xl mt-10 hover:text-layout1 cursor-pointer'
                to='/trenerji/#benjamin'
              >
                Benjamin Bajuk
              </Link>
              <p className='text-layout1'>Trener odraslih skupin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trenerji;
