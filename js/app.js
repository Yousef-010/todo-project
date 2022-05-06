//part 1 

let userName = prompt('enter your name please !! ')
let gender = prompt('enter your gender as male or female !!')
let age = prompt('enter your age ..')

if (gender=='male' || gender=='female'){
        if (age <=0 ) {
            alert('your age is invalid .. try agin..')
        }
        else {
            let skip = prompt('Enter yes if you want to skip welcome message ..')
            if(skip=='yes'){
                
                // alert('welcome message skipped .. :(   ')
            }
            else{
                if(gender=='male'){
                    alert('welcome MR ' + userName + ' to our website :)  ')
                }
                else{
                    alert('welcome MS ' + userName + ' to our website :)  ')
                }
            }
        }
    }
    else{
        let age = prompt('your gender is invalid please enter your age agian .. ')
        if (age <=0){
            alert('your age is invalid try again please ..')
        }
        else {
            let skip = prompt('enter yes if you want to skip welcome message..')
            if (skip=='yes'){
                
                // alert('welcome message skipped :(  ')
            }
            else{
                    alert('welcome '+ userName + ' to our website :)  ')
            }
        }
    }

     