import { useLayoutEffect, useState } from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

interface Repo {
  name: string;
  html_url: string;
  description: string;
}

interface RepoCardProps {
  repo: Repo;
}

function RepoCard({ repo }: RepoCardProps) {
  return (
    <Card className="w-[28rem] hover:bg-gray-100">
      <CardHeader>
        <CardTitle>{repo.name}</CardTitle>
        <CardDescription>
          {repo.description ? repo.description : "null"}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <a href={repo.html_url} className="w-full">
          <Button className="w-full hover:cursor-pointer">code here</Button>
        </a>
      </CardFooter>
    </Card>
  );
}

const repoList = [
  "blackjack-frontend",
  "blackjack-backend",
  "kennethpham-dev",
  "basketball_reference_scraper",
  "rps-tactics-mobile",
  "rps-tactics-server",
  "VoltorbFlip",
];

export default function Projects() {
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState<any[]>([]);

  useLayoutEffect(() => {
    fetch("https://api.github.com/users/kennethpham/repos")
      .then((response) => {
        return response.json();
      })
      .then((data: Array<any>) => {
        const filteredData = data.filter(
          (repo) =>
            repoList.find((repoName) => repo.name === repoName) != undefined,
        );
        setRepos(filteredData);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-full text-center py-5 pl-3 pr-[28px]">
      <p className="text-3xl font-bold pb-10"> Kenneth's Projects</p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {loading ? (
          <p className="text-center">loading...</p>
        ) : (
          repos?.map((repo: Repo, index) => {
            return <RepoCard key={`card${index}`} repo={repo} />;
          })
        )}
      </div>
    </div>
  );
}
