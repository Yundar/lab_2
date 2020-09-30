function addDiv(){
  var date = new Date();
  var month = date.getMonth() + 1;
  if (month <= 9 ){
    month = '0' + month
  }
  var fullDate = date.getDate() + '.' + month + '.' + date.getFullYear()
  addingButton.insertAdjacentHTML("beforebegin", '<div onclick = noteBody() class = "note" id = "test"> \
    <button name = "rem" class = "closeBtn" onclick = remDiv()>X</button>\
    <div name = "head" class = "head">Заголовок</div>\
    <div class = "time">{Date}</div>\
  </div>'.replace('{Date}', fullDate));
}

function remDiv() {
  var els = document.getElementsByName("rem");
  els.forEach(function(item) {
      item.addEventListener("click", function(){
          item.parentNode.parentNode.removeChild(item.parentNode);
      });
  });
}

function noteBody(){
  mainBlock.insertAdjacentHTML("afterend", '<textarea class="datearea"></textarea>')
  mainBlock.insertAdjacentHTML("afterend", '<textarea class="headarea" maxlength = 20></textarea>')
  mainBlock.insertAdjacentHTML("afterend", '<textarea class="mainarea" ></textarea>')
}
