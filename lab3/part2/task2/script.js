var book = [];
do {
  ch = prompt("enter add OR search");
  if (ch != null) {
    switch (ch) {
      case "add":
        name = prompt("enter name of the contact");
        number = prompt("enter the number");
        contact = {
          name: name,
          number: number,
        };
        book.push(contact);
        break;

      case "search":
        data = prompt("enter name of the contact");
        for (let i = 0; i < book.length; i++) {
          if (book[i].name === data) {
            alert(book[i].name + ": " + book[i].number);
            break;
          } else {
            if (book[i].number === data) {
              alert(book[i].name + ": " + book[i].number);
              break;
            } else {
              alert("not valid");
            }
          }
        }
      default:
        alert("not valid");
    }
  }
  confrm = confirm("add more operation?");
} while (confrm);

console.log(book);
