function Flow (onfun) {
    var args = Array.prototype.slice.call(arguments).slice (1);
    var self = this;
    if (!this.onfun) {
        setTimeout (function () {
            if (self[onfun] && typeof self[onfun] == "function") {
                self[onfun].apply (self, args);
                return;
            }
        }, 0);
        return;
    }
    if (self[onfun] && typeof self[onfun] == "function") {
        self[onfun].apply (self, args);
        return;
    }
}

module.exports = Flow;
