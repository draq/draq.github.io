const J2000 = 2451545.0;  // Julian date at 2020-01-01
const ASTRONOMICAL_UNIT = 149597870700;  // in metre 

function assertInteger() {
  for (element of arguments) {
    if (!Number.isInteger(element)){
      throw element + " is not an integer!";
    }
  }
  return true;
}

function calculateJulianDate(year, month, day, hour, minute, second) {
  if (year instanceof Date) {
    second = year.getUTCSeconds();
    minute = year.getUTCMinutes();
    hour = year.getUTCHours();
    day = year.getUTCDate();
    month = year.getUTCMonth() + 1; // January is 0.
    year = year.getUTCFullYear();
  }
  else {
    assertInteger(...arguments);
  }
  console.debug(`Year = ${year}, Month = ${month}, Day = ${day}, Hour = ${hour}, Minute = ${minute}, Second = ${second}.`);

  if (month < 3) {
    // Year starts in March
    year -= 1;
    month += 12;
  }

  let a = Math.floor(year / 100); // century
  let b = Math.floor(a/4); // 25-year 
  let c = 2 - a + b;
  let e = Math.floor(365.25 * (year + 4716)); //  4714 BCE November 24, 12 hours GMT (Gregorian proleptic Calendar)
  let f = Math.floor(30.6001 * (month + 1));
  let julianDayNumber = c + day + e + f - 1524.5;
  let fraction = (hour + minute / 60 + second / 3600) / 24;
  // console.debug(`A = ${a}, B = ${b}, C = ${c}, E = ${e}, F = ${f}, fraction = ${fraction}.`);

  return julianDayNumber + fraction;
}

function calculateSolarEclipicCoordinates(julianDate) {
  let n = julianDate - J2000; // J2000
  let l = (280.460 + 0.9856474 * n) % 360;   // mean longitude in degrees
  let g = (357.528 + 0.9856003 * n) % 360;   // mean anomaly in degrees
  g = toRadian(g); // degree to radians
  let lambda = l + 1.915 * Math.sin(g) + 0.020 * Math.sin(2*g); // solar longitude
  lambda %= 360;
  let beta = 0; // approximately, solar latitude
  let r = 1.00014 - 0.01671 * Math.cos(g) - 0.00014 * Math.cos(2*g); // solar distance in astronomical units.
  console.debug(`Mean longitude = ${l}°, Mean anonaly = ${g}°, Longitude = ${lambda}°`);

  return {
    longitude: lambda,
    latitude: beta,
    distance: r
  };
}

function getDecimalDegrees(degree, minute, second) {
  return degree + minute / 60 + second / 3600;
}

function getHourMinuteSecond (degree) {
  let hour = degree / 15;
  let h = Math.floor(hour);
  let minute = (hour - h) * 60;
  
  let m = Math.floor(minute);
  let second = (minute - m) * 60;

  return {
    degree: h,
    minute: m,
    second: second
  }
}

function toRadian(degree) {
  return degree / 180 * Math.PI;
}

function toDegree(radian, absolute=false) {
  let degree = radian / Math.PI * 180;
  if (absolute && degree < 360) {
    return degree + 360;
  } else {
    return degree;
  }
}

function calculateAxialTilt(julianDate) {
  let t = Math.floor((julianDate - J2000) / 100); // Julian centuries
  let c0 = getDecimalDegrees(23, 26, 21.406);
  let c1 = -getDecimalDegrees(0, 0, 46.836769);
  let c2 = -getDecimalDegrees(0, 0, 0.0001831);
  let c3 = getDecimalDegrees(0, 0, 0.00200340);
  let c4 = -getDecimalDegrees(0, 0, 5.76 * 10**-7);
  let c5 = -getDecimalDegrees(0, 0, 4.34 * 10**-8);
  let epsilon = c0 + c1 * t + c2 * t**2 + c3 * t**3 + c4 * t**4 + c5 * t**5;
  return epsilon;
}

function calculateEquitorialCoordiantes(eclipticLongitude, eclipticObliquity) {
  let lambda = toRadian(eclipticLongitude);
  let epsilon = toRadian(eclipticObliquity); 
  console.debug(`Longitude = ${lambda}, Obliquity = ${epsilon} (in radians)`);

  let alpha = Math.atan2(Math.cos(epsilon) * Math.sin(lambda), Math.cos(lambda));
  // alpha = Math.atan(Math.cos(epsilon) * Math.tan(lambda));
  alpha = toDegree(alpha, absolute=true);
  
  let delta = toDegree(Math.asin(Math.sin(epsilon) * Math.sin(lambda)));
  
  return { // in degree
    rightAscension: alpha,
    declination: delta
  };
}

console.debug("Solar Coordiantes functions loaded.");