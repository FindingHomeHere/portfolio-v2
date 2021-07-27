import React from 'react';
import Head from 'next/head';

const SEO = ({ title, keywords, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
    </>
  );
};

SEO.defaultProps = {
  title: 'Isaac Johnson, LLC',
  keywords:
    'react, next, javascript, developer, colorado, colorado springs, CO, USA, web development, websites, webapps, react native, mobile app developer',
  description:
    'Isaac Johnson, LLC is a Colorado Springs, CO based software development company specializing in React JS and React Native websites, mobile apps, and web apps.',
};

export default SEO;
