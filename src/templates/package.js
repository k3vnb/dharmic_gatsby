import React from 'react';
import Layout from '../components/layout';
import PackageItemPage from '../components/PackageItemPage/PackageItemPage';

export default ({ pageContext: { strapiId, title, description, price, picture } }) => {
  return (
    <Layout>
      <PackageItemPage
        strapiId={strapiId}
        title={title}
        description={description}
        price={price}
        picture={picture}
      />
    </Layout>
  );
};
