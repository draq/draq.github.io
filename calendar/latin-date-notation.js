/* CURRENTLY NOT USED */

/* Generated with ChatGPT */
function toRomanNumeral(number) {
  // Convert a number to a Roman numeral string
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let result = '';
  for (let i = 0; i < values.length; i++) {
    while (number >= values[i]) {
      result += symbols[i];
      number -= values[i];
    }
  }
  return result;
}

/* Generated with ChatGPT */
function isIntercalaryYear(year) {
  if (year % 4 !== 0) {
    return false;
  } else if (year % 100 !== 0) {
    return true;
  } else if (year % 400 !== 0) {
    return false;
  } else {
    return true;
  }
}

const LATIN_MONTHS = ['Ianuarii', 'Februarii', 'Martii', 'Aprilis', 'Maii', 'Iunii', 'Iulii', 'Augusti', 'Septembris', 'Octobris', 'Novembris', 'Decembris'];
const KALENDS = ['Kalendas', 'Nonas', ' Idus'];

function abbreviated(words, length=3) {
  return words.split(' ').map(word => word.slice(0, length) + '.').join(' ');
}

function convertToLatinDate(year, month, day) {
  // month starts with 0 as January.
  // After Julian reform, cf https://en.wikipedia.org/wiki/Roman_calendar#Months
  let dayName = undefined;
  let nonas = undefined;
  let idus = undefined;
  let kalendas = undefined;
  if ([2, 4, 6, 10].includes(month)) {
    // March, May, July, October
    nonas = 7;
    idus = 15;
    kalendas = 31;
  } else if ([0, 7, 11].includes(month)) {
    // January, August, December
    nonas = 5;
    idus = 13;
    kalendas = 31;
  } else if ([3, 5, 8, 11].includes(month)) {
    // April, June, September, November
    nonas = 5;
    idus = 13;
    kalendas = 31;
  } else if (month === 1 && isIntercalaryYear(year)) {
    // February with 29 days;
    nonas = 5;
    idus = 13;
    kalendas = 29;
  } else if (month === 1 && !isIntercalaryYear(year)) {
    // February with 28 days;
    nonas = 5;
    idus = 13;
    kalendas = 28;
  }

  
  if (day === 1) {
    dayName = 'Kalendis';
  } else if (day < nonas - 1) {
    d = toRomanNumeral(nonas + 1 - day);
    dayName = `ante diem ${d} Nonas`;
  } else if (day === nonas - 1) {
    dayName = 'Pridie Nonas';
  } else if (day === nonas) {
    dayName = 'Nonis';
  } else if (day < idus - 1) {
    d = toRomanNumeral(idus + 1 - day);
    dayName = `ante diem ${d} Idus`;
  } else if (day === idus - 1) {
    dayName = 'Pridie Idus';
  } else if (day === idus) {
    dayName = 'Idibus';
  } else if (day < kalendas) {
    d = toRomanNumeral(kalendas + 2 - day);
    dayName = `ante diem ${d} Kalendas`;
  } else {
    dayName = 'Pridie Kalendas';
  }

  const monthName = LATIN_MONTHS[month];
  const yearRoman = toRomanNumeral(year);

  const latinDate = `${dayName} ${monthName} ${yearRoman}`;
  return latinDate;
}