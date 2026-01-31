import { useState } from "react";
import { TiArrowLeftOutline, TiArrowRightOutline } from "react-icons/ti";
import { FaTimes } from "react-icons/fa";
import { getLunarDate } from "../utils/lunar";

const weekDays = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

function CalendarModal({ onClose }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  // JS: CN = 0 → đổi về CN = 6
  const startDay = (firstDayOfMonth.getDay() + 6) % 7;
  const daysInMonth = lastDayOfMonth.getDate();

  const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));

  const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const today = new Date();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      {/* MODAL */}
      <div className="w-[95%] max-w-sm rounded-2xl bg-white p-4 text-(--color-primary) shadow-xl">
        {/* HEADER */}
        <div className="mb-3 flex items-center justify-between">
          <button
            onClick={handlePrevMonth}
            className="rounded-full p-1 hover:bg-gray-100"
          >
            <TiArrowLeftOutline size={20} />
          </button>

          <div className="text-base font-bold">
            Tháng {month + 1} / {year}
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleNextMonth}
              className="rounded-full p-1 hover:bg-gray-100"
            >
              <TiArrowRightOutline size={20} />
            </button>

            <button
              onClick={onClose}
              className="rounded-full p-1 hover:bg-red-100 hover:text-red-500"
            >
              <FaTimes size={14} />
            </button>
          </div>
        </div>

        {/* WEEK DAYS */}
        <div className="mb-1 grid grid-cols-7 text-center text-xs font-semibold text-gray-500">
          {weekDays.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        {/* DAYS */}
        <div className="grid grid-cols-7 gap-1 text-center">
          {/* Empty */}
          {Array.from({ length: startDay }).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}

          {/* Days */}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const solarDate = new Date(year, month, day);
            const lunar = getLunarDate(solarDate);

            const isToday =
              day === today.getDate() &&
              month === today.getMonth() &&
              year === today.getFullYear();

            return (
              <div
                key={day}
                className={`flex flex-col items-center rounded-lg py-1 transition ${
                  isToday
                    ? "bg-(--color-secondary) text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {/* Solar */}
                <span className="text-sm font-semibold">{day}</span>

                {/* Lunar */}
                <span
                  className={`text-[0.65rem] ${
                    lunar.day === 1
                      ? "text-red-500"
                      : isToday
                        ? "text-white/80"
                        : "text-gray-400"
                  }`}
                >
                  {lunar.day === 1 ? `${lunar.day}/${lunar.month}` : lunar.day}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CalendarModal;
