const HEAVENLY_STEMS = [
    ["甲", "jiǎ"],   // 1
    ["乙", "yǐ"],    // 2
    ["丙", "bǐng"],  // 3
    ["丁", "dīng"],  // 4
    ["戊", "wù"],    // 5
    ["己", "jǐ"],    // 6
    ["庚", "gēng"],  // 7
    ["辛", "xīn"],   // 8
    ["壬", "rén"],   // 9
    ["癸", "guǐ"],   // 10
];

const EARTHLY_BRANCHES = [
    ["子", "zǐ"],    // 1
    ["丑", "chǒu"],  // 2
    ["寅", "yín"],   // 3
    ["卯", "mǎo"],   // 4
    ["辰", "chén"],  // 5
    ["巳", "sì"],    // 6
    ["午", "wǔ"],    // 7
    ["未", "wèi"],   // 8
    ["申", "shēn"],  // 9
    ["酉", "yǒu"],   // 10
    ["戌", "xū"],    // 11
    ["亥", "hài"],   // 12
]

const SOLAR_TERMS = [
    ["立春", "lìchūn", 315], // Feb 4 / 1st month initial
    ["雨水", "yǔshuǐ", 330], // Feb 19 / 1st month midpoint
    ["惊蛰", "jīngzhé", 345], // 驚蟄 / Mar 6 / 2nd month initial
    ["春分", "chūnfēn", 0], // Mar 21 / 2nd month midpoint
    ["清明", "qīngmíng", 15], // Apr 5 / 3rd month initial
    ["谷雨", "gǔyǔ", 30], // 穀雨 / Apr 20 / 3rd month midpoint
    ["立夏", "lìxià", 45], // May 6 / 4th month initial
    ["小满", "xiǎomǎn", 60], // 小滿 / May 21 / 4th month midpoint
    ["芒种", "mángzhòng", 75], // 芒種 / Jun 6 / 5th month initial
    ["夏至", "xiàzhì", 90], // Jun 21 / 5th month midpoint
    ["小暑", "xiǎoshǔ", 105], // Jul 7 / 6th month initial
    ["大暑", "dàshǔ", 120], // Jul 23 / 6th month midpoint
    ["立秋", "lìqiū", 135], // Aug 8 / 7th month initial
    ["处暑", "chǔshǔ", 150], // 處暑 / Aug 23 / 7th month midpoint
    ["白露", "báilù", 165], // Sep 8 / 8th month initial
    ["秋分", "qiūfēn", 180], // Sep 23 / 8th month midpoint
    ["寒露", "hánlù", 195], // Oct 8 / 9th month initial
    ["霜降", "shuāngjiàng", 210], // Oct 23 / 9th month midpoint
    ["立冬", "lìdōng", 225], // Nov 7 / 10th month initial
    ["小雪", "xiǎoxuě", 240], // Nov 22 / 10th month midpoint
    ["大雪", "dàxuě", 255], // Dec 7 / 11th month initial
    ["冬至", "dōngzhì", 270], // Dec 22 / 11th month midpoint
    ["小寒", "xiǎohán", 285], // Jan 6 / 12th month initial
    ["大寒", "dàhán", 300], // Jan 20 / 12th month midpoint
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
    stem = `${stem[0]}<rt>${stem[1]}</rt>`;
    let branch = EARTHLY_BRANCHES[number % 12];
    branch = `${branch[0]}<rt>${branch[1]}</rt>`;
    return `<ruby>${stem}${branch}</ruby>`;
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
    term = SOLAR_TERMS[term % 24];
    return `<ruby>${term[0]}<rt>${term[1]}</rt><ruby> (${term[2]}°)`;
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
    return `${getSexagenaryYear(date_ms)}年 ${getSexagenaryMonth(date_ms, longitude)}月 ${getSexagenaryDay(date_ms, longitude)}日`;

}

console.debug("Sexagenary Cycle functions loaded.")