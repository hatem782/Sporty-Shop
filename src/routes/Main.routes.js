// ************************** ICONS ****************************
import DashboardIcon from "@mui/icons-material/Dashboard";
import CollectionsIcon from "@mui/icons-material/Collections";
import EventIcon from "@mui/icons-material/Event";
import ArticleIcon from "@mui/icons-material/Article";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ContactMailIcon from "@mui/icons-material/ContactMail";

import GroupsIcon from "@mui/icons-material/Groups";
import SettingsIcon from "@mui/icons-material/Settings";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import EmailIcon from "@mui/icons-material/Email";

// ************************** COMPS ****************************

import MainPage from "../pages/dashboard/MainPage/MainPage";
import GalleryPage from "../pages/dashboard/GalleryPage/GestGallery";
import GestEvents from "../pages/dashboard/EventsPage/GestEvents";
import GestContacts from "../pages/dashboard/ContactsPage/GestContacts";
import GestMessages from "../pages/dashboard/MessagesPage/GestMessages";
import GestTeam from "../pages/dashboard/TeamPage/GestTeam";
import GestMemory from "../pages/dashboard/ForumMemoryPage/GestMemory";
import Logout from "../pages/login/Logout";

export const routes = [
  {
    mainUrl: "/dashboard",
    url: "/main",
    icon: <DashboardIcon />,
    title: "dashboard",
    compo: <MainPage />,
  },
  {
    mainUrl: "/dashboard",
    url: "/gallery",
    icon: <CollectionsIcon />,
    title: "gallery",
    compo: <GalleryPage />,
  },
  {
    mainUrl: "/dashboard",
    url: "/events",
    icon: <EventIcon />,
    title: "events",
    compo: <GestEvents />,
  },
  {
    mainUrl: "/dashboard",
    url: "/memories",
    icon: <AutoStoriesIcon />,
    title: "memories",
    compo: <GestMemory />,
  },
  {
    mainUrl: "/dashboard",
    url: "/contacts",
    icon: <ContactMailIcon />,
    title: "contacts",
    compo: <GestContacts />,
  },
  {
    mainUrl: "/dashboard",
    url: "/emails",
    icon: <EmailIcon />,
    title: "emails",
    compo: <GestMessages />,
  },
];

export const subroutes = [
  {
    mainUrl: "/dashboard",
    url: "/team",
    icon: <GroupsIcon />,
    title: "team",
    compo: <GestTeam />,
  },
  {
    mainUrl: "/dashboard",
    url: "/settings",
    icon: <SettingsIcon />,
    title: "settings",
    compo: <></>,
  },
  {
    mainUrl: "/dashboard",
    url: "/logout",
    icon: <MeetingRoomIcon />,
    title: "Logout",
    compo: <Logout />,
  },
];
