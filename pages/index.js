import About from "../components/About/About";
import FeedbackSecttion from "../components/FeedBackSection/FeedbackSection";
import Gallery from "../components/Gallery/Gallery";
import HBackground from "../components/HeaderBackground/HBackground";
import Header from "../components/Header/Header";
import SectionMenu from "../components/MenuSection/SectionMenu";
import Whyus from "../components/SectionWhyUs/WhyuS";
import ServicesCount from "../components/ServicesCounter/ServicesCount";
import LastSection from "../components/LastSection/LastSection";
import NeedTable from "../components/NeedTable/NeedTable";
import Head from "next/head";

function Home() {
  return (
    <div>
      <div>
        <Head>
          <title>Kaffen</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
      </div>

      <HBackground />
      <About />
      <SectionMenu />
      <Whyus />
      <Gallery />
      <FeedbackSecttion />
      <ServicesCount />
      <LastSection />
      <NeedTable />
    </div>
  );
}
export default Home;
