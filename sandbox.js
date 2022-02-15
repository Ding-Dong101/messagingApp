const form = document.querySelector('form');

db.collection('messages').get().then((snapshot) =>{
    snapshot.docs.forEach(doc => {
        console.log(doc.data())
    });
})

form.addEventListener('submit', e =>{
    e.preventDefault();
    try{
        db.collection('messages').add({
            name: form.name.value,
            friend:form.friendName.value,
            message:form.msg.value
        })
    }catch(err){
        alert(err)
    }finally{
        form.name.value = '';
        form.friendName.value = '';
        form.msg.value = '';
    }
   
})