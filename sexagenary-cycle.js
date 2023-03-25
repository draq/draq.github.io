const SEXAGENARY_DAY_START_MS = Date.UTC(2021, 0, 15, 16);  // 16 Jan 2021 00:00:00 GMT+0800 (Beijing Time) in milliseconds since Unix epoch.
const SEXAGENARY_MONTH_START_MS = Date.UTC(2018, 11, 6, 16); // 2018年12月07 00:00:00 GMT+0800 (Beijing Time) in milliseconds since Unix epoch.
const SEXAGENARY_YEAR_START_MS = Date.UTC(1984, 01, 03, 16); // 1984年02月04日 00:00:00 GMT+0800 (Beijing Time) in milliseconds since Unix epoch.
const DAY_IN_MS = 24 * 3600 * 1000;
const YEAR_IN_MS = DAY_IN_MS * 365.24219;

function getSexagenaryCycle(number) { // Start with 0
    number = Math.floor(number);
    if (number < 0) {
        throw "The number must be equal or larger than 1!";
    }
    number %= 60;
    let stem = HEAVENLY_STEMS.slice(1)[number % 10]; 
    stem = `${stem[0]}<rt>${stem[1]}</rt>`;
    let branch = EARTHLY_BRANCHES.slice(1)[number % 12];
    branch = `${branch[0]}<rt>${branch[1]}</rt>`;
    return `<ruby>${stem}${branch}</ruby>`;
}

function getSexagenaryYear(date_ms) {
    let period = date_ms - SEXAGENARY_YEAR_START_MS;
    period = Math.floor(period / YEAR_IN_MS);
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
    console.debug(`Sexagenary Day = ${period}`);
    return getSexagenaryCycle(period); 
}

function getSexagenaryDate(date, longitude) {
    let date_ms = Number(date);
    return `${getSexagenaryYear(date_ms)}年 ${getSexagenaryMonth(date_ms, longitude)}月 ${getSexagenaryDay(date_ms)}日`;

}

function getGua(index, withLink = false) {
    let html = `${X64[0][index]}<ruby>${X64[1][index]}<rt>${X64[2][index]}</rt></ruby>`;
    if (withLink) {
        html = `<a href="https://ctext.org/book-of-changes/${X64[3][index]}/zhs">${html}</a>`;
    } 
    return html
}

function checkLinks() {
    // Does not work due to CORS 
    X64[3].map((val) => fetch(`https://ctext.org/book-of-changes/${val}/zhs`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        })
    );
}

console.debug("Sexagenary Cycle functions loaded.")