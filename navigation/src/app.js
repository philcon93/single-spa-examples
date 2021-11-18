import React, { useEffect } from "react";
import { OutfitProvider, useOutfit } from '@outfit.io/react';
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import { links } from "./links.helper.js";

const Page = () => {
  const { inputs } = useOutfit();
  let history = useHistory();

  useEffect(() => {
    switch(inputs.template) {
      case 'vanilla':
        history.push("/vanilla");
        break;
      case 'vue':
        history.push("/vue");
        break;
      case 'react':
        history.push("/react");
        break;
      default:
        history.push("/");
    }
  }, [inputs.template]);


  return null;

  return (
    <>
      <Link to={'/'} style={{ color: 'white'}}>Home</Link>{' '}
      {links.map((link) => {
        return (
          <>
          <Link key={link.href} to={link.href} style={{ color: 'white'}}>
            {link.name}
          </Link>{' '}
          </>
        );
      })}
    </>
  );
}

export default function Root({ templateProps = window.payload }){
  return (
    <OutfitProvider templateProps={templateProps}>
      <Router>
        <Page />
      </Router>
    </OutfitProvider>
  );
};