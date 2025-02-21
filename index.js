import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs'

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message:"Type Your URL : ",
        name:"URL"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    // console.log(answers)
    const url=answers.URL;
    var qr_svg = qr.image(url); // passing the user input url 
    qr_svg.pipe(fs.createWriteStream('qr_image.png')); // to generate qr

    // to save in text file
    fs.writeFile("Textdoc.txt",url,(err)=>{ // saving the file in Textdoc.txt
        if(err) throw err;
        console.log("File has been saved") 
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });