import React from 'react';
import Navbar from './Components/Navbar';
import menuConfig from '../_config/menu';

// eslint-disable-next-line
const brand = {
  title: 'Hacker News',
  href: 'https://whn.evisbregu.com',
};
// Primary: Nav background,
// Secondary: Borders, highlights, dropdowns
// primaryText: all on the primary background,
// secondaryText: all text on the secondary color

const theme1 = {
  primary: '#F2742B',
  secondary: '#2BD9FE',
  text: 'white',
};

const Test = () => (
  <div>
    <Navbar theme={theme1} items={menuConfig} />
  </div>
);

export default Test;
