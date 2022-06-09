"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
//creating a variable called url and assigning the json placeholder link to it
var url = "http://jsonplaceholder.typicode.com/todos/1";
//we can now use axios to make a nerrwork request to the above url using http get request and attempt to fetch that json data
axios_1["default"].get(url);
//to get a notification when the request is received we can chain on the .then() that will be called with the response once we get the res from the API
axios_1["default"].get(url).then(function (response) {
    console.log(response.data);
});
//pulling of the id, title and completed
axios_1["default"].get(url).then(function (response) {
    var todo = response.data;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    logTodo(id, title, completed);
});
var logTodo = function (id, title, completed) {
    console.log("\n          The Todo with ID : ".concat(id, "   \n          Has a title of: ").concat(title, "\n          IS it finished: ").concat(completed, "     "));
};
