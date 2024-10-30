import gokuIcon from "../assets/profile icons/goku_SSJ.jpg";
import luffyIcon from "../assets/profile icons/luffy_g5.jpg";
import ichigoIcon from "../assets/profile icons/ichigo_VL.jpg";
import narutoIcon from "../assets/profile icons/naruto_SM.jpg";
import starU from "../assets/starNotFavorite.svg";
import starF from "../assets/starFavorite.svg";

interface post {
  profilePic: string;
  title: string;
  body: string;
  favorite: boolean;
}

const posts: post[] = [
  {
    profilePic: `${gokuIcon}`,
    title: "G.O.D Vegeta",
    body: "Each universe has its own God of Destruction, but it's a position that individuals can earn with the right training and motivation. Vegeta has made serious strides in this department and has gone so far as to master the Hakai maneuver and get equipped with the rare God of Destruction earring. After Vegeta's intense Ultra Ego transformation he feels closer than ever to God of Destruction status.",
    favorite: false,
  },
  {
    profilePic: `${luffyIcon}`,
    title: "Crocomom",
    body: `For those of you who are unfamiliar with the Crocomom theory, it is the theory that Crocodile used to be a woman and is Luffy’s mother. It is based off of two things.

    1: Luffy's mother has never been seen
    
    2: ${(
      <a href="http://imgur.com/a/UvXiP">
        This panel in the manga where Ivankov mentions knowing a secret of
        Crocodile's.
      </a>
    )}Ivankov's power to change the sex of any person has led to quite a bit of speculation.`,
    favorite: false,
  },
  {
    profilePic: `${ichigoIcon}`,
    title: "Soul reapers in hell",
    body: "In the 2020 one-shot manga, No Breath from the Jaws of Hell, it is established that beings with high spiritual power go to Hell when they die; the powerful Espada, Szayelaporro Granz, is shown emerging from Hell, for example. This system suggests fallen Soul Society captains like Yamamoto and Unohana might also reside there. With these plot threads dangling, a potential Hell Arc could reunite fans with Yamamoto, Unohana, and other powerful deceased characters.",
    favorite: false,
  },
  {
    profilePic: `${narutoIcon}`,
    title: "Infinite Tsukoyomi worked",
    body: `Nearly the entire shinobi population was caught in a world where their dreams came true. Each person experienced a slightly different world. Naruto’s team supposedly didn’t get caught in the genjutsu, since they were protected by Sasuke as he came to save the day.

    There's a darker possibility that Sasuke saving the day was just the beginning of the genjutsu for Naruto.

    After all, all of Naruto’s dreams have come true in the years since. He’s gone on to become Hokage, he married the girl who never lost faith in him, and he saved the world over and over again. This would be one dark turn of events for the franchise.`,
    favorite: false,
  },
];

export const Posts = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {posts.map((post, index) => {
        return (
          <div className="flex text-center items-center text-3xl" key={index}>
            <img
              src={post.profilePic}
              alt="profile icon"
              className="rounded-full h-44 max-w-full"
            />
            <h1 className="text-red-600 font-bold">{post.title}</h1>
            {post.favorite ? (
              <img src={starF} alt="favorite star" />
            ) : (
              <img src={starU} alt="unfavorite star" />
            )}
          </div>
        );
      })}
    </div>
  );
};
