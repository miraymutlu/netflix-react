import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

function ReactSimplyCarouselExample() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div style={{ margin: 30, padding: 0, fontSize: 10, color: "white" }}>
      <h className="text-2xl font-medium ml-3">Keep Watching</h>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 20,
            lineHeight: 1,
            textAlign: "center",
            width: 20,
          },
          children: <span style={{ right:10, top:1000, position: "absolute" }}>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 20,
            lineHeight: 1,
            textAlign: "center",
            width: 20,
          },
          children: <span style={{ left:10, top:1000, position: "absolute" }}>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 6,
            itemsToScroll: 2,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
        <div style={{ width: 280, height: 160 , position: 'relative'}}>
          <img
            src="https://cdn.milenio.com/uploads/media/2022/05/24/better-call-saul-netflix.jpg"
            alt=" "
            className="relative w-full h-full cursor-pointer border-4 border-black hover:w-120 hover:h-44 z-0"
          />
        </div>
        <div style={{ width: 280, height: 160, position: 'relative'}}>
        <img
            src="https://cdn.milenio.com/uploads/media/2022/05/24/better-call-saul-netflix.jpg"
            alt=" "
            className="relative w-full h-full cursor-pointer border-4 border-black hover:w-120 hover:h-44 z-0"
          />
        </div>
        <div style={{ width: 280, height: 160, position: 'relative' }}>
        <img
            src="https://cdn.milenio.com/uploads/media/2022/05/24/better-call-saul-netflix.jpg"
            alt=" "
            className="relative w-full h-full cursor-pointer border-4 border-black hover:w-120 hover:h-44 z-0"
          />
        </div>
        <div style={{ width: 280, height: 160, position: 'relative'}}>
        <img
            src="https://cdn.milenio.com/uploads/media/2022/05/24/better-call-saul-netflix.jpg"
            alt=" "
            className="relative w-full h-full cursor-pointer border-4 border-black hover:w-120 hover:h-44 z-0"
          />
        </div>
        <div style={{ width: 280, height: 160, position: 'relative'}}>
        <img
            src="https://cdn.milenio.com/uploads/media/2022/05/24/better-call-saul-netflix.jpg"
            alt=" "
            className="relative w-full h-full cursor-pointer border-4 border-black hover:w-120 hover:h-44 z-0"
          />
        </div>
        <div style={{ width: 280, height: 160 , position: 'relative'}}>
        <img
            src="https://cdn.milenio.com/uploads/media/2022/05/24/better-call-saul-netflix.jpg"
            alt=" "
            className="relative w-full h-full cursor-pointer border-4 border-black hover:w-120 hover:h-44 z-0"
          />
        </div>
        <div style={{ width: 280, height: 160, position: 'relative' }}>
        <img
            src="https://cdn.milenio.com/uploads/media/2022/05/24/better-call-saul-netflix.jpg"
            alt=" "
            className="relative w-full h-full cursor-pointer border-4 border-black hover:w-120 hover:h-44 z-0"
          />
        </div>
        <div style={{ width: 280, height: 160, position: 'relative' }}>
        <img
            src="https://cdn.milenio.com/uploads/media/2022/05/24/better-call-saul-netflix.jpg"
            alt=" "
            className="relative w-full h-full cursor-pointer border-4 border-black hover:w-120 hover:h-44 z-0"
          />
        </div>
        <div style={{ width: 280, height: 160, position: 'relative'}}>
        <img
            src="https://cdn.milenio.com/uploads/media/2022/05/24/better-call-saul-netflix.jpg"
            alt=" "
            className="relative w-full h-full cursor-pointer border-4 border-black hover:w-120 hover:h-44 z-0"
          />
        </div>
        <div style={{ width: 280, height: 160 , position: 'relative'}}>
        <img
            src="https://cdn.milenio.com/uploads/media/2022/05/24/better-call-saul-netflix.jpg"
            alt=" "
            className="relative w-full h-full cursor-pointer border-4 border-black hover:w-120 hover:h-44 z-0"
          />
        </div>
        <div style={{ width: 280, height: 160 , position: 'relative'}}>
        <img
            src="https://cdn.milenio.com/uploads/media/2022/05/24/better-call-saul-netflix.jpg"
            alt=" "
            className="relative w-full h-full cursor-pointer border-4 border-black hover:w-120 hover:h-44 z-0"
          />
        </div>
      </ReactSimplyCarousel>
    </div>
  );
}

export default ReactSimplyCarouselExample;
