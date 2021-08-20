import Link from '@material-ui/core/Button';
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

const SquareButton = ({ classes, label }) => (
  <Link className={classes.root} variant="outlined">
    {label}
  </Link>
);

export default withStyles(styles)(SquareButton);
