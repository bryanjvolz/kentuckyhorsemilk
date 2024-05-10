import Image from "next/image";
import Link from "next/link";
import Container from "./container";
import heroImg from "../public/img/hero.png";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Discover Kentucky's Best-Kept Secret
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              For centuries, Kentuckians have cherished the unique taste and health benefits of horse milk, yet this rich heritage remains relatively unknown outside the region. Here at Kentucky Horse Milk, we are dedicated to promoting and preserving this age-old tradition while introducing it to a wider audience.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Trusted by <em className="text-indigo-600">20mil+</em>{" "}
            satisfied horse milk enthusiasts worldwide and partners state-wide
          </div>

          <div className="flex flex-wrap justify-center justify-items-center gap-4 mt-10 md:justify-around">
            <div className="pt-2 text-gray-400 dark:text-gray-400 flex flex-col justify-center">
              <KentuckyUnbridledLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400 flex flex-col justify-center">
              <FFALogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400 flex flex-col justify-center">
              <FourHLogo />
            </div>
            <div className="pt-1 text-gray-400 dark:text-gray-400 flex flex-col justify-center">
              <EmraLogo />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400 flex flex-col justify-center">
              <KyProudLogo />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400 flex flex-col justify-center">
              <KyAgricultureLogo />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400 flex flex-col justify-center">
              <KyFarmFeedLogo />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

function EmraLogo() {
  return (
    <Link
      href="https://www.equinemilk.health"
      target="_blank"
    >
      <Image
        src='/img/emra-crest.png'
        width="75"
        height="75"
        alt="Benefits"
        className={"object-cover"}
        placeholder="blur"
        blurDataURL='/img/emra-crest.png'
      />
    </Link>
  );
}

function KentuckyUnbridledLogo() {
  return (
    <Link
      href="https://www.kentucky.gov/"
      target="_blank"
    >
      <Image
        src='/img/brands/ky-unbridled.png'
        width="75"
        height="75"
        alt="Benefits"
        className={"object-cover"}
        placeholder="blur"
        blurDataURL='/img/brands/ky-unbridled.png'
      />
    </Link>
  );
}

function FFALogo() {
  return (
    <Link
      href="https://kyffa.org/"
      target="_blank"
      height="100%"
    >
      <Image
        src='/img/brands/ky-ffa.png'
        width="60"
        height="60"
        alt="Benefits"
        className={"object-cover"}
        placeholder="blur"
        blurDataURL='/img/brands/ky-ffa.png'
      />
    </Link>
  );
}

function FourHLogo() {
  return (
    <Link
      href="https://4-h.ca.uky.edu/"
      target="_blank"
    >
      <Image
        src='/img/brands/ky-4h.png'
        width="75"
        height="75"
        alt="Benefits"
        className={"object-cover"}
        placeholder="blur"
        blurDataURL='/img/brands/ky-4h.png'
      />
    </Link>
  );
}

function KyProudLogo() {
  return (
    <Link
      href="https://www.kyproud.com/"
      target="_blank"
    >
      <Image
        src='/img/brands/ky-proud.png'
        width="75"
        height="75"
        alt="Benefits"
        className={"object-cover"}
        placeholder="blur"
        blurDataURL='/img/brands/ky-proud.png'
      />
    </Link>
  );
}

function KyFarmFeedLogo() {
  return (
    <Link
      href="https://kyforky.com/products/ky-farm-feed-sticker"
      target="_blank"
    >
      <Image
        src='/img/brands/ky-farm-feed.png'
        width="75"
        height="75"
        alt="Benefits"
        className={"object-cover"}
        placeholder="blur"
        blurDataURL='/img/brands/ky-farm-feed.png'
      />
    </Link>
  );
}

function KyAgricultureLogo() {
  return (
    <Link
      href="https://www.kyagr.com/"
      target="_blank"
    >
      <Image
        src='/img/brands/ky-agriculture.png'
        width="50"
        height="50"
        alt="Benefits"
        className={"object-cover"}
        placeholder="blur"
        blurDataURL='/img/brands/ky-agriculture.png'
      />
    </Link>
  );
}

export default Hero;