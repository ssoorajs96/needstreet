import React, { useState, useEffect } from "react";
import Navbar from "../navbar";
import styles from "./details.module.css";
import List from "../../components/List";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { eventActions } from "../../store/event-slice";
import { withRouter } from "react-router";

const Body = (props) => {
  const dispatch = useDispatch();
  const evtData = useSelector((state) => state.event.items);
  const [evtDetail, setEvtDetail] = useState("");
  let evtId = props.eventId;

  useEffect(() => {
    evtId = evtData.findIndex((item) => item.id == props.eventId);
    setEvtDetail(evtData[evtId]);
  }, []);

  const deleteEvent = (id) => {
    dispatch(
      eventActions.deleteEvent({
        id: id,
      })
    );
    props.history.push("/dashboard");
  };
  return (
    <div className={styles.dashboard__main}>
      <div className={styles.dashboard__area}>
        <div className={styles.dashboard__body}>
          <Navbar />
          <List key={evtDetail.id} data={evtDetail}>
            <Button
              buttontext="Delete"
              onClick={() => deleteEvent(evtDetail.id)}
              size="small"
            />
            <Button buttontext="Update" size="small" />
          </List>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Body);
