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


markup.createMarkup('header', '', '#app', 'row', 'rowHeaderId');
markup.createMarkup('div', '', '#rowHeaderId', 'col-md-12', 'col-md-12LogoId');
markup.createMarkup('img', 
  'http://20dollarlogo.com/wp-content/uploads/2016/08/Logo_TV_2015.png', '#col-md-12LogoId');
markup.createMarkup('div', '', '#app', 'row', 'rowMainContentId');
markup.createMarkup('aside', '<ul>\
                <li>Log in</li>\
                <li>Sign up</li>\
              </ul>', '#rowMainContentId', 'col-md-4');
markup.createMarkup('content', '', '#rowMainContentId', 
                    'col-md-8', 'col-md-8ContentId');
markup.createMarkup('h1', 'My First Post', '#col-md-8ContentId');
markup.createMarkup('img', 'https://i.ytimg.com/vi/6lt2JfJdGSY/maxresdefault.jpg',
                    '#col-md-8ContentId');
markup.createMarkup('p', 'It is a long established\
 fact that a reader will be distracted by the\
  readable content of a page when looking at its\
   layout. The point of using Lorem Ipsum is that\
    it has a more-or-less normal distribution of\
     letters, as opposed to using \'Content here, content here\',\
      making it look like readable English.\
       Many desktop publishing packages and\
        web page editors now use Lorem Ipsum\
         as their default model text, and a\
          search for \'lorem ipsum\' will uncover\
           many web sites still in their infancy.\
            Various versions have evolved over\
             the years, sometimes by accident,\
              sometimes on purpose (injected \
              humour and the like).', '#col-md-8ContentId');
markup.createMarkup('p', 'Cras at augue lacus.\
 Maecenas sagittis velit ac enim\
  elementum bibendum. Donec quis\
   tortor sed libero imperdiet cursus\
    a nec libero. In magna sapien,\
     dignissim in felis eget, pretium\
      cursus nisl. Donec euismod\
       viverra justo, a malesuada\
        purus fringilla id. Quisque\
         id tortor justo. Donec a nulla\
          at velit tincidunt bibendum.\
           Morbi sodales scelerisque\
            mauris ac mattis.', '#col-md-8ContentId');
markup.createMarkup('footer', '', '#app', 'row', 'rowFooterId');
markup.createMarkup('div', '&copy; Some Copyright', '#rowFooterId', 'col-md-12');