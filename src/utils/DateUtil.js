class DateUtil {
  static getDay() {
    return (Date ? new Date().getUTCDate() : null);
  }

  static getMonth() {
    return (Date ? new Date().getUTCMonth() + 1 : null);
  }

  static getYear() {
    return (Date ? new Date().getUTCFullYear() : null);
  }

  static getStartDayOfMonthCalendar() {
    const today = new Date();
    const oneOfTheMonth = new Date();
    oneOfTheMonth.setFullYear(today.getFullYear(), today.getMonth(), 1);
    const weekDayIndex = oneOfTheMonth.getDay();
    oneOfTheMonth.setDate(oneOfTheMonth.getDate() - weekDayIndex);
    return oneOfTheMonth;
  }

  static getMonthDays() {
    const today = new Date();
    const date = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    return date.getDate();
  }
}

export default DateUtil;
