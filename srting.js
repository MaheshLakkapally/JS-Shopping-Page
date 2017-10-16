function sort(strs, sId) {
    console.log(strs);

    var sel = document.getElementById(sId);
    console.log(sel);
    var sVal = sel.options[sel.selectedIndex].value;
    console.log("val" + sVal);
    if (strs == 'prize')
        pureSort(sVal);
    if (strs == 'color')
        colorSort(sVal);
    if (strs == 'size')
        sizesSort(sVal);
}

function pureSort(value) {
    switch (value) {
        case "1":window.alert("select value");
            break;
        case "2":
            var sortNum = [0, 10];
            sorting(sortNum, menWearList,'prize');

            break;
        case "3":
            //sorting(10,20);
            var sortNum = ["10", "20"];
            sorting(sortNum, menWearList,'prize');

            //console.log(filteredList);
            break;
        case "4":
            //  sorting(20,30);
            var sortNum = [20, 30];
          sorting(sortNum, menWearList,'prize');
            //console.log(filteredList);
            break;
        case "5":
            //sorting();
            var sortNum = [30, 40];
           sorting(sortNum, menWearList,'prize');

            //console.log(filteredList);
            break;
     default:
            window.alert("select a valid value");
    }


}

function colorSort(value) {
    switch (value) {
            case "1":window.alert("select value");
            break;
        case "2":
            var sortColor = ["white"];
            sorting(sortColor, menWearList,'color');

            break;
        case "3":
            //sorting(10,20);
            var sortColor = ["red"];
            sorting(sortColor, menWearList,'color');

            //console.log(filteredList);
            break;
        case "4":
            //  sorting(20,30);
            var sortColor = ["black"];
          sorting(sortColor, menWearList,'color');

            //console.log(filteredList);
            break;
        case "5":
            //sorting();
            var sortColor = ["blue"];
            sorting(sortColor, menWearList,'color');

            //console.log(filteredList);
            break;
        default:
            window.alert("select a valid value");
    }


}

function sizesSort(value) {
    switch (value) {
        case "1":window.alert("select value");
            break;
        case "2":
            var sortNum = ["XS"];
            sorting(sortNum, menWearList,'size');

            break;
        case "3":
            var sortNum = ["S"];
            sorting(sortNum, menWearList,'size');
            break;
        case "4":
            var sortNum = ["M"];
          sorting(sortNum, menWearList,'size');
        break;
        case "5":
            var sortNum = ["L"];
           sorting(sortNum, menWearList,'size');
            break;
        case "6":
            var sortNum=["XL"];
            sorting(sortNum, menWearList,'size');
            break;
        case "7":
            var sortNum=["2XL"];
            sorting(sortNum, menWearList,'size');
            break;
        case "8":
            var sortNum=["3XL"];
            sorting(sortNum, menWearList,'size');
            break;
     default:
            window.alert("select a valid value");
    }


}

function sorting(val1, jsonObj,strs) {
    if (strs==='prize') {
        var sotedList = jsonObj.filter(function (value) {
                return (value.price > val1[0] && value.price <= val1[1]);
            }

        );
        console.log(JSON.stringify(sotedList));
        document.getElementById('dressListView').innerHTML = '';
        createMenWearPage(sotedList, 'dressListView');
    } else if(strs==='color') {
        var sotedsList = jsonObj.filter(function (value) {
            //console.log(val1);
            var x=value.colors.length;
               for(var i=0;i<x;i++)
                   //console.log(value.colors[i]);
            return (value.colors[i] ==val1);
            }

        );
        console.log(JSON.stringify(sotedsList));
        document.getElementById('dressListView').innerHTML = '';
        createMenWearPage(sotedsList, 'dressListView');
    }
    else if(strs==='size') {
        var sotedsList = jsonObj.filter(function (value) {
            return (value.size==val1);
            }

        );
        console.log(JSON.stringify(sotedsList));
        document.getElementById('dressListView').innerHTML = '';
        createMenWearPage(sotedsList, 'dressListView');
    }
    //console.log(JSON.stringify(x));
    // return(value.price>val1 && value.price <= val2);  
}
