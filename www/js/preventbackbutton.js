document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        document.addEventListener("backbutton", function (e) {
            e.preventDefault();
        }, false );
}