import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    borderRadius: 0,
    border: '6px solid black',
    fontWeight: 'bold',
    fontSize: '1.3rem',
    padding: '.1rem 2.2rem',
  },
};

const SquareButton = ({ classes, label, to }) => {
  const handleScroll = () => {
    document.querySelector(`#${to}`).scrollIntoView({behavior: 'smooth'})
  }
  
  return (
    <Button onClick={handleScroll} className={classes.root} variant="outlined">
      {label}
    </Button>
  )
}

export default withStyles(styles)(SquareButton);
