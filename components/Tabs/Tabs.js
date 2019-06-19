class TabLink {
  constructor(tabLinkElement) {
    // Assign this.element to the passed in DOM element
    this.tabLinkElement = tabLinkElement;
    
    // Get the custom data attribute on the Link
    this.dataLinkAttribute = this.tabLinkElement.dataset.tab;
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.dataLinkAttribute}"]`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);

    // Add a click event listener on this instance, calling the select method on click
    this.tabLinkElement.addEventListener('click', this.select.bind(this));
  };

  select() {
    // Get all of the elements with the tabs-link class
    const tabLinks = document.querySelectorAll(".tabs-link");

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(tabLinks).forEach( (tabLinks) => tabLinks.classList.remove('tabs-link-selected'));

    // Add a class named "tabs-link-selected" to this link
    this.tabLinkElement.classList.add("tabs-link-selected")
    
    // Call the select method on the item associated with this link
    this.tabItem.select();
  }
}

class TabItem {
  constructor(tabItemElement) {
    // Assign this.element to the passed in element
     this.tabItemElement = tabItemElement;
  }

  select() {
    
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll(".tabs-item");
    //console.log(items)

    // Remove the class "tabs-item-selected" from each element
    Array.from(items).forEach( (item) => item.classList.remove("tabs-item-selected"));
    
    // Add a class named "tabs-item-selected" to this element
    this.tabItemElement.classList.add("tabs-item-selected")
  }
}

class Tabs extends TabLink {
  constructor(tabs) {
    super(attributes)
    this.deselect = 
  }
 
}

/* START HERE: 
- Select all classes named ".tabs-link" and assign that value to the links variable
- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList
- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter
*/

const links = document.querySelectorAll(".tabs-link");
links.forEach( (link) => new TabLink(link));

