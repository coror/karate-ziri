import React from 'react';

const Mapa = () => {
  return (
    <div className='w-full h-96 md:h-[450px] flex justify-center items-center'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4657.385727480522!2d14.106494167632855!3d46.045151521776404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477add01fba840b5%3A0x755cfd4c80d41150!2s%C5%A0portna%20dvorana%20%C5%BDiri!5e0!3m2!1sen!2ssi!4v1720826283267!5m2!1sen!2ssi" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
        className='w-full h-full border-0'
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
        title='map'
      ></iframe>
    </div>
  );
};

export default Mapa;
