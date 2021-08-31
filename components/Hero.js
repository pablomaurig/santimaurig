import { Grid, Typography, Container, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  hero: {
    position: 'relative',
    backgroundColor: '#999',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundImage: ({ background }) => `url(/images/backgrounds/${background})`,
    border: '4rem solid #fff',
    boxSizing: 'border-box',
    backgroundBlendMode: 'screen',
    ['@media screen and (max-width: 500px)']: {
      backgroundPosition: 'center',
      border: '2rem solid #fff',
    },
    '& .MuiTypography-h2': {
      fontSize: '3.75rem',
      ['@media screen and (max-width: 800px)']: {
        fontSize: '2.2rem',
      },
      ['@media screen and (max-width: 500px)']: {
        fontSize: '1.8rem',
      },
    },
    '& .MuiTypography-h4': {
      fontSize: '2.34rem',
      fontFamily: '"Roboto Condensed", sans-serif',
      ['@media screen and (max-width: 800px)']: {
        fontSize: '1.37em',
      },
      ['@media screen and (max-width: 500px)']: {
        fontSize: '1rem',
      }
    },
    '& .container': {
      height: '100%',
      zIndex: 3,
      position: 'relative',
    }
  },
}));



const Hero = (props) => {
  const { hero } = useStyles(props)
  const { background, data, ...heroProps } = props
  const heroClass = heroProps?.className ? `${heroProps.className} ${hero}` : hero

  return (
    <div {...heroProps} className={heroClass} style={{ height: '100vh' }}>
      <Container className="container">
        <Grid container alignItems="center" style={{ height: '100%' }}>
          <Grid item xs={12} style={{ border: "10px solid", padding: "10px", backgroundColor: "rgba(255,255,255,0.4)" }}>
            <Typography align="center" variant="h2" style={{ color: "#000" }}>{data.heroTop}</Typography>
            <Typography align="center" variant="h4" style={{ color: "#000" }}>{data.heroBottom}</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Hero


