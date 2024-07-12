import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/Seo';

function Programi() {
  return (
    <Layout>
      <div className='relative font-oswald  py-10 md:py-40'>
        <StaticImage
          src='https://res.cloudinary.com/dbssbnuph/image/upload/f_auto,q_auto/v1/karate-ziri-stran/karatemain3_k6mvih'
          alt='Background'
          placeholder='blurred'
          className='fixed inset-0 w-full h-full object-cover'
          style={{
            zIndex: -1,
          }}
        />
        <div className='absolute inset-0 bg-[#13182A] opacity-75'></div>
        <div className='text-white flex flex-col items-center justify-center p-8'>
          <div className='relative flex items-center flex-col'>
            <div className='flex flex-col items-center mb-10'>
              <div className='flex flex-col items-center justify-center  mb-10 '>
                <h1 className='text-4xl font-extrabold text-center tracking-wide '>
                  KARATE ZA OTROKE IN MLADOSTNIKE
                </h1>
                <div className='border-b-4 border-[rgb(228,61,78)] w-16 mt-5'></div>
              </div>
              <p className='max-w-[50rem] md:text-lg'>
                Program je namenjen otrokom od 5.leta dalje. Vsebuje načrten
                razvoj gibalnih sposobnosti in socialnih veščin. Pri izvajanju
                programa sledimo principom vadbeno vzgojne metode Moje
                spretnosti. V Prijazni šoli karateja poleg poučevanja karateja,
                otroke načrtno in usmerjeno spodbujamo k razvoju njihovih
                gibalnih potencialov in spoznavanju posameznih socialnih veščin,
                ki so pomembne tudi v vsakdanjem življenju in se povezujejo z
                bogatim izročilom borilnih znanj. Za motivacijo in usmerjanje
                otrok pri vadbi skrbimo na osnovi različnih aktivnosti in
                dogodkov, ki otroke preko igre spodbujajo k sodelovanju in jim
                pomagajo osmišljati in razumeti pomen različnih dejavnosti in
                aktivnosti. Otroci so za posamezne dosežke na področju karateja,
                gibalnih in socialnih veščin ter naravi prijaznih navad
                nagrajeni z »Zmajskimi karticami« in točkami v albumu Kako
                postanem Zmajski bojevnik. Glavni namen albuma je, da otrokom na
                privlačen in enostaven način pomaga osmisliti namen in pomen
                vadbe v Prijazni šoli karateja. Za otroke poleg rednih letnih
                izpitov za karate pasove organiziramo tudi redna letna
                testiranja gibalnih sposobnosti, mesečne aktivnosti za
                izboljšanje in spoznavanje posameznih gibalnih ter socialnih
                veščin ter zmajčkovo tekmovanje v treh disciplinah. Starši in
                otroci lahko svojim dosežkom sledijo preko svojega profila na
                platformi Moje spretnosti, ki vsebuje izobraževalne programe,
                video vsebine, rezultate testiranj, evidence opravljenih nalog
                in omogoča učinkovito komunikacijo med udeleženci programa ter
                njihovimi trenerji.
              </p>
            </div>
            <div className='relative max-w-[60rem]'>
              <StaticImage
                src='https://res.cloudinary.com/dbssbnuph/image/upload/f_auto,q_auto/v1/karate-ziri-stran/20210412_141430_pqzq2g'
                alt='erin'
                className='max-w-[80rem] h-auto rounded-sm shadow-lg filter brightness-90 contrast-125'
              />
              <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50 rounded-lg'></div>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-center'>
              <div className='text-center max-w-[50rem] pt-10'>
                <ul>
                  <li className='mb-5 text-xl font-semibold'>
                    POVEČANJE SAMOZAVESTI
                  </li>
                  <p className='mb-5 md:text-lg'>
                    Vadba karateja je odličen način za krepitve samozavesti pri
                    otrocih in mladostnikih. Sistematično učenje novih tehnik in
                    premagovanje izzivov na treningih prispeva k občutku
                    dosežkov, kar ima pozitiven vpliv na otrokovo samopodobo.
                  </p>
                  <li className='mb-5 text-xl font-semibold md:text-lg'>
                    SPRETNOSTI SAMOOBRAMBE
                  </li>
                  <p className='mb-5 md:text-lg'>
                    Karate ni le šport, temveč tudi učinkovita metoda
                    samoobrambe. Otroci se učijo različnih tehnik, ki jim lahko
                    pomagajo v primeru morebitnih neprijetnih situacij.
                    Razvijanje teh spretnosti povečuje otrokovo občutje varnosti
                    in mu daje znanje, kako se zaščititi.
                  </p>
                  <li className='mb-5 text-xl font-semibold '>
                    VADBA ZA CELOTNO TELO
                  </li>
                  <p className='mb-5 md:text-lg'>
                    Karate je celostna vadba, ki vključuje različne mišične
                    skupine. Razvijali bodo moč, vzdržljivost, gibljivost in
                    koordinacijo. Redna vadba karateja spodbuja zdrav
                    življenjski slog in prispeva k celostnemu fizičnemu razvoju.
                  </p>
                  <li className='mb-5 text-xl font-semibold'>
                    SOCIALNE VEŠČINE IN EKIPNO DELO
                  </li>
                  <p className='mb-5 md:text-lg'>
                    Karate nudi priložnost za druženje in sodelovanje z
                    vrstniki. Skupaj s treningi se učijo tudi o pomenu
                    spoštovanja, discipline in ekipnega dela. To prispeva k
                    razvoju socialnih veščin, ki so pomembne za uspešno
                    interakcijo v življenju.
                  </p>
                  <li className='mb-5 text-xl font-semibold'>
                    RAZVIJANJE DISPLINE IN VZSTRAJNOSTI
                  </li>
                  <p className='mb-5 md:text-lg'>
                    Redni treningi karateja zahtevajo discipline in vztrajnosti.
                    Učijo se postavljati cilje, delati na njih in premagovati
                    ovire. To so ključne veščine, ki jih bodo koristile v šoli,
                    doma in v življenju.
                  </p>
                </ul>
              </div>
            </div>
          </div>
          {/* */}
          <div className='relative flex items-center flex-col mt-14'>
            <div className='flex flex-col items-center mb-10'>
              <div className='flex flex-col items-center justify-center mb-10'>
                <h1 className='text-4xl font-extrabold text-center tracking-wide'>
                  KARATE ZA ODRASLE
                </h1>
                <div className='border-b-4 border-[rgb(228,61,78)] w-16 mt-5'></div>
              </div>
              <p className='max-w-[50rem] md:text-lg'>
                V Karate inštitutu organiziramo program, ki je prilagojen za
                vadbo odraslih. To je program Karate za odrasle. Vsebina
                programa je oblikovana na osnovi naših dolgoletnih izkušenj s
                področja poučevanja in raziskovanja borilnih veščin in drugih
                telesnih tehnik. Vadba učinkuje na boljšo fizično
                pripravljenost, boljšo aerobno in anaerobno vzdržljivost,
                povečanje naše gibljivosti, izboljšanje drže, odpravo kroničnih
                mišičnih napetosti in bolečin, izboljšanje pozornosti in boljše
                soočanje s stresnimi situacijami.
              </p>
            </div>
            <div className='relative max-w-[60rem]'>
              <StaticImage
                src='https://res.cloudinary.com/dbssbnuph/image/upload/f_auto,q_auto/v1/karate-ziri-stran/118-1024x680-2_konzps'
                alt='karate practice'
                className='max-w-[80rem] h-auto rounded-sm shadow-lg filter brightness-90 contrast-125'
              />
              <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50 rounded-lg'></div>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-center'>
              <div className='text-center max-w-[50rem] pt-10'>
                <ul>
                  <li className='mb-5 text-xl font-semibold'>
                    POVEČANJE SAMOZAVESTI
                  </li>
                  <p className='mb-5 md:text-lg'>
                    Vadba karateja je odličen način za krepitev samozavesti pri
                    odraslih. Sistematično učenje novih tehnik in premagovanje
                    izzivov na treningih prispeva k občutku dosežkov, kar ima
                    pozitiven vpliv na vašo samopodobo.
                  </p>
                  <li className='mb-5 text-xl font-semibold md:text-lg'>
                    SPRETNOSTI SAMOOBRAMBE
                  </li>
                  <p className='mb-5 md:text-lg'>
                    Karate ni le šport, temveč tudi učinkovita metoda
                    samoobrambe. Naučili se boste različnih tehnik, ki vam lahko
                    pomagajo v morebitnih neprijetnih situacijah. Razvijanje teh
                    spretnosti povečuje vaše občutje varnosti in vam daje
                    znanje, kako se zaščititi.
                  </p>
                  <li className='mb-5 text-xl font-semibold'>
                    VADBA ZA CELOTNO TELO
                  </li>
                  <p className='mb-5 md:text-lg'>
                    Karate je celostna vadba, ki vključuje različne mišične
                    skupine. Razvijali boste moč, vzdržljivost, gibljivost in
                    koordinacijo. Redna vadba karateja spodbuja zdrav
                    življenjski slog in prispeva k celostnemu fizičnemu razvoju.
                  </p>
                  <li className='mb-5 text-xl font-semibold'>
                    SOCIALNE VEŠČINE IN EKIPNO DELO
                  </li>
                  <p className='mb-5 md:text-lg'>
                    Tečaji karateja nudijo priložnost za druženje in sodelovanje
                    z vrstniki. Skupaj s treningi se učite tudi o pomenu
                    spoštovanja, discipline in ekipnega dela. To prispeva k
                    razvoju socialnih veščin, ki so pomembne za uspešno
                    interakcijo v življenju.
                  </p>
                  <li className='mb-5 text-xl font-semibold'>
                    RAZVIJANJE DISCIPLINE IN VZTRAJNOSTI
                  </li>
                  <p className='mb-5 md:text-lg'>
                    Redni treningi karateja zahtevajo disciplino in vztrajnost.
                    Naučili se boste postavljati cilje, delati na njih in
                    premagovati ovire. To so ključne veščine, ki vam bodo
                    koristile v službi, doma in v prihodnjem življenju.
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Programi;

export const Head = () => (
  <Seo
    title='Programi'
    description='Odkrijte našo raznoliko ponudbo programov, zasnovanih za vse ravni telesne pripravljenosti in interese. Od treninga moči do joge, naši strokovni trenerji nudijo osebno usmerjanje, da vam pomagajo doseči vaše fitnes cilje.'
  />
);
