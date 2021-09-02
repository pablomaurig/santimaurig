import Image from 'next/image'
import { Grid, Container, Box, Typography } from '@material-ui/core'

const SectionAbout = ({ titulo, texto, imagen }) => {
  return (
    <Box component="section" py={10}>
      <Container>
        <Grid container spacing={3} justify="space-between">
          <Grid className='order' item xs={12} sm={6} md={4}>
            <Typography className='titleYear' align="left" gutterBottom variant="h6" component="h2">
              {titulo}
            </Typography>
            <Typography align="justify" gutterBottom component="p">
              {texto}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={7}>
            <Image
              src={imagen}
              width={708}
              height={470}
              alt={texto}
              objectFit="cover"
              objectPosition="50% 50%"
              fadeIn="true"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
export default SectionAbout
            