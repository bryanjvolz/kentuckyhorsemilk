import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";

function HorseMilkSite({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default HorseMilkSite;
