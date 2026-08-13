var elements = document.querySelectorAll("*");
elements.forEach( el => {
    if(!el.childNodes || el.childNodes === 0 ) return;
    el.childNodes.forEach(el2 => {
        if(el2.nodeType === 3){
            el2.nodeValue = el2.nodeValue.replaceAll("Vladimir Putin", "Vladolf Putler").replaceAll("Putin", "Putler");
        }
    });
});