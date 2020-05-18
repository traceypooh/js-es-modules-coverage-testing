
// https://stackoverflow.com/a/46739544
let Goo

function fun2() { return 2 }
function fun1() { return Goo.fun2() }

export default Goo = {
  fun1,
  fun2,
}
