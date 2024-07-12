import React from 'react';

const Urnik = () => {
  return (
    <div className='text-white font-oswald text-center relative'>
      <div className='absolute inset-0 bg-[#13182A] opacity-75 z-0'></div>
      <div className='relative z-10'>
        <div className='flex flex-col items-center justify-center mb-10 py-10'>
          <h1 className='text-3xl font-bold text-center text-white'>URNIK</h1>
          <div className='border-b-4 border-[rgb(228,61,78)] w-12 text-center mt-5'></div>
        </div>
        <div className='flex justify-center items-center  text-xs md:text-base'>
          <table className='m-10 border-2 border-collapse'>
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
                <td className='border-2' rowSpan='1'>
                  Karate začetna
                </td>
                <td className='border-2' rowSpan='1'></td>
                <td className='border-2' rowSpan='1'>
                  Karate začetna
                </td>
                <td className='border-2' rowSpan='1'></td>
                <td className='border-2' rowSpan='1'></td>
              </tr>
              <tr>
                <td className='p-3 border-2'>15:00</td>
                <td className='border-2' rowSpan='1'>
                  Karate nadaljevalna
                </td>
                <td className='border-2'></td>
                <td className='border-2'>Karate nadaljevalna</td>
                <td className='border-2'></td>
              </tr>
              <tr>
                <td className='p-3 border-2'>16:00</td>
                <td className='border-2' rowSpan='1'>
                  Karate tekmovalna
                </td>
                <td className='border-2' rowSpan='1'></td>
                <td className='border-2' rowSpan='1'>
                  Karate tekmovalna
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
                <td className='border-2' rowSpan='1'>
                  Odrasli začetna
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
                <td className='border-2'>Odrasli začetna</td>
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
