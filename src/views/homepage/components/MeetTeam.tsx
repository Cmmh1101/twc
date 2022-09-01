import { CardDeck } from "reactstrap";
import MainHeader from "../../../utils/MainHeader";
import MemberCard from "./MemberCard";

const MeetTeam = () => {
  const member = [
    {
      name: "Clara",
      title: "Software Engineer",
      link: "",
      bio: "soy un...",
      portfolio: "",
      image: "",
    },
    {
      name: "Marilyn",
      title: "Software Engineer",
      link: "",
      bio: "soy un...",
      portfolio: "",
      image: "",
    },
    {
      name: "Michael",
      title: "Software Engineer",
      link: "",
      bio: "Michael has had a long term relationship with HTML. When his daughter turned 4 he started teaching her how to code using code.org and CodeSpark. Seeing the potential to help more kids he brought this to the K-4 school he was working at, first during summer camps and eventually getting to work on a weekly basis with the kids as part of their curriculum. Eventually he decided to level up his game and started the self taught route, but needed a community and joined a bootcamp. Now he thinks and dreams in Javascript, using React for frontend, Node & Express for backend.",
      portfolio: "",
      image: "",
    },
    {
      name: "Allison",
      title: "Software Engineer",
      link: "",
      bio: "Allie Pistolessi is a former language teacher turned software engineer. …. TBD",
      portfolio: "",
      image: "",
    },
    {
      name: "Zaida",
      title: "Software Engineer",
      link: "",
      bio: "Web developer with a background in Accounting, based in London UK",
      portfolio: "",
      image: "",
    },
    {
      name: "Carla",
      title: "Software Engineer",
      link: "",
      bio: "soy un...",
      portfolio: "",
      image: "",
    },
  ];
  return (
    <>
      <MainHeader headerText="Meet the Team" />
      <CardDeck>
        {member.map((member, i) => {
          return (
            <MemberCard
              name={member.name}
              title={member.title}
              link={member.link}
              bio={member.bio}
              image={member.image}
            />
          );
        })}
      </CardDeck>
    </>
  );
};

export default MeetTeam;
