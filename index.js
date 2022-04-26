// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name)
}

function destructivelyPrependCat(name) {
  cats.unshift(name)
}

function destructivelyRemoveLastCat() {
  cats.pop()
}

function destructivelyRemoveFirstCat() {
  cats.shift()
}

function appendCat(name) {
  const result = [...cats, name]
  return result
}

function prependCat(name) {
  const result = [name, ...cats]
  return result
}

function removeLastCat() {
  let result = [...cats]
  result.pop()
  return result
}

function removeFirstCat() {
  let result = [...cats]
  result.shift()
  return result
}