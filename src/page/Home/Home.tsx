import React, { Fragment, useEffect } from "react";
import Layout from '@/components/Layout/Index.tsx'
import { IRouerItem } from '@/@type/router.ts'

type Iprops = {
  routes: IRouerItem
}

const Home: React.FC = (props: Iprops) => {

  return (
    <Fragment  >
      <Layout />
    </Fragment>
  );
}
export default Home