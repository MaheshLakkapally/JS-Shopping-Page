/* 
These is the select field component function.
Here, we will get the attributes of the select field as an agrument,and divtags where it should be palced in an html page
as also an argument.

steps of the following function:
------------------------------------
1) create a var divTag where we insert the created  element in html in a div. 
2) we create an element select and insert it into an var selectTag.
3) now insert the attributes of the select element in the selectTag.
    the attributes are passed through the argument from variables.
4) append the created selectTag element to the div which we created inthe begining of the function.
5) now append the div of the function into the div tag which we passed through the arguments.
this is how we create the element and bulid it in  the html.


*/

//select options
function suffixFunction(selectOption,place,inputCss,divTagS,innerDiv,selectId)
	{
		var divTag=document.getElementById(innerDiv);
		divTag.innerHTML=('<h2>' + place + '</h2>');
		var selectTag=document.createElement('select');
        selectTag.id=selectId;
       	selectTag.setAttribute("class",inputCss);//style="padding: 0px 8px 4px 15px;";
		var sopt=selectOption.value
        console.log(sopt);
        var soptName=selectOption.valueName;
        console.log(soptName);
		for(var i=0;i<sopt.length;i++)
		{
			var sopts=sopt[i];
			var optionTag=document.createElement('option');
			optionTag.value=sopts;
			optionTag.appendChild(document.createTextNode(soptName[i]));
			selectTag.appendChild(optionTag);
			divTag.appendChild(selectTag);
		}
			document.getElementById(divTagS).appendChild(divTag);
		
		}