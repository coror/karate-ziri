import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/Seo';
import { Link } from 'gatsby';

function Programi() {
  return (
    <Layout>
      <div className='relative font-oswald py-10 md:py-40 bg-layout2 text-text1'>
        <div
          className=' flex flex-col items-center justify-center p-8'
          id='otroci'
        >
          <div className='relative flex items-center flex-col'>
            <div className='flex flex-col items-center justify-center mb-10'>
              <h1 className='text-4xl font-extrabold text-center tracking-wide'>
                PRIJAZNA ŠOLA KARATEJA
              </h1>
              <div className='border-b-4 border-identifier w-16 mt-5'></div>
            </div>
            <div className='flex 2xl:flex-row flex-col'>
              <div className='relative max-w-[60rem] md:mt-10 mb-10'>
                <StaticImage
                  src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723120143/karate-kickbox-ostalo/c9csacfflvwpgpmxugx3.jpg'
                  alt='prijazna-sola'
                  className='max-w-[60rem] h-auto rounded-sm shadow-lg filter brightness-90 contrast-125  animate-fade-right animate-duration-1000 animate-delay-1500'
                />
              </div>
              <div className='md:mt-10 flex flex-col items-center 2xl:block  animate-fade-right animate-duration-1000 animate-delay-1000'>
                <p className='max-w-[50rem] md:text-lg md:mx-10 text-center'>
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
                <p className='max-w-[50rem] md:text-lg md:mx-10 text-center mt-10'>
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
                <div className='flex flex-col md:flex-row items-center justify-center'>
                  <div className='text-center max-w-[40rem] pt-10'>
                    <div className='text-xl mb-7 underline'>
                      Glavni učinki vadbe po programu Prijazna šola karateja in
                      programu Karate za mladostnike:
                    </div>
                    <ul>
                      <li className='mb-5 text-lg font-semibold'>
                        POVEČANJE SAMOZAVESTI
                      </li>
                      <p className='mb-5 md:text-lg'>
                        Vadba karateja je odličen način za krepitev samozavesti
                        pri otrocih in mladostnikih. Sistematično učenje novih
                        tehnik in premagovanje izzivov na treningih prispeva k
                        občutku dosežkov, kar ima pozitiven vpliv na otrokovo
                        samopodobo.
                      </p>
                      <li className='mb-5 text-lg font-semibold md:text-lg'>
                        SPRETNOSTI SAMOOBRAMBE
                      </li>
                      <p className='mb-5 md:text-lg'>
                        Karate ni le šport, temveč tudi učinkovita metoda
                        samoobrambe. Otroci se učijo različnih tehnik, ki jim
                        lahko pomagajo v primeru morebitnih neprijetnih
                        situacij. Razvijanje teh spretnosti povečuje otrokovo
                        občutje varnosti in mu daje znanje, kako se zaščititi
                        pred medvrstniškim nasiljem.
                      </p>
                      <li className='mb-5 text-lg font-semibold'>
                        VADBA ZA CELOTNO TELO
                      </li>
                      <p className='mb-5 md:text-lg'>
                        Karate je celostna vadba, ki vključuje različne mišične
                        skupine. Otroci razvijajo moč, vzdržljivost, gibljivost
                        in koordinacijo. Redna vadba karateja spodbuja zdrav
                        življenjski slog in prispeva k celostnemu fizičnemu
                        razvoju. Zaradi kompleksnih gibov in pestrega nabora
                        vaj, ki so vključene v vadbeni proces, pa prestavlja
                        tudi zelo dobro osnovo za kasnejše vključevanje v druge
                        športe.
                      </p>
                      <li className='mb-5 text-lg font-semibold'>
                        SOCIALNE VEŠČINE IN EKIPNO DELO
                      </li>
                      <p className='mb-5 md:text-lg'>
                        Karate nudi priložnost za druženje in sodelovanje z
                        vrstniki. Skupaj s treningi se učijo tudi o pomenu
                        spoštovanja, discipline, urejenosti, sodelovanja in
                        ekipnega dela. To prispeva k razvoju socialnih veščin,
                        ki so pomembne za uspešno interakcijo v vsakdanjem
                        življenju.
                      </p>
                      <li className='mb-5 text-lg font-semibold'>
                        RAZVIJANJE DISCIPLINE IN VZTRAJNOSTI
                      </li>
                      <p className='mb-5 md:text-lg'>
                        Redni treningi karateja zahtevajo disciplino in
                        vztrajnost. Učijo se postavljati cilje, delati na njih
                        in premagovati ovire. To so ključne veščine, ki jim bodo
                        koristile v šoli, doma in v življenju.
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=' flex flex-col items-center justify-center mt-10 md:mt-24'>
            <div
              className='relative flex items-center flex-col'
              id='mladostniki'
            >
              <div className='flex flex-col items-center justify-center mb-10'>
                <h1 className='text-4xl font-extrabold text-center tracking-wide'>
                  KARATE ZA MLADOSTNIKE
                </h1>
                <div className='border-b-4 border-identifier w-16 mt-5'></div>
              </div>
              <div className='flex 2xl:flex-row flex-col'>
                <div className='relative max-w-[60rem] md:mt-10 mb-10'>
                  <StaticImage
                    src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723120141/karate-kickbox-ostalo/twu2cwkbmrwl36kqdhu8.jpg'
                    alt='karate-mladostniki'
                    className='max-w-[60rem] h-auto rounded-sm shadow-lg filter brightness-90 contrast-125  animate-fade-right animate-duration-1000 animate-delay-1500'
                  />
                </div>
                <div className='md:mt-10 flex flex-col items-center 2xl:block  animate-fade-right animate-duration-1000 animate-delay-1000'>
                  <p className='max-w-[50rem] md:text-lg md:mx-10 text-center'>
                    Program je prilagojen mladostnikom od 12. do 16. leta
                    starosti. Eden izmed glavnih ciljev tega rekreativnega
                    programa je, da mladostniki s 16 leti lahko opravijo izpit
                    za črni pas, kjer morajo predstaviti kompleksno tehnično in
                    borbeno znanje karateja. Program je smiselno nadaljevanje
                    programa Prijazna šola karateja, lahko pa se mu priključijo
                    tudi mladostniki, ki z vadbo karateja začnejo kasneje.
                    Vadeči so vključeni v redna letna testiranja gibalnih
                    sposobnosti, tekmujejo lahko na regionalnih tekmovanjih,
                    učijo se samoobrambnih elementov in tehnik. Podobno kot pri
                    Prijazni šoli karateja, mladostnike motiviramo za delo v
                    klubu in šoli s pomočjo motivacijske igre. Motivacijska igra
                    JOKER smiselno nadaljuje Album zmajski bojevnik in je
                    prilagojena mladostnikom. Digitalno okolje uporablja za
                    motiviranje vadečih pri doseganju boljših rezultatov v šoli
                    in pri karateju. Jokerja je mogoče osvojiti z dobrimi
                    ocenami v šoli, dobrimi rezultati na testiranju gibalnih
                    sposobnosti ali s pomočjo na treningih in tekmovanjih
                  </p>
                  <div className='flex flex-col md:flex-row items-center justify-center'>
                    <div className='text-center max-w-[40rem] pt-10'>
                      <div className='text-xl mb-7 underline'>
                        Glavni učinki vadbe po programu Prijazna šola karateja
                        in programu Karate za mladostnike:
                      </div>
                      <ul>
                        <li className='mb-5 text-lg font-semibold'>
                          POVEČANJE SAMOZAVESTI
                        </li>
                        <p className='mb-5 md:text-lg'>
                          Vadba karateja je odličen način za krepitev
                          samozavesti pri otrocih in mladostnikih. Sistematično
                          učenje novih tehnik in premagovanje izzivov na
                          treningih prispeva k občutku dosežkov, kar ima
                          pozitiven vpliv na otrokovo samopodobo.
                        </p>
                        <li className='mb-5 text-lg font-semibold md:text-lg'>
                          SPRETNOSTI SAMOOBRAMBE
                        </li>
                        <p className='mb-5 md:text-lg'>
                          Karate ni le šport, temveč tudi učinkovita metoda
                          samoobrambe. Otroci se učijo različnih tehnik, ki jim
                          lahko pomagajo v primeru morebitnih neprijetnih
                          situacij. Razvijanje teh spretnosti povečuje otrokovo
                          občutje varnosti in mu daje znanje, kako se zaščititi
                          pred medvrstniškim nasiljem.
                        </p>
                        <li className='mb-5 text-lg font-semibold'>
                          VADBA ZA CELOTNO TELO
                        </li>
                        <p className='mb-5 md:text-lg'>
                          Karate je celostna vadba, ki vključuje različne
                          mišične skupine. Otroci razvijajo moč, vzdržljivost,
                          gibljivost in koordinacijo. Redna vadba karateja
                          spodbuja zdrav življenjski slog in prispeva k
                          celostnemu fizičnemu razvoju. Zaradi kompleksnih gibov
                          in pestrega nabora vaj, ki so vključene v vadbeni
                          proces, pa prestavlja tudi zelo dobro osnovo za
                          kasnejše vključevanje v druge športe.
                        </p>
                        <li className='mb-5 text-lg font-semibold'>
                          SOCIALNE VEŠČINE IN EKIPNO DELO
                        </li>
                        <p className='mb-5 md:text-lg'>
                          Karate nudi priložnost za druženje in sodelovanje z
                          vrstniki. Skupaj s treningi se učijo tudi o pomenu
                          spoštovanja, discipline, urejenosti, sodelovanja in
                          ekipnega dela. To prispeva k razvoju socialnih veščin,
                          ki so pomembne za uspešno interakcijo v vsakdanjem
                          življenju.
                        </p>
                        <li className='mb-5 text-lg font-semibold'>
                          RAZVIJANJE DISCIPLINE IN VZTRAJNOSTI
                        </li>
                        <p className='mb-5 md:text-lg'>
                          Redni treningi karateja zahtevajo disciplino in
                          vztrajnost. Učijo se postavljati cilje, delati na
                          dosegi ciljev in premagovati ovire. To so ključne
                          veščine, ki jim bodo koristile v šoli, doma in v
                          življenju.
                        </p>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=' flex flex-col items-center justify-center mt-10 md:mt-24'>
            <div className='relative flex items-center flex-col' id='odrasli'>
              <div className='flex flex-col items-center justify-center mb-10'>
                <h1 className='text-4xl font-extrabold text-center tracking-wide'>
                  KARATE ZA ODRASLE
                </h1>
                <div className='border-b-4 border-identifier w-16 mt-5'></div>
              </div>
              <div className='flex 2xl:flex-row flex-col'>
                <div className='relative max-w-[60rem] md:mt-10 mb-10'>
                  <StaticImage
                    src='https://res.cloudinary.com/di4ms4xaz/image/upload/v1723128682/karate-kickbox-ostalo/osjgatd9s3ibq0ec75wq.jpg'
                    alt='karate practice'
                    className='max-w-[60rem] h-auto rounded-sm shadow-lg filter brightness-90 contrast-125  animate-fade-right animate-duration-1000 animate-delay-1500'
                  />
                </div>
                <div className='md:mt-10 flex flex-col items-center 2xl:block  animate-fade-right animate-duration-1000 animate-delay-1000'>
                  <p className='max-w-[50rem] md:text-lg md:mx-10 text-center'>
                    V Karate klubu Žiri organiziramo program Karateja za
                    odrasle, ki je prilagojen rekreativni vadbi. Vsebina
                    programa je oblikovana na osnovi naših dolgoletnih izkušenj
                    s področja poučevanja in raziskovanja borilnih veščin in
                    drugih telesnih tehnik. Vadba učinkuje na boljšo fizično
                    pripravljenost, boljšo aerobno in anaerobno vzdržljivost,
                    povečanje naše gibljivosti, izboljšanje drže, odpravo
                    kroničnih mišičnih napetosti in bolečin, izboljšanje
                    pozornosti in boljše soočanje s stresnimi situacijami. Vadba
                    je primerna za vse starosti, za moške in ženske. Vsebuje
                    raztezne vaje, vaje za moč, izvajanje karate elementov, ki
                    nam pomagajo pri izboljšanju motorične kontrole nad našim
                    telesom. Na osnovi daljših borbenih zaporedij – kat,
                    izboljšamo našo orientacijo v prostoru. S pomočjo
                    nekontaktne borbe pa se učimo prepoznavati naše odzive ter
                    ohranjati mirnost in osredotočenost tudi v stresnih
                    situacijah. Vadeči lahko opravljajo izpite za pasove in v 5
                    do 6 letih opravijo izpit za črni pas, ki je lahko dodaten
                    motivacijski faktor za vadbo. Udeležijo se lahko tudi
                    testiranj gibalnih sposobnosti, s katerimi lahko preverijo
                    svojo trenutno fizično pripravljenost.
                  </p>
                  <div className='flex flex-col md:flex-row items-center justify-center'>
                    <div className='text-center max-w-[40rem] pt-10'>
                      <div className='text-xl mb-7 underline'>
                        Glavni učinki vadbe po programu Karate za odrasle:
                      </div>
                      <ul>
                        <li className='mb-5 text-lg font-semibold'>
                          POVEČANJE SAMOZAVESTI IN BOLJŠE SOOČANJE S STRESOM
                        </li>
                        <p className='mb-5 md:text-lg'>
                          Vadba karateja je odličen način za krepitev
                          samozavesti pri odraslih. Boljša fizična
                          pripravljenost, gibljivost, učenje sproščenega in
                          učinkovitega gibanja, premagovanje strahu v borbenih
                          situacijah ter ohranjanje mirnega in osredotočenega
                          uma pripomorejo k večji samozavesti in lažjem soočanju
                          s stresnimi situacijami v vsakdanjem življenju.
                        </p>
                        <li className='mb-5 text-lg font-semibold md:text-lg'>
                          SPRETNOSTI SAMOOBRAMBE
                        </li>
                        <p className='mb-5 md:text-lg'>
                          Karate poleg različnih napadalnih in obrambnih
                          elementov vsebuje tudi učinkovite metode samoobrambe.
                          Med vadbo se naučimo različnih tehnik, ki nam lahko
                          pomagajo v morebitnih neprijetnih situacijah.
                          Razvijanje teh spretnosti povečuje vaše občutje
                          varnosti in vam daje znanje, kako se zaščititi.
                        </p>
                        <li className='mb-5 text-lg font-semibold'>
                          VADBA ZA CELOTNO TELO IN PSIHO
                        </li>
                        <p className='mb-5 md:text-lg'>
                          Karate je celostna vadba, s katero razvijamo tako
                          telesne kot naše psihične sposobnosti. Med vadbo
                          karateja razvijamo moč, vzdržljivost, gibljivost in
                          koordinacijo, osredotočenost, pozornost, sproščenost
                          in še mnogo drugih sposobnosti, ki nam omogočajo
                          kvalitetno in polno življenje v različnih starostnih
                          obdobjih.
                        </p>

                        <li className='mb-5 text-lg font-semibold'>
                          RAZVIJANJE DISCIPLINE IN VZTRAJNOSTI
                        </li>
                        <p className='mb-5 md:text-lg'>
                          Redni treningi karateja zahtevajo disciplino in
                          vztrajnost ter popolno osredotočenost med vadbo, kar
                          je lahko dobra osnova za soočanje z vsakodnevnimi
                          izzivi, s katerimi se srečujemo ob študiju, na
                          delovnem mestu in drugih izzivih v našem življenju.
                        </p>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='text-center mt-14 z-50'>
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
}

export default Programi;

export const Head = () => (
  <Seo
    title='Programi'
    description='
Odkrijte našo raznoliko ponudbo karate programov za otroke, mladostnike in odrasle, zasnovanih za vse ravni izkušenj in telesne pripravljenosti. Naši strokovni trenerji nudijo osebno usmerjanje in podporo, da vam pomagajo razviti veščine, samozavest in kondicijo ter doseči vaše cilje v karateju.'
  />
);
