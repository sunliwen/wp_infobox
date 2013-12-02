Handlebars.registerHelper('table', function(items, options) {
  var out = "<table>";

  console.log(items);
  for(var i in items) {
    out = out + "<tr>";
    item = items[i];
    console.log(item);

    for(var key in item){
      out = out + "<th style='text-align: right'><span>" + key + "</span></th>";
      out = out + "<td style='word-break: break-word;'><span>" + item[key] + "</span></td>";
    }

    out = out + "</tr>";
  }

  return out + "</table>";
});