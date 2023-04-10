var myName = "Michael";

var description;

console.log(myName);

var myAge = 28;

if (myName === "Ailaigh") {
  description = "sexy";
} else if (myName === "Michael") {
  description = "rotten";
} else {
  description = "meh";
}

console.log(description);

//break

var greeting = "Hi I'm " + myName + " and I am " + description;

console.log(greeting);

//break

function startMe() {
  console.log("start function");
}
startMe();

//break

function test(name, age) {
  var greeting = "Hi I'm " + name + " my age is " + age;

  console.log(greeting);
}
test("peepeepoopoo", 43);

test("Ailaigh");
test("Mijichael");
test("Ailchael");
test("AJoughlan");

//break

function theTruth(theName, description) {
  var greeting2 = "Hi I'm " + theName + " and I am " + description;
  console.log(greeting2);
}

theTruth("Ailaigh", "smelly");

//break

function bigBoi(name) {
  if (name === "Ailaigh") {
    gender = "a Woman";
  } else if (name === "Michael") {
    gender = "a Man";
  } else {
    gender = "possibly a Bunny?";
  }
  var greeting = "Hi I'm " + name + " and I am " + gender;
  console.log(greeting);
}

bigBoi("Ailaigh");
bigBoi("Michael");
bigBoi("Thumper");
bigBoi("Mabel");

//break

document
  .getElementById("ClickyBoi")
  .addEventListener("click", theClickFunction);

function theClickFunction() {
  alert("Ouch!");
}
