let keyword = prompt();
keyword = parseInt(keyword,10);
const recycelTings = document.getElementById("recycle-thing");
const recycelWay = document.getElementById("recycle-way");
const recycelName = document.getElementById("recycle-name");
const recycelDescription = document.getElementById("recycle-description");
switch(keyword){
  case 0:
    recycelName.innerHTML  = "철캔";
    recycelTings.innerHTML=recycelName.innerHTML;
    recycelDescription.innerHTML = "재활용 시: 고철로 녹여서 다시 철강제품을 만든다."
    recycelWay.innerHTML = "대표적인 쓰레기 : 음료캔<br><br>1.철캔 내부를 비우고 행궈 속의 이물질을 없앤다.<br><br>2.라벨은 있으면 제거하고 뚜껑이나 철제질이 아닌것은 따로 분리수거한다.<br><br>3.부피를 줄이기 위해 철캔을 찌그러트려 압착한다."
    break;
  case 1:
    recycelName.innerHTML  = "알루미늄캔";
    recycelTings.innerHTML=recycelName.innerHTML;
    recycelDescription.innerHTML = "재활용 시: 알루미늄은 녹여서 다시 알루미늄제품을 만든다."
    recycelWay.innerHTML = "대표적인 쓰레기 : 음료캔<br><br>1.알루미늄캔 내부를 비우고 행궈 속의 이물질을 없앤다.<br><br>2.라벨은 있으면 제거하고 뚜껑이나 알류미늄제질이 아닌것은 따로 분리수거한다.<br><br>3.부피를 줄이기 위해 알루미늄캔을 찌그러트려 압착한다."
    break;
  case 2:
    recycelName.innerHTML  = "알루미늄캔";
    recycelTings.innerHTML=recycelName.innerHTML;
    recycelDescription.innerHTML = "재활용 시: 알루미늄은 녹여서 다시 알루미늄제품을 만든다."
    recycelWay.innerHTML = "대표적인 쓰레기 : 음료캔<br><br>1.알루미늄캔 내부를 비우고 행궈 속의 이물질을 없앤다.<br><br>2.라벨은 있으면 제거하고 뚜껑이나 알류미늄제질이 아닌것은 따로 분리수거한다.<br><br>3.부피를 줄이기 위해 알루미늄캔을 찌그러트려 압착한다."
    break;
  case 3:
    recycelName.innerHTML  = "페트병(무색단일)";
    recycelTings.innerHTML=recycelName.innerHTML;
    recycelDescription.innerHTML = "무게가 가벼우면서도 강도가 뛰어나다.<br><br>다른 플라스틱보다 탄산가스나 산소의 차단성이 높아 내용물을 보존하는데 유리하다.<br><br>투명하다."
    recycelWay.innerHTML = "대표적인 생수병 : 생수병<br><br>1.페트병 내부를 비우고 행궈 속의 이물질을 없앤다.<br><br>2.라벨은 있으면 제거한다.<br><br>3.부피를 줄이기 위해 생수병을 찌그러트려 압착한다."
    break; 
  case 4:
    recycelName.innerHTML  = "페트병(유색단일)";
    recycelTings.innerHTML=recycelName.innerHTML;
    recycelDescription.innerHTML = "무게가 가벼우면서도 강도가 뛰어나다.<br><br>다른 플라스틱보다 탄산가스나 산소의 차단성이 높아 내용물을 보존하는데 유리하다.<br><br>색상이 존재한다."
    recycelWay.innerHTML = "대표적인 생수병 : 생수병<br><br>%.페트병(무색단일)과 함께 분리배출 하지마세요.<br><br>1.페트병 내부를 비우고 행궈 속의 이물질을 없앤다.<br><br>2.라벨은 있으면 제거한다.<br><br>3.부피를 줄이기 위해 생수병을 찌그러트려 압착한다."
    break; 
  case 5:
    recycelName.innerHTML  = "PS{페트병(유색단일)}";
    recycelTings.innerHTML=recycelName.innerHTML;
    recycelDescription.innerHTML = "무게가 가벼우면서도 강도가 뛰어나다.<br><br>다른 플라스틱보다 탄산가스나 산소의 차단성이 높아 내용물을 보존하는데 유리하다.<br><br>색상이 존재한다."
    recycelWay.innerHTML = "대표적인 생수병 : 생수병<br><br>%.페트병(무색단일)과 함께 분리배출 하지마세요.<br><br>1.페트병 내부를 비우고 행궈 속의 이물질을 없앤다.<br><br>2.라벨은 있으면 제거한다.<br><br>3.부피를 줄이기 위해 생수병을 찌그러트려 압착한다."
    break; 
  default:

}