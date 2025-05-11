import "./About.css";

const getAge = (birthDate: Date) => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
};

const About = () => {
  const age = getAge(new Date("1992-05-28"));

  return (
    <div className="about">
      <div className="about-text">
        <h1>Hi there!</h1>
        <p>
          Thanks for coming to my website! My name is Igor, and I'm {age} years
          old. I was born in Poland, but raised in Germany. Since 2018 I live in
          Japan, and with every day I fall more in love with this country.
          <br />
          <br />
          I've been working as a content manager for over 5 years, but 2024 I
          decided to quit my old job and start a new adventure as a softwre
          engineer.
          <br />
          <br />
          I'm interested in many different things, you can say I'm a jack of all
          trades. Since I was a child, I enjoyed playing video games, and I
          still do. I'm interested in the emotional side of games, and I love to
          analyze them, learn the history behind them and understand where they
          come from. I don't just play games, I try to undestand them.
          <br />
          <br />I also love to take photos and make videos. I own a Sony a7c II,
          and I try to capture the world through my lense. I love to take photos
          of cities, people, emotions.
        </p>
      </div>
      <img
        src={new URL("../assets/ich.JPG", import.meta.url).href}
        alt="My Photo"
        className="photo-img"
      />
    </div>
  );
};

export default About;
