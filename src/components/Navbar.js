import '../styles/Navbar.css';
import { Button } from '@material-ui/core';

export default function Navbar() {
  return(
    <div className="navbar">
        <Button variant="contained">Github</Button>
        <Button variant="contained">LinkedIn</Button>
        <Button variant="contained">Projects</Button>
    </div>
  );
}