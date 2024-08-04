import React from 'react';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Urnik = () => {
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
    <div className='text-text2 font-oswald text-center relative pb-10'>
      <div className='absolute inset-0 bg-layout1 opacity-75 z-0 ' ></div>
      <div className='relative z-10'>
        <div className='flex flex-col items-center justify-center mb-10 py-10'>
          <h1 className='text-3xl font-bold text-center'>URNIK</h1>
          <div className='border-b-4 border-identifier w-12 text-center mt-5'></div>
        </div>
        <div
          className='flex justify-center items-center  text-xs md:text-base'
          ref={ref}
        >
          <table
            className={`m-10 border-2 border-collapse ${
              animate
                ? 'animate-fade-down animate-once animate-duration-1000 animate-delay-200'
                : ''
            }`}
          >
            <thead>
              <tr>
                <th className='p-3 md:px-16 border-2'> </th>
                <th className='p-3 md:px-16 border-2'>PON</th>
                <th className='p-3 md:px-16 border-2'>TOR</th>
                <th className='p-3 md:px-16 border-2'>SRE</th>
                <th className='p-3 md:px-16 border-2'>ČET</th>
                <th className='p-3 md:px-16 border-2'>PET</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='p-3 border-2'>14:00</td>
                <td
                  className='border-2 bg-[#fda92a] hover:brightness-75 transition-all duration-300 ease-in-out'
                  rowSpan='1'
                >
                  <p className='font-bold my-2'>Karate začetna</p>
                  <p className='my-1'>14:00 - 15:00</p>
                  <p className='text-sm my-2'>Erin Ćoralić</p>
                </td>
                <td className='border-2' rowSpan='1'></td>
                <td
                  className='border-2 bg-[#fda92a] hover:brightness-75 transition-all duration-300 ease-in-out'
                  rowSpan='1'
                >
                  <p className='font-bold my-2'>Karate začetna</p>
                  <p className='my-1'>14:00 - 15:00</p>
                  <p className='text-sm my-2'>Erin Ćoralić</p>
                </td>
                <td className='border-2' rowSpan='1'></td>
                <td className='border-2' rowSpan='1'></td>
              </tr>
              <tr>
                <td className='p-3 border-2'>15:00</td>
                <td
                  className='border-2 bg-[#f72f2f] hover:brightness-75 transition-all duration-300 ease-in-out'
                  rowSpan='1'
                >
                  <p className='font-bold my-2'>Karate nadaljevalna</p>
                  <p className='my-1'>15:00 - 16:00</p>
                  <p className='text-sm my-2'>Erin Ćoralić</p>
                </td>
                <td className='border-2'></td>
                <td
                  className='border-2 bg-[#f72f2f] hover:brightness-75 transition-all duration-300 ease-in-out'
                  rowSpan='1'
                >
                  <p className='font-bold my-2'>Karate nadaljevalna</p>
                  <p className='my-1'>15:00 - 16:00</p>
                  <p className='text-sm my-2'>Erin Ćoralić</p>
                </td>
                <td className='border-2'></td>
              </tr>
              <tr>
                <td className='p-3 border-2'>16:00</td>
                <td
                  className='border-2 bg-[#0d810d] hover:brightness-75 transition-all duration-300 ease-in-out'
                  rowSpan='1'
                >
                  <p className='font-bold my-2'>Karate tekmovalna</p>
                  <p className='my-1'>16:00 - 17:00</p>
                  <p className='text-sm my-2'>Erin Ćoralić</p>
                </td>
                <td className='border-2' rowSpan='1'></td>
                <td
                  className='border-2 bg-[#0d810d] hover:brightness-75 transition-all duration-300 ease-in-out'
                  rowSpan='1'
                >
                  <p className='font-bold my-2'>Karate tekmovalna</p>
                  <p className='my-1'>16:00 - 17:00</p>
                  <p className='text-sm my-2'>Erin Ćoralić</p>
                </td>
                <td className='border-2' rowSpan='1'></td>
                <td className='border-2' rowSpan='1'></td>
              </tr>
              <tr>
                <td className='p-3 border-2'>17:00</td>
                <td className='border-2'></td>
                <td className='border-2'></td>
                <td className='border-2'></td>
                <td className='border-2'></td>
                <td className='border-2'></td>
              </tr>
              <tr>
                <td className='p-3 border-2'>18:00</td>
                <td className='border-2'></td>
                <td className='border-2'></td>
                <td className='border-2'></td>
                <td className='border-2'></td>
                <td className='border-2'></td>
              </tr>
              <tr>
                <td className='p-3 border-2'>19:30</td>
                <td className='border-2' rowSpan='1'></td>
                <td
                  className='border-2 bg-[#0d6a81] hover:brightness-75 transition-all duration-300 ease-in-out'
                  rowSpan='1'
                >
                  <p className='font-bold my-2'>Karate odrasli</p>
                  <p className='my-1'>19:30 - 20:30</p>
                  <p className='text-sm my-2'>Benjamin Bajuk</p>
                </td>
                <td className='border-2' rowSpan='1'></td>
                <td className='border-2' rowSpan='1'></td>
                <td className='border-2' rowSpan='1'></td>
              </tr>
              <tr>
                <td className='p-3 border-2'>20:00</td>
                <td className='border-2'></td>
                <td className='border-2'></td>
                <td className='border-2'></td>
                <td
                  className='border-2 bg-[#0d6a81] hover:brightness-75 transition-all duration-300 ease-in-out'
                  rowSpan='1'
                >
                  <p className='font-bold my-2'>Karate odrasli</p>
                  <p className='my-1'>20:00 - 21:00</p>
                  <p className='text-sm my-2'>Jernej Sever</p>
                </td>
                <td className='border-2'></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Urnik;
