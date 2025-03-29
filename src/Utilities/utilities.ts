import moment from "moment";

export function convertSecondsInMinutesAndSecond(value: number) {
  var duration = moment.duration(value, "seconds");
  var result = duration.minutes() + " mins " + duration.seconds() + "s";
  return result;
}
export function generateGreeting() {
  const hour = moment().hour();

  if (hour > 16) {
    return "Good Evening";
  }

  if (hour > 11) {
    return "Good Afternoon";
  }

  return "Good Morning";
}

export function getCookie(cname: string) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function setCookie(cname: string, cvalue: any, exdays: any) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Can not select days before today and today
export function disabledPrevoiusDates(current: any) {
  return current && current < moment().subtract(1, "day").endOf("day");
}

export function disabledNonBookingDates(current: any) {
  return current && current.isAfter(moment().add(90, "days"));
}

export function disabledFutureDates(current: any) {
  return current && current.valueOf() > Date.now();
}

export const getJSONFile = (jsonData: any) => {
  const fileData = JSON.stringify(jsonData);
  const blob: any = new Blob([fileData], { type: "text/plain" });
  const fileName = new Date().getTime() + ".json";
  blob["lastModifiedDate"] = new Date();
  blob["name"] = fileName;
  return blob;
};

export function getFullName(user: any, falseReturn = "") {
  return user && (user?.first_name || user?.last_name)
    ? `${user?.first_name || ""} ${user?.last_name || ""}`
    : user?.name
    ? user?.name
    : falseReturn
    ? "NA"
    : "";
}

export function getDayFormat(date: any, show: any) {
  const _date = moment(date);
  //console.log(_date)
  const today = moment().endOf("day");
  const tomorrow = moment().add(1, "day").endOf("day");
  const yesterday = moment().subtract(1, "day").endOf("day");
  const day_before_yesterday = moment().subtract(2, "day").endOf("day");
  // const later = moment().add(2, 'day').endOf('day')
  if (_date < day_before_yesterday) return moment(date).format("dddd");
  if (_date < yesterday) return "Yesterday";
  if (_date < today) return "Today";
  if (_date < tomorrow) return "Tomorrow";
  if (show) {
    return moment(date).format("Do MMM' YYYY");
  } else {
    return moment(date).format("dddd");
  }
}

export function getChatDateFormat(date: any) {
  const _date = moment(date);
  //console.log(_date)
  const today = moment().endOf("day");
  const yesterday = moment().subtract(1, "day").endOf("day");
  const day_before_yesterday = moment().subtract(2, "day").endOf("day");
  // const later = moment().add(2, 'day').endOf('day')
  if (_date < day_before_yesterday) return moment(date).format("Do MMM' YYYY");
  if (_date < yesterday) return "Yesterday";
  if (_date < today) return "Today";
}

export function timeDiffrence(_startTime: any, _endTime: any) {
  var startTime = moment(_startTime, "HH:mm:ss a");
  var endTime = moment(_endTime, "HH:mm:ss a");
  return endTime.diff(startTime, "minutes");
}

export function getAge(year: any) {
  const _date: any = moment(year).format("YYYY");
  const _current: any = moment().format("YYYY");
  if (year === null) {
    return null;
  }
  return _current - _date + "yrs";
}

export function dobToAge(dobIn: string) {
  return moment().diff(dobIn, "years");
}

export function formatDate(date: string, format: string = "DD MMM'YY, LT") {
  return moment(date).format(format);
}

export function getGender(data: any) {
  return data && data.split("")[0].toUpperCase();
}

export function formatTimes(date: string, format: string = "LT") {
  return moment(date).format(format);
}
export function formatOnlyDate(date: string, format: string = "DD MMM'YY") {
  return moment(date).format(format);
}

export function secondsToTime(seconds: number) {
  return moment.utc(seconds * 1000).format("HH:mm:ss");
}

export function secondsToHourMins(seconds: number) {
  var totalMinutes = seconds;
  var hours = Math.floor(totalMinutes / 60);
  var minutes = totalMinutes % 60;
  if (hours === 0) {
    return minutes + "mins";
  } else {
    return hours + "h " + minutes + "mins";
  }
}



export function getInitials(string: any) {
  var names = [];
  var initials = [];
  if (string !== undefined) {
    names = string?.split(" ");
    initials = names[0].substring(0, 1).toUpperCase();
  }
  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
}


export enum CustomEvents {
  REQUEST_SENT = "REQUEST_SENT",
  REQUEST_SUCCESS = "REQUEST_SUCCESS",
  REQUEST_FAIL = "REQUEST_FAIL",
}

export const sendInternalEvent = (eventType: CustomEvents, data: any = {}) => {
  switch (eventType) {
    case CustomEvents.REQUEST_SENT:
      let requestSent = document.getElementById("req-sent");
      if (requestSent != null) {
        requestSent.innerHTML =
          parseInt(requestSent.innerHTML as string) + 1 + "";
      }

      break;
    case CustomEvents.REQUEST_SUCCESS:
      let requestSuccess = document.getElementById("req-success");
      if (requestSuccess != null) {
        requestSuccess.innerHTML =
          parseInt(requestSuccess.innerHTML as string) + 1 + "";
      }

      break;
    case CustomEvents.REQUEST_FAIL:
      let requestFailed = document.getElementById("req-failed");
      if (requestFailed != null) {
        requestFailed.innerHTML =
          parseInt(requestFailed.innerHTML as string) + 1 + "";
      }

      break;
  }
};


