import Container from "../../containers/Container";
import Categories from "./categories/Categories";
import Packages from "./packages/Packages";
import PromoCarousel from "./promo/PromoCarousel";
import Testimonials from "./testimonials/Testimonials";

const SecondSection = () => {
  return (
    <section className="bg-second-section bg-top bg-no-repeat bg-contain pb-16">
      <Container>
        <PromoCarousel />
        <Packages />
        <Categories />
        <Testimonials />
      </Container>
    </section>
  );
};

export default SecondSection;
