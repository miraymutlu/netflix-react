import Slider from "react-slick";

function ReactSimplyCarouselExample() {
  // const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className="m-10" >
      <h1 className="text-2xl font-medium ml-3">Keep Watching</h1>
      <Slider>
        <div className="relative w-full h-full cursor-pointer border-4 border-black hover:w-120 hover:h-48">
          <img
            src="https://cdn.milenio.com/uploads/media/2022/05/24/better-call-saul-netflix.jpg"
            alt=" "
          />
        </div>
        <div className="relative w-full h-full cursor-pointer border-4 border-black hover:w-120 hover:h-48">
          <img
            src="https://cdn.milenio.com/uploads/media/2022/05/24/better-call-saul-netflix.jpg"
            alt=" "
          />
        </div>
        <div className="relative w-full h-full cursor-pointer border-4 border-black hover:w-120 hover:h-48">
          <img
            src="https://cdn.milenio.com/uploads/media/2022/05/24/better-call-saul-netflix.jpg"
            alt=" "
          />
        </div>
      </Slider>
    </div>
  );
}

export default ReactSimplyCarouselExample;
