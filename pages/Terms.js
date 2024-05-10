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
        title="Terms of Use"
        sectionId="terms"
      >
        These Terms of Use ("Terms") govern your use of the
        KentuckyHorseMilk.com website ("Website") operated by [Your Company
        Name] ("us", "we", or "our").
      </SectionTitle>

      <div className="container mx-auto">
        <p className="py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          By accessing or using the Website, you agree to be bound by these
          Terms. If you disagree with any part of the terms, then you may not
          access the Website.
        </p>

        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          Use License
        </h2>

        <p className="py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          Permission is granted to temporarily download one copy of the
          materials (information or software) on the Website for personal,
          non-commercial transitory viewing only. This is the grant of a
          license, not a transfer of title. This license shall automatically
          terminate if you violate any of these restrictions and may be
          terminated by us at any time.
        </p>

        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          Disclaimer
        </h2>

        <p className="py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          The materials on the Website are provided on an 'as is' basis. We make
          no warranties, expressed or implied, and hereby disclaim and negate
          all other warranties including, without limitation, implied warranties
          or conditions of merchantability, fitness for a particular purpose, or
          non-infringement of intellectual property or other violation of
          rights.
        </p>

        <p className="py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          Further, we do not warrant or make any representations concerning the
          accuracy, likely results, or reliability of the use of the materials
          on the Website or otherwise relating to such materials or on any sites
          linked to this site.
        </p>

        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          Limitations
        </h2>

        <p className="py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          In no event shall we be liable for any damages (including, without
          limitation, damages for loss of data or profit, or due to business
          interruption) arising out of the use or inability to use the materials
          on the Website, even if we have been notified orally or in writing of
          the possibility of such damage.
        </p>

        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          Accuracy of Materials
        </h2>

        <p className="py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          The materials appearing on the Website could include technical,
          typographical, or photographic errors. We do not warrant that any of
          the materials on the Website are accurate, complete, or current. We
          may make changes to the materials contained on the Website at any time
          without notice. However, we do not make any commitment to update the
          materials.
        </p>

        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          Links
        </h2>

        <p className="py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          We have not reviewed all of the sites linked to the Website and are
          not responsible for the contents of any such linked site. The
          inclusion of any link does not imply endorsement by us of the site.
          Use of any such linked website is at the user's own risk.
        </p>

        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          Modifications
        </h2>

        <p className="py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          We may revise these Terms of Use for the Website at any time without
          notice. By using the Website, you are agreeing to be bound by the
          then-current version of these Terms of Use.
        </p>

        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          Governing Law
        </h2>

        <p className="py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          These terms and conditions are governed by and construed in accordance
          with the laws of [Your Country] and you irrevocably submit to the
          exclusive jurisdiction of the courts in that location.
        </p>

        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          Contact Us
        </h2>
        <p className="py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          If you have any questions about our Privacy Policy, please contact us:
        </p>

        <p className="py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          By email: info@kentuckyhorsemilk.com
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Home;
