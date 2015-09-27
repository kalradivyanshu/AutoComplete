# AutoComplete

autocomplete is a simple code that anyone can use in there website to get a autocomplete text/search box.

Usage:

```html
<input id="searchbox" type="text" style="width:200px;margin-left:200px;" data-backend="getdata.php" data-getvar="q">
<table class="suggestiontable table" style="width:200px;margin-left:200px;" id="options"></table>
```	
add the backend link in data-backend and add the variable via which you want the query to be send to data-getvar.

You can see the output at: http://awesomeness.cf/autocomplete/
