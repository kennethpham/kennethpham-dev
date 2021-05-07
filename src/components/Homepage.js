import '../styles/Homepage.css';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { useEffect } from 'react';

const useStyles = makeStyles({
  root: {
    maxHeight: '35px',
    minWidth: '35px',
    minHeight: '30px',
    textTransform: 'none'
  }
})

export default function Homepage() {
  const buttonStyle = useStyles();
  useEffect(()=>{
    document.body.style.backgroundColor = '#FFEFD5';
  },[])
  return(
    <div className='homepage'>
      <div className='navbar'>
          <div className='navButton'>
            <Button variant='contained' className={buttonStyle.root}
              href='https://github.com/kennethpham'>
              <img src={`${process.env.PUBLIC_URL}/images/Octicons-mark-github.svg`}
              alt='Github' height='25' width='25' />
            </Button>
          </div>
          <div className='navButton'>
            <Button variant='contained' className={buttonStyle.root}
              href='https://www.linkedin.com/in/kenneth-pham-246a90183/'>
              <img src={`${process.env.PUBLIC_URL}/images/linkedIn.png`}
                alt='LinkedIn' height='30' width='30' />
            </Button>
          </div>
          <div className='navButton'>
            <Link to='/projects'>
              <Button variant='contained' className={buttonStyle.root}>
                <p>Projects</p>
              </Button>
            </Link>
          </div>
      </div>
      <div className='header'>
        <h1><p>Kenneth Pham</p></h1>
      </div>
      <div className='description'>
        <p>Hello, I'm Kenneth and I recently completed my B.S. at UCSD in
        Mathematics - Computer Science.<br></br>This is my personal site used
        for hosting and showcasing any personal projects that I have
        done.</p> 
      </div>
    </div>
  );
}
