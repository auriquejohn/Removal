function askGrade(grade){
  
     if (grade == 'inc'){
       console.log("Your grade is incomplete");
        }
   else if (grade == 'DROP'){
  console.log("You have droped the subject");
   }
  else if (grade < 70){
  console.log("There is no grade like that");
  }
  else if (grade > 100){
  console.log("Grade is overkill");
  }
  
    if (grade < 75){
    if(grade % 2){  //odd
    console.log("Your new grade is :" + (grade -3));
    }
    else {
      console.log("Your new grade is :" + (grade -2));   
    }
    
    
  }else{

 if(grade % 2){  //odd
    console.log("Your new grade is :" + (grade + 5));
    }
    else {
      console.log("Your new grade is :" + (grade + 3));   
    }
  
   
  } 
}    

    
    
    

module.exports = {
    processAskGrade:askGrade
}