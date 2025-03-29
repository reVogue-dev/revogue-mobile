import Snackbar from "react-native-paper";
import { CustomEvents, sendInternalEvent } from "../utilities";
import { BASE_API_URL } from "../../constants";
import { ROUTE_LANDING } from "../constants/api-routes";

export const _BASE_URL = BASE_API_URL;

const displayError = (message: any, shouldHide: any) => {
//   !shouldHide && Snackbar.show({ text: message, duration: 3000});
!shouldHide && alert(message);
};

export async function APIClient(
  endpoint: string,
  { body, ...customConfig } = {} as any
) {
  const headers: any = { "Content-Type": "application/json" };
  if (localStorage.getItem("token")) {
    headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
  }
  if (localStorage.getItem("auth-type")) {
    headers["auth-type"] = localStorage.getItem("auth-type");
  }

  const config = {
    method: body ? "POST" : "GET",
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };
  if (body) {
    config.body = JSON.stringify(body);
  }

  let data;
  const BASE_URL = _BASE_URL;
  try {
    sendInternalEvent(CustomEvents.REQUEST_SENT, { endpoint });
    const response = await window.fetch(BASE_URL + endpoint, config);
    if (response.ok) {
      sendInternalEvent(CustomEvents.REQUEST_SUCCESS, { endpoint });
      if (response.status === 204) {
        return {
          status: response.status,
          headers: response.headers,
          url: response.url,
        };
      }
      data = await response.json();
      return {
        status: response.status,
        data,
        headers: response.headers,
        url: response.url,
      };
    } else if (response.status === 401) {
      data = await response.json();
      sendInternalEvent(CustomEvents.REQUEST_FAIL, { endpoint });
      localStorage.clear();
      return Promise.reject(data.message);
    } else if (response.status === 403) {
      data = await response.json();
      displayError(data.message || "Forbidden", customConfig?.shouldHide);
      sendInternalEvent(CustomEvents.REQUEST_FAIL, { message: data.message });
      window.localStorage.clear();
      window.location.href = ROUTE_LANDING;
      return Promise.reject(data.message || "Forbidden");
    } else if (response.status === 400 || response.status === 404) {
      data = await response.json();
      let message = data.message;
      if (data.errorDetails) {
        message = data.errorDetails
          .map((e: any) => `${e.message || e.error}`)
          .join(", ");
      }
      displayError(message || "Forbidden", customConfig?.shouldHide);
      sendInternalEvent(CustomEvents.REQUEST_FAIL, { message });
      return Promise.reject(message);
    }
    sendInternalEvent(CustomEvents.REQUEST_FAIL, {
      message: response.statusText || "Something went wrong",
    });
    displayError(
      response.statusText || "Something went wrong",
      customConfig?.shouldHide
    );
    return Promise.reject(response.statusText);
  } catch (err: any) {
    // Snackbar.show({ text: err.message ? err.message : data, duration: Snackbar.LENGTH_SHORT });
    alert(err.message ? err.message : data);
    sendInternalEvent(CustomEvents.REQUEST_FAIL, { message: "Not sent" });
    return Promise.reject(err.message ? err.message : data);
  }
}

APIClient.get = function (endpoint: string, customConfig: any = {}) {
  let params: any = [];
  if (customConfig.params) {
    for (let p in customConfig.params) {
      let key = p;
      if (Array.isArray(customConfig.params[p])) {
        customConfig.params[p].forEach((element: any) => {
          params.push(`${key}=${encodeURIComponent(element)}`);
        });
      } else {
        params.push(`${key}=${encodeURIComponent(customConfig.params[p])}`);
      }
    }
  }
  if (customConfig.params) {
    return APIClient(endpoint + "?" + params.join("&"), {
      ...customConfig,
      method: "GET",
    });
  } else {
    delete customConfig.params;
    return APIClient(endpoint, { ...customConfig, method: "GET" });
  }
};

APIClient.post = function (endpoint: string, body: any, customConfig = {}) {
  return APIClient(endpoint, { ...customConfig, body, method: "POST" });
};

APIClient.put = function (endpoint: string, body: any, customConfig = {}) {
  return APIClient(endpoint, { ...customConfig, body, method: "PUT" });
};

APIClient.patch = function (endpoint: string, body: any, customConfig = {}) {
  return APIClient(endpoint, { ...customConfig, body, method: "PATCH" });
};

APIClient.delete = function (endpoint: string, customConfig = {}) {
  return APIClient(endpoint, { ...customConfig, method: "DELETE" });
};
