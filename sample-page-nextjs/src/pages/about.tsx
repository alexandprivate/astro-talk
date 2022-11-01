import { AboutUs } from '../components/AboutUs';
import { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <>
      <h1 className="font-bold text-xl">Hello About</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, fuga! Veritatis nihil
        alias quo fuga reprehenderit dolores saepe autem repudiandae!
      </p>

      <AboutUs />
    </>
  );
};

export default About;
