import webviewJSBridge from './WebViewJavascriptBridge'
webviewJSBridge();

export let JSBridge = function (bridge) {
    this.bridge = bridge;
    this.bridge.init(function (message, responseCallback) {
        responseCallback(data);
    });
    this.createAppMethod('goBack');
    this.createAppMethod('loginUserInfo');
    this.createAppMethod('updateLoginUserInfo');
}

JSBridge.prototype = {
    isApp: function (callback) {
        this.bridge.callHandler('isApp', {}, function (data) {
            callback && callback(data);
        });
    },
    responseUSER:function(jsdata,callback){
        this.bridge.callHandler('responseUSER',jsdata||{},function(data){
            callback && callback(data);
        });
    },
    scan: function (jsdata, callback) {
        this.bridge.callHandler('scan', jsdata || {}, function (data) {
            callback && callback(data);
        });
    },
    uploadImg: function (jsdata, callback) {
        this.bridge.callHandler('uploadImg', jsdata || {}, function (data) {
            callback && callback(data);
        });
    },
    uploadFile: function (jsdata, callback) {
        this.bridge.callHandler('uploadFile', jsdata || {}, function (data) {
            callback && callback(data);
        });
    },
    share: function (data, callback) {
        this.bridge.callHandler('share', data || {}, function (result) {
            callback && callback(result);
        });
    },
    wxLogin: function (jsdata, callback) {
        this.bridge.callHandler('weChatLogin', jsdata || {}, function (data) {
            callback && callback(data);
        });
    },
    qqLogin: function (jsdata, callback) {
        this.bridge.callHandler('qqLogin', jsdata || {}, function (data) {
            callback && callback(data);
        });
    },
    wbLogin: function (jsdata, callback) {
        this.bridge.callHandler('wbLogin', jsdata || {}, function (data) {
            callback && callback(data);
        });
    },
    alipay: function (jsdata, callback) {
        this.bridge.callHandler('onlineSubPay', jsdata || {}, function (data) {
            callback && callback(data);
        });
    },
    wxpay: function (jsdata, callback) {
        this.bridge.callHandler('weChatPayment', jsdata || {}, function (data) {
            callback && callback(data);
        });
    },
    call: function (jsdata, callback) {
        this.bridge.callHandler('call', jsdata || {}, function (data) {
            callback && callback(data);
        });
    },
    service: function (jsdata, callback) {
        this.bridge.callHandler('service', jsdata || {}, function (data) {
            callback && callback(data);
        });
    },
    getVersion: function (callback) {
        this.bridge.callHandler('getVersion', {}, function (data) {
            callback && callback(data);
        });
    },
    createAppMethod: function (method, callback) {
        this.bridge.registerHandler(method, function (data, responseCallback) {
            window.native && window.native[method] && window.native[method](data, function (data) {
                responseCallback && responseCallback(data);
            });
            responseCallback && responseCallback(JSON.stringify(data));
        });
    },
}

export function connectWebViewJSBridge(callback) {
    if (window.WebViewJavascriptBridge) {
        callback(WebViewJavascriptBridge);
    } else {
        document.addEventListener('WebViewJavascriptBridgeReady', function () {
            callback(WebViewJavascriptBridge);
        }, false);
    }
}