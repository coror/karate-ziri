import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/Seo';
import { Link } from 'gatsby';
import { FaArrowDown } from 'react-icons/fa';
import { BsLink } from 'react-icons/bs';

const About = () => {
  return (
    <Layout>
      <div className='bg-layout2 font-oswald py-10 md:py-40 text-text2 px-9 '>
        <div>
          <div className='flex flex-col items-center justify-center mb-10 pt-8'>
            <h1 className='text-3xl font-bold text-center text-text1'>O NAS</h1>
            <div className='border-b-4 border-identifier w-12 text-center mt-5'></div>
          </div>
          <div className='flex flex-col xl:flex-row items-center xl:items-start justify-center'>
            <div className=' mb-10 mx-2 lg:w-[50rem]'>
              <StaticImage
                src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723127479/karate-kickbox-ostalo/y86ue0or3fdhaj6asodb.jpg'
                alt='onas1'
                className='w-full h-full  max-h-[25rem] animate-fade-right animate-duration-1000 animate-delay-1000'
              />
            </div>
            <p className=' max-w-[50rem] md:text-lg md:mx-10  text-layout1 text-center animate-fade-right animate-duration-1000 animate-delay-2000'>
              Karate klub Žiri je bil ustanovljen v začetku leta 2013. Razvil se
              je iz karate sekcije, ki je pred tem v Žireh delovala že 7 let pod
              okriljem Karate kluba Kolektor Idrija. Karate tako v Žireh
              poučujemo neprekinjeno že skoraj 20 let. Karate klub Žiri je del
              Inštituta borilnih veščin (prej Karate inštituta), ki ga vodi dr.
              Jernej Sever in je, s preko 400 aktivnimi člani, eno največjih
              slovenskih združenj borilnih športov in veščin. V inštitutu
              borilnih veščin, na osnovi bogatih izkušenj iz borbenih znanj,
              inovativnega znanstvenega raziskovanja, več desetletnega
              pedagoškega in andragoškega dela, oblikujemo moderne vadbene
              programe borilnih veščin, s poudarkom na karateju in kikboksu, ki
              so prilagojeni potrebam modernega časa, starosti in željam vsakega
              posameznika.
            </p>
          </div>
          <div className='flex flex-col xl:flex-row-reverse items-center xl:items-start justify-center mt-10'>
            <div className=' mb-10 mx-2 lg:w-[50rem]'>
              <StaticImage
                src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723119527/karate-ziri-galerija/lvmiiiodhvsdlt9rywhu.jpg'
                alt='onas2'
                className='w-full h-full  max-h-[25rem]   animate-fade-right animate-duration-1000 animate-delay-1000'
              />
            </div>
            <p className=' max-w-[50rem] md:text-lg md:mx-10  text-layout1 text-center animate-fade-right animate-duration-1000 animate-delay-2000'>
              Trudimo se, da redna vadba naših programov pripomore k bolj
              polnemu in kvalitetnemu življenju ter vadečim omogoča, da se
              postopno približujejo glavnim idealom borilnih veščin,
              vzpostavitvi notranje sproščenosti, umirjenosti, odločnosti in
              zdravega borbenega duha. V Žireh tako izvajamo vse naše karate
              programe, Prijazno šolo karateja (otroci, stari od 5 do 12 let),
              Karate za mladostnike (mladostniki, stari od 12 do 18 let),
              Tekmovalni in športni karate (otroci in mladostniki, stari od 8 do
              20 let) in Karate za odrasle (odrasli od 18 do 75 let). V skoraj
              dveh desetletjih delovanja smo v Žireh razvili kar nekaj zelo
              uspešnih tekmovalcev, ki so osvajali državne naslove in bili člani
              slovenske državne reprezentance. Našo šolo karateja pa je v teh
              letih obiskovalo že več kot 200 otrok, mladostnikov in odraslih,
              devet članov pa je uspešno opravilo izpit za črni pas.
            </p>
          </div>
        </div>
        {/* POMEN */}
        <div>
          <div
            className='flex flex-col items-center justify-center mb-10 pt-8'
            id='pomen'
          >
            <h1 className='text-3xl font-bold text-center text-text1'>
              POMEN BORILNIH VEŠČIN
            </h1>
            <div className='border-b-4 border-identifier w-12 text-center mt-5'></div>
          </div>
          <div className='flex flex-col xl:flex-row items-center xl:items-start justify-center'>
            <div className=' mb-10 mx-2 lg:w-[50rem]'>
              <StaticImage
                src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723119531/karate-ziri-galerija/lmmi4wy9sr2j18yxnl64.png'
                alt='zgodovina1'
                className='w-full h-full  max-h-[25rem] animate-fade-right animate-duration-1000 animate-delay-1000'
              />
            </div>
            <p className=' max-w-[50rem] md:text-lg md:mx-10  text-layout1 text-center animate-fade-right animate-duration-1000 animate-delay-2000'>
              Čeprav so borilne veščine ena izmed najbolj številčnih gibalnih
              aktivnosti v svetu, v družbi še vedno obstaja kar precej
              predsodkov do njih. Eden takih razširjenih predsodkov je, da naj
              bi borilne veščine spodbujale agresijo in nasilje, ter da v
              borilnih veščinah prihaja do nekontroliranega fizičnega kontakta.
              Taki predsodki izvirajo iz površnega poznavanja izvora agresivnega
              vedenja in slabega razumevanja borilnih znanj. Borbeno vedenje je
              eno od osnovnih in pomembnejših vedenj, ki so se razvila v
              evolucijskem razvoju. Živemu bitju omogočajo, da varuje svoje
              ozemlje in na ta način zagotovi varnost, hrano, spolnega partnerja
              in naraščaj. Borbeno vedenje v naravi v večini primerov poteka po
              prirojenih ali naučenih pravilih, ki onemogočajo, da bi bili
              konflikti in spopadi preveč nevarni ali usodni. Do agresivnih,
              nekontroliranih odzivov pride zelo redko, se pa tudi v živalskem
              svetu dogajajo. V primeru agresivnega odziva odpovedo prirojena in
              naučena pravila, ki onemogočajo, da so spopadi usodni za
              pripadnike iste vrste. Človeku najbližji primer takega agresivnega
              vedenja so bojni pohodi nekaterih opic, pri katerih pobijejo
              poražene skupine in se izživljajo nad njihovimi mladiči.
            </p>
          </div>
          <div className='flex flex-col xl:flex-row-reverse items-center xl:items-start justify-center mt-10'>
            <div className=' mb-10 mx-2 lg:w-[50rem]'>
              <StaticImage
                src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723119535/karate-ziri-galerija/pzgkl17egk4mbtff24bv.jpg'
                alt='zgodovina2'
                className='w-full h-full  max-h-[25rem]   animate-fade-right animate-duration-1000 animate-delay-1000'
              />
            </div>
            <p className=' max-w-[50rem] md:text-lg md:mx-10  text-layout1 text-center animate-fade-right animate-duration-1000 animate-delay-2000'>
              Zgodovina in naše vsakdanje življenje kažeta na to, da ljudje
              nikakor nismo imuni na agresiven in nasilen način odzivanja. Ne
              glede na to, ali gre za fizičen napad ali pa verbalno poniževanje.
              Nasilja in agresivnosti ne rešimo tako, da si zatiskamo oči in se
              pretvarjamo, da ne obstajata, ampak da spoznamo naše borbeno
              vedenje in se ga skozi vadbeni proces naučimo usmerjati in
              oblikovati. Vadba borilnih aktivnosti v modernem času upošteva vse
              principe in znanja športne in rekreativne vadbe, hkrati pa ohranja
              tudi tradicionalna znanja in izkušnje, ki so se nabrale v
              večtisočletnem razvoju borilnih veščin. Predsodki pred borilnimi
              veščinami so zato odveč. Ko so borbena znanja v začetku prejšnjega
              stoletja v večini izgubila vojaški namen, se je večina borilnih
              veščin preoblikovalo v športne discipline ali pa psihofizične
              oblike celostne vadbe. Nekatere izmed njih so nekontaktne, pri
              drugih pa se kontakt s partnerjem dogaja na osnovi vnaprej
              dogovorjenih pravil. Borilna znanja so zato zelo primeren poligon,
              kjer lahko znotraj kontroliranega okolja razvijamo svoje gibalne
              potenciale in hkrati spoznavamo tudi naše najbolj primarne odzive
              in vedenja. Na ta način, poleg zdravega telesa, razvijamo tudi
              samozavest, sproščenost, spoštovanje in odločnost. Z njihovo
              pomočjo lahko živimo bolj polno in kvalitetno življenje. Med
              bogato ponudbo različnih metod in pristopov je potrebno le
              poiskati tisto, ki najbolj ustreza posameznikovim pričakovanjem in
              potrebam.
            </p>
          </div>
          <div className='text-center text-text1 mt-10'>
            <div className='text-xl'>
              Preberi več, članek Delo:
              <FaArrowDown className='inline m-2' />
            </div>
            <div className='hover:text-text2 text-lg'>
              <a
                href='https://www.delo.si/polet/ucimo-se-borilnih-vescin-lahko-tudi-doma'
                target='_blank'
                rel='noreferrer'
              >
                <BsLink className='inline mr-1 ' />
                Učimo se borilnih veščin, lahko tudi doma
              </a>
            </div>
            <div className='hover:text-text2 text-xl'>
              <a
                href='https://www.delo.si/polet/borilne-vescine-za-vsakdanje-zivljenje'
                target='_blank'
                rel='noreferrer'
              >
                <BsLink className='inline mr-1' />
                Borilne veščine za vsakdanje življenje
              </a>
            </div>
          </div>
          <div className='text-center mt-14'>
            <Link
              to='/vpis'
              className='bg-identifier border-4 border-identifier rounded-sm py-3 px-6 text-xl cursor-pointer hover:text-text1 hover:bg-transparent transition-colors duration-200 ease-in-out'
            >
              Pridruži se nam!
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

export const Head = () => (
  <Seo
    title='O nas'
    description='Spoznajte filozofijo in načela, ki stojijo za našimi borilnimi veščinami, ter odkrijte zgodovino našega kluba. Naučite se, kako odpravljamo pogoste predsodke o borilnih veščinah, s poudarkom na kontroliranem vadbenem okolju, ki spodbuja fizični, mentalni in čustveni razvoj. Naš pristop poudarja spoštovanje, samozavest in uravnotežen življenjski slog, ki vam pomaga doseči vaš polni potencial.'
  />
);
