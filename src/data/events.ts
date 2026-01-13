import thiraiImg from "../assets/thirai trivia.png";
import masterchefImg from "../assets/masterchef mania.png";
import webifyImg from "../assets/webify.png";
import electricalImg from "../assets/electrical odyssey.png";
import iplImg from "../assets/ipl auction.png";
import talentiaImg from "../assets/talentia.png";

export const events = [
  {
    slug: "thirai-trivia",
    title: "Thirai Trivia",
    image: thiraiImg,
    registerUrl: "/register/thirai-trivia",
    qrImage: "/assets/qr/common-qr.png",
    maxTeamMembers: 3,
  },
  {
    slug: "masterchef-mania",
    title: "MasterChef Mania",
    image: masterchefImg,
    registerUrl: "/register/masterchef-mania",
    qrImage: "/assets/qr/common-qr.png",
    maxTeamMembers: 5,
  },
  {
    slug: "web-development",
    title: "Web Development",
    image: webifyImg,
    registerUrl: "/register/web-development",
    qrImage: "/assets/qr/common-qr.png",
    maxTeamMembers: 3,
  },
  {
    slug: "mecharena",
    title: "Mecharena",
    image: "/assets/events/mecharena.jpg",
    registerUrl: "/register/mecharena",
    qrImage: "/assets/qr/common-qr.png",
    maxTeamMembers: 3,
  },
  {
    slug: "webify",
    title: "Webify",
    image: webifyImg,
    registerUrl: "/register/webify",
    qrImage: "/assets/qr/common-qr.png",
    maxTeamMembers: 3,
  },
  {
    slug: "gameathon",
    title: "Gameathon",
    image: "/assets/events/gameathon.jpg",
    registerUrl: "/register/gameathon",
    qrImage: "/assets/qr/common-qr.png",
    maxTeamMembers: 3,
  },
  {
    slug: "electrical-odyssey",
    title: "Electrical Odyssey",
    image: electricalImg,
    registerUrl: "/register/electrical-odyssey",
    qrImage: "/assets/qr/common-qr.png",
    maxTeamMembers: 3,
  },
  {
    slug: "buildscape",
    title: "Buildscape",
    image: "/assets/events/buildscape.jpg",
    registerUrl: "/register/buildscape",
    qrImage: "/assets/qr/common-qr.png",
    maxTeamMembers: 3,
  },
  {
    slug: "ipl-auction",
    title: "IPL Auction",
    image: iplImg,
    registerUrl: "/register/ipl-auction",
    qrImage: "/assets/qr/common-qr.png",
    maxTeamMembers: 5,
  },
  {
    slug: "talentia",
    title: "Talentia",
    image: talentiaImg,
    registerUrl: "/register/talentia",
    qrImage: "/assets/qr/common-qr.png",
    maxTeamMembers: 3,
  },
];

export default events;
