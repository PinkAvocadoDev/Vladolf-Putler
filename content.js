function start(){
    var elements = document.querySelectorAll("*");
    console.log("RUNNING...")
    elements.forEach( el => {
        if(!el.childNodes || el.childNodes === 0 ) return;
        el.childNodes.forEach(el2 => {
            if(el2.nodeType === 3){
                el2.nodeValue = el2.nodeValue.replaceAll("Vladimir Putin", "Vladolf Putler").replaceAll("Putin", "Putler");
            }
        });
    });
}

const startObserving = () => {
  start()
  const observer = new MutationObserver(start);
  observer.observe(document.body, { childList: true, subtree: true });
};

const init = () => {
  if (document.body) {
    startObserving();
  } else {
    const bodyWatcher = new MutationObserver(() => {
      if (document.body) {
        bodyWatcher.disconnect();
        startObserving();
      }
    });
    bodyWatcher.observe(document.documentElement, { childList: true });
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}