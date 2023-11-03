const user = [
  {
    email: "anand@20.com",
    pass: "1234",
  },
  {
    email: "anand@26.com",
    pass: "123456",
  },
];

for (let element of user) {
  if (element.email == "anand@20.com") console.log(element.pass);
}
