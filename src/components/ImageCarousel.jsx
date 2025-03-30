import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../assets/images/1.jpeg"
import image2 from "../assets/images/2.jpeg"
import image3 from "../assets/images/3.jpeg"
import video1 from "../assets/videos/1.mp4"
import video2 from "../assets/videos/2.mp4"
import ReactPlayer from 'react-player'



const ImageCarousel = () => {
  const images = [
    {
      id: 5,
      author: "video2",
      type: "video",
      url: video2
    },
    {
      id: 1,
      author: "Image1",
      type: "image",
      url: image1
    },
    {
      id: 2,
      author: "Image2",
      type: "image",
      url: image2
    },
    {
      id: 3,
      author: "Image3",
      type: "image",
      url: image3
    },
    {
      id: 4,
      author: "video1",
      type: "video",
      url: video1
    }
  ];
  return (
      <Carousel
       // autoPlay
      //  infiniteLoop
        centerMode
        interval={1000}
          className="crsl"
        stopOnHover={true}
        showArrows={true}
      >
        {images?.map((image) => {
          return(
            <>
              {
                image.type === "image" ? (
                  <img src={image.url} alt={image.author}  />
                ) : (
                    <ReactPlayer
                      url={image.url}
                      controls={true}
                      width="100%"
                      height="450px"
                      playing={true}
                      loop={true}
                      muted={true}
                      playsinline={true}
                      className="video-player"
                    />
                )
              }
            </>
          )
        }
        
        )}
      </Carousel>

  );
};

export default ImageCarousel;
