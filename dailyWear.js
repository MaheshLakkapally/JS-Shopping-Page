function createMenWearPage(dataObjsArray, divTagId) {
    var k = 0;
    console.log(dataObjsArray.length);
    for (var i = 0; i < dataObjsArray.length; i++) {
        var divTag = document.createElement('div');
        divTag.id = dataObjsArray[i].id;
        divTag.setAttribute("class", "divTag");


        var imgs = dataObjsArray[i].image;
        var oImg = document.createElement("img");
        oImg.setAttribute('src', imgs);
        oImg.setAttribute("class", "imgs");
        divTag.appendChild(oImg);


        var textDivTag = document.createElement('div');
        textDivTag.id="productInfo"
        var h2Tag=document.createElement('h6');
        pTag=document.createElement('p');
        pTag.textContent=dataObjsArray[i].design;
        h2Tag.appendChild(pTag);
        p1Tag=document.createElement('p');
        p1Tag.textContent='prize:' + dataObjsArray[i].price
        p1Tag.setAttribute("class","p1");
        h2Tag.appendChild(p1Tag);
        textDivTag.appendChild(h2Tag);
        divTag.appendChild(textDivTag);

        document.getElementById(divTagId).appendChild(divTag);
    }
}
