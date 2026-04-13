// make the html elements global because we might want to manipulate them throughout our sketches
let headerElement
let slider
let inputText
let dropdown

function setup() {
  createCanvas(400, 400);
  
  headerElement = createElement('h2', 'hi this is an h2')
  headerElement.position (0,0)
  headerElement.textContent = ("i have changed the content now")
  
  // createSlider (min, max, [value], [step])
  // value = starting value
  // step = if you want it to snap to a value
  slider = createSlider(0, width, width/2)

// createInput ([value])
  inputText = createInput ('this is some text')
  inputText.position(10, 350)
  
  //createSelect ([multiple])
  dropdown = createSelect()
  dropdown.option("sky blue", "skyblue")
  dropdown.option("pink")
}

function draw() {
  background(dropdown.selected());
  
// print(slider.value)
  text("this is text inside the canvas", width/2, height/2)
}