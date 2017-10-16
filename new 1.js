	function createTable(headerStrArray, dataObjsArray, divTagId, border)
	{
		var tableEle = document.createElement('table');
		if (border) { // not undefined and not null
			tableEle.border = border;
		}
		else {
			tableEle.border = 1;
		}
		
		createHeaderRow(headerStrArray, tableEle);

		// let's add data
		for (var k = 0; k < dataObjsArray.length; k++) // traverse thru individual student objects 
		{
			createDataRow(dataObjsArray[k], tableEle);
		}
		
		document.getElementById(divTagId).appendChild(tableEle);
	}

	function createHeaderRow(headerStrings, tableObj)
	{
		// create header row
		var hdrRow = document.createElement('tr');
		for (var i = 0; i < headerStrings.length; i++) 
		{
			// create column (header)
			var hdrCol = document.createElement('th');
			// create text that should go into that column header
			var textEle = document.createTextNode(headerStrings[i]); // linear indexing
			// add text into the column 
			hdrCol.appendChild(textEle);
			// add the column into the row
			hdrRow.appendChild(hdrCol);
		}
		// add that row to the table
		tableObj.appendChild(hdrRow);
	}
	
	function createDataRow(dataObj, tableObj)
	{
		var keys = Object.keys(dataObj); // keys is a string array containing the property names of this object
		// create header row
		var dataRow = document.createElement('tr');
		for (var i = 0; i < keys.length; i++) 
		{
			var prop = keys[i]; // getting the property name from keys array, calling it 'prop'
			var val = dataObj[prop]; // using associative indexing style (prop)
			// create column (header)
			var dataCol = document.createElement('td');
			// create text that should go into that column header
			var textEle = document.createTextNode(val);
			// add text into the column 
			dataCol.appendChild(textEle);
			// add the column into the row
			dataRow.appendChild(dataCol);
		}
		// add that row to the table
		tableObj.appendChild(dataRow);
	}
