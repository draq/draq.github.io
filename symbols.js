const HEAVENLY_STEMS = [
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

const EARTHLY_BRANCHES = [
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

const SOLAR_TERMS = [
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

const PLANETARY_SYMBOLS = [
    ['Symbol', 'Planet', 'Weekday'],
    ["☉", "Sun", "Sunday"],
    ["☾", "Moon", "Monday"],
    ["♂", "Mars", "Tuesday"],
    ["☿", "Mercuy", "Wednesday"],
    ["♃", "Jupiter", "Thursday"],
    ["♀", "Venus", "Friday"],
    ["♄", "Saturn", "Saturday"],
];

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

const BAGUA = [
    ['卦', '汉字', '拼音'],
    ["⚋", "阴爻", "yīnyáo"],
    ["⚊", "阳爻", "yángyáo"],
    ["⚏", "太阴", "tàiyīn"],
    ["⚍", "少阳", "shǎoyáng"],
    ["⚎", "少阴", "shǎoyīn"],
    ["⚌", "太阳", "tàiyáng"],
    ["\u2637" , "坤", "kūn"],  // "☷"
    ["☶", "艮", "gěn"],
    ["☵", "坎", "kǎn"],
    ["☴", "巽", "xùn"],
    ["☳", "震", "zhèn"],
    ["☲", "离", "lí"],
    ["☱", "兑", "duì"],
    ["☰", "乾", "qián"]
]

const X64 = [
  ["䷁", "䷖", "䷇", "䷓", "䷏", "䷢", "䷬", "䷋",
   "䷎", "䷳", "䷦", "䷴", "䷽", "䷷", "䷞", "䷠",
   "䷆", "䷃", "䷜", "䷺", "䷧", "䷿", "䷮", "䷅",
   "䷭", "䷑", "䷯", "䷸", "䷟", "䷱", "䷛", "䷫",
   "䷗", "䷚", "䷂", "䷩", "䷲", "䷔", "䷐", "䷘", 
   "䷣", "䷕", "䷾", "䷤", "䷶", "䷝", "䷰", "䷌", 
   "䷒", "䷨", "䷻", "䷼", "䷵", "䷥", "䷹", "䷉", 
   "䷊", "䷙", "䷄", "䷈", "䷡", "䷍", "䷪", "䷀"],
  ["坤", "剥", "比", "观", "豫", "晋", "萃", "否",
   "谦", "艮", "蹇", "渐", "小过", "旅", "咸", "遁", 
   "师", "蒙", "坎", "涣", "解", "未济", "困", "讼", 
   "升", "蛊", "井", "巽", "恒", "鼎", "大过", "姤", 
   "复", "颐", "屯", "益", "震", "噬嗑", "随", "无妄", 
   "明夷", "贲", "既济", "家人", "丰", "离", "革", "同人", 
   "临", "损", "节", "中孚", "归妹", "睽", "兑", "履", 
   "泰", "大畜", "需", "小畜", "大壮", "大有", "夬", "乾"],
  ["kūn", "bāo", "bǐ", "guān", "yù", "jìn", "cuì", "fǒu", 
   "qiān", "gèn", "jiǎn", "jiàn", "xiǎoguò", "lǚ", "xián", "dùn", 
   "shī", "mēng", "kǎn", "huàn", "jiě", "wèijì", "kùn", "sòng", 
   "shēng", "gǔ", "jǐng", "xùn", "héng", "dǐng", "dàguò", "gòu", 
   "fù", "yí", "tún", "yì", "zhèn", "shìkē", "suí", "wúwàng", 
   "míngyí", "bì", "jìjì", "jiārén", "fēng", "lí", "gé", "tóngrén", 
   "lín", "sǔn", "jié", "zhōngfú", "guīmèi", "kuí", "duì", "lǚ", 
   "tài", "dàxù", "xū", "xiǎoxù", "dàzhuàng", "dàyǒu", "guài", "qian"], 
  // Links for https://ctext.org/book-of-changes/zhs
  ["kun", "bao", "bi", "guan", "yu", "jin", "cui", "fou", 
   "qian", "gen", "jian", "jian", "xiaoguo", "lu1", "xian", "dun", 
   "shi", "meng", "kan", "huan", "jie", "weiji", "kun", "song", 
   "sheng", "gu", "jing", "xun", "heng", "ding", "daguo", "gou", 
   "fu", "yi", "tun", "yi", "zhen", "shike", "sui", "wuwang", 
   "mingyi", "bi", "jiji", "jiaren", "feng", "li", "ge", "tongren", 
   "lin", "sun", "jie", "zhongfu", "guimei", "kui", "dui", "lu", 
   "tai", "daxu", "xu", "xiaoxu", "dazhuang", "dayou", "guai", "qian"]
]

console.debug("Symbols and Characters loaded.");
