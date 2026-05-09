import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/Seo';
import { Link } from 'gatsby';
import { FaArrowDown } from 'react-icons/fa';
import { BsLink } from 'react-icons/bs';
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

const ImageTextRow = ({ image, reverse, children }) => (
  <div
    className={`flex flex-col gap-10 lg:gap-14 items-start mb-14 ${
      reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
    }`}
  >
    <div className='lg:w-1/2 w-full'>{image}</div>
    <div className='lg:w-1/2 w-full text-left space-y-5 md:text-lg leading-relaxed'>
      {children}
    </div>
  </div>
);

const About = () => {
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
              'url("https://res.cloudinary.com/di4ms4xaz/image/upload/e_blur:1000,w_60,c_limit,f_auto,q_30/v1778346043/aad4cfuzytvopac1qhyw.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
          }}
        >
          <StaticImage
            src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1778346043/aad4cfuzytvopac1qhyw.jpg'
            alt='O nas'
            className='!absolute inset-0 w-full h-full'
            imgClassName='!scale-[2] !origin-top !translate-y-16 !translate-x-20 md:!scale-100 md:!origin-center md:!translate-y-0 md:!translate-x-0'
            loading='eager'
            placeholder='blurred'
            objectFit='cover'
            objectPosition='center top'
            layout='fullWidth'
            quality={100}
            formats={['auto', 'webp', 'avif']}
            breakpoints={[750, 1080, 1366, 1920, 2560]}
          />
          <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/40 z-10'></div>
          <div className='relative z-20 flex items-center justify-center min-h-[40vh] md:min-h-[70vh] pt-20'>
            <div className='text-center text-text2 px-6 animate-fade-up animate-duration-1000'>
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wider leading-tight'>
                O NAS
              </h1>
              <div className='border-b-4 border-identifier w-16 mt-5 mx-auto animate-fade-up animate-duration-1000 animate-delay-500'></div>
            </div>
          </div>
        </div>

        <nav className='sticky top-20 z-30 bg-layout1/85 backdrop-blur-md border-b border-white/10'>
          <div className='max-w-7xl mx-auto px-6 flex justify-center gap-2 md:gap-8 overflow-x-auto'>
            <SubNavLink href='#o-nas' label='O NAS' />
            <SubNavLink href='#ep' label='LIA KRVINA' />
            <SubNavLink href='#pomen' label='POMEN' />
          </div>
        </nav>

        <div className='bg-layout2 text-text1'>
          <section
            id='o-nas'
            className='scroll-mt-32 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24'
          >
            <SectionHeading>O NAS</SectionHeading>
            <div
              ref={ref}
              className={`${
                animate
                  ? 'opacity-100 translate-y-0 transition-all duration-1000'
                  : 'opacity-0 translate-y-5'
              }`}
            >
              <ImageTextRow
                image={
                  <StaticImage
                    src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723127479/karate-kickbox-ostalo/y86ue0or3fdhaj6asodb.jpg'
                    alt='onas1'
                    className='w-full h-auto rounded-sm shadow-2xl'
                  />
                }
              >
                <p>
                  Karate klub Žiri je bil ustanovljen v začetku leta 2013.
                  Razvil se je iz karate sekcije, ki je pred tem v Žireh
                  delovala že 7 let pod okriljem Karate kluba Kolektor Idrija.
                  Karate tako v Žireh poučujemo neprekinjeno že skoraj 20 let.
                  Karate klub Žiri je del Inštituta borilnih veščin (prej
                  Karate inštituta), ki ga vodi dr. Jernej Sever in je, s
                  preko 400 aktivnimi člani, eno največjih slovenskih združenj
                  borilnih športov in veščin. V inštitutu borilnih veščin, na
                  osnovi bogatih izkušenj iz borbenih znanj, inovativnega
                  znanstvenega raziskovanja, več desetletnega pedagoškega in
                  andragoškega dela, oblikujemo moderne vadbene programe
                  borilnih veščin, s poudarkom na karateju in kikboksu, ki so
                  prilagojeni potrebam modernega časa, starosti in željam
                  vsakega posameznika.
                </p>
              </ImageTextRow>

              <ImageTextRow
                reverse
                image={
                  <StaticImage
                    src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723119527/karate-ziri-galerija/lvmiiiodhvsdlt9rywhu.jpg'
                    alt='onas2'
                    className='w-full h-auto rounded-sm shadow-2xl'
                  />
                }
              >
                <p>
                  Trudimo se, da redna vadba naših programov pripomore k bolj
                  polnemu in kvalitetnemu življenju ter vadečim omogoča, da se
                  postopno približujejo glavnim idealom borilnih veščin,
                  vzpostavitvi notranje sproščenosti, umirjenosti, odločnosti
                  in zdravega borbenega duha. V Žireh tako izvajamo vse naše
                  karate programe, Prijazno šolo karateja (otroci, stari od 5
                  do 12 let), Karate za mladostnike (mladostniki, stari od 12
                  do 18 let), Tekmovalni in športni karate (otroci in
                  mladostniki, stari od 8 do 20 let) in Karate za odrasle
                  (odrasli od 18 do 75 let). V skoraj dveh desetletjih
                  delovanja smo v Žireh razvili kar nekaj zelo uspešnih
                  tekmovalcev, ki so osvajali državne naslove in bili člani
                  slovenske državne reprezentance. Našo šolo karateja pa je v
                  teh letih obiskovalo že več kot 200 otrok, mladostnikov in
                  odraslih, devet članov pa je uspešno opravilo izpit za črni
                  pas.
                </p>
              </ImageTextRow>
            </div>
          </section>

          <div className='border-t border-text1/10'></div>

          <section
            id='ep'
            className='scroll-mt-32 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24'
          >
            <SectionHeading>LIA KRVINA</SectionHeading>

            <ImageTextRow
              image={
                <StaticImage
                  src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1778346044/fqxl1qgk8secyxxzsaco.jpg'
                  alt='Lia Krvina'
                  className='w-full h-auto rounded-sm shadow-2xl'
                />
              }
            >
              <p>
                Lia Krvina je ena izmed najuspešnejših tekmovalk kluba, ki s
                svojimi rezultati dokazuje izjemno predanost, disciplino in
                borbenost – tako na slovenski kot tudi mednarodni ravni.
              </p>
              <p>
                V Sloveniji je osvojila kar pet naslovov državne prvakinje v
                borbah, s čimer se uvršča med najbolj vidne mlade tekmovalke
                svoje generacije. Svoje uspehe pa je v zadnjih letih še
                nadgradila tudi v tujini, kjer redno dosega vrhunske rezultate
                na največjih evropskih in svetovnih tekmovanjih.
              </p>
            </ImageTextRow>

            <ImageTextRow
              reverse
              image={
                <StaticImage
                  src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1743282576/karate-ziri-galerija/s9pepzmaxoa4lk07ntvv.webp'
                  alt='Lia Krvina – Evropsko prvenstvo 2025'
                  className='w-full h-auto rounded-sm shadow-2xl'
                />
              }
            >
              <p className='text-identifier uppercase tracking-widest text-sm'>
                Evropsko prvenstvo 2025 – bronasta medalja
              </p>
              <p>
                Njen največji uspeh, na katerega je klub izjemno ponosen, je
                osvojeno 3. mesto na Evropskem prvenstvu februarja 2025. Po
                kar šestih izjemnih borbah je med 36 tekmovalkami osvojila
                bronasto medaljo in poskrbela za enega največjih uspehov v
                zgodovini kluba.
              </p>
              <p>Liina pot do medalje:</p>
              <ul className='list-none border-l-2 border-identifier/40 pl-5 space-y-1'>
                <li>Slovenija vs. Avstrija (8-1)</li>
                <li>Slovenija vs. Ukrajina (2-0)</li>
                <li>Slovenija vs. Turčija (2-1)</li>
                <li>Slovenija vs. Portugalska (3-1)</li>
                <li>Slovenija vs. Kosovo (0-6)</li>
                <li>Slovenija vs. Nemčija (3-1) – zmaga za bron!</li>
              </ul>
              <blockquote className='border-l-4 border-identifier pl-6 italic text-text1/90'>
                "Evropsko prvenstvo je bilo zame izjemna izkušnja, polna
                čustev in nepozabnih trenutkov. Pred nastopom sem bila
                samozavestna, saj sem vedela, da sem za to tekmo naredila vse,
                kar sem lahko. Med borbami sem dala vse od sebe in kljub
                pritisku uživala vsak trenutek na tatamiju. Po zmagi za tretje
                mesto sem se počutila neverjetno – občutki so bili nepozabni.
                Ta tekma bo za vedno ostala v mojem srcu kot potrditev trdega
                dela in vztrajnosti." – Lia Krvina.
              </blockquote>
            </ImageTextRow>

            <ImageTextRow
              image={
                <StaticImage
                  src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1778346043/jsrwmalye2bm8ksynqr0.jpg'
                  alt='Lia Krvina – Evropsko prvenstvo 2026'
                  className='w-full h-auto rounded-sm shadow-2xl'
                />
              }
            >
              <p className='text-identifier uppercase tracking-widest text-sm'>
                Evropsko prvenstvo 2026 – 5. mesto
              </p>
              <p>
                Leto kasneje, februarja 2026, je Lia na Evropskem prvenstvu
                ponovno prikazala odlične nastope in osvojila izjemno 5.
                mesto. Ponovno je bila zelo blizu medalje, a kljub tesnemu
                porazu v borbi za bron ostaja rezultat velik uspeh in še ena
                potrditev njenega kakovostnega dela ter vrhunske forme na
                evropski ravni.
              </p>
            </ImageTextRow>

            <ImageTextRow
              reverse
              image={
                <StaticImage
                  src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1778347567/amp5o71nxwhwr2znzjb1.jpg'
                  alt='Lia Krvina – mladinske svetovne lige'
                  className='w-full h-auto rounded-sm shadow-2xl'
                />
              }
            >
              <p className='text-identifier uppercase tracking-widest text-sm'>
                Svetovne lige – zlato in bron
              </p>
              <p>
                Posebej velja omeniti tudi njene uspehe na mladinskih
                svetovnih ligah. Po dveh petih mestih v Poreču in Španiji je
                avgusta 2025 v Mehiki osvojila svojo prvo zlato medaljo na
                svetovni ligi. Kljub prestopu v višjo kategorijo je navdušila
                z izjemnimi predstavami, premagala vso konkurenco in stopila
                na najvišjo stopničko zmagovalnega odra.
              </p>
              <p>
                Svojo drugo medaljo na svetovnih ligah je osvojila v Afriki,
                kjer je ponovno dokazala vrhunsko formo ter domov prinesla
                odlično bronasto medaljo.
              </p>
            </ImageTextRow>

            <p className='max-w-3xl mx-auto text-center md:text-lg leading-relaxed text-text1/85 mt-6'>
              Lia s svojimi dosežki predstavlja pomemben del našega kluba ter
              navdih mlajšim generacijam športnikov. Njena vztrajnost,
              delavnost in želja po napredku jo uvrščajo med najobetavnejše
              tekmovalke svoje generacije.
            </p>
          </section>

          <div className='border-t border-text1/10'></div>

          <section
            id='pomen'
            className='scroll-mt-32 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24'
          >
            <SectionHeading>POMEN BORILNIH VEŠČIN</SectionHeading>
            <ImageTextRow
              image={
                <StaticImage
                  src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723119531/karate-ziri-galerija/lmmi4wy9sr2j18yxnl64.png'
                  alt='zgodovina1'
                  className='w-full h-auto rounded-sm shadow-2xl'
                />
              }
            >
              <p>
                Čeprav so borilne veščine ena izmed najbolj številčnih
                gibalnih aktivnosti v svetu, v družbi še vedno obstaja kar
                precej predsodkov do njih. Eden takih razširjenih predsodkov
                je, da naj bi borilne veščine spodbujale agresijo in nasilje,
                ter da v borilnih veščinah prihaja do nekontroliranega
                fizičnega kontakta. Taki predsodki izvirajo iz površnega
                poznavanja izvora agresivnega vedenja in slabega razumevanja
                borilnih znanj. Borbeno vedenje je eno od osnovnih in
                pomembnejših vedenj, ki so se razvila v evolucijskem razvoju.
                Živemu bitju omogočajo, da varuje svoje ozemlje in na ta način
                zagotovi varnost, hrano, spolnega partnerja in naraščaj.
                Borbeno vedenje v naravi v večini primerov poteka po
                prirojenih ali naučenih pravilih, ki onemogočajo, da bi bili
                konflikti in spopadi preveč nevarni ali usodni. Do agresivnih,
                nekontroliranih odzivov pride zelo redko, se pa tudi v
                živalskem svetu dogajajo. V primeru agresivnega odziva
                odpovedo prirojena in naučena pravila, ki onemogočajo, da so
                spopadi usodni za pripadnike iste vrste. Človeku najbližji
                primer takega agresivnega vedenja so bojni pohodi nekaterih
                opic, pri katerih pobijejo poražene skupine in se izživljajo
                nad njihovimi mladiči.
              </p>
            </ImageTextRow>

            <ImageTextRow
              reverse
              image={
                <StaticImage
                  src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723119535/karate-ziri-galerija/pzgkl17egk4mbtff24bv.jpg'
                  alt='zgodovina2'
                  className='w-full h-auto rounded-sm shadow-2xl'
                />
              }
            >
              <p>
                Zgodovina in naše vsakdanje življenje kažeta na to, da ljudje
                nikakor nismo imuni na agresiven in nasilen način odzivanja.
                Ne glede na to, ali gre za fizičen napad ali pa verbalno
                poniževanje. Nasilja in agresivnosti ne rešimo tako, da si
                zatiskamo oči in se pretvarjamo, da ne obstajata, ampak da
                spoznamo naše borbeno vedenje in se ga skozi vadbeni proces
                naučimo usmerjati in oblikovati. Vadba borilnih aktivnosti v
                modernem času upošteva vse principe in znanja športne in
                rekreativne vadbe, hkrati pa ohranja tudi tradicionalna znanja
                in izkušnje, ki so se nabrale v večtisočletnem razvoju
                borilnih veščin. Predsodki pred borilnimi veščinami so zato
                odveč. Ko so borbena znanja v začetku prejšnjega stoletja v
                večini izgubila vojaški namen, se je večina borilnih veščin
                preoblikovalo v športne discipline ali pa psihofizične oblike
                celostne vadbe. Nekatere izmed njih so nekontaktne, pri drugih
                pa se kontakt s partnerjem dogaja na osnovi vnaprej
                dogovorjenih pravil. Borilna znanja so zato zelo primeren
                poligon, kjer lahko znotraj kontroliranega okolja razvijamo
                svoje gibalne potenciale in hkrati spoznavamo tudi naše najbolj
                primarne odzive in vedenja. Na ta način, poleg zdravega
                telesa, razvijamo tudi samozavest, sproščenost, spoštovanje in
                odločnost. Z njihovo pomočjo lahko živimo bolj polno in
                kvalitetno življenje. Med bogato ponudbo različnih metod in
                pristopov je potrebno le poiskati tisto, ki najbolj ustreza
                posameznikovim pričakovanjem in potrebam.
              </p>
            </ImageTextRow>

            <div className='max-w-3xl mx-auto mt-16 text-center'>
              <div className='text-xl tracking-wide flex items-center justify-center mb-6'>
                Preberi več, članek Delo:
                <FaArrowDown className='inline ml-2 animate-bounce' />
              </div>
              <ul className='space-y-3'>
                <li>
                  <a
                    href='https://www.delo.si/polet/ucimo-se-borilnih-vescin-lahko-tudi-doma'
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex items-center gap-2 text-lg hover:text-identifier transition-colors duration-200 border-b border-transparent hover:border-identifier'
                  >
                    <BsLink />
                    Učimo se borilnih veščin, lahko tudi doma
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.delo.si/polet/borilne-vescine-za-vsakdanje-zivljenje'
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex items-center gap-2 text-lg hover:text-identifier transition-colors duration-200 border-b border-transparent hover:border-identifier'
                  >
                    <BsLink />
                    Borilne veščine za vsakdanje življenje
                  </a>
                </li>
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
};

export default About;

export const Head = ({ location }) => (
  <Seo
    pathname={location.pathname}
    title='O nas'
    description='Spoznajte filozofijo in načela, ki stojijo za našimi borilnimi veščinami, ter odkrijte zgodovino našega kluba. Naučite se, kako odpravljamo pogoste predsodke o borilnih veščinah, s poudarkom na kontroliranem vadbenem okolju, ki spodbuja fizični, mentalni in čustveni razvoj. Naš pristop poudarja spoštovanje, samozavest in uravnotežen življenjski slog, ki vam pomaga doseči vaš polni potencial.'
  />
);
