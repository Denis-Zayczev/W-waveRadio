const ListItems = document.querySelectorAll('.accordion__item');
const guestIMG = document.querySelector('.guests-special');
for (let buttonItem of ListItems) {
  buttonItem.addEventListener('click', (e) => {
    delete_all_class_by_name('accordion__item--guest');
    let content = e.target.innerHTML;
    document.querySelector(".guests-special__title").innerHTML = `${content}`;
    buttonItem.classList.add('accordion__item--guest');
    if (content === "Ольга Мартынова"){
      guestIMG.style.backgroundImage = "url(../img/guest/guest.jpg)";
    } else {
      guestIMG.style.backgroundImage = "url(../img/guest/dummy.jpg)";
    }
  });
}

function delete_all_class_by_name(class_name)
{
  let elements = document.querySelectorAll('.' + class_name);
  elements.forEach(function(element){
    element.classList.remove(class_name);
  });
}

