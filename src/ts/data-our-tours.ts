import forest from "/image/our-tours/forest.jpg";
import forest2x from "/image/our-tours/forest@2x.jpg";
import river from "/image/our-tours/river.jpg";
import river2x from "/image/our-tours/river@2x.jpg";
import home from "/image/our-tours/home.jpg";
import home2x from "/image/our-tours/home@2x.jpg";

export const dataOurTours = [
  {
    id: 1,
    image: forest,
    image2: forest2x,
    title: "Lake Synevyr and Shipit waterfall",
    info: [
      "Departure from Lviv (07:00) / Stryi (08:00)",
      `Pylypets (overview of Shipit waterfall and lunch)`,
      "Synevyr Pass (photographing and viewing of Carpathian panoramas)",
      `"Synevyr" National Park (brown bear rehabilitation center and transition to the lake)`,
      "Stryi (21:00)/Lviv (return by 22:00)",
    ],
    price: "2000 UAH"
  },
  {
    id: 2,
    image: home,
    image2: home2x,
    title: "Ancient History & Vibrant Present",
    info: [
      "Departure from Kiev (08:00)",
      `St. Sophia's Cathedral (iconic UNESCO World Heritage site)`,
      "Golden Gate (historical monument visit)",
      "Bessarabsky Market (tasting local delicacies)",
      "Kiev Pechersk Lavra (exploration of the significant monastery)",
      "Return to Kiev by 20:00",
    ],
     price: "3000 UAH"
  },
  {
    id: 3,
    image: river,
    image2: river2x,
    title: "Black Sea Jewel",
    info: [
      "Departure from Odessa (08:00)",
      `Primorsky Boulevard (city's scenic walk)`,
      "Potemkin Steps (historical site and great city view)",
      "Odessa Opera and Ballet Theatre (exterior visit)",
      "Lunch at a local seafood restaurant",
      "Return to Odessa by 20:00",
    ],
     price: "3500 UAH"
  },
];
