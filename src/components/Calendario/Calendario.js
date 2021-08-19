import React, { useReducer, useEffect } from 'react';
import './Calendario.css';

// Complementos
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

// Componentes
import { EventAdd } from './componentsCal/EventAdd';
import { eventReducer } from './CalendarioReducer';

export const Calendario = () => {

  const init = () => {
    return JSON.parse(localStorage.getItem("events")) || [];
  };
 
  const [events, dispatch] = useReducer(eventReducer, [], init);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const handleAddEvent = (newEvent) => {

    dispatch({
      type: 'add',
      payload: newEvent
    });

  }
  
  return (
    <>
      <section className="container card mt-3 mb-3 p-3">
        <div className="row">
          <div className="col">
            <EventAdd 
              handleAddEvent={handleAddEvent}
            />
          </div>
        </div>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridDay"
          headerToolbar={{
            center: 'dayGridMonth,timeGridWeek,timeGridDay new',
          }}
          events={events}
          eventColor="blueligth"
          nowIndicator
          // dateClick={(e) => console.log(e)}
        />
      </section>
    </>
  )
}
