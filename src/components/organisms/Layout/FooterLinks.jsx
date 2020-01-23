import React from 'react';
import { theme, Box, Text } from 'components/atoms';

const LinkItems = ({ links }) => {
  return links.map(linkItem => {
    return (
      <li key={linkItem.name}>
        <Text
          className="subtitle1"
          color={theme.naturalDark}
          as="a"
          href={linkItem.link}
        >
          {linkItem.name}
        </Text>
      </li>
    );
  });
};

const FooterLinks = () => {
  const footerLinks = {
    links: [
      {
        name: 'GitHub',
        link: 'https://github.com/t-keshi-inoue',
      },
      {
        name: 'Portfolio',
        link: 'https://competent-keller-885d6c.netlify.com/',
      },
      {
        name: 'Wantedly',
        link: 'https://www.wantedly.com/users/115684148',
      },
    ],
    techLog: [
      {
        name: 'Log1',
        link: 'https://101378.qrunch.io/entries/SU2orLU1to7MPyvJ',
      },
      {
        name: 'Log2',
        link: './',
      },
      {
        name: 'Log3',
        link: './',
      },
    ],
  };
  return (
    <Box className="fill">
      <Box grow={1} basis="200px" className="vertical">
        <Text className="h3" as="h2" color={theme.light}>
          Livrio
        </Text>
        <Text className="subtitle1" color={theme.naturalDark}>
          web created by Takeshi Inoue
        </Text>
      </Box>
      <Box basis="240px">
        <Box className="vertical">
          <Text className="h6" as="h5" color={theme.light}>
            TechLog
          </Text>
          <LinkItems links={footerLinks.techLog} />
        </Box>
        <Box className="vertical">
          <Text className="h6" as="h5" color={theme.light}>
            Links
          </Text>
          <LinkItems links={footerLinks.links} />
        </Box>
      </Box>
    </Box>
  );
};

export default FooterLinks;
