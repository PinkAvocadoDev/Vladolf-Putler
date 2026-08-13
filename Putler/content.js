var elements = document.getElementsByTagName('*');
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];
        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var newText = text.replace("Putin", "Putler");

            if (newText !== text) {
                element.replaceChild(document.createTextNode(newText), node);
            }
        }
    }

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];
        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var newText = text.replace("Vladimir Putler", "Vladolf Putler");

            if (newText !== text) {
                element.replaceChild(document.createTextNode(newText), node);
            }
        }
    }
}