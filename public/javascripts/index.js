const ajaxPromise= (endPoint,userData)=>{
    return new Promise((resolve, reject) => {
        $.ajax({
            url:endPoint,
            data:JSON.stringify(userData),
            contentType:'application/json',
            method:'POST',
            success:function(response){
                resolve(response)
            },
            error:function(error){
                reject(error)
            }
        })
    })
}

$(()=>{
    $('#submit').click(async ()=>{
        const fname = $('#name1').val();
        const lname = $('#name2').val();
        const message = $('#message5').val();
        const phone = $('#input3').val();
        const email = $('#input4').val();
        alert("Submitted");
        const userData = await ajaxPromise('/api/contact',{fname,lname,phone,email,message});
    })
})

$(()=>{
    $('#publish').click(async ()=>{
        const authorname = $('#text1').val();
        const articletitle = $('#text2').val();
        const atext = $('#text3').val();
        alert("Published");
        const userData = await ajaxPromise('/api/admin',{authorname,articletitle,atext});
    })
})