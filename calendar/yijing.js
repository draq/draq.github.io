const SIXIANG_WITH_CAPTIONS = [
  ['爻象', '名', '拼音'],

  ["⚊", "阳爻", "yángyáo"],
  ["⚋", "阴爻", "yīnyáo"],

  ["⚌", "太阳", "tàiyáng"],
  ["⚍", "少阴", "shǎoyīn"],

  ["⚎", "少阳", "shǎoyáng"],
  ["⚏", "太阴", "tàiyīn"],
];

const SIXIANG = SIXIANG_WITH_CAPTIONS.slice(1);


const BAGUA_WITH_CAPTIONS = [
  ['卦象', '卦名', '拼音', "自然象征", "性情", "家族关系", "动物", "身体部位", "器官", "方位", "五行"],

  ["☰", "乾", "qián", "天", "健", "父", "马", "头", "脑", "南", "金"],
  ["☱", "兑", "duì", "泽", "悦", "少女", "羊", "口", "肺", "东南", "金"],

  ["☲", "离", "lí", "火", "丽", "中女", "雉", "目", "心", "东", "火"],
  ["☳", "震", "zhèn", "雷", "动", "长男", "龙", "足", "肝", "东北", "木"],

  ["☴", "巽", "xùn", "风", "入", "长女", "鸡", "股", "胆", "西南", "木"],
  ["☵", "坎", "kǎn", "水", "陷", "中男", "豕", "耳", "肾", "西", "水"],

  ["☶", "艮", "gěn", "山", "止", "少男", "狗", "手", "胃", "西北", "土"],
  ["☷", "坤", "kūn", "地", "顺", "母", "牛", "腹", "脾", "北", "土"],
];
[
  "☰", "乾", "天", "健", "父", "马", "头", "脑", "南", "西北", "金", "111", "U+2630",
  "☱", "兑", "泽", "悦", "少女", "羊", "口", "肺", "东南", "西", "金", "110", "U+2631",
  "☲", "离", "火", "丽", "中女", "雉", "目", "心", "东", "南", "火", "101", "U+2632",
  "☳", "震", "雷", "动", "长男", "龙", "足", "肝", "东北", "东", "木", "100", "U+2633",
  "☴", "巽", "风", "入", "长女", "鸡", "股", "胆", "西南", "东南", "木", "011", "U+2634",
  "☵", "坎", "水", "陷", "中男", "豕", "耳", "肾", "西", "北", "水", "010", "U+2635",
  "☶", "艮", "山", "止", "少男", "狗", "手", "胃", "西北", "东北", "土", "001", "U+2636",
  "☷", "坤", "地", "顺", "母", "牛", "腹", "脾", "北", "西南", "土", "000", "U+2637"
]



const BAGUA = BAGUA_WITH_CAPTIONS.slice(1);

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
    "qian", "gen", "jian", "jian1", "xiao-guo", "lu1", "xian", "dun",
    "shi", "meng", "kan", "huan", "jie", "wei-ji", "kun1", "song",
    "sheng", "gu", "jing", "xun", "heng", "ding", "da-guo", "gou",
    "fu", "yi", "tun", "yi1", "zhen", "shi-ke", "sui", "wu-wang",
    "ming-yi", "bi", "ji-ji", "jia-ren", "feng", "li", "ge", "tong-ren",
    "lin", "sun", "jie1", "zhong-fu", "gui-mei", "kui", "dui", "lu",
    "tai", "da-xu", "xu", "xiao-xu", "da-zhuang", "da-you", "guai", "qian"]
]

function getGua(index, withLink = false) {
  let html = `${X64[0][index]}<ruby>${X64[1][index]}<rt>${X64[2][index]}</rt></ruby>`;
  if (withLink) {
    // ens for English, zhs for Simplied, zh for Traditional
    html = `<a href="https://ctext.org/book-of-changes/${X64[3][index]}/ens", target="_blank">${html}</a>`;
  }
  return html;
}

function yarrow(debug = false) {

  function printys(ys, remark) {
    console.debug(`[${ys[0]}, \t${ys[1]}, \t${ys[2]}, \t${ys[3]}, \t${ys[4]}, \t${ys[5]}, \t${ys[6]}] \t${remark}`);
    return;
  }

  function getRandomInt(a, b) {
    // The formula Math.floor(Math.random() * (max - min + 1)) + min ensures that the result is in the inclusive range [min, max]
    return Math.floor(Math.random() * (b - a + 1) + a);
  }

  function ys_round(ys, round, debug = false) {
    if (debug) {
      console.debug(`=============== Round ${round} ===============`);
      console.debug('[src, \tsky, \tleft, \thuman, \tearth, \tright, \tbin] \tremark');
      // Generate a number somewhere in between 1/3 to 2/3 as humans do not trick
      printys(ys, "Starting");
    }

    ys[1] = getRandomInt(ys[0] / 3, ys[0] * 2 / 3);
    ys[4] = ys[0] - ys[1];
    ys[0] = ys[0] - ys[1] - ys[4];
    if (debug) printys(ys, "Separate into two");

    ys[3] = 1;
    ys[1] = ys[1] - ys[3];
    if (debug) printys(ys, "and with one as human");

    ys[2] = ys[1] % 4;
    if (ys[2] === 0) {
      ys[2] = 4;
    }
    ys[1] = ys[1] - ys[2];
    if (debug) printys(ys, "then 4 by 4 and sky behind ...");

    ys[5] = ys[4] % 4;
    if (ys[5] === 0) {
      ys[5] = 4;
    }
    ys[4] = ys[4] - ys[5];
    if (debug) printys(ys, "then 4 by 4 and earth behind ...");

    ys[6] += ys[2] + ys[3] + ys[5];
    ys[2] = 0;
    ys[3] = 0;
    ys[5] = 0;
    ys[0] = ys[1] + ys[4];
    ys[1] = 0;
    ys[4] = 0;
    if (debug) printys(ys, "complete the cycle ...");

    const checkSum = ys.reduce((partialSum, a) => partialSum + a, 0);
    if (checkSum !== 49) {
      console.error(`Checksum is ${checkSum} instead of 49.`)
    }

    return ys;
  }

  let ys = [0, 0, 0, 0, 0, 0, 0];
  ys[0] = 55;
  //console.debug(ys, "The number of heaven and earth is 55");
  ys[0] -= 6;
  //console.debug(ys, "only 49 is used");

  // Round 1 needs to ensure mod 4 cannot return 0 and cannot have 0 
  // wiki said cannot have 1 as well not sure about that

  for (let i = 1; i < 4; i++) {
    ys = ys_round(ys, i, debug);
  }

  let result = Math.floor(ys[0] / 4);

  return result;

}

function calculateSum(arr, reverse = false) {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array!');
  }

  let sum = 0;
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 6 || arr[i] > 9) {
      throw new Error("Value must be between 6 and 9!");
    } else {
      if (reverse) {
        if (arr[i] === 6 || arr[i] === 7) {
          k = 1;
        } else if (arr[i] === 8 || arr[i] === 9) {
          k = 0;
        } 
      }
      else {
        k = arr[i] % 2;
      }
    }
    index += k * Math.pow(2, arr.length - i - 1);
    sum += k * Math.pow(2, i);
  }
  return `${getGua(index, withLink=true)} (${sum})`;
}


function divinate(element) {
  // We build from bottom to top
  let tossArray = [0, 0, 0, 0, 0, 0];

  for (let line = 0; line < 6; line++) {
    tossArray[line] = yarrow(debug = true);
    console.debug(`Line ${line + 1}: toss is ${tossArray[line]}.`);
  }

  console.log(`Result is ${tossArray}.`)

  function getLinesInReverse(tossArray) {
    lines = '';
    for (let line = 5; line >= 0; line--) {
      let val = tossArray[line];
      if (val === 6) {
        lines += '<tr><td>6</td><td style="color: red;">--&nbsp;&nbsp;--</td><td>------</td></tr>';
      } else if (val === 7) {
        lines += '<tr><td>7</td><td>------</td><td>------</td></tr>';
      } else if (val === 8) {
        lines += '<tr><td>8</td><td>--&nbsp;&nbsp;--</td><td>--&nbsp;&nbsp;--</td></tr>';
      } else if (val === 9) {
        lines += '<tr><td>9</td><td style="color: red;">------</td><td>--&nbsp;&nbsp;--</td></tr>';
      }
    }
    return lines;
  }

  lines = getLinesInReverse(tossArray);
  lines += `<tr style="font-size: 150%;"><td></td><td>${calculateSum(tossArray)}</td><td>${calculateSum(tossArray, reverse=true)}</td></tr>`;
  
  tbody = document.createElement('tbody');
  tbody.innerHTML = lines;
  element.appendChild(tbody);
  element.style.display = 'table';
}