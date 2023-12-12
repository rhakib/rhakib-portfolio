import { useState, useEffect } from "react";
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import './Banner.css'
import bannerImg from '../assets/header-img.svg';
import { FaArrowDown } from "react-icons/fa6";
import pdf from '../assets/sample.pdf'
const Banner = () => {


    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Javascript", "React", "Tailwind", "MongoDB"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    const downloadPdf = () => {
        const pdfUrl = pdf;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = pdf;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <div className='min-h-screen ' style={{ backgroundImage: 'url("https://i.ibb.co/0JFQD41/banner-bg.png")', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

                <div className="grid md:grid-cols-2 items-center justify-center mx-auto w-full max-w-screen-xl pt-16"> 
                    <div>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn banner" : ""}>
                                    <span className="tagline md:ml-0 ml-24 text-white">Welcome to RHdev</span>
                                    <h1 className="md:ml-0 ml-8 text-5xl text-white font-bold mb-5 tracking-[0.8px] block md:text-6xl">Hi! I'm <span className="text-purple-500">Rakibul Hasan</span>, a MERN stack developer. I have expertise in <span className="txt-rotate text-purple-500"><span className="wrap">{text}</span></span></h1>
                                    <p></p>
                                    <button onClick={downloadPdf} className="md:ml-0 ml-24 flex items-center gap-2 text-xl text-white font-semibold btn border-none bg-purple-600 hover:bg-purple-700">Download Resume <FaArrowDown className="mt-1"></FaArrowDown> </button>
                                </div>}
                        </TrackVisibility>
                    </div>

                    <div className="banner">
                        <img src={bannerImg} alt="" />
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Banner;