import * as React from 'react';
import Layout from '../components/Layout';

import ContactLine from '../components/ContactLine';
import Meaning from '../components/Meaning';
import ProgramiComponent from '../components/ProgramiComponent';
import Trenerji from '../components/Trenerji';
import Urnik from '../components/Urnik';
import Mapa from '../components/Mapa';
import Seo from '../components/Seo';
import Header from '../components/Header';
import About from '../components/About';
import Achievement from '../components/Achievement';

export default function Home() {
  return (
    <Layout>
      <Header />
      <ContactLine />
      <Meaning />
      <Achievement />
      <About />
      <ProgramiComponent />
      <Trenerji />
      <Urnik />
      <Mapa />
    </Layout>
  );
}

export const Head = ({ location }) => <Seo pathname={location.pathname} />;
