import { useEffect, useState } from 'react';
import '../styles/Projects.css';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import axios from 'axios';

const buttonStyles = makeStyles({
  root: {
    maxHeight: '35px',
    minWidth: '35px',
    minHeight: '30px',
    textTransform: 'none'
  }
})

const cardStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 275,
    minHeight: 175,
    maxHeight: 175,
  },
  title: {
    fontSize: 14
  },
  desc: {
    fontSize: 12
  }
})

interface Repo {
  name: string;
  html_url: string;
  description: string;
}

interface RepoCardProps {
  repo: Repo;
}

function RepoCard({ repo }: RepoCardProps) {
  const cardStyle = cardStyles();
  return (
    <div className='repoCard'>
      <Card className={cardStyle.root}>
        <CardHeader className={cardStyle.title}
          title={<a href={repo.html_url}>{repo.name}</a>} />
        <CardContent className={cardStyle.desc}>
          <Typography>
            {repo.description ? repo.description : 'null'}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default function Projects() {
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState([]);
  const buttonStyle = buttonStyles();

  useEffect(() => {
    document.title = 'Kenneth\'s Projects';
    document.body.style.backgroundColor = '#AAF0D1';
    axios('https://api.github.com/users/kennethpham/repos')
      .then(response => {
        setRepos(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <div className='projects'>
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
          <Link to='/'>
            <Button variant='contained' className={buttonStyle.root}>
              <p>Home</p>
            </Button>
          </Link>
        </div>
      </div>
      <div className='header'>
        <h1><p>Projects</p></h1>
      </div>
      <div className='body'>
        {loading ? <div style={{ textAlign: 'center' }}><p>loading...</p></div>
          : repos!.map((repo: Repo, index) => {
            return <RepoCard
              key={`card${index}`}
              repo={repo}
            />
          })

        }

      </div>
    </div>
  );
}
