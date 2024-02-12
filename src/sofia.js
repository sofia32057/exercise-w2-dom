console.log("Start Here 😉");

// INDIVIDUAL SOLUTION

// Target DOM elements
const box = document.querySelector(".box");
const radioList = document.querySelectorAll("input[name='theme']");

// Function to switch theme, without parameter
const switchTheme = (radio) => {
  console.log("Prev classlist: ", box.classList);
  clearTheme(); //Function call
  transitionEffect(); //Function call
  box.classList.add(radio.target.value); // Add theme class
  console.log("New classlist: ", box.classList);
  console.log(`Theme changed to ${radio.target.value} `)
};

// Function to remove themes
const clearTheme = () => box.classList = "box";

// Function to add and remove transition effect
const transitionEffect = () => {
    box.classList.add("color-transition")
    setTimeout(() => {
        box.classList.remove("color-transition")
        console.log("Transition timed out")
    }, 2100);
};

// Add event listener to each element in list
radioList.forEach(radio => {
    radio.addEventListener("change", switchTheme);
    console.log(radio.value);
    }
);

