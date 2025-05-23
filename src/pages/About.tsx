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
          Thanks for visiting my website! My name is Igor, and I'm {age} years
          old. I was born in Poland, but raised in Germany. Since 2018, I’ve
          been living in Japan, and with each passing day, I fall more in love
          with this country.
          <br />
          <br />
          I worked as a content manager for over 5 years, but in 2024, I decided
          to quit my old job and start a new adventure as a software engineer.
          <br />
          <br />
          I'm interested in many different things—you could say I'm a jack of
          all trades. Ever since I was a child, I’ve enjoyed playing video
          games, and I still do. I'm fascinated by the emotional side of games,
          and I love analyzing them, learning about their history, and
          understanding their origins. I don’t just play games—I try to
          understand them.
          <br />
          <br />I also love taking photos and making videos. I own a Sony a7C
          II, and I try to capture the world through my lense. I enjoy
          photographing cities, people, and emotions.
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
