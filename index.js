const EventEmitter = require("events");

module.exports = class XMLHttpRequest extends EventEmitter {
  constructor() {
    super();
    this.addEventListener = this.on;

    const self = this;
    this.on("loadstart", function(res) {
      if (self.onloadstart) self.onloadstart(res);
    });
    this.on("error", function(res) {
      if (self.onerror) self.onerror(res);
    });
  }
  abort() {}
  getAllResponseHeaders() {}
  getResponseHeader() {}
  open() {}
  send() {
    const self = this;
    setTimeout(function() {
      self.emit("loadstart", {
        type: "loadstart",
        loaded: 0
      });
      setTimeout(function() {
        this.emit("error", {
          type: "error",
          loaded: 0
        });
      }, 0);
    }, 0);
  }
};
