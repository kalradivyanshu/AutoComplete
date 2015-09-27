# AutoComplete

autocomplete is a simple code that anyone can use in there website to get a autocomplete text/search box.

Usage:

```html
<input id="searchbox" type="text" style="width:200px;margin-left:200px;" data-backend="getdata.php" data-getvar="q">
<table class="suggestiontable table" style="width:200px;margin-left:200px;" id="options"></table>
```	
add the backend link in data-backend and add the variable via which you want the query to be send to data-getvar.

The output of the backend should be in json format for example:
```json
[{"img":"http:\/\/bit.ly\/1L5vigA","name1":"Homer Simpson","username":"@homersimpson","link1":"https:\/\/www.google.co.in\/#q=Homer+Simpson"},{"img":"http:\/\/bit.ly\/1D7RFMa","name1":"Bart Simpson","username":"@bartsimpson","link1":"https:\/\/www.google.co.in\/#q=Bart+Simpson"},{"img":"http:\/\/bit.ly\/1D7RPDe","name1":"Marge Simpson","username":"@margesimpson","link1":"https:\/\/www.google.co.in\/#q=Marge+Simpson"},{"img":"http:\/\/bit.ly\/1D7RX5H","name1":"Lisa Simpson","username":"@lisasimpson","link1":"https:\/\/www.google.co.in\/#q=Lisa+Simpson"},{"img":"http:\/\/bit.ly\/1D7THMf","name1":"Grampa Simpson","username":"@grampasimpson","link1":"https:\/\/www.google.co.in\/#q=Grampa+Simpson"}]
```
You can see the output at: http://awesomeness.cf/autocomplete/
