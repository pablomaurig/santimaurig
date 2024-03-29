import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// components
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
import Menu from '@material-ui/core/Menu'
import { MdMenu } from "react-icons/md";
import MenuItem from '@material-ui/core/MenuItem'
import logo from '../public/images/logo-santiago-maurig.svg'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  header: {
    boxShadow: '0 3px 5px rgba(0,0,0,.1)',
    backgroundColor: 'white',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    ['@media screen and (min-width: 768px)']: {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
    '& > div:nth-child(1)': {
      justifySelf: 'start',
    },
    '& > div:nth-child(2)': {
      justifySelf: 'center'
    },
    '& > div:nth-child(3)': {
      justifySelf: 'end'
    },
  },
  brand: {
    color: 'black',
    display: 'flex',
  },
  nav: {
    display: 'flex',
  },
  navLink: {
    color: 'black',
    marginLeft: '40px',
    '& .active': {
      color: 'red',
    }
  },
  list: {
    padding: '0',
    display: 'flex',
    minWidth: '130px',
  },
  block: {
    background: 'none',
    width: '100%',
  },
  svgLogo: {
    width: '100px',
    height: '50px',
    ['@media screen and (min-width: 768px)']: {
      width: '80px',
      height: '40px',
    },
    '& svg': {
      width: '100%'
    },
    '& path': {
      fill: '#000'
    },
  }
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }
  const handleScroll = (to) => {
    document.querySelector(`#${to}`).scrollIntoView({behavior: 'smooth'})
  }
  return (<div>
    <AppBar
      elevation={0}
      className='header'
      id='header'
    >
      <Toolbar className={classes.header}>
        <div>
          <Hidden mdUp>
            <IconButton
              style={{ marginLeft: 'auto' }}
              color="inherit"
              aria-controls="menu" aria-haspopup="true" onClick={handleClick}
            >
              <MdMenu />
            </IconButton>
            <Menu
              id="menu"
              keepMounted
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              disableScrollLock={true}
              onClose={handleClose}
            >
              <MenuItem className={classes.list} disableRipple>
                <Button className={classes.block} onClick={() => handleScroll('locucion')}>Locución</Button>
              </MenuItem>
              <MenuItem className={classes.list} disableRipple>
                <Button className={classes.block} onClick={() => handleScroll('doblaje')}>Doblaje</Button>
              </MenuItem>
              <MenuItem className={classes.list} disableRipple>
                <Button className={classes.block} onClick={() => handleScroll('docencia')}>Docencia</Button>
              </MenuItem>
              <MenuItem className={classes.list} disableRipple>
                <Button className={classes.block} onClick={() => handleScroll('contacto')}>contacto</Button>
              </MenuItem>
            </Menu>
          </Hidden>
        </div>
        <div>
          <div className={classes.navBrand}>
            <Link className={classes.navBrand} href={`/`} passHref>
              <a>
                <Image
                  src={logo}
                  width={100}
                  height={50}
                  alt="Santiago Maurig"
                  className={classes.svgLogo}
                  />
                </a>
            </Link>
          </div>
        </div>
        <div className={classes.nav}>
          <Hidden smDown>
            <Typography className={classes.navBar} style={{ marginLeft: 'auto', marginRight: '10px' }}>
              <Button onClick={() => handleScroll('locucion')} className={classes.navLink}>Locución</Button>
            </Typography>
            <Typography className={classes.navBar} style={{ marginRight: '10px' }}>
              <Button onClick={() => handleScroll('doblaje')} className={classes.navLink}>Doblaje</Button>
            </Typography>
            <Typography className={classes.navBar} style={{ marginRight: '10px' }}>
              <Button onClick={() => handleScroll('docencia')} className={classes.navLink}>Docencia</Button>
            </Typography>
            <Typography className={classes.navBar}>
              <Button onClick={() => handleScroll('contacto')} className={classes.navLink}>Contacto</Button>
            </Typography>
          </Hidden>
        </div>
      </Toolbar>
    </AppBar>
  </div>)
}

export default Header