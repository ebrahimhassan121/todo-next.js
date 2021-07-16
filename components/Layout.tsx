import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';
import styled from 'styled-components';

import { notify } from '../lib/notify';

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  margin-bottom: 35px;
  flex-direction: column;
`;
const Spacer = styled.div`
  height: 50px;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Head>
        <title>Todo List</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            href={'#'}
            onClick={()=>{}}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" color="inherit">
            <div style={{ paddingLeft: 20 }}>
              <Link href={'/'}>
                <a>ToDo </a>
              </Link>
            </div>
          </Typography>

          <div style={{ flexGrow: 1 }} />

        </Toolbar>
      </AppBar>
      <Spacer />
      <div style={{ padding: 8 }}>
      {children}
      </div>

      <Spacer />
    </Wrapper>
  );
};

export default Layout;
