const SEXAGENARY_DAY_START_MS = Date.UTC(2021, 0, 15, 16);  // 16 Jan 2021 00:00:00 GMT+0800 (Beijing Time) in milliseconds since Unix epoch.
const SEXAGENARY_MONTH_START_MS = Date.UTC(2018, 12, 6, 16); // 2018年12月07 00:00:00 GMT+0800 (Beijing Time) in milliseconds since Unix epoch.
const SEXAGENARY_YEAR_START_MS = Date.UTC(1984, 02, 03, 16); // 1984年02月04日 00:00:00 GMT+0800 (Beijing Time) in milliseconds since Unix epoch.
const DAY_IN_MS = 24 * 3600 * 1000;
const YEAR_IN_MS = DAY_IN_MS * 365.25;

function getSexagenaryCycle(number) { // Start with 0
    number = Math.floor(number);
    if (number < 0) {
        throw "The number must be equal or larger than 1!";
    }
    number = number % 60;
    let stem = HEAVENLY_STEMS[number % 10]; 
    stem = `${stem[0]}<rt>${stem[1]}</rt>`;
    let branch = EARTHLY_BRANCHES[number % 12];
    branch = `${branch[0]}<rt>${branch[1]}</rt>`;
    return `<ruby>${stem}${branch}</ruby>`;
}

function getSexagenaryYear(date_ms) {
    let period = date_ms - SEXAGENARY_YEAR_START_MS;
    period = Math.floor(period / YEAR_IN_MS);
    period %= 60;
    console.debug(`Sexagenary Year = ${period}`);
    return getSexagenaryCycle(period);
}

function getSexagenaryMonth(date_ms, longitude) {
    let period = date_ms - SEXAGENARY_MONTH_START_MS;
    years = Math.floor(period / YEAR_IN_MS);
    let months = Math.floor((longitude + 105) / 30);
    months %= 12 ;
    result = years * 12 + months
    console.debug(`Sexagenary Month = ${result}`)
    return getSexagenaryCycle(result);
}

function getSolarTerm(longitude) {
    let term = Math.floor((longitude + 45) / 15);
    term = SOLAR_TERMS[term % 24];
    return `<ruby>${term[0]}<rt>${term[1]}</rt><ruby> (${term[2]}°)`;
}

function getSexagenaryDay(date_ms) {
    let period = date_ms - SEXAGENARY_DAY_START_MS;
    period = Math.floor(period / DAY_IN_MS);
    period %= 60;
    console.debug(`Sexagenary Day = ${period}`);
    return getSexagenaryCycle(period); 
}

function getSexagenaryDate(date, longitude) {
    date_ms = Number(date);
    return `${getSexagenaryYear(date_ms)}年 ${getSexagenaryMonth(date_ms, longitude)}月 ${getSexagenaryDay(date_ms, longitude)}日`;

}

console.debug("Sexagenary Cycle functions loaded.")