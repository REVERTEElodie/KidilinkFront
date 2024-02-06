import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Home from '@mui/icons-material/Home';
import Person from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/joy/Grid';

import logo from '../../assets/kidiLink_logo_without_title.png';

import './AppHeader.scss';

const AppHeader = () => {
  return (

    <Box component="nav" aria-label="My site" sx={{ flexGrow: 1 }}>
      <List
        role="menubar"
        orientation="horizontal"
        sx={{
          '--List-gap': '5px',
        }}
      >
        <ListDivider />
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="#horizontal-list">
            Accueil
          </ListItemButton>
        </ListItem>
        <ListDivider />
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="#horizontal-list">
            Contact
          </ListItemButton>
        </ListItem>
        <ListDivider />
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="#horizontal-list">
            À propos
          </ListItemButton>
        </ListItem>
        <ListDivider />
        <ListItem role="none" sx={{ marginInlineStart: 'auto' }}>
          <ListItemButton
            role="menuitem"
            component="a"
            href="#horizontal-list"
            aria-label="Profile"
          >
            <Person />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default AppHeader;

/*

    <header className="Header">
      <div>logo</div>
      <div>search bar</div>
      <div>button/icon => fil d'actu</div>
      <div>button connexion/déconnexion</div>
    </header>
    */

/*<*/
