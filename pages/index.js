import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
// import Cta from "../components/cta";
import Faq from "../components/faq";

const Home = () => {
  return (
    <>
      <Head>
        <title>Kentucky Horse Milk - Equine Milk from Kentucky</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Horse Milk Benefits"
        title=" Why would I drink Horse Milk?"
        sectionId="Why">
        Horse milk is an age-old tradition in many parts of the world - if one that is rarely talked about. Worldwide, and especially in Kentucky, horse milk drinkers enjoy it through and through in many forms.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        pretitle="Don't just take it from us"
        title="Learn how to fullfil your needs"
        sectionId="Video">
        Take a peek around Kentucky and see some of the great milky treasures of the Commonwealth.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what Kentuckians say about Kentucky Horse Milk"
        sectionId="Testimonials">
        Don't just take it from us, some random website from the Upper Bluegrass region of Kentucky. See what real Kentuckians have to say about their favorite Commonwealth traditional non-alcoholic favorite treat.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions" sectionId="FAQ">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      {/* <Cta /> */}
      <Footer />
    </>
  );
}

export default Home;