import first from "../assets/gallery/DSC00684.webp";
import firstthumb from "../assets/gallery/thumbnails/DSC00684.jpg";
import second from "../assets/gallery/DSC00854.webp";
import secondthumb from "../assets/gallery/thumbnails/DSC00854-min.jpg";
import fifth from "../assets/gallery/DSC01304.webp";
import fifththumb from "../assets/gallery/thumbnails/DSC01304.webp";
import sixth from "../assets/gallery/DSC01458.webp";
import sixththumb from "../assets/gallery/thumbnails/DSC01458.jpg";
import seventh from "../assets/gallery/DSC01470.webp";
import sevenththumb from "../assets/gallery/thumbnails/DSC01470.jpg";
import eighth from "../assets/gallery/DSC02230.webp";
import eighththumb from "../assets/gallery/thumbnails/DSC02230.webp";
import ninth from "../assets/gallery/DSC02514-2.webp";
import ninththumb from "../assets/gallery/thumbnails/DSC02514-2.jpg";
import tenth from "../assets/gallery/DSC02777.webp";
import tenththumb from "../assets/gallery/thumbnails/DSC02777.webp";
import eleventh from "../assets/gallery/DSC03172.webp";
import elevenththumb from "../assets/gallery/thumbnails/DSC03172-min.jpg";
import twelfth from "../assets/gallery/DSC03246.webp";
import twelfththumb from "../assets/gallery/thumbnails/DSC03246-min.jpg";
import thirteenth from "../assets/gallery/DSC03592.webp";
import thirteenththumb from "../assets/gallery/thumbnails/DSC03592.webp";

export type Images = {
  name: string;
  source: string;
  thumbnail?: string;
};

export const portfolioImages: Images[] = [
  {
    name: "1",
    source: first,
    thumbnail: firstthumb,
  },
  {
    name: "2",
    source: second,
    thumbnail: secondthumb,
  },
  {
    name: "5",
    source: fifth,
    thumbnail: fifththumb,
  },
  {
    name: "6",
    source: sixth,
    thumbnail: sixththumb,
  },
  {
    name: "7",
    source: seventh,
    thumbnail: sevenththumb,
  },
  {
    name: "8",
    source: eighth,
    thumbnail: eighththumb,
  },
  {
    name: "9",
    source: ninth,
    thumbnail: ninththumb,
  },
  {
    name: "10",
    source: tenth,
    thumbnail: tenththumb,
  },
  {
    name: "11",
    source: eleventh,
    thumbnail: elevenththumb,
  },
  {
    name: "12",
    source: twelfth,
    thumbnail: twelfththumb,
  },
  {
    name: "13",
    source: thirteenth,
    thumbnail: thirteenththumb,
  },
];
