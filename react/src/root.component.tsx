import { OutfitProvider, useOutfit } from '@outfit.io/react';
import { AppPage, AppHeader, AppLogo, GlobalStyle } from './styles';

const Page = () => {
  const { account, team, user, inputs } = useOutfit();
  console.log('account', account);
  console.log('team', team);
  console.log('user', user);
  console.log('inputs', inputs);

  if (!account) {
    return <span>Loading...</span>;
  }

  return (
    <AppPage>
      <AppHeader>
        <AppLogo alt="logo" src="https://outfit-website.vercel.app/burst.svg"/>
        <p>{inputs.text}</p>
      </AppHeader>
    </AppPage>
  );
};

declare global {
  interface Window {
    payload: any;
  }
}

export default function App ({ templateProps = window.payload }){
  return (
    <OutfitProvider templateProps={templateProps}>
      <GlobalStyle />
      <Page />
    </OutfitProvider>
  );
};