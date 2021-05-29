import React, { useState, Suspense } from "react";
import { observer, useObserver } from "mobx-react";
import { IntlProvider } from 'react-intl'; // 配置国际化
import { HashRouter } from 'react-router-dom';
import styled from 'styled-components';
import useStore from '@/context/useStore';
import RouterView from "@/router/RouterView";
import routerConfig from '@/router/index.ts';

const Container: React.FC = observer(() => {
  const { LanguageStore } = useStore();

  return (
    < div className="App" >
      <Suspense fallback={<LoadingWrapper><div>Loading profile...</div></LoadingWrapper>}>
        <IntlProvider locale={LanguageStore.locale} messages={LanguageStore.defaultLanguage} >
          <HashRouter>
            <RouterView routes={routerConfig.routes} ></RouterView>
          </HashRouter>
        </IntlProvider>
      </Suspense>
    </div >)
})

export default Container;

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  background:#fff;
  display: grid;
  justify-content: center;
  align-items:center;
`

