import { Link as L } from "react-router-dom";

const About = () => {
  return (
    <div style={{textAlign: "center"}}>
      <h4>Version 1.0.0</h4>      
      {/* <a href='/'>Go Back</a> */}
      <L to='https://andregit1.github.io/task_tracker/home'>Go Back</L>
    </div>
  );
}

export default About;
