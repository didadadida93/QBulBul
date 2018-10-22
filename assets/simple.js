function add_table(){
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
  queueBuilding = document.getElement
  //for checking
  document.getElementById('target').innerHTML = queueLocation + queueType
}

function generate_json(){

}
