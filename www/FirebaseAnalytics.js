var exec = require("cordova/exec");
var PLUGIN_NAME = "FirebaseAnalytics";

module.exports = {
    logEvent: function(name, params) {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "logEvent", [name, params || {}]);
        });
    },
    setUserId: function(userId) {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "setUserId", [userId]);
        });
    },
    setUserProperty: function(name, value) {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "setUserProperty", [name, value]);
        });
    },
    setEnabled: function(enabled) {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "setEnabled", [enabled]);
        });
    },
    setCurrentScreen: function(name) {
        if(name == "writeFCMToken") {
            return new Promise(function(resolve, reject) {
                            cordova.exec(resolve, reject, PLUGIN_NAME, "writeFCMToken", [name]);
                        });
        } else if (name == "getFCMToken") {
                    return new Promise(function(resolve, reject) {
                            cordova.exec(resolve, reject, PLUGIN_NAME, "getFCMToken", [name]);
                        });
        } else {
            return new Promise(function(resolve, reject) {
                exec(resolve, reject, PLUGIN_NAME, "setCurrentScreen", [name]);
            });
        }
    }
};

