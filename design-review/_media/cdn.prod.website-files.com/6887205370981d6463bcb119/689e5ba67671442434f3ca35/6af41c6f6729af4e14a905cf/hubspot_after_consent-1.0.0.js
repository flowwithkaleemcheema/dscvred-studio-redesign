(function(){
  function load(){
    if(document.getElementById('hs-script-loader'))return;
    var s=document.createElement('script');
    s.type='text/javascript';s.id='hs-script-loader';s.async=true;s.defer=true;
    s.src='https://js-na2.hs-scripts.com/247480635.js';
    document.head.appendChild(s);
  }
  function hasConsent(){
    var m=document.cookie.match(/(?:^|;\s*)cookieyes-consent=([^;]+)/);
    return !!m && /analytics:yes/.test(decodeURIComponent(m[1]));
  }
  if(hasConsent()){load();}
  document.addEventListener('cookieyes_consent_update',function(e){
    var a=e&&e.detail&&e.detail.accepted;
    if(a&&a.indexOf('analytics')>-1){load();}
  });
})();