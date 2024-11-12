$(document).reday(function(){
    $("#signupForm").validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            },
            password:{
                required:true,
                minlength:8

            }
        }

       
    })
})