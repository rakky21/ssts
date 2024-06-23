import style from "./calendar.module.css";
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Scheduler() {
  const [value, onChange] = useState(new Date());
  return (
    <div className={style.calendarDays}>
      <div className={style.modelo}>
        <div>
          <Calendar onChange={onChange} value={value} />
        </div>
      </div>
    </div>
  );
}
