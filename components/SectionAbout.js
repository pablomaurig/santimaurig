import { Grid, Container, Box } from '@material-ui/core'
import Image from 'next/image'

const SectionAbout = ({ texto, imagen }) => {
  return (
    <Box component="section" py={5}>
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6}>
            {texto}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Image
              src={imagen}
              width={500}
              height={300}
              alt={texto}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
export default SectionAbout