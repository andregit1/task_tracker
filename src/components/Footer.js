import { Link as Lf } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      {/* <a href="/about">About</a> */}
      <Lf to='https://andregit1.github.io/task_tracker/about'>About</Lf>
    </footer>
  );
}

export default Footer;
