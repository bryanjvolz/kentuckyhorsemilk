import { FaGlassWhiskey, FaNotesMedical, FaPalette, FaPills, FaPoo, FaUtensils } from 'react-icons/fa';

import benefitOneImg from "../public/img/happy-horse.png";
import benefitTwoImg from "../public/img/farmer-horse1.png";

const benefitOne = {
  title: "It's What You Crave",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Nutritional Value",
      desc: "Horse milk is rich in vitamins, minerals, and proteins, making it a nutritious beverage choice. It is particularly high in vitamin C, B vitamins, calcium, and protein, which are essential for maintaining overall health.",
      icon: <FaPills />,
    },
    {
      title: "Digestibility",
      desc: "Horse milk is naturally low in lactose compared to cow's milk, making it easier to digest for some people who are lactose intolerant. The composition of proteins and fats in horse milk is also similar to human milk, making it a gentle option for those with sensitive stomachs.",
      icon: <FaPoo />,
    },
    {
      title: "Unique Flavor",
      desc: "Horse milk has a slightly sweet and creamy flavor with a hint of grassiness, making it distinct from other types of milk. Many people enjoy its unique taste as a refreshing alternative to cow or sheep's milk.",
      icon: <FaUtensils />,
    },
  ],
};

const benefitTwo = {
  title: "Not convinced yet?",
  desc: "Horse milk isn't some joke, no matter what Family Guy or random YouTubers may want you to believe. ",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Cultural Tradition",
      desc: "In regions like Central Asia, Eastern Europe, and parts of the United States, horse milk has a long history of being consumed for its health benefits and cultural significance. For centuries, it has been valued as a traditional beverage and is often associated with hospitality and celebration.",
      icon: <FaPalette />,
    },
    {
      title: "Health Benefits",
      desc: "Horse milk is believed to have various health benefits, including boosting the immune system, improving digestion, and promoting skin health. Some studies suggest that horse milk may have anti-inflammatory and antibacterial properties, although more research is needed to confirm these claims.",
      icon: <FaNotesMedical />,
    },
    {
      title: "Versatility",
      desc: "Pure Kentucky Horse Milk is a versatile ingredient that can be used in a wide variety of culinary creations. Its creamy texture and slightly sweet flavor make it a perfect addition to both sweet and savory dishes. From rich and decadent ice creams and frozen treats to creamy coffee drinks and hearty soups, Kentucky Horse Milk adds a unique depth of flavor and richness to any recipe. Additionally, its high protein content makes it an excellent ingredient for crafting specialty alcoholic beverages, such as creamy liqueurs and cocktails, adding a distinctive twist to classic drinks. Whether used as a base for desserts, beverages, or savory dishes, Kentucky Horse Milk elevates the flavor profile of any recipe, providing a delicious and nutritious alternative to traditional dairy products.",
      icon: <FaGlassWhiskey />,
    },
  ],
};


export {benefitOne, benefitTwo};
