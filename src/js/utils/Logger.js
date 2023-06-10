class Logger {}

Logger.log = (toShow, message, ...args) => {
  toShow && console.warn(message, ...args);
};

Logger.warn = (toShow, message, ...args) => {
  toShow && console.warn(message, ...args);
};

Logger.error = (toShow, message, ...args) => {
  toShow && console.warn(message, ...args);
};

export { Logger };
