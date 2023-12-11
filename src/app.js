class Blog {
  constuctor(title,detail){
    this.title=title;
    this.detail=detail;
  }
  addTitle(){
    var title_card = document.createElement('h1');
    title_card.setAttribute("id","blog-title");
    
    document.getElementById('card-text').appendChild(title_card);
    title_card.innerHTML += this.title;

  }
  addDescription(){
    var title_card = document.createElement('h1');
    description_card.setAttribute("id","blog-description");
    
    document.getElementById('card-text').appendChild(description_card);
    description_card.innerHTML += this.title;
  }
}

// Progression 2: Setup an event listner - add two functions
// 1. `helperAddPost()`
// 2. `helperPost()`

let press=0;
function helperAddPost(){
if(press==0){
  document.getElementById("popupContact").style.display="flex";
  return (press++);
}
else{
  document.getElementById("popupContact").style.display="none";
  return (press++);
}
}
function helperPost(){
let newBlog= new Blog(titlee,detaill)
let titlee=document.getElementById('title').value;
let detaill = document.getElementById('detail').value
newBlog.addTitle();
newBlog.addDescription();
}
