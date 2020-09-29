function addDiv(){
  var date = new Date();
  var month = date.getMonth() + 1;
  if (month <= 9 ){
    month = '0' + month
  }
  var fullDate = date.getDate() + '.' + month + '.' + date.getFullYear()
  addingButton.insertAdjacentHTML("beforebegin", '<div class = "note"> \
    <div class = "headline">Заголовок</div>\
    <div class = "time">{Date}</div>\
  </div>'.replace('{Date}', fullDate));
}
