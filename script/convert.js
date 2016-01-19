function convertBinary() {
    var binary = document.getElementById("binary");
    var ascii = document.getElementById("ascii").value;
	binary.value = "";
    for (i=0; i < ascii.length; i++) {
		var e=ascii[i].charCodeAt(0);
		var s = "";
		do{
			var a =e%2;
			e=(e-a)/2;
			s=a+s;
		}while(e!=0);
		while(s.length<8){
			s="0"+s;
		}
    s+=' '
		binary.value+=s;
    }
}

function convertAscii() {
  
  var binary = document.getElementById("binary").value;
  var ascii = document.getElementById("ascii");
  ascii.value = "";
	
	var bin = binary.split(' ');
	var bincode = [];
	
	for(i=0; i<bin.length; i++){
		bincode.push(String.fromCharCode(parseInt(bin[i], 2)));
	}
  
	ascii.value = bincode.join('');
  addSpace();
}

function addSpace(){
  var binary = $('#binary').val().split(" ").join("");;
  var counter = 0;
  for(var i in binary){
    counter++;
    console.log(binary + counter);
    if(counter >= 9){
      var nb = binary.slice(0, i)+" "+binary.slice(i, binary.length);
      binary = nb;
      counter = 0;
    }
  }
  $('#binary').val(binary);
}