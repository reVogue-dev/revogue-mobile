import AsyncStorage from '@react-native-async-storage/async-storage';
import { CustomEvents, sendInternalEvent } from "../utilities";
import { BASE_API_URL } from "../../constants";


export const _BASE_URL = BASE_API_URL;

const displayError = (message: any, shouldHide: any) => {
  if (!shouldHide) {
    alert(message);
  }
};

async function getHeaders(customHeaders: any = {}) {
  const headers: any = { "Content-Type": "application/json", ...customHeaders };

  const token = await AsyncStorage.getItem("token");
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const authType = await AsyncStorage.getItem("auth-type");
  if (authType) {
    headers["auth-type"] = authType;
  }

  return headers;
}

export async function APIClient(
  endpoint: string,
  { body, headers, shouldHide, ...customConfig } = {} as any
) {
  const config: any = {
    method: body ? "POST" : "GET",
    headers: await getHeaders(headers),
    ...customConfig,
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const BASE_URL = _BASE_URL;

  try {
    sendInternalEvent(CustomEvents.REQUEST_SENT, { endpoint });
    const response = await fetch(BASE_URL + endpoint, config);

    if (response.ok) {
      sendInternalEvent(CustomEvents.REQUEST_SUCCESS, { endpoint });

      if (response.status === 204) {
        return {
          status: response.status,
          headers: response.headers,
          url: response.url,
        };
      }

      const data = await response.json();

      return {
        status: response.status,
        data,
        headers: response.headers,
        url: response.url,
      };
    } else if (response.status === 401) {
      const data = await response.json();
      sendInternalEvent(CustomEvents.REQUEST_FAIL, { endpoint });
      await AsyncStorage.clear();
      return Promise.reject(data.message);
    } else if (response.status === 403) {
      const data = await response.json();
      displayError(data.message || "Forbidden", shouldHide);
      sendInternalEvent(CustomEvents.REQUEST_FAIL, { message: data.message });
      await AsyncStorage.clear();
      // Navigation to landing page should be handled differently in React Native
      return Promise.reject(data.message || "Forbidden");
    } else if (response.status === 400 || response.status === 404) {
      const data = await response.json();
      let message = data.message;

      if (data.errorDetails) {
        message = data.errorDetails
          .map((e: any) => `${e.message || e.error}`)
          .join(", ");
      }

      displayError(message || "Something went wrong", shouldHide);
      sendInternalEvent(CustomEvents.REQUEST_FAIL, { message });
      return Promise.reject(message);
    }

    sendInternalEvent(CustomEvents.REQUEST_FAIL, {
      message: response.statusText || "Something went wrong",
    });

    displayError(
      response.statusText || "Something went wrong",
      shouldHide
    );

    return Promise.reject(response.statusText);
  } catch (err: any) {
    displayError(err.message || "Network Error", shouldHide);
    sendInternalEvent(CustomEvents.REQUEST_FAIL, { message: "Request failed" });
    return Promise.reject(err.message || "Network Error");
  }
}

// Utility methods
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
    endpoint += "?" + params.join("&");
  }

  delete customConfig.params;

  return APIClient(endpoint, { ...customConfig, method: "GET" });
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
