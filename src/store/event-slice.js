import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
    name: 'event',
    initialState: {
        items: []
    },
    reducers: {
        saveEvent(state, action) {
            const newEvent = action.payload;
            state.items.push({
                id: new Date().getMilliseconds() + Math.random(),
                evtTitle: newEvent.evtTitle,
                evtDate: newEvent.evtDate,
                evtDescription: newEvent.evtDescription
            })
        },
        deleteEvent(state, action) {
            const eventId = action.payload.id;
            const eventItem = state.items.findIndex((item) => item.id === eventId);
            state.items.splice(eventItem, 1);
        },
        updateEvent(state, action) {
            const updatedEvent = action.payload;
            const eventId = action.payload.evtId;
            const eventItem = state.items.findIndex((item) => item.id === eventId);
            state.items[eventItem].evtTitle = updatedEvent.evtTitle;
            state.items[eventItem].evtDate = updatedEvent.evtDate;
            state.items[eventItem].evtDescription = updatedEvent.evtDescription;
        }
    }
});

export const eventActions = eventSlice.actions;
export default eventSlice.reducer;