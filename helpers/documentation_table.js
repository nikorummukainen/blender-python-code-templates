var fs = require('fs')

fs.readFile("./snippets/snippets.json", 'utf8', function(err, data) {
   if (err) throw err;
   sort(data)
});


function sort(data) {
    data = JSON.parse(data)
    let table = []
    table.push("|Prefixes|Description|")
    table.push("|--------|-----------|")
    for (i in data) {
        var snippet = data[i]
        var prefix = ""
        var description = ""
        prefix = snippet["prefix"]
        description = snippet["description"]
        line = "|" + prefix.replace(/\s/g, "&nbsp;") + "|" + description +"|"
        
        table.push(line)
    }
    table = table.join("\n")
    fs.writeFile("./TABLE.md", table)
}