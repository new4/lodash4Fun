function foo(){
    console.log("foo");
}
var beforeFunc = _.before(3, foo);

var afterFunc = _.after(3, foo);