import '../styles/Navbar.css';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxHeight: '35px',
    minWidth: "35px",
    minHeight: "30px"
  }
})

export default function Navbar() {
  const buttonStyle = useStyles();
  return(
    <div className="navbar">
        <div className="navButton">
          <Button variant="contained" className={buttonStyle.root}>
            <img src={`${process.env.PUBLIC_URL}/images/Octicons-mark-github.svg`}
             alt="Github" height="25" width="25" />
          </Button>
        </div>
        <div className="navButton">
          <Button variant="contained" className={buttonStyle.root}>
            <img src={`${process.env.PUBLIC_URL}/images/linkedIn.png`}
              alt="LinkedIn" height="30" width="30" />
          </Button>
        </div>
        <div className="navButton">
          <Button variant="contained" className={buttonStyle.root}>
            Projects
          </Button>
        </div>
    </div>
  );
}