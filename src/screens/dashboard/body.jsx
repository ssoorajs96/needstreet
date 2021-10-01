import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../navbar";
import styles from "./dashboard.module.css";
import List from "../../components/List";
import Button from "../../components/Button";
import EventModal from "../../components/Modal";
import TextInput from "../../components/TextInput";
import DateInput from "../../components/DateInput";
import { titleValidator } from "../../Helpers/titleValidator";
import { dateValidator } from "../../Helpers/dateValidator";
import { descriptionValidator } from "../../Helpers/descriptionValidator";
import { useDispatch, useSelector } from "react-redux";
import { eventActions } from "../../store/event-slice";
import { withRouter, Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  heading: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#d5d5d5",
    padding: 10,
  },
  listing: {
    display: "flex",
    flexDirection: "column",
  },
  inputMargin: {
    marginTop: 10,
  },
  evtbtn: {
    margin: 5,
  },
  dateInput: {
    width: "-moz-available",
    padding: "27px 12px 10px",
  },
  noDataHeading: {
    backgroundColor: "white",
    padding: 10,
    textAlign: "center",
  },
}));
const Body = (props) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const classes = useStyles();
  const evtData = useSelector((state) => state.event.items);
  const [startDate, setStartDate] = useState({ value: "", error: "" });
  const [title, setTitle] = useState({ value: "", error: "" });
  const [description, setDescription] = useState({ value: "", error: "" });
  const [editId, setEditId] = useState("");

  const addEventModalOpen = () => {
    setOpen(true);
    setModalType("addEvent");
  };

  const addEventModalClose = () => {
    setOpen(false);
  };

  const addEvent = () => {
    const evtDateError = dateValidator(startDate.value);
    const evtTitleError = titleValidator(title.value);
    const evtDescError = descriptionValidator(description.value);
    evtDateError
      ? setStartDate({ ...startDate, error: evtDateError })
      : evtTitleError
      ? setTitle({ ...title, error: evtTitleError })
      : evtDescError
      ? setDescription({ ...description, error: evtDescError })
      : dispatch(
          eventActions.saveEvent({
            evtTitle: title.value,
            evtDate: startDate.value,
            evtDescription: description.value,
          })
        );
    setOpen(false);
    setStartDate({ value: "", error: "" });
    setTitle({ value: "", error: "" });
    setDescription({ value: "", error: "" });
  };

  const deleteEvent = (id) => {
    dispatch(
      eventActions.deleteEvent({
        id: id,
      })
    );
  };

  const updateEvent = (id, type) => {
    if (type === "modalopen") {
      setOpen(true);
      setModalType("updateEvent");
      setEditId(id);
      const eventItem = evtData.findIndex((item) => item.id === id);
      setStartDate({ value: evtData[eventItem].evtDate, error: "" });
      setTitle({ value: evtData[eventItem].evtTitle, error: "" });
      setDescription({ value: evtData[eventItem].evtDescription, error: "" });
    } else {
      dispatch(
        eventActions.updateEvent({
          evtId: editId,
          evtTitle: title.value,
          evtDate: startDate.value,
          evtDescription: description.value,
        })
      );
      setOpen(false);
      setStartDate({ value: "", error: "" });
      setTitle({ value: "", error: "" });
      setDescription({ value: "", error: "" });
    }
  };

  return (
    <div className={styles.dashboard__main}>
      <div className={styles.dashboard__area}>
        <div className={styles.dashboard__body}>
          <Navbar />
          <div className={classes.heading}>
            <h3>Events</h3>
            <Button
              variant="contained"
              color="primary"
              buttontext="Add Event"
              onClick={addEventModalOpen}
              size="medium"
            />
          </div>
          <div className={classes.listing}>
            {evtData.length > 0 ? (
              evtData.map((el) => {
                return (
                  <List key={el.id} data={el}>
                    <Link
                      to={{
                        pathname: `/details/${el.id}`,
                      }}
                    >
                      <Button buttontext="View Detail" size="small" />
                    </Link>
                    <Button
                      buttontext="Delete"
                      onClick={() => deleteEvent(el.id)}
                      size="small"
                    />
                    <Button
                      buttontext="Update"
                      onClick={() => updateEvent(el.id, "modalopen")}
                      size="small"
                    />
                  </List>
                );
              })
            ) : (
              <div className={classes.noDataHeading}>
                <p>No Events Available</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <EventModal
        handler={open}
        title={modalType === "addEvent" ? "Add Event" : "Update Event"}
      >
        <div className={classes.inputMargin}>
          <DateInput
            className={classes.dateInput}
            value={startDate.value}
            onChange={(date) => setStartDate({ value: date, error: "" })}
            error={!!startDate.error}
            errorText={startDate.error}
            className={`textField`}
            label="Event Date"
            variant="filled"
          />
        </div>
        <div className={classes.inputMargin}>
          <TextInput
            value={title.value}
            onChange={(event) =>
              setTitle({ value: event.target.value, error: "" })
            }
            error={!!title.error}
            errorText={title.error}
            className={`textField`}
            label="Event Title"
            variant="filled"
          />
        </div>
        <div className={classes.inputMargin}>
          <TextInput
            value={description.value}
            onChange={(event) =>
              setDescription({ value: event.target.value, error: "" })
            }
            error={!!description.error}
            errorText={description.error}
            className={`textField`}
            label="Event Description"
            variant="filled"
            multiline
            rows={4}
          />
        </div>
        <div className={classes.inputMargin}>
          <Button
            className={classes.evtbtn}
            variant="outlined"
            color="primary"
            buttontext="Cancel"
            onClick={addEventModalClose}
          />
          {modalType === "addEvent" ? (
            <Button
              className={classes.evtbtn}
              variant="contained"
              color="primary"
              buttontext="save"
              onClick={addEvent}
            />
          ) : (
            <Button
              className={classes.evtbtn}
              variant="contained"
              color="primary"
              buttontext="update"
              onClick={() => updateEvent(editId, "modalsubmit")}
            />
          )}
        </div>
      </EventModal>
    </div>
  );
};

export default Body;
