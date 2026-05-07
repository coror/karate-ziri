import React from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';
import logo from '../../images/logo-modified.png';

const SITE_NAME = 'Karate Klub Žiri';

const Seo = ({ title, description, pathname, image, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
  } = useSiteMetadata();

  const fullTitle = title ? `${title} | ${SITE_NAME}` : defaultTitle;

  const seo = {
    title: fullTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ''}`,
    image:
      image ||
      'https://res.cloudinary.com/di4ms4xaz/image/upload/v1723132669/karate-kickbox-ostalo/jh5smtpg6y1thbufidch.jpg',
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name='description' content={seo.description} />

      {/* Open Graph */}
      <meta property='og:title' content={seo.title} />
      <meta property='og:description' content={seo.description} />
      <meta property='og:image' content={seo.image} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta property='og:url' content={seo.url} />
      <meta property='og:type' content='website' />
      <meta property='og:locale' content='sl_SI' />
      <meta property='og:site_name' content={SITE_NAME} />

      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={seo.title} />
      <meta name='twitter:description' content={seo.description} />
      <meta name='twitter:image' content={seo.image} />
      <meta name='twitter:url' content={seo.url} />

      <link rel='icon' href={logo} />
      {children}
    </>
  );
};

export default Seo;
