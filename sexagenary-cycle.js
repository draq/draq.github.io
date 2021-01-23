HEAVENLY_STEMS = [
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

EARTHLY_BRANCHES = [
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

function getSexagenaryCycle(number) {
    number = Math.floor(number);
    if (number < 1) {
        throw "The number must be equal or larger than 1!";
    }
    number = number % 60 - 1;
    let stem = HEAVENLY_STEMS[number % 10];
    let branch = EARTHLY_BRANCHES[number % 12];
    return stem + branch;
}

console.debug("Sexagenary Cycle functions loaded.")