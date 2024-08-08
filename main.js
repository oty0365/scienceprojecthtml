let keyword = 0;
const recycelTings = document.getElementById("recycle-thing");
const recycelWay = document.getElementById("recycle-way");
const recycelName = document.getElementById("recycle-name");
const recycelDescription = document.getElementById("recycle-description");
switch(keyword){
  case 0:
    recycelName.innerHTML  = "PETE";
    recycelTings.innerHTML=recycelName.innerHTML;
    recycelDescription.innerHTML = "투명하고 가볍다.<br><br>가장 많이 재활용 되며 독성에 매우 안전하지만 재사용 시 박테리아 번식 가능성이 높다.<br><br>때문에 재활용하는 것은 자제해야한다."
    recycelWay.innerHTML = "대표적인 쓰레기 : 생수병<br><br>1.투명 페트병의 내용물을 비운다.<br><br>2.라벨을 제거하고 비닐류에 따로 버린다.<br><br>3.부피를 줄이기 위해 페트병을 찌그러트린다.<br><br>4.이물질이 들어가지 않도록 뚜껑을 닫아준다."
    break;
  default:
}