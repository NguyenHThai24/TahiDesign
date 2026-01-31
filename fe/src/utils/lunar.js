import { Solar } from "lunar-javascript";

export function getLunarDate(date = new Date()) {
  const solar = Solar.fromDate(date);
  const lunar = solar.getLunar();

  return {
    day: lunar.getDay(),
    month: lunar.getMonth(),
    year: lunar.getYear(),
    isLeap: lunar.isLeap, // ❗ KHÔNG có ()
    canChiDay: lunar.getDayInGanZhi(),
    canChiMonth: lunar.getMonthInGanZhi(),
    canChiYear: lunar.getYearInGanZhi(),
  };
}
