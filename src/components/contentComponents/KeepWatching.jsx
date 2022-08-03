import Slider from "react-slick";
import Items from "./Items";
function ReactSimplyCarouselExample() {
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
  const images = [
    {
      name: "better-call-saul",
      imageURL:
        "https://cdn.milenio.com/uploads/media/2022/05/24/better-call-saul-netflix.jpg",
    },
    {
      name: "friends",
      imageURL:
        "https://i2.milimaj.com/i/milliyet/75/0x420/604b0f095542801b04134676.jpg",
    },
    {
      name: "sherlock",
      imageURL:
        "https://upload.wikimedia.org/wikipedia/tr/4/40/Sherlock_%28TV%29.jpg",
    },
    {
      name: "mindhunter",
      imageURL:
        "https://media-cdn.t24.com.tr/media/library/2020/05/1590337991205-images-8-620-x-400.jpg",
    },
    {
      name: "bir-baskadir",
      imageURL:
        "https://radyobilkent.com/assets/img/blogimg/birbaskadir-UTiT_cover.jpg",
    },
    {
      name: "ozark",
      imageURL:
        "https://yorumguncel.com/wp-content/uploads/2022/01/ozark-4-sezon-2-kisim-ne-zaman-yayinlanacak-netflix.jpg",
    },
    {
      name: "arcane",
      imageURL:
        "https://cdn1.dotesports.com/wp-content/uploads/2022/05/26102624/Arcane_serialmind.jpg",
    },
    {
      name: "community",
      imageURL:
        "https://static.next-episode.net/tv-shows-images/huge/community.jpg",
    },
    {
      name: "bir-baskadir",
      imageURL:
        "https://radyobilkent.com/assets/img/blogimg/birbaskadir-UTiT_cover.jpg",
    },
    {
      name: "when-they-see-us",
      imageURL:
        "https://s3.scoopwhoop.com/anj2/5d021e8cd0aa383f987969f1/279f7754-a9bf-4b5a-906b-b954224de08f.jpg",
    },
    {
      name: "haunting-of-hill-house",
      imageURL:
        "https://images-na.ssl-images-amazon.com/images/I/91s3bvLAHJL._RI_.jpg",
    },
  ];
  return (
    <div className="m-10">
      <h1 className="text-2xl font-medium text-white my-4 font-sans-serif">Keep Watching</h1>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Items image={image} key={index} />
        ))}
      </Slider>
    </div>
  );
}

export default ReactSimplyCarouselExample;
