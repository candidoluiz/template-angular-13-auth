(function (window) {
    window.env = window.env || {};

    // Environment variables
    window["env"]["API_URL"] = "${API_URL}";
    window["env"]["CLIENT_URL"] = "${CLIENT_URL}";
    window["env"]["CLIENT_ID"] = "${CLIENT_ID}";
    window["env"]["CLIENT_SECRET"] = "${CLIENT_SECRET}";
    window["env"]["AUTH_SERVER_URL"] = "${AUTH_SERVER_URL}";
    window["env"]["PRODUCTION"] = true;
    
})(this);
