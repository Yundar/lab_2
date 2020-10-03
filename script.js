let itemsArray = localStorage.getItem('items') ?
 JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));
const left_bar = document.querySelector(".left_bar");
const mainBlock = document.querySelector(".main");

data.forEach(item => {
  noteRecovery(item);
});

function addDiv(){
  var fullDate = shortDate()
  const id = `f${(+new Date).toString(16)}`;
  const btnid = id + 'btn';
  const headId = id + 'head';
  const dateId = id + 'date';
  left_bar.insertAdjacentHTML("afterbegin", `<div onclick = noteBody(this) class = "note" id = ${id}>
    <button id = ${btnid} class = "closeBtn" onclick = removeNote(this)>X</button>
    <div class = "head" id = ${headId}>Заголовок</div>
    <div class = "time" id = ${dateId} onclick = select()>${fullDate}</div>
    </div>`);
  localStorage.setItem(dateId, fullDate);
  const dId = id + 'dat';
  const hId = id + 'hea';
  const mId = id + 'mai';
  fullDate = dateFull();
  mainBlock.insertAdjacentHTML("afterend", `<textarea class="datearea" id = ${dId}
   style = "display: none;" readonly = "readonly">${fullDate}</textarea>`);
  mainBlock.insertAdjacentHTML("afterend", `<textarea class="headarea" maxlength = 20 id = ${hId}
   style = "display: none;" oninput = changesInHead(this)>Заголовок</textarea>`);
  mainBlock.insertAdjacentHTML("afterend", `<textarea class="mainarea" placeholder = "Your notes" id = ${mId}
   style = "display: none;" oninput = changesInNote(this)></textarea>`);
   let itemsArray = JSON.parse(localStorage.getItem('items'));
   itemsArray.push(id);
   localStorage.setItem('items', JSON.stringify(itemsArray));
   let ids = [btnid, headId, dateId, dId, hId, mId];
   localStorage.setItem(id, JSON.stringify(ids));
   localStorage.setItem(headId, 'Заголовок');
   localStorage.setItem(dId, fullDate);
   localStorage.setItem(hId, 'Заголовок');
   var areas = document.getElementsByTagName('textarea');
   for (let area of areas){
     area.setAttribute('style', 'display: none;');
   };
   var allNotes = document.querySelectorAll('.note');
   allNotes.forEach(item => {
     item.removeAttribute("style");
   });
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
  var allNotes = document.querySelectorAll('.note');
  allNotes.forEach(item => {
    item.removeAttribute("style");
  });
  document.getElementById(id).setAttribute("style", "background-color: #f08b00");
};

function removeNote(el) {
    var id = el.id;
    id = id.slice(0,12);
    var element = document.getElementById(id);
    element.remove();
    const dId = id + 'dat';
    const hId = id + 'hea';
    const mId = id + 'mai';
    document.getElementById(dId).remove();
    document.getElementById(hId).remove();
    document.getElementById(mId).remove();
    let items = JSON.parse(localStorage.getItem('items'));
    items.forEach((item, index) => {
      if (id === item){
        items.splice(index, 1);
      }
    });
    localStorage.setItem('items', JSON.stringify(items));
    const headId = id + 'head';
    const dateId = id + 'date';
    localStorage.removeItem(id);
    localStorage.removeItem(dateId);
    localStorage.removeItem(headId);
    localStorage.removeItem(dId);
    localStorage.removeItem(hId);
    localStorage.removeItem(mId);
};

function changesInHead(el){
  var fullDate = dateFull();
  var elid = el.id;
  id = elid.slice(0, 12);
  var headId = id + 'head';
  const elidv = document.getElementById(elid).value;
  changePlace(id, elidv);
  var dId = id + 'dat';
  document.getElementById(dId).value = fullDate;
  localStorage.setItem(dId, fullDate);
  document.getElementById(headId).innerHTML = elidv;
  localStorage.setItem(elid, elidv);
  localStorage.setItem(headId, elidv);
  var dateId = id + 'date';
  fullDate = shortDate();
  document.getElementById(dateId).innerHTML = fullDate;
  localStorage.setItem(dateId, fullDate);

};

function changesInNote(el){
  var fullDate = dateFull();
  var elid = el.id;
  var id = elid.slice(0, 12);
  var hId = id + 'hea';
  const noteName = document.getElementById(hId).value;
  changePlace(id, noteName);
  var dId = id + 'dat';
  document.getElementById(dId).value = fullDate;
  localStorage.setItem(dId, fullDate);
  var dateId = id + 'date';
  fullDate = shortDate();
  document.getElementById(dateId).innerHTML = fullDate;
  localStorage.setItem(dateId, fullDate);
  localStorage.setItem(elid, document.getElementById(elid).value);
};

function dateFull(){
  var date = new Date();
  var month = Number(date.getMonth());
  var hours = date.getHours();
  var day = date.getDate();
  if (hours < 10){
    hours = '0' + hours;
  };
  var minutes = date.getMinutes();
  if (minutes < 10){
    minutes = '0' + minutes;
  };
  var mon = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', +
   'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  month = mon[month];
  var fullDate = day + ' ' + month + ' ' + date.getFullYear() + 'г. в ' + hours + ':' + minutes;
  return fullDate;
}

function shortDate(){
  var date = new Date();
  var formatting = new Intl.DateTimeFormat("ru");
  return(formatting.format(date));
}

function noteRecovery(item){
  const ids = JSON.parse(localStorage.getItem(item));
  console.log(ids);
  left_bar.insertAdjacentHTML("afterbegin", `<div onclick = noteBody(this) class = "note" id = ${item}>
    <button id = ${ids[0]} class = "closeBtn" onclick = removeNote(this)>X</button>
    <div class = "head" id = ${ids[1]}>${localStorage.getItem(ids[1])}</div>
    <div class = "time" id = ${ids[2]} onclick = select()>${localStorage.getItem(ids[2])}</div>
    </div>`);
  mainBlock.insertAdjacentHTML("afterend", `<textarea class="datearea" id = ${ids[3]}
   style = "display: none;" readonly = "readonly">${localStorage.getItem(ids[3])}</textarea>`);
  mainBlock.insertAdjacentHTML("afterend", `<textarea class="headarea" maxlength = 20 id = ${ids[4]}
   style = "display: none;" oninput = changesInHead(this)>${localStorage.getItem(ids[4])}</textarea>`);
  mainBlock.insertAdjacentHTML("afterend", `<textarea class="mainarea" placeholder = "Your notes" id = ${ids[5]}
   style = "display: none;" oninput = changesInNote(this)>${localStorage.getItem(ids[5])}</textarea>`);
}

function changePlace(id, noteName){
  var element = document.getElementById(id);
  element.remove();
  const btnid = id + 'btn';
  const headId = id + 'head';
  const dateId = id + 'date';
  left_bar.insertAdjacentHTML("afterbegin", `<div onclick = noteBody(this) class = "note" id = ${id}>
    <button id = ${btnid} class = "closeBtn" onclick = removeNote(this)>X</button>
    <div class = "head" id = ${headId}>${noteName}</div>
    <div class = "time" id = ${dateId} onclick = select()></div>
    </div>`);
  let items = JSON.parse(localStorage.getItem('items'));
  items.forEach((item, index) => {
    if (id === item){
      items.splice(index, 1);
    }
  });
  localStorage.setItem('items', JSON.stringify(items));
  let itemsArray = JSON.parse(localStorage.getItem('items'));
  itemsArray.push(id);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  document.getElementById(id).setAttribute("style", "background-color: #f08b00");
}
