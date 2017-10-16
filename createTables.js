	function createTable(dataObjsArray, divTagId) {

	    var tableEle = document.createElement('table');
	    createDataRow(dataObjsArray, tableEle);

	    document.getElementById(divTagId).appendChild(tableEle);
	}


	function createDataRow(dataObj, tableObj) {
	    var k = 0;
	    var keys = Object.keys(dataObj); // keys is a string array containing the property names of this object
	    console.log(keys);
	    while (k < dataObj.length) {
	        // create header row
	        var dataRow = document.createElement('tr');
	        for (var i = 0; i < 4; i++) {
	            // var val=keys[i];
	            //console.log(val);
	            //var prop = keys[k].image;
	            //onsole.log(prop);
	            var imgs = dataObj[k].image;
	            console.log(imgs);
	            // create column (header)
	            var dataCol = document.createElement('td');
	            var oImg = document.createElement("img");
	            oImg.setAttribute('src', imgs);
	            oImg.setAttribute('height', '150px');
	            oImg.setAttribute('width', '150px');
	            dataCol.appendChild(oImg);
	            dataRow.appendChild(dataCol);
	            k++;
	        }

	        tableObj.appendChild(dataRow);
	    }

	}
