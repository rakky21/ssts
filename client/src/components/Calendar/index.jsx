import style from "./calendar.module.css";

export default function Calendar() {
  const months = [
    " JANUARY",
    " FEBRUARY",
    " MARCH",
    " APRIL",
    " MAY",
    " JUNE",
    " JULY",
    " AUGUST",
    " SEPTEMBER",
    " OCTOBER",
    " NOVEMBER",
    " DECEMBER",
  ];

  const days = [
    " SUNDAY",
    " MONDAY",
    " TUESDAY",
    " WEDNESDAY",
    " THURSDAY",
    " FRIDAY",
    " SATURDAY",
  ];

  const date = [
    " 1",
    " 2",
    " 3",
    " 4",
    " 5",
    " 6",
    " 7",
    " 8",
    " 9",
    " 10",
    " 11",
    " 12",
    " 13",
    " 14",
    " 15",
    " 16",
    " 17",
    " 18",
    " 19",
    " 20",
    " 21",
    " 22",
    " 23",
    " 24",
    " 25",
    " 26",
    " 27",
    " 28",
    " 29",
    " 30",
    " 31",
  ];

  return (
    <div className={style.calendarDays}>
      <div className={style.modelo}>
        <h2>
          {/* IF THE MONTH IS SELECTED, THEN THE MONTH WILL DISPLAY AND ONLY ONE
        MAY SHOW */}
          {months}
        </h2>
        <ol>
          <li> {days}</li>
        </ol>
        <ol>
          <li> {date}</li>
        </ol>
      </div>
    </div>
  );
}
