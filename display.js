const messages = document.getElementById("messages");

db.collection("messages")
  .get()
  .then((snap) => {
    snap.docs.forEach((doc) => {
      //   console.log(doc.data());
      //   console.log(doc.data().name);

      // create a new div for each message
      const content = document.createElement("div");
      content.className = "content";
      // appends name to the div called content
      content.appendChild(document.createElement("h3")).innerText = doc.data().name;
      // appends message to the div called content
      content.appendChild(document.createElement("p")).innerText = doc.data().message;
      messages.appendChild(content);
    });
  });
