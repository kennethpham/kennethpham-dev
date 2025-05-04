export default function Homepage() {
  return (
    <div className="flex-row w-full py-5 pl-3 pr-[28px]">
      <p className="text-3xl font-bold text-center pb-10">
        Kenneth Pham's Personal Site
      </p>
      <p>
        Welcome to my personal site, I am currently a software engineer at{" "}
        <a href="https://www.moesol.com" className="hover:bg-gray-200">
          Moebius Solutions, Inc.
        </a>{" "}
        and graduated from UCSD. This is primarily used to share any personal
        projects that I have done.
      </p>
      <p>
        <br />
        Feel free to reachout via email at{" "}
        <a href="mailto:pham_kenneth@yahoo.com" className="hover:bg-gray-200">
          pham_kenneth@yahoo.com
        </a>
      </p>
    </div>
  );
}
