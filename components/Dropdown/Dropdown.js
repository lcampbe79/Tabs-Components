class Dropdown {
  constructor(dropdown) {
    
     // Assign this.element to the dropdown element
     this.dropDownMenu = dropdown;
    
     // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
     this.dropdownButton = this.dropDownMenu.querySelector(".dropdown-button");
 
  
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.dropDownMenu.querySelector(".dropdown-content");
    
    // Add a click handler to the button reference and call the toggleContent method.
    this.dropdownButton.addEventListener('click', () => {
      this.toggleContent()
    })
  }

  toggleContent() {
    this.content.classList.toggle("dropdown-hidden")
  //   // Toggle the ".dropdown-hidden" class off and on
  //   this.content;
  
  }
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));