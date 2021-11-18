import { OutfitProvider, useOutfit } from '@outfit.io/react';
import { Styles } from './styles';

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
    <>
    <Styles />
    <div className="App">
      <header className="App-header">
        <img className="App-logo" alt="logo" src="https://outfit-website.vercel.app/burst.svg"/>
        <p>{inputs.text}</p>
      </header>
    </div>
    </>
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
      <Page />
    </OutfitProvider>
  );
};