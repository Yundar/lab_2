function addDiv(){
  var date = new Date();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  if (day < 10){
    day = '0' + day;
  };
  if (month <= 9 ){
    month = '0' + month;
  };
  var fullDate = day + '.' + month + '.' + date.getFullYear();
  const id = `f${(+new Date).toString(16)}`;
  const btnid = id + 'btn';
  const headId = id + 'head';
  addingButton.insertAdjacentHTML("beforebegin", `<div onclick = noteBody(this) class = "note" id = ${id}>
    <button id = ${btnid} class = "closeBtn" onclick = removeNote(this)>X</button>
    <div class = "head" id = ${headId}>Заголовок</div>
    <div class = "time">${fullDate}</div>
    </div>`);
  var dId = id + 'dat';
  var hId = id + 'hea';
  var mId = id + 'mai';
  fullDate = dateFull();
  mainBlock.insertAdjacentHTML("afterend", `<textarea class="datearea" id = ${dId}
   style = "display: none;" readonly = "readonly">${fullDate}</textarea>`);
  mainBlock.insertAdjacentHTML("afterend", `<textarea class="headarea" maxlength = 20 id = ${hId}
   style = "display: none;" oninput = changesInHead(this)>Заголовок</textarea>`);
  mainBlock.insertAdjacentHTML("afterend", `<textarea class="mainarea" placeholder = "Your notes" id = ${mId}
   style = "display: none;" oninput = changesInNote(this)></textarea>`);
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

function changesInHead(el){
  var fullDate = dateFull();
  var elid = el.id;
  id = elid.slice(0, 12);
  var dId = id + 'dat';
  document.getElementById(dId).value = fullDate
  id = id + 'head';
  document.getElementById(id).innerHTML = document.getElementById(elid).value;

};

function changesInNote(el){
  var fullDate = dateFull();
  var id = el.id;
  id = id.slice(0, 12);
  var dId = id + 'dat';
  document.getElementById(dId).value = fullDate
};

function dateFull(){
  var date = new Date();
  var month = date.getMonth() + 1;
  var hours = date.getHours();
  var day = date.getDate();
  if (day < 10){
    day = '0' + day;
  };
  if (hours < 10){
    hours = '0' + hours;
  };
  if (month <= 9 ){
    month = '0' + month;
  };
  var fullDate = day + '.' + month + '.' + date.getFullYear() + ' в ' + hours + ':' + date.getMinutes();
  return fullDate;
}
