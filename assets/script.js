const executeBtn = document.getElementById("execute");
const keyNameText = document.getElementById("keyName");
const numberofAcc = document.getElementById("numberOfAcc");
const scale = document.getElementById("scale");

const keySelection = document.getElementById("keySelection");

const radioButtons = document.getElementsByName("majorMinor")
const majorRadio = document.getElementById("major");
const minorRadio = document.getElementById("minor");

const majorKeyArray = [
    {
        name: "C Major",
        secondaryInfo: "0"
    },
    {
        name: "C# Major",
        secondaryInfo: "1",
    },
    {
        name: "D Major",
        secondaryInfo: "2",
    }
] 

const minorKeyArray = [
    {
        name: "C minor",
        secondaryInfo: "01"
    },
    {
        name: "C# minor",
        secondaryInfo: "02",
    },
    {
        name: "D minor",
        secondaryInfo: "03",
    }
]

let selectedKey = ``;
let selectedKeyName = ``;


function test (e) {    
    e.preventDefault();
    
    let keyValue = keySelection.value;
    let keyText = keySelection.options[keySelection.selectedIndex].text;
    let isMajor;
    let keySelectionIndex = keySelection.selectedIndex



    if (majorRadio.checked) {
        console.log("MajorRadio Checked")
        isMajor = true
    } else if (minorRadio.checked) {
        console.log("MinorRadio checked")
        isMajor = false
    } else {
        console.log("Major nor minor checked, may default to Major if this happens")
        isMajor = true
    }


    if (isMajor) {
        selectedKey = JSON.stringify(majorKeyArray[keySelectionIndex])
        selectedKeyName = JSON.stringify(majorKeyArray[keySelectionIndex].name)
    } else {
        selectedKey = JSON.stringify(minorKeyArray[keySelectionIndex])
        selectedKeyName = JSON.stringify(minorKeyArray[keySelectionIndex].name)
    }
    console.log("The Keyvalue is "+keyValue)
    console.log("The keytext is "+keyText)
    console.log("The keySelection selected Index is "+keySelectionIndex)
    console.log("ALOHA "+selectedKey)


    console.log(selectedKeyName)


    //keyNameText.textContent = "Test Function Clicked"

    console.log("Test function")

}




executeBtn.addEventListener("click", test)

console.log("Script is linked")