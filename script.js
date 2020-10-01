function addDiv(){
  var date = new Date();
  var month = date.getMonth() + 1;
  if (month <= 9 ){
    month = '0' + month
  };
  var fullDate = date.getDate() + '.' + month + '.' + date.getFullYear();
  const id = `f${(+new Date).toString(16)}`;
  const btnid = id + 'btn';
  addingButton.insertAdjacentHTML("beforebegin", `<div onclick = noteBody(this) class = "note" id = ${id}>
    <button id = ${btnid} class = "closeBtn" onclick = removeNote(this)>X</button>
    <div name = "head" class = "head">Заголовок</div>
    <div class = "time">${fullDate}</div>
    </div>`);
  var dId = id + 'dat';
  var hId = id + 'hea';
  var mId = id + 'mai';
  mainBlock.insertAdjacentHTML("afterend", `<textarea class="datearea" id = ${dId}
   style = "display: none;"></textarea>`);
  mainBlock.insertAdjacentHTML("afterend", `<textarea class="headarea" maxlength = 20 id = ${hId}
   style = "display: none;"></textarea>`);
  mainBlock.insertAdjacentHTML("afterend", `<textarea class="mainarea" placeholder = "Your notes" id = ${mId}
   style = "display: none;"></textarea>`);
};

function noteBody(el){
  var id = el.id;
  var dId = id + 'dat';
  var hId = id + 'hea';
  var mId = id + 'mai';
  var areas = document.getElementsByTagName('textarea');
  for (let area of areas){
    area.setAttribute('style', 'display: none;');
  };
  document.getElementById(dId).removeAttribute("style");
  document.getElementById(hId).removeAttribute("style");
  document.getElementById(mId).removeAttribute("style");
};

function removeNote(el) {
    var id = el.id;
    id = id.slice(0,12);
    var element = document.getElementById(id);
    element.remove();
    var dId = id + 'dat';
    var hId = id + 'hea';
    var mId = id + 'mai';
    document.getElementById(dId).remove();
    document.getElementById(hId).remove();
    document.getElementById(mId).remove();
};

function test(el){
  const id = el.id;
  var elid = id.slice(0, 12) + 'mai';
  document.getElementById(elid).value = document.getElementById(id).value
}
