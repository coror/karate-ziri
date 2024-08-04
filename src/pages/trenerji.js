import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/Seo';
import { Link } from 'gatsby';

const Trenerji = () => {
  return (
    <Layout>
      <div className='bg-layout2 font-oswald  2xl:px-[24rem] px-9   py-10 md:py-40'>
        <div className='flex flex-col items-center justify-center mb-10 pt-8'>
          <h1 className='text-3xl font-bold text-center text-text1'>
            TRENERJI
          </h1>
          <div className='border-b-4 border-identifier w-12 text-center mt-5'></div>
        </div>
        <div className='flex flex-col justify-center items-center '>
          {/*Trener 1 */}
          <div className='flex md:flex-row flex-col max-w-[60rem] items-center xl:items-start' id='jernej'>
            <div className='max-w-80 md:mr-9 min-w-80'>
              <StaticImage
                src='https://res.cloudinary.com/dbssbnuph/image/upload/t_benjamin4/v1720821140/kickbox-ziri/nejc2_k2jmjg.jpg'
                alt='jernej'
                className='w-full h-full max-h-80 rounded-full animate-fade-right animate-duration-1000 animate-delay-3000'
              />
            </div>
            <div className=' text-layout1    animate-fade-right animate-duration-1000 animate-delay-1000'>
              <h1 className=' text-2xl '>dr. Jernej Sever</h1>
              <p className='text-text1 mb-10'>
                Predsednik kluba in trener odraslih skupin
              </p>
              <p className=' md:text-lg'>
                Jernej Sever je vodja Centra premik v Ljubljani in glavni trener
                Karate instituta, ki je eden najštevilčnejših tovrstnih društev
                pri nas. Je predsednik tehnične komisije v Karate zvezi
                Slovenije in vodi izobraževalne programa za vaditelje in
                trenerje karateja. Pripravlja in vodi delavnice ter seminarje na
                temo boljšega soočanja s stresom, spoznavanja različnih telesnih
                tehnik in vzpostavljanja telesnega in čustvenega ravnovesja. Je
                tudi soustanovitelj zagonskega podjetja Mojespretnosti. Leta
                2006 je magistriral iz področja filozofije, pomemben del
                magistrske naloge je bil narejen tudi na biotehnični fakulteti,
                iz področja nevrobiologije in etologije. Leta 2015 pa je
                doktoriral s področja kognitivne znanosti. Glavni področji
                njegovega raziskovanja sta predvsem kineziologija in kognitivna
                znanost. S karatejem se je začel ukvarjati že pri 6 letih
                starosti. V svoji tekmovalni karieri je osvojil več državnih
                naslovov v katah in borbah ter bil stalni član slovenske
                mladinske in članske reprezentance. Največja tekmovalna uspeha
                sta 2. mesto na karate univerzijadi v Nantesu (Francija) ter 3.
                mesto na svetovnem JKA prvenstvu v Cardiffu (Velika Britanija).
                Iz področja borilnih veščin, meditacije in telesnih tehnik se je
                izobraževal pri različnih učiteljih iz celega sveta (Dušan
                Dačič/Srbija, Daniele Boffeli/Italija, Irie Hirokazu/Japonska).
                Leta 2005 je v Švici pod okriljem JKA zveze opravil izpit za
                mojstra črnega pasu 3. DAN. Več kot 10 let se aktivno ukvarja
                tudi z vadbo taijiquana. Zadnjih pet let se posveča tudi
                znanstvenemu raziskovanju osnovnih principov te kitajske borilne
                veščine. Taijiquan vadi z Žigom Tršarjem, ustanoviteljem Taiji
                inštituta pri nas. Žiga je učenec mojstra Zeng Xiangboa iz
                Tajvana. V letu 2013 je svoje raziskovalno delo predstavil tudi
                na Kulturni univerzi v Tajpeju na Tajvanu, na Oddelku za borilne
                veščine, kjer so raziskave sprejeli z velikim zanimanjem.
              </p>
            </div>
          </div>

          <div className='flex md:flex-row flex-col max-w-[60rem] mt-20 items-center xl:items-start' id='erin'>
            <div className='max-w-80 md:mr-9  min-w-80'>
              <StaticImage
                src='https://res.cloudinary.com/dbssbnuph/image/upload/f_auto,q_auto/v1/kickbox-ziri/erin_pwgu7l'
                alt='erin'
                className='w-full h-full max-h-80 rounded-full animate-fade-right animate-duration-1000 animate-delay-3000'
              />
            </div>
            <div className=' text-layout1    animate-fade-right animate-duration-1000 animate-delay-1000'>
              <h1 className=' text-2xl '>Erin Ćoralić</h1>
              <p className='text-text1 mb-10'>
                Trener otroških in tekmovalnih skupin
              </p>
              <p className=' md:text-lg'>
                Erin je diplomirani violinist. Dodiplomski študij je obiskoval v
                Londonu na Guildhall School of Music and Drama. Po zaključenem
                študiju v Londonu se je vrnil v Idrijo in začel aktivno
                delovati, sprva kot trener Kickboksa, nato pa tudi kot trener
                karateja, v sklopu Karate kluba Kolektor Idrija. S karatejem se
                je začel ukvarjati pri šestih letih. Udeleževal se je številnih
                državnih in mednarodnih tekmovanj, kjer je bil zelo uspešen. V
                sklopu državnih tekmovanj je večkrat osvojil zlato. V srednji
                šoli je začel trenirati kickboks, v študentskih letih pa Muay
                Thai (tajski boks). Po vrnitvi v Idrijo je njegova pot ostala
                tesno prepletena z borilnimi veščinami, tokrat v drugačni vlogi.
                Leta 2018 je začel voditi treninge kickboksa, naslednje leto pa
                je z opravljenim usposabljanjem za vaditelja karateja, začel
                delovati tudi kot trener karateja. Trenutno je trener kickboksa
                v Idriji in v Žireh ter karate trener tekmovalcev ter
                rekreativnih skupin v Idriji, Črnem Vrhu, Spodnji Idriji in
                Žireh.
              </p>
            </div>
          </div>

          <div className='flex md:flex-row flex-col max-w-[60rem] mt-20 items-center xl:items-start' id='benjamin'>
            <div className='max-w-80 md:mr-9 min-w-80'>
              <StaticImage
                src='https://res.cloudinary.com/dbssbnuph/image/upload/t_benjamin4/v1720820700/kickbox-ziri/benjamin_p8erry.jpg'
                alt='erin'
                className='w-full h-full max-h-80 rounded-full animate-fade-right animate-duration-1000 animate-delay-3000'
              />
            </div>
            <div className=' text-layout1   animate-fade-right animate-duration-1000 animate-delay-1000'>
              <h1 className=' text-2xl '>Benjamin Bajuk</h1>
              <p className='text-text1 mb-10'>Trener odraslih skupin</p>
              <p className=' md:text-lg'>
                Delo v klubu: pomočnik trenerja tekmovalnih in rekreativnih
                skupin Od športov ga je najprej pritegnil nogomet, katerega je
                začel trenirati pri šestih letih. Po treh letih je svoje
                zanimanje preusmeril v atletiko, kasneje pa ga je povleklo k
                akrobatiki, katero je treniral do trinajstega leta. Nadaljeval
                je s košarko vse do drugega letnika srednje šole. Po vseh teh
                letih treniranja je ugotovil, da so mu najbolj všeč športi, pri
                katerih je odvisen samo od sebe in se mora za uspeh ter dober
                rezultat zanesti nase. Zato se je začel poljubno ukvarjati z
                boksom. Pri sedemnajstih se je včlanil v Kickbox Žiri in kot
                pomočnik trenerja pomagal pri treningih. Sedaj pa kot trener že
                tri leta poučuje začetniške skupine. Delo z otroki in
                mladostniki mu ne predstavlja nobenih težav ali povzroča stresa,
                saj je velikokrat pomagal oziroma bil animator na različnih
                dogodkih.
              </p>
            </div>
          </div>
        </div>
        <div className='text-center mt-14 z-50'>
          <Link
            to='/vpis'
            className='bg-identifier border-identifier border-4 border-inidentifierstitute rounded-sm py-3 px-6 text-xl cursor-pointer hover:text-text1 hover:bg-transparent transition-colors duration-200 ease-in-out'
          >
            Pridruži se nam!
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Trenerji;

export const Head = () => (
  <Seo
    title='Trenerji'
    description='Spoznajte našo ekipo profesionalnih trenerjev, ki so predani temu, da vam pomagajo doseči vaše fitnes cilje. Naši trenerji so izkušeni, certificirani in strastni pri zagotavljanju osebnega vodenja in podpore za vaš uspeh.'
  />
);
