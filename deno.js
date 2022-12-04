const val1 = Deno.args[0];
const val2 = Deno.args[1];

if (isNaN(Number(val2))) {
  console.log("arg2 is not an integer, please try again");
} else if (Math.trunc(Number(val2)) < 1) {
  console.log("arg2 should be an integer greater than 0");
}

for (let i = 0; i < Math.trunc(Number(val2)); i++) {
  if (val1 === "1") {
    console.log(":-)");
  } else {
    console.log(":-(");
  }
}

// console.log(Deno.metrics());
