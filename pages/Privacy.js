import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Footer from "../components/footer";

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
      <SectionTitle
        pretitle="Kentucky Horse Milk"
        title="Privacy Policy"
        sectionId="privacy">
        This Privacy Policy describes how KentuckyHorseMilk.com ("we", "us", or "our") collects, uses, and discloses your information when you use our website.
      </SectionTitle>

      <div className="container mx-auto">
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">Information We Collect</h2>
        <p className="py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">We do not collect any personally identifiable information from visitors to our website.</p>

        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">Use of Cookies</h2>
        <p className="py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">We use cookies to analyze website traffic and optimize your website experience. By using our website, you agree to the use of cookies in accordance with this Privacy Policy.</p>

        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">Google Analytics</h2>
        <p className="py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">We use Google Analytics to analyze the use of our website. Google Analytics gathers information about website use by means of cookies. The information gathered relating to our website is used to create reports about the use of our website. Google's privacy policy is available at: <a href="//www.google.com/">Google Privacy Policy</a></p>

        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">Third-Party Links</h2>
        <p className="py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">Our website may contain links to third-party websites. We have no control over the privacy policies or practices of these websites.</p>

        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">Changes to Our Privacy Policy</h2>
        <p className="py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">Contact Us</h2>
        <p className="py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">If you have any questions about our Privacy Policy, please contact us:</p>

        <p className="py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">By email: info@kentuckyhorsemilk.com</p>
      </div>

      <Footer />
    </>
  );
}

export default Home;