require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `oswald\:400,500,600,700`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        // type: `twitter`,
        maxResults: 50,
        // tags: true,
        // context: true,
        type: 'upload',
        prefix: `karate-ziri-galerija/`, // specify the folder,
      },
    },
  ],
  siteMetadata: {
    title: 'Karate Žiri',
    description:
      'Karate klub Žiri ponuja raznolike in zabavne karate programe za otroke, mladostnike in odrasle v Žireh. Naši izkušeni trenerji zagotavljajo celovito vadbo, ki krepi samozavest, izboljšuje samoobrambne spretnosti in spodbuja zdrav življenjski slog. Pridružite se nam in doživite prednosti karateja v prijetnem in spodbudnem okolju.',
    siteUrl: 'https://www.karate-ziri.si',
  },
};
