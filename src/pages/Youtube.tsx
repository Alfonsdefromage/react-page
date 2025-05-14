import "./Youtube.css";
const Youtube = () => {
  return (
    <div className="youtube">
      <h1>Youtube</h1>
      <p>
        I've always been interested in YouTube. In fact, I have a background in
        video editing—something I've been doing since I was very young. It's
        always been a way for me to relax and unwind. After moving to Japan, I
        decided to start capturing my life here, mainly to share it with my
        family back in Europe. Over time, I also became more curious about the
        marketing side of YouTube. These days, I use it as a kind of
        playground—to see how far I can go with it, without any specific goal
        other than having fun.
      </p>
      <h1>Densetsu Gaijin</h1>
      <div className="card">
        <div className="bio">
          Densetsu Gaijin is my first YouTube channel, which I started a few
          years ago. As I mentioned earlier, the original idea was to share my
          life in Japan with my family back home. But I soon realized it was
          also a wonderful way to store memories. Since then, I’ve been trying
          to regularly create videos—mostly about the two things I enjoy most in
          Japan: food and travel. There’s also another motivation behind my
          YouTube channels—actually both of them. Over the past seven years
          living in Japan, I’ve hardly used German, even though it’s one of my
          native languages. After a few years, I started to notice that my
          speaking ability was slipping. That’s one of the reasons I decided to
          move forward with the channels: to reconnect with my language and keep
          it alive.
        </div>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/IV_D7ur0324?si=TEg-eacvMyQXAtfr"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <h1>Doraques</h1>
      <div className="card">
        <div className="vid">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/H-77AWyo_SI?si=WQ73E9i0zdShsslI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="bio">
          Doraques is my second project, which I mostly focus on during the
          winter—when it's often too cold to spend much time outside. One of my
          biggest passions for as long as I can remember has been video games.
          As I grew older, I began to understand not just the fun, but also the
          cultural value and impact of this interactive medium. I quickly
          developed a special love for Japanese games. Pokémon, Final Fantasy,
          Kingdom Hearts... after school, I’d head straight to my room to
          continue those epic adventures. Now living in Japan—the birthplace of
          so many of my favorite games—I started collecting retro titles. With a
          room full of consoles and cartridges, I wanted to find a way to engage
          with them more deeply, instead of just letting them sit on shelves.
          That’s when I discovered an online community where I could share my
          thoughts and experiences. Creating written and video essays turned out
          to be the perfect way to bring all of my interests together—gaming,
          storytelling, collecting, and connecting with others.
        </div>
      </div>
    </div>
  );
};
export default Youtube;
