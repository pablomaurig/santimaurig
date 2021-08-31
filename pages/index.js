import Image from 'next/image'
import { data } from '../data'
import { Grid, Container, Box, Typography, Dialog, DialogContent, Button } from '@material-ui/core'
import Hero from '../components/Hero'
import SectionAbout from '../components/SectionAbout'
import Layout from '../components/Layout'
import { useState } from 'react'
import { FaYoutubeSquare, FaInstagram, FaTwitterSquare, FaFacebookSquare, FaRegEnvelope, FaLinkedin } from "react-icons/fa"
import logo from '../public/images/logo-santiago-maurig.svg'
import SquareButton from '../components/SquareButton'
import BackgroundBox from '../components/BackgroundBox'
import { useStyles } from '../src/styles'

export async function getStaticProps(context) {
  return {
    props: {
      data
    },
  }
}

export default function Home({ data }) {
  const [open, setOpen] = useState(false)
  const [videoId, setVideoId] = useState('')
  const classes = useStyles()

  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }
  return (
    <Layout title={data.siteTitle} description={data.siteDescription} favicon="/images/favicon.png">
      <div className={classes.container}>
        <Hero background="back-hero.png" data={data} />
        <Box component="section" pt={2} pb={10}>
          <Container style={{ maxWidth: '930px' }}>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12}>
                <Typography className='workLove' align="center" gutterBottom component="p"
                  dangerouslySetInnerHTML={{ __html: data.clave }}></Typography>
              </Grid>
              {data.brandsTop.map((brand, i) =>
                <Grid key={i} item xs={4} sm={2} md={2}>
                  <Image
                    src={`/images/brands/${brand.image}`}
                    width={500}
                    height={300}
                    alt={brand.alt}
                  />
                </Grid>
              )}
            </Grid>
          </Container>
        </Box>
        <BackgroundBox className={classes.boxLocucion} image="locucion.png" id='locucion' component="section" py={10}>
          <Container>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} sm={4} lg={3}>
                <Typography className='workTitle' align="left" gutterBottom variant="h4" component="h2">
                  {data.locucionTitle}
                </Typography>
                {data.locucionReeles.map((lreel, key) =>

                  <Typography key={key} align="left" gutterBottom component="p">
                    <span className='link' onClick={() => {
                      setVideoId(lreel.id)
                      handleOpen()
                    }} onKeyPress={() => {
                      setVideoId(lreel.id)
                      handleOpen()
                    }} role="button" tabIndex="0" style={{ cursor: 'pointer' }}>{lreel.name}</span>
                  </Typography>

                )}

              </Grid>
              <Grid item xs={12} sm={8} lg={9}>
                <Grid container spacing={3} justifyContent="flex-start">
                  {data.locucionWork.slice(0, 12).map((work, key) =>
                    <Grid item xs={6} sm={4} lg={3} key={key}>
                      <div className='link' onClick={() => {
                        setVideoId(work.id)
                        handleOpen()
                      }} onKeyPress={() => {
                        setVideoId(work.id)
                        handleOpen()
                      }} role="button" tabIndex="0" style={{ cursor: 'pointer' }}>
                        <Image
                          src={`/images/locucion/${work.thumnail}`}
                          width={500}
                          height={300}
                          alt={work.name}
                          className='img-responsive'
                        />
                      </div>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={0} style={{ marginTop: '2rem' }} justifyContent="center">
              <Grid item>
                <SquareButton to="contacto" label={data.locucionButton} />
              </Grid>
            </Grid>
          </Container>
        </BackgroundBox>
        <Box component="section" pt={13} pb={8}>
          <Container>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} style={{ maxWidth: '90%' }} align="center">
                <Typography className='enjoy' align="center" gutterBottom component="p">
                  {data.enjoy}
                </Typography>
                <Typography className='love' align="center" gutterBottom component="p">
                  {data.love}
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <BackgroundBox className={classes.boxProgramas} image="programas.png" component="section" pt={15} pb={10}>
          <Container>
            {data.featuredWork.map((work, key) =>
              <Grid key={key} container spacing={3} justifyContent="center" style={{ marginBottom: '1em', maxWidth: '1000px' }}>
                <Grid item xs={12} sm={4}>
                  <div className='link' onClick={() => {
                    setVideoId(work.id)
                    handleOpen()
                  }} onKeyPress={() => {
                    setVideoId(work.id)
                    handleOpen()
                  }} role="button" tabIndex="0" style={{ cursor: 'pointer' }}>
                    <Image
                      src={`/images/locucion/${work.image}`}
                      width={500}
                      height={300}
                      alt={work.title}
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={8} className='box-programa'>
                  <Typography align="left" style={{ fontWeight: 'bold' }} gutterBottom variant="h5" component="h2">
                    {work.title}
                  </Typography>
                  <Typography align="left" gutterBottom component="p">
                    {work.rol}
                  </Typography>
                  <Typography align="left" gutterBottom component="p"
                    dangerouslySetInnerHTML={{ __html: work.staff }}></Typography>
                </Grid>
              </Grid>
            )}
            <Grid container spacing={0} style={{ marginTop: '2rem' }} justifyContent="center">
              <Grid item>
                <SquareButton label={data.teamWork} to="contacto" />
              </Grid>
            </Grid>
          </Container>
        </BackgroundBox>
        <Box component="section" py={10}>
          <Container style={{ maxWidth: '930px' }} py={10}>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12}>
                <div className='workLove' style={{ textAlign: 'center' }} dangerouslySetInnerHTML={{ __html: data.workLove }}></div>
              </Grid>
              {data.brandsBottom.map((brand, i) =>
                <Grid key={i} item xs={4} sm={2} md={2}>
                  <Image
                    src={`/images/brands/${brand.image}`}
                    width={500}
                    height={300}
                    alt={brand.alt}
                  />
                </Grid>
              )}
            </Grid>
          </Container>
        </Box>
        <BackgroundBox className={classes.boxDoblaje} image="doblaje.png" id="doblaje" component="section" py={10}>
          <Container>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} sm={4} lg={3} className='doblaje-item'>
                <Typography className='workTitle' align="left" gutterBottom variant="h4" component="h2">
                  {data.doblajeTitle}
                </Typography>
                {data.doblajeReeles.map((dreel, key) =>

                  <Typography key={key} align="left" gutterBottom component="p">
                    <span className='link' onClick={() => {
                      setVideoId(dreel.id)
                      handleOpen()
                    }} onKeyPress={() => {
                      setVideoId(dreel.id)
                      handleOpen()
                    }} role="button" tabIndex="0" style={{ cursor: 'pointer' }}>{dreel.name}</span>
                  </Typography>

                )}
              </Grid>
              <Grid item xs={12} sm={8} lg={9}>
                <Grid container spacing={3} justifyContent="flex-start">
                  {data.doblajeWork.slice(0, 12).map((work, key) =>
                    <Grid item xs={6} sm={4} lg={3} key={key}>
                      <div className='link' onClick={() => {
                        setVideoId(work.id)
                        handleOpen()
                      }} onKeyPress={() => {
                        setVideoId(work.id)
                        handleOpen()
                      }} role="button" tabIndex="0">
                        <Image
                          src={`/images/doblaje/${work.thumnail}`}
                          width={500}
                          height={300}
                          alt={work.name}
                        />
                      </div>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={0} style={{ marginTop: '2rem' }} justifyContent="center">
              <Grid item>
                  <SquareButton label={data.doblajeButton} to="contacto" />
              </Grid>
            </Grid>
          </Container>
        </BackgroundBox>
        <Box component="section" py={13}>
          <Container>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} style={{ maxWidth: '90%' }} align="center">
                <Typography className='enjoy' align="center" gutterBottom component="p">
                  {data.theVoice}
                </Typography>
                <Typography className='love' align="center" gutterBottom component="p">
                  {data.voiceChannel}
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <BackgroundBox className={classes.boxDocencia} image="docencia.png" id='docencia' component="section" py={12}>
          <Container style={{ maxWidth: '800px' }}>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} sm={8}>
                <Typography align="center" gutterBottom variant="h4" component="h2">
                  {data.teachingTitle}
                </Typography>
                <Typography align="center" gutterBottom component="p" style={{ maxWidth: '410px', margin: '0 auto' }}
                  dangerouslySetInnerHTML={{ __html: data.teaching }}></Typography>
              </Grid>
              <Grid container spacing={3} justifyContent="center" align="center">
                <Grid item xs={12} >
                  <Typography className="experience" align="center" variant="h5" component="h2" style={{ marginTop: '1em' }}>
                    EXPERIENCIA LABORAL
                  </Typography>
                </Grid>
                {data.experience.map(exp =>
                  <Grid key={exp.work} item xs={12} sm={4} >
                    <Typography align="center" gutterBottom component="p"
                      dangerouslySetInnerHTML={{ __html: exp.work }}></Typography>
                  </Grid>
                )}
              </Grid>
              <Grid container spacing={0} style={{ marginTop: '2rem' }} justifyContent="center">
                <Grid item>
                  <SquareButton label={data.teachingButton} to="contacto" />
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </BackgroundBox>
        <SectionAbout className={classes.box1985} titulo={data.aboutTitle} texto={data.about} imagen={`/images/${data.aboutImage}`} />
        <BackgroundBox className={classes.boxContacto} image="contacto.png" id="contacto" component="section" py={10}>
          <Container>
            <Grid container spacing={3} justifyContent="flex-start">
              <Grid item xs={12} className="object">
                <Typography align="left" gutterBottom variant="h5" component="h2" style={{ marginBottom: "2rem" }}
                  dangerouslySetInnerHTML={{ __html: data.contactTitle }}></Typography>
                <Typography className="span" align="left" gutterBottom component="p" style={{ marginBottom: "2rem" }}
                  dangerouslySetInnerHTML={{ __html: data.contactObjective }}></Typography>
                <Typography align="right" gutterBottom variant="h5" component="h2"
                  dangerouslySetInnerHTML={{ __html: data.contact }}></Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3} justifyContent="flex-end" alignItems="flex-end" style={{ marginTop: "2rem" }}>
              <Grid item xs={12} sm={6}>
                <Typography align="left" className='email' gutterBottom component="p">
                  <a className="ic-contact" href="mailto:santiagomaurig@gmail.com"><FaRegEnvelope /><span>santiagomaurig@gmail.com</span></a>
                </Typography>
                <Typography className="network" align="left" gutterBottom component="p">
                  <a href="https://www.youtube.com/channel/UCY7ItejXlm4FcsDkkJk7Eig" target="_blank" rel="noopener noreferrer"><FaYoutubeSquare /></a>
                  <a href="https://www.instagram.com/santimaurig/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                  <a href="https://twitter.com/santimaurig?lang=es" target="_blank" rel="noopener noreferrer"><FaTwitterSquare /></a>
                  <a href="https://www.facebook.com/pages/category/Artist/Santiago-Maurig-442741989170516/" target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></a>
                  <a href="https://www.linkedin.com/in/santiago-maurig-a83a40111" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} align="right">
                <Image
                  src={logo}
                  width={500}
                  height={300}
                  alt="Santiago Maurig"
                  className="svg-logo"
                />
              </Grid>
            </Grid>
          </Container>
        </BackgroundBox>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-describedby="alert-dialog-description"
        disableScrollLock={true}
      >
        <DialogContent className={classes.dialog} id="alert-dialog-description">
          <iframe title="modal" width="560" height="315" src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </DialogContent>
      </Dialog>
    </Layout>
  )
}
