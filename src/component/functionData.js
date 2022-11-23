function newData () {
    const fs = require('fs');

    const fileContact = 'contact.json'
    if (!fs.existsSync(fileContact)) {
    fs.writeFileSync(fileContact, '[]');
    }

    const emailInput = document.querySelector(".emailInput");
    const nameInput = document.querySelector(".nameInput");
    const telInput = document.querySelector(".telInput");
  
    const comment = {emailInput, nameInput, telInput};
    const file = fs.readFileSync('comment.json', 'utf-8');
    const newComment = JSON.parse(file);  
  
    newComment.push(comment);
  
      fs.writeFileSync('comment.json', JSON.stringify(newComment));
  
  }

  export default newData;