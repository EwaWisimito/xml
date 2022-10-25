x = xmlDoc.getElementByTagName("book")[0];
xlen - x.childNodes.lenght;
y = x.firstChild;

txt = "";

for (i = 0; i < xlen; i++){
    // Process only elemend nodes (type 1)
    if (y.nodeType == 1){
        txt += y.nodeName + "<br>";
    }
    y = y.nextSibling;
}