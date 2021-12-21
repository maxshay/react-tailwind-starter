const config = {};

if (process.env.NODE_ENV === "development") {
  config.baseApiUrl = process.env.REACT_APP_API_BASE_DEVURL;
} else {
  config.baseApiUrl = process.env.REACT_APP_API_BASE_PRODURL;
}

export default config;
