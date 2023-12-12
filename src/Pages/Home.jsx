
import Banner from '../Components/Banner';
import Contact from '../Components/Contact';
import Education from '../Components/Education';
import Footer from '../Components/Footer';
import Projects from '../Components/Projects';
import Skills from '../Components/Skills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <Skills></Skills>
            <Education></Education>
            <Contact></Contact>
            <Footer></Footer>
        
        </div>
    );
};

export default Home;