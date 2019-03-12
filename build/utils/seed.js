"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.message = exports.user = exports.messages = exports.users = void 0;
// dummy data for users
var users = [{
  id: 101,
  email: 'tundeusman1@gmail.com',
  firstName: 'Tunde',
  lastName: 'Usman',
  password: 'Userpassword1',
  token: "gvweyuywyg"
}, {
  id: 102,
  email: 'tundeusman2@gmail.com',
  firstName: 'Monsurah',
  lastName: 'Ishaq',
  password: 'Userpassword2',
  token: "uhewfhoir"
}]; // dummy data for messages

exports.users = users;
var messages = [{
  id: 102,
  createdOn: "2/03/2019",
  subject: 'I love Andela',
  message: 'Tunde usman love andela so much',
  parentMessageId: 112,
  status: "draft",
  senderId: 102,
  receiverId: null
}, {
  id: 202,
  createdOn: "2/03/2019",
  subject: 'My love for Andela',
  message: 'Andela is the best place where i will love to work',
  parentMessageId: 224,
  status: "unread",
  senderId: 101,
  receiverId: 201
}, {
  id: 302,
  createdOn: "6/03/2019",
  subject: 'My love for Andela',
  message: 'unto the matter',
  parentMessageId: 224,
  status: "sent",
  senderId: 201,
  receiverId: 101
}]; // single user dummy data

exports.messages = messages;
var user = {
  email: 'example@gmail.com',
  password: 'password',
  id: 333,
  firstName: "tunde",
  lastName: "usman",
  token: "briegbiur"
}; // single message dummy data

exports.user = user;
var message = {
  id: 111,
  createdOn: "2/04/2019",
  subject: 'I love my life',
  message: 'Tunde usman loves his life',
  parentMessageId: 105,
  status: "read"
}; // Exporting
// module.exports = {
//     users,
//     messages,
//     user,
//     message,
// };

exports.message = message;