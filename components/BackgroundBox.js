import { makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles({
  backgroundImage: {
    backgroundImage: ({ image }) => `url(/images/backgrounds/${image})`,
  },
});

const BackgroundBox = ({ children, ...props }) => {
  const { backgroundImage } = useStyles(props)
  const { image, className, ...boxProps } = props
  return (
    <Box className={`${className} ${backgroundImage}`} {...boxProps}>
      {children}
    </Box>
  )
}

export default BackgroundBox;