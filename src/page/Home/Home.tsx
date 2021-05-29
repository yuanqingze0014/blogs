import React, { Fragment, useEffect } from "react";
import Layout from '@/components/Layout/Index.tsx'

const Home: React.FC = (props) => {
  return (
    <Fragment  >
      <Layout {...props} />
    </Fragment>
  );
}
export default Home