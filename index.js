
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function roll(){
const x = document.getElementById("hello").value 

if(x==8){
    document.getElementById("result").innerHTML = "Kết quả của bạn rất chính xác"
}else if(x>100){
    document.getElementById("result").innerHTML ="Số không hợp lệ"
}
else{
    document.getElementById("result").innerHTML = "Kết quả của bạn chưa chính xác hãy thử lại xem"
}
}

