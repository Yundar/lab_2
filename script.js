function addDiv(){
  var date = new Date();
  var fullDate = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear()
  addingButton.insertAdjacentHTML("beforebegin", '<div class = "note"> \
    <div class = "headline">Заголовок</div>\
    <div class = "time">{Date}</div>\
  </div>'.replace('{Date}', fullDate));
}
