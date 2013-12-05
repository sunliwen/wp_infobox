Handlebars.registerHelper('table', function(items, options) {
  var out = "<table>";

  for(var i in items) {
    item = items[i];

    for(var key in item){
      if(item[key] !== ""){
        out = out + "<tr>";
        out = out + "<th style='text-align: right'><span>" + key + "</span></th>";
        out = out + "<td style='word-break: break-word;'><span>" + item[key] + "</span></td>";
        out = out + "</tr>";
      }
    }
  }

  return out + "</table>";
});

Handlebars.registerHelper('batches-table', function(items, options) {
  var out = "<table>";
  out = out + "<tr>";
  out = out + "<th style='text-align: right'><span>StreamItem</span></th>";
  out = out + "<td style='word-break: break-word;'><span>Count</span></td>";
  out = out + "</tr>";

  $.each(items, function(k, v){
    //console.log(k);
    //console.log(v);
    out = out + "<tr>";
    out = out + "<th style='text-align: right'><span style='font-size: 60%'>" + k + "</span></th>";
    out = out + "<td style='word-break: break-word;'><span>" + v + "</span></td>";
    out = out + "</tr>";
  });

  return out + "</table>";
});