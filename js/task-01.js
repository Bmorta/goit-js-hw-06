const categoriesElements = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesElements.length);

categoriesElements.forEach((el) => {
    const categoryName = el.firstElementChild.textContent;
    console.log("Category:", categoryName);

    const categoryTypeList = el.lastElementChild;
    const categoryTypesLength = categoryTypeList.children.length;
    console.log("Elements:",categoryTypesLength);
});

// const list = document.querySelector("#categories");
// const listChildrenCount = list.children.length;

// console.log (`Number of categories: ${listChildrenCount}`);

// const listItems = document.querySelectorAll(".item");

// listItems.forEach((listItem)=> {
//     console.log(`Category: ${listItem.firstElementChild.textContent}`);
//     console.log(`Elements: ${listItem.lastElementChild.childElementCount}`)
// });