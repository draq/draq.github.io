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

const SEXAGENARY_DAY_START = Date.UTC(2021, 0, 15, 16);  // 16 Jan 2021 00:00:00 GMT+0800 (Beijing Time) in milliseconds since Unix epoch.
const DAY_IN_MS = 24 * 3600 * 1000;

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

function getSexagenaryYear() {
    return "";
}

function getSexagenaryMonth() {
    return "";
}

function getSexagenaryDay(date) {
    let diff = Number(date) - SEXAGENARY_DAY_START;
    diff = Math.floor(diff / DAY_IN_MS) + 1;
    console.debug(`Sexagenary Day = ${diff}`);
    return getSexagenaryCycle(diff); 
}

function getSexagenaryDate(date) {
    return `${getSexagenaryYear(date)}年 ${getSexagenaryMonth(date)}月 ${getSexagenaryDay(date)}日`;

}

console.debug("Sexagenary Cycle functions loaded.")