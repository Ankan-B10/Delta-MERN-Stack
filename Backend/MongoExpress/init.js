const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection sucessfulll");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

//insert multiple data
let allChats = [
  {
    from: "neha",
    to: "priya",
    msg: "Send me your exam questions",
    created_at: new Date(), //created random dates
  },
  {
    from: "a1",
    to: "a2",
    msg: "Hi",
    created_at: new Date(), //created random dates
  },
  {
    from: "a3",
    to: "a4",
    msg: "Hello",
    created_at: new Date(), //created random dates
  },
  {
    from: "a5",
    to: "a6",
    msg: "How are you",
    created_at: new Date(), //created random dates
  },
];

Chat.insertMany(allChats);
