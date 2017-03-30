function Data() {
  Data.prototype.createData = function(key, data) {
    key = key || prompt('Key:');
    data = data || prompt('Data:');

    if (typeof key === 'undefined') {
      console.error('No key');
      return false;
    }

    if (typeof data === 'undefined') {
      console.error('No data');
      return false;
    }

    localStorage.setItem(key, data);
  };

  Data.prototype.readData = function(key) {
    if (typeof key === 'undefined') {
      console.error('No data');
      return false;
    }

    var data = localStorage.getItem(key);

    if (!data) {
      console.error('No data');
      return false;
    }

    return data;
  };

  Data.prototype.updateData = function(key, data) {
    key = key || prompt('Key:');
    data = data || prompt('Data:');

    if (typeof key === 'undefined') {
      console.error('No key');
      return false;
    }

    if (typeof data === 'undefined') {
      console.error('No data');
      return false;
    }

    if (!localStorage.getItem(key)) {
      console.error('No data');
      return false;
    }

    localStorage.setItem(key, data);
  };

  Data.prototype.deleteData = function(key) {
    key = key || prompt('Key:');
    
    if (typeof key === 'undefined') {
      console.error('No key');
      return false;
    }

    if (!localStorage.getItem(key)) {
      console.error('No data');
      return false;
    }

    localStorage.removeItem(key, data);
  };
}

function Markup() {
  
}

Markup.prototype.createMarkup = function(
  tag,
  content,
  parent,
  styleClass,
  id
  ) {
  
  var element = document.createElement(tag);
    if (content) {
        if (tag === 'img') {
          element.src = content;
        } else {
          element.innerHTML += content;
          }
    }

  if (styleClass) {
    element.className += styleClass;
  }

  if (id) {
    element.id = id;
  }

  if (parent) {
    var prnt = document.querySelector(parent);
    if (!prnt) {
      console.error('No element found');
      return false;
    }
    prnt.appendChild(element);
  } else {
    document.body.appendChild(element);
  }
};

  Markup.prototype.updateMarkup = function(query, content) {
  	var elements = this.findMarkup(query);
  	elements[0].innerHTML = content;
  };

  Markup.prototype.deleteMarkup = function(query, content) {
	var elements = this.findMarkup(query);
  	elements[0].remove(); 
  };

  Markup.prototype.findMarkup = function(query) {
  	var elements = document.querySelectorAll(query);
  	return elements;
  };



var data = new Data();
var markup = new Markup();


markup.createMarkup('div' , '', '#app', 'top-block', 'top-blockId');
markup.createMarkup('div' , 'Logo:)', '#top-blockId', 'logo');
markup.createMarkup('div', '<a href="#">log in</a>', '#top-blockId', 'log-in');
markup.createMarkup('div', '', '#app', 'bottom-block', 'bottom-blockId');
markup.createMarkup('div', '', '#bottom-blockId', 'nav-menu', 'nav-menuId');
markup.createMarkup('h2', 'Menu', '#nav-menuId');
markup.createMarkup('nav', '<ul><li><a href="#">Home</a></li>\
  <li><a href="#">About</a></li>\
  <li><a href="#">My works</a></li>\
  <li><a href="#">Contacts</a></li>\
                            </ul>', '#nav-menuId', 'nav-left');
markup.createMarkup('div', '', '#app', 'content', 'contentId');
markup.createMarkup('header', '<h1>Header</h1>', '#contentId');
markup.createMarkup('div', '', '#contentId', 'text-content', 'text-contentId');
markup.createMarkup('h1', 'Content Name', '#text-contentId');
markup.createMarkup('img', 'img/logo.jpg', '#text-contentId', 'left'); 
markup.createMarkup('p', 'Sed ut perspiciatis unde omnis iste\
 natus error sit voluptatem accusantium doloremque laudantium,\
  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis\
   et quasi architecto beatae vitae dicta sunt explicabo.\
    Nemo enim ipsam voluptatem quia voluptas sit aspernatur\
     aut odit aut fugit, sed quia consequuntur magni dolores\
      eos qui ratione voluptatem sequi nesciunt. Neque porro\
       quisquam est, qui dolorem ipsum quia dolor sit amet,\
        consectetur, adipisci velit, sed quia non numquam\
         eius modi tempora incidunt ut labore et dolore\
          magnam aliquam quaerat voluptatem. Ut enim ad\
           minima veniam, quis nostrum exercitationem ullam\
            corporis suscipit laboriosam, nisi ut aliquid ex\
             ea commodi consequatur? Quis autem vel eum iure\
              reprehenderit qui in ea voluptate velit esse\
               quam nihil molestiae consequatur, vel illum\
                qui dolorem eum fugiat quo voluptas\
                 nulla pariatur?', '#text-contentId');
markup.createMarkup('h1', 'Content Name', '#text-contentId');
markup.createMarkup('img', 'img/logo.jpg', '#text-contentId', 'right'); 
markup.createMarkup('p', 'Sed ut perspiciatis unde omnis iste\
 natus error sit voluptatem accusantium doloremque laudantium,\
  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis\
   et quasi architecto beatae vitae dicta sunt explicabo.\
    Nemo enim ipsam voluptatem quia voluptas sit aspernatur\
     aut odit aut fugit, sed quia consequuntur magni dolores\
      eos qui ratione voluptatem sequi nesciunt. Neque porro\
       quisquam est, qui dolorem ipsum quia dolor sit amet,\
        consectetur, adipisci velit, sed quia non numquam\
         eius modi tempora incidunt ut labore et dolore\
          magnam aliquam quaerat voluptatem. Ut enim ad\
           minima veniam, quis nostrum exercitationem ullam\
            corporis suscipit laboriosam, nisi ut aliquid ex\
             ea commodi consequatur? Quis autem vel eum iure\
              reprehenderit qui in ea voluptate velit esse\
               quam nihil molestiae consequatur, vel illum\
                qui dolorem eum fugiat quo voluptas\
                 nulla pariatur?', '#text-contentId');
markup.createMarkup('h1', 'Content Name', '#text-contentId');
markup.createMarkup('img', 'img/logo.jpg', '#text-contentId', 'left'); 
markup.createMarkup('p', 'Sed ut perspiciatis unde omnis iste\
 natus error sit voluptatem accusantium doloremque laudantium,\
  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis\
   et quasi architecto beatae vitae dicta sunt explicabo.\
    Nemo enim ipsam voluptatem quia voluptas sit aspernatur\
     aut odit aut fugit, sed quia consequuntur magni dolores\
      eos qui ratione voluptatem sequi nesciunt. Neque porro\
       quisquam est, qui dolorem ipsum quia dolor sit amet,\
        consectetur, adipisci velit, sed quia non numquam\
         eius modi tempora incidunt ut labore et dolore\
          magnam aliquam quaerat voluptatem. Ut enim ad\
           minima veniam, quis nostrum exercitationem ullam\
            corporis suscipit laboriosam, nisi ut aliquid ex\
             ea commodi consequatur? Quis autem vel eum iure\
              reprehenderit qui in ea voluptate velit esse\
               quam nihil molestiae consequatur, vel illum\
                qui dolorem eum fugiat quo voluptas\
                 nulla pariatur?', '#text-contentId');
markup.createMarkup('footer', '', '#app', 'footerId');
markup.createMarkup('address', '', '#footerId', 'copyright', 'addressId');
markup.createMarkup('p', '&copy; 2017 — Tratata Web Production', '#addressId');
markup.createMarkup('div', '', '#addressId', 'self-info', 'self-infoId');
markup.createMarkup('p', 'My Name', '#self-infoId');
markup.createMarkup('br', '', '#self-infoId');
markup.createMarkup('p', '0987654321', '#self-infoId');
markup.createMarkup('br', '', '#self-infoId');
markup.createMarkup('p', 'my@email.com', '#self-infoId');
markup.createMarkup('br', '', '#self-infoId');