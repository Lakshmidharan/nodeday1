const fs = require('fs')
const param=process.argv[2]
fs.readdir(param,{ withFileTypes: true }, function (err, files) 
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