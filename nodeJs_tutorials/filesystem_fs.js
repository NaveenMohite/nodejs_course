const fs = require('fs');
//create a file
// fs.writeFile('example.txt',"Ths is a example file. created by FileSystem writefile method.",(err)=>{
//     if(err)
//     console.log(err);
//     else{
//     console.log('file created successfuly')
//     fs.readFile('example.txt','utf8',(err,file)=>{
//         if(err)
//         console.log(err);
//         else
//         console.log(file);

//     });
    
//     }
// });


//rename a file
// fs.rename('events.js','example.txt',(err)=>{
//     if(err)
//     console.log(err);
//     else
//     console.log('Successfully renamed the file');

// });


//rename a file
// fs.appendFile('example.txt',' This data is added by appendfile method.',(err)=>{
//     if(err)
//     console.log(err);
//     else
//     console.log('Successfully data appended to the file');

// });


//delete a file
// fs.unlink('example.txt',(err)=>{
//     if(err)
//     console.log(err)
//     else
//     console.log('Successfully deleted a file')

// });



//create a folder
// fs.mkdir('tutorials',(err)=>{
//     if(err)
//     console.log(err);
//     else
//     console.log('folder created successfully')
// });

//delete a folder
// fs.rmdir('tutorials',(err)=>{
//     if(err)
//     console.log(err);
//     else
//     console.log('folder successfully deleted')
// });


//create a folder and file in it
fs.mkdir('tutorials',(err)=>{
        if(err)
        console.log(err);
        else{
            
 fs.writeFile('./tutorials/example.txt',"Ths is a example file. created by FileSystem writefile method.",(err)=>{
    if(err)
    console.log(err);
    else{
    console.log('file created successfuly')
    fs.readFile('./tutorials/example.txt','utf8',(err,file)=>{
        if(err)
        console.log(err);
        else
        console.log(file);

    });
    
    }
});
}
});


// delete a file and folder    
// fs.unlink('./tutorials/example.txt',(err)=>{
//     if(err)
//     console.log(err)
//     else
//     {
//         fs.rmdir('tutorials',(err)=>{
//         if(err)
//         console.log(err);
//         else
//         console.log('folder successfully deleted')
//         });
//     }
//  });


//delete a folder and all files in it
// fs.readdir('tutorials',(err,files)=>{
//     if(err)
//     console.log(err)
//     else{
//         //console.log(files);
//         for(let file of files){
//             fs.unlink('./tutorials/' + file,(err)=>{
//                 if(err)
//                 console.log(err)
//                 else
//                 console.log('Successfully deleted file')
//             });
//         }
//     }
// });