function addTable(){
  var queueLocation, queueType, queueBuilding;
  var radios = document.getElementsByName('queueLocation');
  for (let i=0; i<radios.length; i++){
    if (radios[i].checked){
      queueLocation = radios[i].value
    }
  }
  var radios = document.getElementsByName('queueType');
  for (let i=0; i<radios.length; i++){
    if (radios[i].checked){
      queueType = radios[i].value
    }
  }
  sel = document.getElementById('targetOption');
  for (let i=0; i<sel.options.length; i++){
    if (sel.options[i].selected){
      queueBuilding = sel.options[i].value;
    }
  }
  //for checking
  //document.getElementById('target').innerHTML = queueLocation + queueType + queueBuilding;
  var table = document.getElementById('targetTable');
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var btn1 = document.createElement('button');
  btn1.setAttribute('font-size', '5px')
  btn1.setAttribute('onclick', 'copyRow(this)')
  btn1.innerHTML = '+';
  var btn2 = document.createElement('button');
  btn2.setAttribute('font-size', '5px')
  btn2.setAttribute('onclick', 'deleteRow(this)')
  btn2.innerHTML = '-';
  cell1.appendChild(btn1);
  cell1.appendChild(btn2);
  cell2.innerHTML = queueLocation;
  cell3.innerHTML = queueType;
  cell4.innerHTML = queueBuilding;

  document.getElementById('generatejson').removeAttribute('disabled');
  document.getElementById('cleartable').removeAttribute('disabled');
}

function generateJson(){
  var targetModal = document.getElementById('targetModal');
  var table = document.getElementById('targetTable');
  var text = '';
  var row = table.rows.length;
  for (let i=1; i<row; i++){
    var cell = table.rows[i].cells.length;
    for (let y=1; y<cell; y++){
      text += table.rows[i].cells[y].innerHTML;
    };
  };
  targetModal.innerHTML = text;
  var modal = document.getElementById('modal');
  var modalOverlay = document.getElementById('modal-overlay');
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
}

function getLocation(location){
  var resources = [
    {"queueBuilding" : "buildingLocation1"},
    {"queueBuilding" : "buildingLocation2"},
    {"queueBuilding" : "buildingLocation3"},
    {"queueBuilding" : "buildingLocation4"},
    {"queueBuilding" : "buildingLocation5"},
    {"queueBuilding" : "buildingLocation6"},
    {"queueBuilding" : "buildingLocation7"},
    {"queueBuilding" : "buildingLocation8"},
    {"queueBuilding" : "buildingLocation9"},
    {"queueBuilding" : "buildingLocation10"},
    {"queueBuilding" : "buildingLocation11"},
    {"queueBuilding" : "buildingLocation12"},
    {"queueBuilding" : "buildingLocation13"},
    {"queueBuilding" : "buildingLocation14"},
    {"queueBuilding" : "buildingLocation15"},
    {"queueBuilding" : "buildingLocation16"},
    {"queueBuilding" : "buildingLocation17"},
    {"queueBuilding" : "buildingLocation18"}
  ];
  var loc = location.value;
  if (loc === 'Resources'){
    document.getElementById('add').removeAttribute("disabled");
    var radios = document.getElementsByName('queueType');
    for (let i=0; i<radios.length; i++){
      radios[i].disabled = true;
      if (radios[i].value === 'Upgrade'){
        radios[i].checked = true;
      }
    };
    //here
    var target = document.getElementById('targetOption');
    var h3 = document.getElementById('h3');
    target.remove();
    var target = document.createElement('select');
    target.setAttribute('id', 'targetOption');
    target.setAttribute('class', 'w3-select w3-border');
    target.setAttribute('name', 'option');
    h3.appendChild(target);
    for (let i=0; i<resources.length; i++){
      var options = document.createElement('option');
      options.setAttribute('value', resources[i]['queueBuilding']);
      options.text = resources[i]['queueBuilding'];
      target.appendChild(options);
    };
  } else {
    document.getElementById('add').setAttribute("disabled", "disabled");
    var radios = document.getElementsByName('queueType');
    for (let i=0; i<radios.length; i++){
      radios[i].disabled = false;
      if (radios[i].value === 'Upgrade'){
        radios[i].checked = false;
      }
    };
    //next
    var target = document.getElementById('targetOption');
    var h3 = document.getElementById('h3');
    target.remove();
    var target = document.createElement('select');
    target.setAttribute('id', 'targetOption');
    target.setAttribute('class', 'w3-select w3-border');
    target.setAttribute('name', 'option');
    h3.appendChild(target);
  };
}

function printOptions(location){
  document.getElementById('add').removeAttribute("disabled");
  var buildings = [
    {
      "buildingName" : "Sawmill",
      "buildingId" : "buildingId5",
      "buildingType" : "buildingType5"
    },
    {
      "buildingName" : "Brickyard",
      "buildingId" : "buildingId6",
      "buildingType" : "buildingType6"
    },
    {
      "buildingName" : "Iron Foundry",
      "buildingId" : "buildingId7",
      "buildingType" : "buildingType7"
    },
    {
      "buildingName" : "Grain Mill",
      "buildingId" : "buildingId8",
      "buildingType" : "buildingType8"
    },
    {
      "buildingName" : "Bakery",
      "buildingId" : "buildingId9",
      "buildingType" : "buildingType9"
    },
    {
      "buildingName" : "Warehouse",
      "buildingId" : "buildingId10",
      "buildingType" : "buildingType10"
    },
    {
      "buildingName" : "Granary",
      "buildingId" : "buildingId11",
      "buildingType" : "buildingType11"
    },
    {
      "buildingName" : "Smithy",
      "buildingId" : "buildingId13",
      "buildingType" : "buildingType13"
    },
    {
      "buildingName" : "Tournament Square",
      "buildingId" : "buildingId14",
      "buildingType" : "buildingType14"
    },
    {
      "buildingName" : "Main Building",
      "buildingId" : "buildingId15",
      "buildingType" : "buildingType15"
    },
    {
      "buildingName" : "Rally Point",
      "buildingId" : "buildingId16",
      "buildingType" : "buildingType16"
    },
    {
      "buildingName" : "Marketplace",
      "buildingId" : "buildingId17",
      "buildingType" : "buildingType17"
    },
    {
      "buildingName" : "Embassy",
      "buildingId" : "buildingId18",
      "buildingType" : "buildingType18"
    },
    {
      "buildingName" : "Barrack",
      "buildingId" : "buildingId19",
      "buildingType" : "buildingType19"
    },
    {
      "buildingName" : "Stable",
      "buildingId" : "buildingId20",
      "buildingType" : "buildingType20"
    },
    {
      "buildingName" : "Workshop",
      "buildingId" : "buildingId21",
      "buildingType" : "buildingType21"
    },
    {
      "buildingName" : "Academy",
      "buildingId" : "buildingId22",
      "buildingType" : "buildingType22"
    },
    {
      "buildingName" : "Cranny",
      "buildingId" : "buildingId23",
      "buildingType" : "buildingType23"
    },
    {
      "buildingName" : "Town Hall",
      "buildingId" : "buildingId24",
      "buildingType" : "buildingType24"
    },
    {
      "buildingName" : "Residence",
      "buildingId" : "buildingId25",
      "buildingType" : "buildingType25"
    },
    {
      "buildingName" : "Palace",
      "buildingId" : "buildingId26",
      "buildingType" : "buildingType26"
    },
    {
      "buildingName" : "Treasury",
      "buildingId" : "buildingId27",
      "buildingType" : "buildingType27"
    },
    {
      "buildingName" : "Trade Office",
      "buildingId" : "buildingId28",
      "buildingType" : "buildingType28"
    },
    {
      "buildingName" : "Great Barrack",
      "buildingId" : "buildingId29",
      "buildingType" : "buildingType29"
    },
    {
      "buildingName" : "Great Stable",
      "buildingId" : "buildingId30",
      "buildingType" : "buildingType30"
    },
    {
      "buildingName" : "City Wall",
      "buildingId" : "buildingId31",
      "buildingType" : "buildingType31"
    },
    {
      "buildingName" : "Earth Wall",
      "buildingId" : "buildingId32",
      "buildingType" : "buildingType32"
    },
    {
      "buildingName" : "Palisade",
      "buildingId" : "buildingId33",
      "buildingType" : "buildingType33"
    },
    {
      "buildingName" : "Stonemasons Lodge",
      "buildingId" : "buildingId34",
      "buildingType" : "buildingType34"
    },
    {
      "buildingName" : "Brewery",
      "buildingId" : "buildingId35",
      "buildingType" : "buildingType35"
    },
    {
      "buildingName" : "Trapper",
      "buildingId" : "buildingId36",
      "buildingType" : "buildingType36"
    },
    {
      "buildingName" : "Great Warehouse",
      "buildingId" : "buildingId38",
      "buildingType" : "buildingType38"
    },
    {
      "buildingName" : "Great Granary",
      "buildingId" : "buildingId39",
      "buildingType" : "buildingType39"
    },
    {
      "buildingName" : "World of Wonder",
      "buildingId" : "buildingId40",
      "buildingType" : "buildingType40"
    },
    {
      "buildingName" : "Horse Drinking Trough",
      "buildingId" : "buildingId41",
      "buildingType" : "buildingType41"
    },
    {
      "buildingName" : "Water Ditch",
      "buildingId" : "buildingId42",
      "buildingType" : "buildingType42"
    },
    {
      "buildingName" : "Natarian Wall",
      "buildingId" : "buildingId43",
      "buildingType": "buildingType43"
    },
    {
      "buildingName" : "Hidden Treasury",
      "buildingId" : "buildingId45",
      "buildingType" : "buildingType45"
    }
  ];
  var sel = document.getElementById('targetOption');
  var selLength = sel.options.length;
  if (selLength <= 0){
    var target = document.getElementById('targetOption');
    var h3 = document.getElementById('h3');
    target.remove();
    var target = document.createElement('select');
    target.setAttribute('id', 'targetOption');
    target.setAttribute('class', 'w3-select w3-border');
    target.setAttribute('name', 'option');
    h3.appendChild(target);
    for (let i=0; i<buildings.length; i++){
      var options = document.createElement('option');
      options.setAttribute('value', buildings[i]['buildingName']);
      options.text = buildings[i]['buildingName'];
      target.appendChild(options);
    }
  }
}

function deleteRow(btn){
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row)
  var table = document.getElementById('targetTable');
  var rowCount = table.rows.length - 1;
  if (rowCount < 1){
    document.getElementById('generatejson').setAttribute('disabled', 'disabled');
    document.getElementById('cleartable').setAttribute('disabled', 'disabled');
  }
}

function copyRow(btn){
  var row = btn.parentNode.parentNode;
  var clone = row.cloneNode(true);
  document.getElementById('targetTable').appendChild(clone);
}

function clearTable(){
  var table = document.getElementById('targetTable');
  var rowCount = table.rows.length - 1;
  for (rowCount; rowCount>0; rowCount--){
    table.deleteRow(rowCount);
  }
  document.getElementById('generatejson').setAttribute('disabled', 'disabled');
  document.getElementById('cleartable').setAttribute('disabled', 'disabled');
}

function closeModal(){
  var modal = document.getElementById('myModal');
  modal.style.display = "none";
}

function copyText(){
  var textArea = document.createElement('textarea');
  textArea.value = '{"queues":[';
  var queues = ['', 'queueLocation', 'queueType', 'queueBuilding'];
  var table = document.getElementById('targetTable');
  var row = table.rows.length;
  for (let i=1; i<row; i++){
    textArea.value += '\n\t{\n';
    var cell = table.rows[i].cells.length;
    for (let y=1; y<cell; y++){
      textArea.value += '\t\t"';
      textArea.value += queues[y];
      textArea.value += '": "';
      textArea.value += table.rows[i].cells[y].innerHTML;
      textArea.value += '"';
      if (y<cell-1){
        textArea.value += ',';
      };
      textArea.value += '\n';
    };
    textArea.value += '\t}';
    if (i<row-1){
      textArea.value += ',';
    };
  };
  textArea.value += '\n]}';

  var targetModal = document.getElementById('targetModal');
  targetModal.appendChild(textArea);

  //document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  document.execCommand('copy');
  //document.body.removeChild(textArea);

  targetModal.removeChild(textArea);

  var op = 1;  // initial opacity
  element = document.getElementById('anotherTarget');
  element.style.display = 'inline';
  var timer = setInterval(function () {
      if (op <= 0.1){
          clearInterval(timer);
          element.style.display = 'none';
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op -= op * 0.1;
  }, 50);
}

function printImg(element){
  var value = element.options[element.selectedIndex].value;
  document.getElementById('targetImg').setAttribute('src', value);
}
