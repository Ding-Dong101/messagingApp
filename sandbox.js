const form = document.querySelector("form");

db.collection("messages")
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      console.log(doc.data());
    });
  });

form.addEventListener("submit", (e) => {
  e.preventDefault();

  db.collection("messages")
    .add({
      name: form.name.value,
      message: form.msg.value,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((err) => {
      alert(err);
    })
    .finally(() => {
      form.name.value = "";
      form.msg.value = "";
    });
});
