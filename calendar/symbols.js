const HEAVENLY_STEMS_WITH_CAPTIONS = [
    ['汉字', '拼音'],
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
const HEAVENLY_STEMS = HEAVENLY_STEMS_WITH_CAPTIONS.slice(1);

const EARTHLY_BRANCHES_WITH_CAPTIONS = [
    ['汉字', '拼音'],
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
];
const EARTHLY_BRANCHES = EARTHLY_BRANCHES_WITH_CAPTIONS.slice(1);

const SOLAR_TERMS_WITH_CAPTIONS = [
    ['汉字', '拼音', '太阳位于黄经角度'],
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
];
const SOLAR_TERMS = SOLAR_TERMS_WITH_CAPTIONS.slice(1);

const PLANETARY_SYMBOLS_WITH_CAPTIONS = [
    ['Symbol', 'Planet', 'Weekday'],
    ["☉", "Sun", "Sunday"],
    ["☾", "Moon", "Monday"],
    ["♂", "Mars", "Tuesday"],
    ["☿", "Mercuy", "Wednesday"],
    ["♃", "Jupiter", "Thursday"],
    ["♀", "Venus", "Friday"],
    ["♄", "Saturn", "Saturday"],
];
const PLANETARY_SYMBOLS = PLANETARY_SYMBOLS_WITH_CAPTIONS.slice(1);

const EASTERN_ARABIC_NUMERALS = [
    "٠",
    "١",
    "٢",
    "٣", 
    "٤",
    "٥",
    "٦",
    "٧", 
    "٨",
    "٩",
    "١٠",
];

console.debug("Symbols and Characters loaded.");
