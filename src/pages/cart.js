import React from 'react';
import Layout from '../components/layout';
import CartContainer from '../components/Cart/CartContainer';
import SEO from '../components/seo';

const CartPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Cart" />
    <CartContainer />
  </Layout>
);

export default CartPage;
