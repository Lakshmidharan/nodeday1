const fs = require('fs')
fs.readdir("C:/Users/ELCOT/Pictures/db", { withFileTypes: true }, function (err, files) 
{
    if (err) throw err;
    else 
    {
        files.forEach(filetype => 
        {
            console.log(filetype);
        });
    };
})