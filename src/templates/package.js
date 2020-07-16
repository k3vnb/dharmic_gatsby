import React from 'react';
import Layout from '../components/layout';
import PackageItemPage from '../components/PackageItemPage/PackageItemPage';

export default ({ pageContext: { title, description, price } }) => {
  return (
    <Layout>
      <PackageItemPage
        title={title}
        description={description}
        price={price}
      />
    </Layout>
  );
};
