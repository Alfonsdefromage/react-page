import plans from "../assets/plans tonight.png";
import kollab from "../assets/kollab.png";
import gamersDen from "../assets/gamersDen.png";
import tfr from "../assets/TFR.png";

export type Project = {
  name: string;
  role: string;
  image: string;
  description: string;
  github: string;
  website: string;
};

export const projects: Project[] = [
  {
    name: "Plans Tonight",
    role: "Lead Developer",
    image: plans,
    description:
      "This app is designed to reduce the headache of chosing a place to go out with friends. A user can initialize a plan by choosing a date and time, invite friends to vote for the mood, and alcohol type they prefer. Based on these choices, the app will choose a place to go out.",
    github: "https://github.com/Alfonsdefromage/plans_tonight",
    website: "https://www.planstonight.lol/",
  },
  {
    name: "Kollab (airbnb clone)",
    role: "lead Developer",
    image: kollab,
    description:
      "My team decided to simulate a place where space owners - from Cafés which have an empty wall to share up to professional galleries - could rent out their spaces to artists. We came to the conclusion that, as an beginning artist without connections it's difficult to display art. Therefore the idea was born to create a space to encourage upcoming talents.",
    github: "https://github.com/Alfonsdefromage/kollab_art_gallery",
    website: "https://kollabart-5a9192f4e8a9.herokuapp.com/",
  },
  {
    name: "Tokyo Food Roulette",
    role: "Single Project",
    image: tfr,
    description:
      "Inspired by a real life problem - whenever my colleagues and I tried to decide on a restaurant to have lunch together, we were overwhelmed with restaurant options. Tokyo Food Roulette is a fun app that scrapes the 楽天グルメ page giving the user a random restaurant meeting their criteria.",
    github: "https://github.com/Alfonsdefromage/tokyo_roulette",
    website: "N/A",
  },
  {
    name: "Gamers Den",
    role: "Single Project",
    image: gamersDen,
    description:
      "As a video game collector, I wanted a way to keep track of my collection—especially when browsing local thrift stores and forgetting whether I already owned a title. So I built an app where I can log owned games, wishlist future purchases, and track which ones I haven’t played yet. I also added social features like reviews and ratings that are visible to all users.",
    github: "https://github.com/Alfonsdefromage/gamers_den",
    website: "N/A",
  },
];
