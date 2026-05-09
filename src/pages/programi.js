import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/Seo';
import { Link } from 'gatsby';
import { useInView } from 'react-intersection-observer';

const SubNavLink = ({ href, label }) => (
  <a
    href={href}
    className='text-text2/70 hover:text-identifier transition-colors duration-200 py-4 px-3 text-sm md:text-base tracking-widest whitespace-nowrap'
  >
    {label}
  </a>
);

const SectionHeading = ({ children }) => (
  <div className='flex flex-col items-center justify-center mb-12 md:mb-14'>
    <h2 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-center tracking-wide'>
      {children}
    </h2>
    <div className='border-b-4 border-identifier w-16 mt-5'></div>
  </div>
);

const BenefitItem = ({ title, children }) => (
  <li className='border-l-2 border-identifier/40 pl-5 py-1'>
    <p className='font-semibold text-lg tracking-wide mb-2'>{title}</p>
    <p className='md:text-lg leading-relaxed text-text1/85'>{children}</p>
  </li>
);

function Programi() {
  const [animate, setAnimate] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) setAnimate(true);
  }, [inView]);

  return (
    <Layout>
      <div className='-mt-20 font-oswald'>
        <div
          className='relative w-full min-h-[40vh] md:min-h-[70vh] overflow-hidden bg-layout1'
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/di4ms4xaz/image/upload/e_blur:1000,w_60,c_limit,f_auto,q_30/v1723120071/karate-kickbox-ostalo/dayq6d0vm8fimofwmgaq.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
          }}
        >
          <StaticImage
            src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723120071/karate-kickbox-ostalo/dayq6d0vm8fimofwmgaq.jpg'
            alt='Programi'
            className='!absolute inset-0 w-full h-full'
            imgClassName='!scale-150 !origin-top md:!scale-100 md:!origin-center'
            loading='eager'
            placeholder='blurred'
            objectFit='cover'
            objectPosition='center 40%'
            layout='fullWidth'
            quality={100}
            formats={['auto', 'webp', 'avif']}
            breakpoints={[750, 1080, 1366, 1920, 2560]}
          />
          <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/40 z-10'></div>
          <div className='relative z-20 flex items-center justify-center min-h-[40vh] md:min-h-[70vh] pt-20'>
            <div className='text-center text-text2 px-6 animate-fade-up animate-duration-1000'>
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wider leading-tight'>
                PROGRAMI
              </h1>
              <div className='border-b-4 border-identifier w-16 mt-5 mx-auto animate-fade-up animate-duration-1000 animate-delay-500'></div>
            </div>
          </div>
        </div>

        <nav className='sticky top-20 z-30 bg-layout1/85 backdrop-blur-md border-b border-white/10'>
          <div className='max-w-7xl mx-auto px-6 flex justify-center gap-2 md:gap-8 overflow-x-auto'>
            <SubNavLink href='#otroci' label='OTROCI' />
            <SubNavLink href='#mladostniki' label='MLADOSTNIKI' />
            <SubNavLink href='#odrasli' label='ODRASLI' />
          </div>
        </nav>

        <div className='bg-layout2 text-text1'>
          <section
            id='otroci'
            className='scroll-mt-32 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24'
          >
            <SectionHeading>PRIJAZNA ŠOLA KARATEJA</SectionHeading>
            <div
              ref={ref}
              className={`flex flex-col lg:flex-row gap-10 lg:gap-14 items-start mb-14 ${
                animate
                  ? 'opacity-100 translate-y-0 transition-all duration-1000'
                  : 'opacity-0 translate-y-5'
              }`}
            >
              <div
                className={`lg:w-1/2 w-full ${
                  animate
                    ? 'animate-fade-right animate-duration-1000'
                    : 'opacity-0'
                }`}
              >
                <StaticImage
                  src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723120143/karate-kickbox-ostalo/c9csacfflvwpgpmxugx3.jpg'
                  alt='prijazna-sola'
                  className='w-full h-auto rounded-sm shadow-2xl'
                />
              </div>
              <div
                className={`lg:w-1/2 w-full text-left space-y-6 ${
                  animate
                    ? 'animate-fade-right animate-duration-1000 animate-delay-500'
                    : 'opacity-0'
                }`}
              >
                <p className='md:text-lg leading-relaxed'>
                  Program je namenjen otrokom od 5. do 12. leta starosti.
                  Vsebuje načrten razvoj gibalnih sposobnosti in socialnih
                  veščin. V Prijazni šoli karateja, poleg poučevanja karateja,
                  otroke načrtno in usmerjeno spodbujamo k razvoju njihovih
                  gibalnih potencialov in spoznavanju posameznih socialnih
                  veščin, ki so pomembne tudi v vsakdanjem življenju in se
                  povezujejo z bogatim izročilom borilnih znanj. Za motivacijo
                  in usmerjanje otrok pri vadbi skrbimo na osnovi različnih
                  aktivnosti in dogodkov, ki otroke preko igre spodbujajo k
                  sodelovanju in jim pomagajo osmišljati in razumeti pomen
                  različnih dejavnosti in aktivnosti.
                </p>
                <p className='md:text-lg leading-relaxed'>
                  Otroci so za posamezne dosežke na področju karateja, gibalnih
                  in socialnih veščin ter naravi prijaznih navad nagrajeni z
                  »Zmajskimi karticami« in točkami v albumu Kako postanem
                  Zmajski bojevnik. Glavni namen albuma je, da otrokom na
                  privlačen in enostaven način pomaga osmisliti namen in pomen
                  vadbe v Prijazni šoli karateja. Za otroke poleg rednih letnih
                  izpitov za karate pasove organiziramo tudi redna letna
                  testiranja gibalnih sposobnosti, mesečne aktivnosti za
                  izboljšanje in spoznavanje posameznih gibalnih ter socialnih
                  veščin ter Zmajčkovo tekmovanje v treh disciplinah. Starši in
                  otroci lahko svojim dosežkom sledijo preko svojega profila na
                  platformi Moje spretnosti, ki vsebuje izobraževalne programe,
                  video vsebine, rezultate testiranj, evidence opravljenih nalog
                  in omogoča učinkovito komunikacijo med udeleženci programa ter
                  njihovimi trenerji.
                </p>
              </div>
            </div>

            <div className='max-w-3xl mx-auto'>
              <p className='text-xl text-center mb-10 tracking-wide'>
                Glavni učinki vadbe po programu Prijazna šola karateja in
                programu Karate za mladostnike:
              </p>
              <ul className='space-y-8'>
                <BenefitItem title='POVEČANJE SAMOZAVESTI'>
                  Vadba karateja je odličen način za krepitev samozavesti pri
                  otrocih in mladostnikih. Sistematično učenje novih tehnik in
                  premagovanje izzivov na treningih prispeva k občutku dosežkov,
                  kar ima pozitiven vpliv na otrokovo samopodobo.
                </BenefitItem>
                <BenefitItem title='SPRETNOSTI SAMOOBRAMBE'>
                  Karate ni le šport, temveč tudi učinkovita metoda samoobrambe.
                  Otroci se učijo različnih tehnik, ki jim lahko pomagajo v
                  primeru morebitnih neprijetnih situacij. Razvijanje teh
                  spretnosti povečuje otrokovo občutje varnosti in mu daje
                  znanje, kako se zaščititi pred medvrstniškim nasiljem.
                </BenefitItem>
                <BenefitItem title='VADBA ZA CELOTNO TELO'>
                  Karate je celostna vadba, ki vključuje različne mišične
                  skupine. Otroci razvijajo moč, vzdržljivost, gibljivost in
                  koordinacijo. Redna vadba karateja spodbuja zdrav življenjski
                  slog in prispeva k celostnemu fizičnemu razvoju. Zaradi
                  kompleksnih gibov in pestrega nabora vaj, ki so vključene v
                  vadbeni proces, pa prestavlja tudi zelo dobro osnovo za
                  kasnejše vključevanje v druge športe.
                </BenefitItem>
                <BenefitItem title='SOCIALNE VEŠČINE IN EKIPNO DELO'>
                  Karate nudi priložnost za druženje in sodelovanje z vrstniki.
                  Skupaj s treningi se učijo tudi o pomenu spoštovanja,
                  discipline, urejenosti, sodelovanja in ekipnega dela. To
                  prispeva k razvoju socialnih veščin, ki so pomembne za uspešno
                  interakcijo v vsakdanjem življenju.
                </BenefitItem>
                <BenefitItem title='RAZVIJANJE DISCIPLINE IN VZTRAJNOSTI'>
                  Redni treningi karateja zahtevajo disciplino in vztrajnost.
                  Učijo se postavljati cilje, delati na njih in premagovati
                  ovire. To so ključne veščine, ki jim bodo koristile v šoli,
                  doma in v življenju.
                </BenefitItem>
              </ul>
            </div>
          </section>

          <div className='border-t border-text1/10'></div>

          <section
            id='mladostniki'
            className='scroll-mt-32 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24'
          >
            <SectionHeading>KARATE ZA MLADOSTNIKE</SectionHeading>
            <div className='flex flex-col lg:flex-row-reverse gap-10 lg:gap-14 items-start mb-14'>
              <div className='lg:w-1/2 w-full'>
                <StaticImage
                  src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723120141/karate-kickbox-ostalo/twu2cwkbmrwl36kqdhu8.jpg'
                  alt='karate-mladostniki'
                  className='w-full h-auto rounded-sm shadow-2xl'
                />
              </div>
              <div className='lg:w-1/2 w-full text-left space-y-6'>
                <p className='md:text-lg leading-relaxed'>
                  Program je prilagojen mladostnikom od 12. do 16. leta
                  starosti. Eden izmed glavnih ciljev tega rekreativnega
                  programa je, da mladostniki s 16 leti lahko opravijo izpit za
                  črni pas, kjer morajo predstaviti kompleksno tehnično in
                  borbeno znanje karateja. Program je smiselno nadaljevanje
                  programa Prijazna šola karateja, lahko pa se mu priključijo
                  tudi mladostniki, ki z vadbo karateja začnejo kasneje. Vadeči
                  so vključeni v redna letna testiranja gibalnih sposobnosti,
                  tekmujejo lahko na regionalnih tekmovanjih, učijo se
                  samoobrambnih elementov in tehnik. Podobno kot pri Prijazni
                  šoli karateja, mladostnike motiviramo za delo v klubu in šoli
                  s pomočjo motivacijske igre. Motivacijska igra JOKER smiselno
                  nadaljuje Album zmajski bojevnik in je prilagojena
                  mladostnikom. Digitalno okolje uporablja za motiviranje
                  vadečih pri doseganju boljših rezultatov v šoli in pri
                  karateju. Jokerja je mogoče osvojiti z dobrimi ocenami v šoli,
                  dobrimi rezultati na testiranju gibalnih sposobnosti ali s
                  pomočjo na treningih in tekmovanjih
                </p>
              </div>
            </div>

            <div className='max-w-3xl mx-auto'>
              <p className='text-xl text-center mb-10 tracking-wide'>
                Glavni učinki vadbe po programu Prijazna šola karateja in
                programu Karate za mladostnike:
              </p>
              <ul className='space-y-8'>
                <BenefitItem title='POVEČANJE SAMOZAVESTI'>
                  Vadba karateja je odličen način za krepitev samozavesti pri
                  otrocih in mladostnikih. Sistematično učenje novih tehnik in
                  premagovanje izzivov na treningih prispeva k občutku dosežkov,
                  kar ima pozitiven vpliv na otrokovo samopodobo.
                </BenefitItem>
                <BenefitItem title='SPRETNOSTI SAMOOBRAMBE'>
                  Karate ni le šport, temveč tudi učinkovita metoda samoobrambe.
                  Otroci se učijo različnih tehnik, ki jim lahko pomagajo v
                  primeru morebitnih neprijetnih situacij. Razvijanje teh
                  spretnosti povečuje otrokovo občutje varnosti in mu daje
                  znanje, kako se zaščititi pred medvrstniškim nasiljem.
                </BenefitItem>
                <BenefitItem title='VADBA ZA CELOTNO TELO'>
                  Karate je celostna vadba, ki vključuje različne mišične
                  skupine. Otroci razvijajo moč, vzdržljivost, gibljivost in
                  koordinacijo. Redna vadba karateja spodbuja zdrav življenjski
                  slog in prispeva k celostnemu fizičnemu razvoju. Zaradi
                  kompleksnih gibov in pestrega nabora vaj, ki so vključene v
                  vadbeni proces, pa prestavlja tudi zelo dobro osnovo za
                  kasnejše vključevanje v druge športe.
                </BenefitItem>
                <BenefitItem title='SOCIALNE VEŠČINE IN EKIPNO DELO'>
                  Karate nudi priložnost za druženje in sodelovanje z vrstniki.
                  Skupaj s treningi se učijo tudi o pomenu spoštovanja,
                  discipline, urejenosti, sodelovanja in ekipnega dela. To
                  prispeva k razvoju socialnih veščin, ki so pomembne za uspešno
                  interakcijo v vsakdanjem življenju.
                </BenefitItem>
                <BenefitItem title='RAZVIJANJE DISCIPLINE IN VZTRAJNOSTI'>
                  Redni treningi karateja zahtevajo disciplino in vztrajnost.
                  Učijo se postavljati cilje, delati na dosegi ciljev in
                  premagovati ovire. To so ključne veščine, ki jim bodo
                  koristile v šoli, doma in v življenju.
                </BenefitItem>
              </ul>
            </div>
          </section>

          <div className='border-t border-text1/10'></div>

          <section
            id='odrasli'
            className='scroll-mt-32 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24'
          >
            <SectionHeading>KARATE ZA ODRASLE</SectionHeading>
            <div className='flex flex-col lg:flex-row gap-10 lg:gap-14 items-start mb-14'>
              <div className='lg:w-1/2 w-full'>
                <StaticImage
                  src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723128682/karate-kickbox-ostalo/osjgatd9s3ibq0ec75wq.jpg'
                  alt='karate practice'
                  className='w-full h-auto rounded-sm shadow-2xl'
                />
              </div>
              <div className='lg:w-1/2 w-full text-left space-y-6'>
                <p className='md:text-lg leading-relaxed'>
                  V Karate klubu Žiri organiziramo program Karateja za odrasle,
                  ki je prilagojen rekreativni vadbi. Vsebina programa je
                  oblikovana na osnovi naših dolgoletnih izkušenj s področja
                  poučevanja in raziskovanja borilnih veščin in drugih telesnih
                  tehnik. Vadba učinkuje na boljšo fizično pripravljenost,
                  boljšo aerobno in anaerobno vzdržljivost, povečanje naše
                  gibljivosti, izboljšanje drže, odpravo kroničnih mišičnih
                  napetosti in bolečin, izboljšanje pozornosti in boljše
                  soočanje s stresnimi situacijami. Vadba je primerna za vse
                  starosti, za moške in ženske. Vsebuje raztezne vaje, vaje za
                  moč, izvajanje karate elementov, ki nam pomagajo pri
                  izboljšanju motorične kontrole nad našim telesom. Na osnovi
                  daljših borbenih zaporedij – kat, izboljšamo našo orientacijo
                  v prostoru. S pomočjo nekontaktne borbe pa se učimo
                  prepoznavati naše odzive ter ohranjati mirnost in
                  osredotočenost tudi v stresnih situacijah. Vadeči lahko
                  opravljajo izpite za pasove in v 5 do 6 letih opravijo izpit
                  za črni pas, ki je lahko dodaten motivacijski faktor za vadbo.
                  Udeležijo se lahko tudi testiranj gibalnih sposobnosti, s
                  katerimi lahko preverijo svojo trenutno fizično
                  pripravljenost.
                </p>
              </div>
            </div>

            <div className='max-w-3xl mx-auto'>
              <p className='text-xl text-center mb-10 tracking-wide'>
                Glavni učinki vadbe po programu Karate za odrasle:
              </p>
              <ul className='space-y-8'>
                <BenefitItem title='POVEČANJE SAMOZAVESTI IN BOLJŠE SOOČANJE S STRESOM'>
                  Vadba karateja je odličen način za krepitev samozavesti pri
                  odraslih. Boljša fizična pripravljenost, gibljivost, učenje
                  sproščenega in učinkovitega gibanja, premagovanje strahu v
                  borbenih situacijah ter ohranjanje mirnega in osredotočenega
                  uma pripomorejo k večji samozavesti in lažjem soočanju s
                  stresnimi situacijami v vsakdanjem življenju.
                </BenefitItem>
                <BenefitItem title='SPRETNOSTI SAMOOBRAMBE'>
                  Karate poleg različnih napadalnih in obrambnih elementov
                  vsebuje tudi učinkovite metode samoobrambe. Med vadbo se
                  naučimo različnih tehnik, ki nam lahko pomagajo v morebitnih
                  neprijetnih situacijah. Razvijanje teh spretnosti povečuje
                  vaše občutje varnosti in vam daje znanje, kako se zaščititi.
                </BenefitItem>
                <BenefitItem title='VADBA ZA CELOTNO TELO IN PSIHO'>
                  Karate je celostna vadba, s katero razvijamo tako telesne kot
                  naše psihične sposobnosti. Med vadbo karateja razvijamo moč,
                  vzdržljivost, gibljivost in koordinacijo, osredotočenost,
                  pozornost, sproščenost in še mnogo drugih sposobnosti, ki nam
                  omogočajo kvalitetno in polno življenje v različnih starostnih
                  obdobjih.
                </BenefitItem>
                <BenefitItem title='RAZVIJANJE DISCIPLINE IN VZTRAJNOSTI'>
                  Redni treningi karateja zahtevajo disciplino in vztrajnost ter
                  popolno osredotočenost med vadbo, kar je lahko dobra osnova za
                  soočanje z vsakodnevnimi izzivi, s katerimi se srečujemo ob
                  študiju, na delovnem mestu in drugih izzivih v našem
                  življenju.
                </BenefitItem>
              </ul>
            </div>

            <div className='text-center mt-16'>
              <Link
                to='/vpis'
                className='inline-block bg-identifier border-2 border-identifier py-3 px-8 text-lg lg:text-xl text-text2 cursor-pointer hover:text-identifier hover:bg-transparent transition-colors duration-200 ease-in-out tracking-wider'
              >
                PRIDRUŽI SE NAM!
              </Link>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default Programi;

export const Head = ({ location }) => (
  <Seo
    pathname={location.pathname}
    title='Programi'
    description='
Odkrijte našo raznoliko ponudbo karate programov za otroke, mladostnike in odrasle, zasnovanih za vse ravni izkušenj in telesne pripravljenosti. Naši strokovni trenerji nudijo osebno usmerjanje in podporo, da vam pomagajo razviti veščine, samozavest in kondicijo ter doseči vaše cilje v karateju.'
  />
);
