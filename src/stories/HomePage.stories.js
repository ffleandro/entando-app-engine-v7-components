import React from 'react';

import { BANNERS, PRODUCT_CATEGORIES } from '../mocks';
import styles from '../styles/Home.module.css';
import Banner from '../widgets/Banner';
import Footer from '../widgets/Footer';
import Header from '../widgets/Header';
import Menu from '../widgets/Menu';
import ProductCard from '../widgets/ProductCard';

export default {
  title: 'Pages/Home',
  component: ProductCard,
};

const products = [
  {
    id: '1',
    category: 'Watch',
    price: '1599',
    title: 'Apple Watch Series 3 38mm Spacial Gray',
    images: [
      'http://quickstart-release-e6-3-0.apps.rd.entando.org/entando-de-app/cmsresources/cms/images/watch01_d3.jpg',
    ],
  },
  {
    id: '2',
    category: 'light',
    price: '359',
    title: 'Echo Dot 3rd Gen Smart Speaker with Alexa + Smart Light Home Smart',
    images: [
      'http://quickstart-release-e6-3-0.apps.rd.entando.org/entando-de-app/cmsresources/cms/images/lampada01_d3.jpg',
    ],
  },
  {
    id: '3',
    category: 'tv',
    price: '2599',
    title: 'TV 55 LG Led 4k Smart Wifi Nano Cell',
    images: [
      'http://quickstart-release-e6-3-0.apps.rd.entando.org/entando-de-app/cmsresources/cms/images/tv01_d3.jpg',
    ],
  },
];

const Template = () => (
  <div>
    <Header />
    <Menu categories={PRODUCT_CATEGORIES} />
    <Banner banners={BANNERS} />

    <main className={styles.main}>
      <h2 className={styles.title}>{'Daily Offers'}</h2>
      <div className={styles.productList}>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </main>

    <Footer />
  </div>
);

export const Standard = Template.bind({});
Standard.args = {};
