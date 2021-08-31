import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
  boxLocucion: {
    backgroundColor: '#eaf3ed',
    backgroundSize: 'cover',
    backgroundBlendMode: 'screen',
    backgroundPosition: 'center',
  },
  boxProgramas: {
    backgroundSize: 'cover',
    backgroundPositionX: 'center',
  },
  boxDoblaje: {
    backgroundColor: '#ffffff',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'screen',
  },
  boxDocencia: {
    backgroundSize: 'cover',
    backgroundColor: '#f4f0df',
    backgroundPositionX: 'center',
  },
  boxContacto: {
    backgroundSize: 'cover',
    backgroundColor: '#ffffff',
    backgroundPositionX: 'right',
    backgroundPositionY: 'bottom',
    ['@media screen and (min-width: 768px)']: {
      '& .MuiTypography - h5': {
        fontSize: '2.125rem'
      },
      '& .span': {
        fontSize: '1.3rem',
      },
      '& .email': {
        fontSize: '1.4rem'
      },
    },
  },
  box1985: {
    backgroundSize: 'cover',
    backgroundColor: '#FFE3E5',
    backgroundPositionX: 'center',
  },
  container: {
    '& .MuiTypography-h1, .MuiTypography-h2, .MuiTypography-h3, .MuiTypography-h4, .MuiTypography-h5, .MuiTypography-h6': {
      fontFamily: '"Oswald", Arial, Helvetica, sans-serif',
    },
    '& .MuiTypography-body1': {
      fontFamily: '"Roboto Condensed", sans-serif',
    },
    '& .img-responsive': {
      width: '100%',
      height: 'auto',
    },
    '& .enjoy': {
      fontSize: '2em',
      lineHeight: '1.2em',
      marginBottom: '1.5rem',
    },
    '& .love': {
      fontSize: '1.7em',
      lineHeight: '1.2em',
      color: '#fff',
      background: '#000',
      display: 'inline-flex',
      padding: '3px 5px',
    },
    '& .workLove': {
      fontSize: '1.85em',
      lineHeight: '1.2em',
      '& p': {
        marginBottom: '0.2rem',
      }
    },
    ['@media screen and (max-width: 500px)']: {
      '& .enjoy': {
        fontSize: '1.5em',
      },
      '& .workLove, .love': {
        fontSize: '1.1em',
      }
    },
    ['@media screen and (min-width: 768px)']: {
      '& .box-programa': {
        paddingTop: '1.5em!important',
      }
    },
    ['@media screen and (min-width: 980px)']: {
      '& .workTitle': {
        fontSize: '2.9rem',
      }
    },
    ['@media screen and (min-width: 600px)']: {
      '& .doblaje-item': {
        order: 2,
        '& *': {
          textAlign: 'right',
        }
      }
    },
    '& .experience': {
      background: 'black',
      display: 'inline-flex',
      color: '#fff',
      lineHeight: '1.3em',
      padding: '0 .2em',
      fontFamily: '"Roboto Condensed", sans-serif',
    },
    '& .object': {
      maxWidth: '780px',
      '& .span': {
        '& span': {
          fontSize: '1.4em',
          background: 'black',
          color: '#fff',
          letterSpacing: '0.1em',
        }
      }
    },
    '& #docencia p': {
      fontSize: '1.2rem',
    },
    '& .svg-logo': {
      width: '160px',
      ['@media screen and (min-width: 540px)']: {
        width: '220px',
      },
      height: 'auto',
      '& svg': {
        width: '100%',
      },
      '& path': {
        fill: '#000',
      }
    },
    '& .ic-contact': {
      display: 'flex',
      alignItems: 'center',
      '& span': {
        marginLeft: '.5em',
      }
    },
    '& .network': {
      display: 'flex',
      alignItems: 'center',
      '& a': {
        marginRight: '.5em',
        fontSize: '2em',
      }
    },
    '& .squareButton': {
      borderRadius: 0,
      border: '6px solid black',
      fontWeight: 'bold',
      fontSize: '1.3rem',
      padding: '.1rem 2.2rem',
    },
    '& .link': {
      cursor: 'pointer',
      '&:hover .img-responsive': {
        opacity: '.8',
        boxShadow: '0 0 15px inset rgba(0,0,0,.05)',
      }
    },
    '& p .link:hover': {
      textDecoration: 'underline',
    },
  },
  dialog: {
    padding: '0!important',
    overflowY: 'hidden!important',
    '& iframe': {
      margin: '0',
      marginBottom: '-7px',
      width: '280px',
      height: '157px',
      ['@media screen and (min-width: 374px)']: {
        width: '320px',
        height: '168px',
      },
      ['@media screen and (min-width: 540px)']: {
        width: '450px',
        height: '253px',
      },
      ['@media screen and (min-width: 768px)']: {
        width: '599px',
        height: '337px',
      },
    }
  }
}));