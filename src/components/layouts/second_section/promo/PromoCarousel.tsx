import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PromoCard from "./PromoCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 720 },
    items: 2,
    partialVisibilityGutter: 100,
  },
};

const CustomLeftArrow = ({ onClick, ...rest }: any) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <button
      onClick={() => onClick()}
      type="button"
      aria-label="Go to previous slide"
      className="absolute z-10 left-0 opacity-50 hover:opacity-100"
    >
      <img src="/assets/icons/left-arrow-rounded.svg" height="75" width="75" />
    </button>
  );
};

const CustomRighttArrow = ({ onClick, ...rest }: any) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <button
      onClick={() => onClick()}
      type="button"
      aria-label="Go to next slide"
      className="absolute z-10 right-0 opacity-50 hover:opacity-100"
    >
      <img src="/assets/icons/right-arrow-rounded.svg" height="75" width="75" />
    </button>
  );
};

const PromoCarousel = () => {
  return (
    <>
      <h3 className="text-2xl text-white font-bold font-label pt-14 mb-4">Promo Liburan</h3>

      <Carousel
        className="py-5"
        containerClass="carousel-container"
        arrows
        centerMode={false}
        draggable
        swipeable
        partialVisible
        responsive={responsive}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRighttArrow />}
      >
        <PromoCard />
        <PromoCard />
        <PromoCard />
      </Carousel>
    </>
  );
};

export default PromoCarousel;
