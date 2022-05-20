const monthsEn = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const monthsAr = [
  "جانفي",
  "فيفري",
  "مارس",
  "أفريل",
  "ماي",
  "جوان",
  "جويلية",
  "أوت",
  "سبتمبر",
  "أكتوبر",
  "نوفمبر",
  "ديسمبر",
];

export const getDay = (dateStr) => {
  let date = new Date(dateStr);
  return date.getDate();
};

export const getYear = (dateStr) => {
  let date = new Date(dateStr);
  return date.getFullYear();
};

export const getMonthEn = (dateStr) => {
  return dateStr.split(" ")[1];
};

const getOnlyTime = (dt) => {
  return dt.toJSON().split("T")[1].split(".")[0];
};

export const TimeParser = (dateStr) => {
  let date = new Date(dateStr);
  let minutes = date.getMinutes().toString();
  let houers = date.getHours().toString();
  minutes = minutes.length === 1 ? "0" + minutes : minutes;
  houers = houers.length === 1 ? "0" + houers : houers;
  return `${houers}:${minutes}`;
};

export const DateParser = (dateStr) => {
  let date = new Date(dateStr);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

export const FullDateEn = (dateStr, timeStr) => {
  let day = getDay(dateStr);
  let monthEn = getMonthEnFullName(dateStr);
  let year = getYear(dateStr);
  let time = TimeParser(timeStr);
  return `${day} ${monthEn} ${year} at ${time}`;
};

export const FullDateAr = (dateStr, timeStr) => {
  let day = getDay(dateStr);
  let monthAr = getMonthArFullName(dateStr);
  let year = getYear(dateStr);
  let time = TimeParser(timeStr);
  const part1 = `${day} ${monthAr}`;
  return ` ${time} ${monthAr} ${day} على الساعة `;
};

export const getMonthEnFullName = (dateStr) => {
  let date = new Date(dateStr);
  const monthNum = date.getMonth();
  return monthsEn[monthNum];
};

export const getMonthArFullName = (dateStr) => {
  let date = new Date(dateStr);
  const monthNum = date.getMonth();
  return monthsAr[monthNum];
};
