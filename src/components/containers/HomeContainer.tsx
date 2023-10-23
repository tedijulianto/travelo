import Layout from "../layouts/Layout";
import SecondSection from "../layouts/second_section/SecondSection";
import TopSection from "../layouts/top_section/TopSection";

const HomeContainer = () => {
  return (
    <Layout>
      <TopSection />
      <SecondSection />
    </Layout>
  );
};

export default HomeContainer;
