//Querying DOM Elements

// Testing 1
strikeOut();

// Testing 3
setImageSource('image-1','https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg');
setImageSource('image-2','https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg');
setImageSource('image-3','https://media.istockphoto.com/photos/wild-grass-in-the-mountains-at-sunset-picture-id1322277517?k=20&m=1322277517&s=612x612&w=0&h=ZdxT3aGDGLsOAn3mILBS6FD7ARonKRHe_EKKa-V-Hws=');

// Testing 5
removeListItem();
removeListItem();

// Testing 7
textSize('heading', '40');

// DOM Elements as Function Parameters

// Testing 1
let myImage = document.createElement('img');
myImage.alt = 'Testing'
addTagToUl(myImage);
//show the img tag was succesfully added
console.log(document.querySelector('ul').querySelector('img'));

// Testing 3
let myImage2 = document.querySelector('#image-1');
editImageHeight(myImage2);

// Testing 5
let header = document.querySelector('h1');
classInvisible(header);

// Creating DOM Elements

// Testing 1
let element = createLiWithText('Testing createLiWithText()');
addTagToUl(element);

// Testing 3
let header1 = newHeader(3,'Testing newHeader() size 3');
let header2 = newHeader(5,'Testing newHeader() size 5');
addTagToUl(header1);
addTagToUl(header2);

// Querying DOM Elements

// 1
function strikeOut(){
    let list = document.querySelector('ul');
    let item = list.querySelector('li');
    item.style.textDecoration = 'line-through';
}

// 3
function setImageSource(id, url){
    let image = document.querySelector('#'+id);
    image.src = url;
}

// 5
function removeListItem(){
    let list = document.querySelector('ul');
    let item = list.querySelector('li');
    item.remove();
}

// 7
function textSize(id, fontSize){
    let element = document.querySelector('#'+id);
    element.style.fontSize = fontSize + 'px';
}

// DOM Elements as Function Parameters

// 1
function addTagToUl(element){
    let unsortedList = document.querySelector('ul');
    unsortedList.appendChild(element);
}
 // 3
function editImageHeight(img){
    img.style.height = '30px';
}

// 5
function classInvisible(element){
    element.className = 'invisible';
}

// Creating DOM Elements

// 1
function createLiWithText(str){
    let item = document.createElement('li');
    item.innerText = str;
    return item;
}

// 3
function newHeader(size, str){
    let header = document.createElement('h'+size);
    header.innerText = str;
    return header;
}