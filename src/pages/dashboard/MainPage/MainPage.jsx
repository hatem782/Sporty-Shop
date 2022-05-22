import React, { useEffect, useState } from "react";

import { useStyles } from "./MainPageStyles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import NumbDisplay from "../../../components/NumbDisplay/NumbDisplay";
import EmailIcon from "@mui/icons-material/Email";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LanguageIcon from "@mui/icons-material/Language";
import GroupIcon from "@mui/icons-material/Group";

import CollectionsIcon from "@mui/icons-material/Collections";
import EventIcon from "@mui/icons-material/Event";
import ArticleIcon from "@mui/icons-material/Article";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import StoreIcon from "@mui/icons-material/Store";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";

import { useCollectionData } from "react-firebase-hooks/firestore";
import { eventsShow } from "../../../services/EventsServices";
import { memoryShow } from "../../../services/ForMemServices";
import { galleryShow } from "../../../services/GalleryServices";
import { membersStore } from "../../../services/MembersServices";
import { messagesShow } from "../../../services/MessagesServices";
import {
  GetContactsStats,
  GetVisitsStats,
} from "../../../services/MembersServices";

import LinearChart from "../../../components/Charts/LinearChart";

import { colors } from "../../../colors/colors";

function MainPage() {
  const css = useStyles();
  return (
    <div className={css.main}>
      <Grid container spacing={2}>
        <CardsNumbers />
      </Grid>
    </div>
  );
}

const CardsNumbers = () => {
  const [events] = useCollectionData(eventsShow, { idField: "id" });
  const [memos] = useCollectionData(memoryShow, { idField: "id" });
  const [galls] = useCollectionData(galleryShow, { idField: "id" });
  const [contacts] = useCollectionData(membersStore, { idField: "id" });
  const [emails] = useCollectionData(messagesShow, { idField: "id" });

  const [allVisits, setAllVisits] = useState(0);
  const [cvisits, setcvisits] = useState(0);

  const [statVisits, setStatVisits] = useState([]);
  const [statContatcs, setStatContatcs] = useState([]);

  useEffect(async () => {
    const resp = await GetVisitsStats();
    // number of current visits and all visists
    setAllVisits(100);
    setcvisits(100);

    // stats about the visists
    /*setStatVisits(
      resp.data.stats.map((st) => {
        return { date: new Date(st.date).getDate(), number: st.number };
      })
    );*/

    //const resp2 = await GetContactsStats();
    //console.log(resp2.data);
    /*setStatContatcs(
      resp2.data.stats.map((st) => {
        return { date: new Date(st.date).getDate(), number: st.number };
      })
    );*/
  }, []);

  return (
    <>
      <NumbDisplay
        color={colors.green}
        title={"Number Of All Visits"}
        value={500}
        icon={<LanguageIcon />}
      />
      <NumbDisplay
        color={colors.red}
        title={"Nb Of Current Users"}
        value={10}
        icon={<GroupIcon />}
      />
      <NumbDisplay
        color={colors.blue}
        title={"Number Of Contacts"}
        value={25}
        icon={<ContactMailIcon />}
      />
      <NumbDisplay
        color={colors.orange}
        title={"Pending Deliv Serv"}
        value={30}
        icon={<DeliveryDiningIcon />}
      />

      <NumbDisplay
        color={colors.purple}
        title={"Number of products"}
        value={50}
        icon={<FitnessCenterIcon />}
      />
      <NumbDisplay
        color={colors.deepBlue}
        title={"Pending Markets"}
        value={50}
        icon={<AddBusinessIcon />}
      />
      <NumbDisplay
        color={colors.pink}
        title={"Number Of Stotes"}
        value={4}
        icon={<StoreIcon />}
      />
      <NumbDisplay
        color={colors.wood}
        title={"Pending Products"}
        value={memos ? memos.length : 0}
        icon={<HourglassTopIcon />}
      />
      <ChartCont>
        <h3 className="chart-title">
          {/* <span className="primary">+21</span>  */}
          <LanguageIcon />
          Number of visits over time
        </h3>
        <LinearChart data={statVisits} datakey="time" valuekey="amount" />
      </ChartCont>

      <ChartCont>
        <h3 className="chart-title">
          {/* <span className="primary">+21</span>*/}
          <MonetizationOnIcon />
          Profit over time
        </h3>
        <LinearChart data={statContatcs} datakey="time" valuekey="amount" />
      </ChartCont>
    </>
  );
};

const ChartCont = (props) => {
  return (
    <Grid item xs={12} md={8} lg={6}>
      <Paper
        sx={{ p: 2, display: "flex", flexDirection: "column", height: "350px" }}
      >
        {props.children}
      </Paper>
    </Grid>
  );
};

export default MainPage;
