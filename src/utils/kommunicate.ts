// Kommunicate configuration
export const KOMMUNICATE_APP_ID = 'YOUR_APP_ID';

export const initKommunicate = (): void => {
  (function(d, m){
    var kommunicateSettings = {
      "appId": KOMMUNICATE_APP_ID,
      "popupWidget": true,
      "automaticChatOpenOnNavigation": false,
      "onInit": function() {
        // Callback after widget initialization
      }
    };
    var s = document.createElement("script"); 
    s.type = "text/javascript"; 
    s.async = true;
    s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
    var h = document.getElementsByTagName("head")[0]; 
    h.appendChild(s);
    (window as any).kommunicate = m; 
    m._globals = kommunicateSettings;
  })(document, (window as any).kommunicate || {});
};