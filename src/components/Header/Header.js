import React, { useState, useEffect, createRef } from 'react';
import { Link, navigate } from 'gatsby';

import { isAuth } from '../../helpers/general';

import AddNotification from '../AddNotification';
import Brand from '../Brand';
import Container from '../Container';
import Config from '../../config.json';
import Drawer from '../Drawer';
import ExpandedMenu from '../ExpandedMenu';
import FormInputField from '../FormInputField/FormInputField';
import Icon from '../Icons/Icon';
import MiniCart from '../MiniCart';
import MobileNavigation from '../MobileNavigation';
import * as styles from './Header.module.css';

const Header = (prop) => {
  // Existing states and variables...

  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5419128939391540";
    script.async = true;
    script.crossOrigin = "anonymous";

    // Append script to the document head
    document.head.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className={styles.root}>
      {/* Existing JSX elements... */}
    </div>
  );
};

export default Header;
