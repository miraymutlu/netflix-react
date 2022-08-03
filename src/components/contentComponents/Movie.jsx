import Slider from "react-slick";
import Items from "./Items";
function Movie(props) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
    ],
  };
  
  return (
    <div className="m-10">
      <h1 className="text-2xl font-medium text-white my-4 font-sans-serif">{props.header}</h1>
      <Slider {...settings}>
        {props.data.map((image, index) => (
          <Items image={image} key={index} className="" />
        ))}
      </Slider>
    </div>
  );
}

export default Movie;
