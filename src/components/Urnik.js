import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const beginner = 'border-l-amber-400';
const intermediate = 'border-l-rose-400';
const competitive = 'border-l-emerald-400';
const adults = 'border-l-sky-400';

const days = ['PON', 'TOR', 'SRE', 'ČET', 'PET'];

const sessions = [
  { day: 'PON', label: 'Karate začetna', time: '14:15 - 15:00', trainer: 'Erin Ćoralić', color: beginner },
  { day: 'PON', label: 'Karate nadaljevalna', time: '15:00 - 16:00', trainer: 'Erin Ćoralić', color: intermediate },
  { day: 'PON', label: 'Karate tekmovalna', time: '16:00 - 17:00', trainer: 'Erin Ćoralić', color: competitive },
  { day: 'TOR', label: 'Karate odrasli', time: '19:30 - 20:30', trainer: 'Benjamin Bajuk', color: adults },
  { day: 'SRE', label: 'Karate začetna', time: '14:15 - 15:00', trainer: 'Erin Ćoralić', color: beginner },
  { day: 'SRE', label: 'Karate nadaljevalna', time: '15:00 - 16:00', trainer: 'Erin Ćoralić', color: intermediate },
  { day: 'SRE', label: 'Karate tekmovalna', time: '16:00 - 17:00', trainer: 'Erin Ćoralić', color: competitive },
  { day: 'ČET', label: 'Karate odrasli', time: '20:00 - 21:00', trainer: 'Jernej Sever', color: adults },
];

const SessionCard = ({ s }) => (
  <div
    className={`bg-white/5 backdrop-blur-md border border-white/10 border-l-[3px] ${s.color} p-5 text-text2`}
  >
    <p className='font-bold text-lg'>{s.label}</p>
    <p className='text-sm opacity-90 mt-1'>{s.time}</p>
    <p className='text-xs opacity-70 tracking-wider uppercase mt-2'>
      {s.trainer}
    </p>
  </div>
);

const DayColumn = ({ day, sessions: daySessions }) => (
  <div className='flex flex-col text-left'>
    <div className='mb-5'>
      <h3 className='text-2xl font-bold tracking-wide'>{day}</h3>
      <div className='border-b-2 border-identifier w-10 mt-2'></div>
    </div>
    <div className='flex flex-col gap-3'>
      {daySessions.length === 0 ? (
        <p className='text-text2/40 text-sm'>—</p>
      ) : (
        daySessions.map((s, i) => <SessionCard key={i} s={s} />)
      )}
    </div>
  </div>
);

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
    <div className='relative w-full overflow-hidden font-oswald text-text2 text-center bg-layout1'>
      <img
        src='https://res.cloudinary.com/di4ms4xaz/image/upload/c_fill,ar_3:5,g_west,f_auto,q_auto:best,w_750/v1777969167/rznnxliv9rdmhd41y7ci.png'
        alt='Urnik background'
        loading='lazy'
        decoding='async'
        className='md:hidden absolute inset-0 w-full h-full object-cover'
        style={{ objectPosition: '60% 50%' }}
      />
      <img
        src='https://res.cloudinary.com/di4ms4xaz/image/upload/f_auto,q_auto:best,w_1920/v1777969167/rznnxliv9rdmhd41y7ci.png'
        srcSet='https://res.cloudinary.com/di4ms4xaz/image/upload/f_auto,q_auto:best,w_1080/v1777969167/rznnxliv9rdmhd41y7ci.png 1080w, https://res.cloudinary.com/di4ms4xaz/image/upload/f_auto,q_auto:best,w_1366/v1777969167/rznnxliv9rdmhd41y7ci.png 1366w, https://res.cloudinary.com/di4ms4xaz/image/upload/f_auto,q_auto:best,w_1920/v1777969167/rznnxliv9rdmhd41y7ci.png 1920w, https://res.cloudinary.com/di4ms4xaz/image/upload/f_auto,q_auto:best,w_2560/v1777969167/rznnxliv9rdmhd41y7ci.png 2560w'
        sizes='100vw'
        alt='Urnik background'
        loading='lazy'
        decoding='async'
        className='hidden md:block absolute inset-0 w-full h-full object-cover'
      />
      <div className='absolute inset-0 bg-layout1/85 z-10'></div>

      <div
        ref={ref}
        className={`relative z-20 max-w-7xl mx-auto px-6 py-16 md:py-24 transition-opacity duration-1000 ${
          animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <div
          className={`flex flex-col items-center justify-center mb-12 ${
            animate
              ? 'animate-fade-up animate-duration-1000 animate-delay-200'
              : ''
          }`}
        >
          <h1 className='text-3xl md:text-5xl font-extrabold text-center tracking-wide'>
            URNIK
          </h1>
          <div className='border-b-4 border-identifier w-16 mt-5'></div>
        </div>

        <div
          className={`hidden md:grid md:grid-cols-5 gap-6 lg:gap-8 ${
            animate
              ? 'animate-fade-up animate-duration-1000 animate-delay-500'
              : ''
          }`}
        >
          {days.map((day) => (
            <DayColumn
              key={day}
              day={day}
              sessions={sessions.filter((s) => s.day === day)}
            />
          ))}
        </div>

        <div
          className={`md:hidden flex flex-col gap-10 text-left ${
            animate
              ? 'animate-fade-up animate-duration-1000 animate-delay-500'
              : ''
          }`}
        >
          {days.map((day) => {
            const daySessions = sessions.filter((s) => s.day === day);
            if (daySessions.length === 0) return null;
            return (
              <DayColumn key={day} day={day} sessions={daySessions} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Urnik;
