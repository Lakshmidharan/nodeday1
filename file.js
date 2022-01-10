const fs = require('fs')
const param=process.argv[2]
fs.readdir(param,{ withFileTypes: true }, function (err, files) 
{
    if (err) throw err;
   
        files.forEach((filetype)=> 
        {
            if(filetype.isFile){
                console.log(`${filetype.name}:file`);
            }
            else{
                console.log(`${filetype.name}:folder`);
            }
        });
   
})
