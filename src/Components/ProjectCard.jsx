import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const ProjectCard = ({ title, img1, img2 }) => {
    return (
        <div className='md:w-[400px] lg:w-[450px] h-[400px]'>
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={6000}
            >
                <div data-src={img1}/>
                <div data-src={img2}/>                
            </AutoplaySlider>
        </div>
    );
};

export default ProjectCard;