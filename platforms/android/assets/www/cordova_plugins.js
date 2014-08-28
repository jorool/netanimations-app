cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/nl.x-services.plugins.calendar/www/Calendar.js",
        "id": "nl.x-services.plugins.calendar.Calendar",
        "clobbers": [
            "Calendar"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "nl.x-services.plugins.calendar": "4.2.3",
    "org.apache.cordova.console": "0.2.8",
    "org.apache.cordova.device": "0.2.9"
}
// BOTTOM OF METADATA
});