var name = prompt('enter you name please ! ')
var gender = prompt('enter your gender please male or female ! ')

if (gender=='male' || gender=='female'){

    var age = prompt('enter your age please !')

    if (age <=0){
        alert('your age is invalid ')
    }
    else{
    var confirmation = prompt('enter yes to skip welcoming message ')
    if (confirmation=='yes'){
        alert('welcoming message skipped')
    }
    else{
         if(gender=='male'){
             alert('welcome MR '+name+' to TODO website...')
         }
         else{
            alert('welcome MS '+name+' to TODO website...')
         }
    }
    }

    }
    else {
        alert('welcome to TODO website ... ')
    }

 
