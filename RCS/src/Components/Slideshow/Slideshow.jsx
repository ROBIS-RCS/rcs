import React from 'react';
import image1 from './images/RTP.png';
import image2 from './images/Pallet.png';
import image3 from './images/counteramr.png';
import image4 from './images/Compactagv.png';
import image5 from './images/ASRS.png';
import image6 from './images/forkover.png';
import image7 from './images/CB.png';
import image8 from './images/BTP.png';
import "./Slideshow.css"

const Slideshow = () => {
    const imagesWithText = [
        { src: image1, text: 'Rack To Person AGV' },
        { src: image3, text: 'Compact 360 AMR ' },
        { src: image4, text: 'Compact 360 AGV' },
        { src: image5, text: 'ASRS Bin Shuttle' },
        { src: image6, text: 'Fork over AMR' },
        { src: image7, text: 'Counterbalance Stacker AMR' },
        { src: image8, text: 'Pallet Truck AMR' },
        { src: image2, text: 'Bin To Person AGV / AMR' }
    ];

    const delay = 2500;

    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === imagesWithText.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    const goToPrevSlide = () => {
        const newIndex = index === 0 ? imagesWithText.length - 1 : index - 1;
        setIndex(newIndex);
    };

    const goToNextSlide = () => {
        const newIndex = index === imagesWithText.length - 1 ? 0 : index + 1;
        setIndex(newIndex);
    };

    return (
        <div className="slideshow-container">
            <div
                className="slideshowSlider"
                style={{ transform: `translateX(${-index * 100}%)` }}
            >
                {imagesWithText.map((image, idx) => (
                    <div
                        className="slide"
                        key={idx}
                        style={{ backgroundImage: `url(${image.src})` }}
                    >
                        <p className="imageText font-sans text-black-50 text-xl italic font-bold drop-shadow-lg p-10 " >{image.text}</p>
                    </div>
                ))}
            </div>

            <div className="slideshowArrows">
                <div className="prevArrow" onClick={goToPrevSlide}>{'<'}</div>
                <div className="nextArrow" onClick={goToNextSlide}>{'>'}</div>
            </div>
        </div>
    );
}

export default Slideshow;
