const HEAVENLY_STEMS = [
    "甲", // 1  Jiǎ
    "乙", // 2  Yǐ
    "丙", // 3  Bǐng
    "丁", // 4  Dīng
    "戊", // 5  Wù
    "己", // 6  Jǐ
    "庚", // 7  Gēng
    "辛", // 8  Xīn
    "壬", // 9  Rén
    "癸"  // 10 Guǐ
];

const EARTHLY_BRANCHES = [
    "子", // 1  Zǐ
    "丑", // 2  Chǒu
    "寅", // 3  Yín
    "卯", // 4  Mǎo
    "辰", // 5  Chén
    "巳", // 6  Sì
    "午", // 7  Wǔ
    "未", // 8  Wèi
    "申", // 9  Shēn
    "酉", // 10 Yǒu
    "戌", // 11 Xū
    "亥", // 12 Hài
]

const SOLAR_TERMS = [
    "立春", // 315° / lìchūn / Feb 4 / 1st month initial
    "雨水", // 330° / yǔshuǐ / Feb 19 / 1st month midpoint
    "惊蛰", // 345° / 驚蟄 jīngzhé / Mar 6 / 2nd month initial
    "春分", //   0° / chūnfēn / Mar 21 / 2nd month midpoint
    "清明", //  15	/ qīngmíng / Apr 5 / 3rd month initial
    "谷雨", //  30° / 穀雨 gǔyǔ / Apr 20 / 3rd month midpoint
    "立夏", //  45° / lìxià / May 6 / 4th month initial
    "小满", //  60° / 小滿 xiǎomǎn / May 21 / 4th month midpoint
    "芒种", //  75° / 芒種 mángzhòng / Jun 6 / 5th month initial
    "夏至", //  90°	/ xiàzhì / Jun 21 / 5th month midpoint
    "小暑", // 105°	/ xiǎoshǔ / Jul 7 / 6th month initial
    "大暑", // 120°	/ dàshǔ / Jul 23 / 6th month midpoint
    "立秋", // 135° / lìqiū / Aug 8 / 7th month initial
    "处暑", // 150° / 處暑 chǔshǔ / Aug 23 / 7th month midpoint
    "白露", // 165° / báilù / Sep 8 / 8th month initial
    "秋分", // 180° / qiūfēn / Sep 23 / 8th month midpoint
    "寒露", // 195° / hánlù / Oct 8 / 9th month initial
    "霜降", // 210° / shuāngjiàng / Oct 23 / 9th month midpoint
    "立冬", // 225° / lìdōng / Nov 7 / 10th month initial
    "小雪", // 240° / xiǎoxuě / Nov 22 / 10th month midpoint
    "大雪", // 255° / dàxuě / Dec 7 / 11th month initial
    "冬至", // 270° / dōngzhì / Dec 22 / 11th month midpoint
    "小寒", // 285° / xiǎohán / Jan 6 / 12th month initial
    "大寒", // 300°	/ dàhán / Jan 20/ 12th month midpoint
]

const SEXAGENARY_DAY_START_MS = Date.UTC(2021, 0, 15, 16);  // 16 Jan 2021 00:00:00 GMT+0800 (Beijing Time) in milliseconds since Unix epoch.
const SEXAGENARY_MONTH_START_MS = Date.UTC(2018, 12, 6, 16); // 2018年12月07 00:00:00 GMT+0800 (Beijing Time) in milliseconds since Unix epoch.
const SEXAGENARY_YEAR_START_MS = Date.UTC(1984, 02, 03, 16); // 1984年02月04日 00:00:00 GMT+0800 (Beijing Time) in milliseconds since Unix epoch.
const DAY_IN_MS = 24 * 3600 * 1000;
const YEAR_IN_MS = DAY_IN_MS * 365.25;

function getSexagenaryCycle(number) { // Start with 1
    number = Math.floor(number);
    if (number < 1) {
        throw "The number must be equal or larger than 1!";
    }
    number = number % 60 - 1;
    let stem = HEAVENLY_STEMS[number % 10];
    let branch = EARTHLY_BRANCHES[number % 12];
    return stem + branch;
}

function getSexagenaryYear(date_ms) {
    let period = date_ms - SEXAGENARY_YEAR_START_MS;
    period = Math.floor(period / YEAR_IN_MS) + 1;
    period %= 60;
    console.debug(`Sexagenary Year = ${period}`);
    return getSexagenaryCycle(period);
}

function getSexagenaryMonth(date_ms, longitude) {
    let period = date_ms - SEXAGENARY_MONTH_START_MS;
    years = Math.floor(period / YEAR_IN_MS);
    let months = Math.floor((longitude + 105) / 30) + 1;
    months %= 12 ;
    result = years * 12 + months
    console.debug(`Sexagenary Month = ${result}`)
    return getSexagenaryCycle(result);
}

function getSolarTerm(longitude) {
    let term = Math.floor((longitude + 45) / 15);
    term %= 24;
    return SOLAR_TERMS[term];
}

function getSexagenaryDay(date_ms) {
    let period = date_ms - SEXAGENARY_DAY_START_MS;
    period = Math.floor(period / DAY_IN_MS) + 1;
    period %= 60;
    console.debug(`Sexagenary Day = ${period}`);
    return getSexagenaryCycle(period); 
}

function getSexagenaryDate(date, longitude) {
    date_ms = Number(date);
    return `${getSexagenaryYear(date_ms)}年 ${getSexagenaryMonth(date_ms, longitude)}月 ${getSexagenaryDay(date_ms, longitude)}日 (${getSolarTerm(longitude)})`;

}

console.debug("Sexagenary Cycle functions loaded.")