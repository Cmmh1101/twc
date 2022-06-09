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
      bio: "soy un...",
      portfolio: "",
      image: "",
    },
    {
      name: "Allison",
      title: "Software Engineer",
      link: "",
      bio: "soy un...",
      portfolio: "",
      image: "",
    },
    {
      name: "Zaida",
      title: "Software Engineer",
      link: "",
      bio: "soy un...",
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
