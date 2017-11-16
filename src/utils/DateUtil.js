import i18n from 'utils/i18n/I18n';
const ONE_WEEK_IN_MS = 7 * 24 * 60  * 60 * 1000;
const ONE_MONTH_IN_MS = 31 * 24 * 60  * 60 * 1000;

class DateUtil {
  static getStartDayOfMonthCalendar(today = new Date()) {
    const oneOfTheMonth = new Date();
    oneOfTheMonth.setFullYear(today.getFullYear(), today.getMonth(), 1);
    const weekDayIndex = oneOfTheMonth.getDay();
    oneOfTheMonth.setDate(oneOfTheMonth.getDate() - weekDayIndex);
    return oneOfTheMonth;
  }

  static toString(date = new Date()) {
    const shortMonthName = i18n.get(`month_${date.getMonth()}_short`);
    const day = date.getDate();
    const year = date.getFullYear();
    return `${shortMonthName} ${day}, ${year}`;
  }

  static toShortString(date = new Date()) {
    const shortMonthName = i18n.get(`month_${date.getMonth()}_short`);
    const day = date.getDate();
    return `${day} ${shortMonthName}`;
  }

  static isSameWeek(checkDate = new Date(), weekStart = new Date()) {
      return Math.abs(weekStart.getTime() - checkDate.getTime()) <= ONE_WEEK_IN_MS;
  }

  static isSameMonth(checkDate = new Date(), weekStart = new Date()) {
      return Math.abs(weekStart.getTime() - checkDate.getTime()) <= ONE_MONTH_IN_MS;
  }

  static toInputFormat(date = new Date()) {
    var mm = date.getMonth() + 1;
    var dd = date.getDate();
    return [date.getFullYear(),(mm>9 ? '' : '0') + mm,(dd>9 ? '' : '0') + dd].join('-');
  }
}

export default DateUtil;
