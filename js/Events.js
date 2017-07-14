// создаем объект
var object = {
  // создаем хранилище для ивентов
  listeners: {},
  // в метод on передаем аргументами eventName, callBack
  on(eventName, callBack) {
  	// проверяем если в  listeners нет св-ва eventName, если нет то делаем пустой массив этому св-ву
	    if (!this.listeners[eventName]) {
        //  если такой ивент (св-во) есть то пихаем в объект listeners свой-во вкачестве названия события eventName  
        // далее в этом св-ве создае массив пустой
	      this.listeners[eventName] = []
	    }
      //  в массив св-ва eventName в объекте listeners передаем функцию callBack
	    this.listeners[eventName].push(callBack)
  	},
  // метод off удаляет св-во eventName в объекте listeners
  off(eventName) {
    delete this.listeners[eventName]
  },
  // в метод  trigger передаем eventName и ...args
  trigger(eventName, ...args) {
  	// делаем проверку на то, что является ли объект this.listeners[eventName] массивом или нет
	    if (Array.isArray(this.listeners[eventName])) {
	    	// eсли проверка прошла, то тригер берет ключевое слово 'eventName' и получает по 
        // нему массив функций которые надо выполнить  в объекте listeners['eventName'] //[ callBack ]
        // c помощю прототипного метода у массивов forEach пробегаемся по массиву eventName 
	      this.listeners[eventName].forEach(function(func){ func(...args) })
	    } 
  	}
}

object.on('event', function(){
   var s = 0;
   for(var i=0; i<arguments.length; i++) {
     s += arguments[i];
   	}

   console.log(s);
});

object.trigger('event', 1, 2, 3, 4);
object.off('event');


for(var i=0; i<3; i++) {
   (function(index){
	    object.on('eventTwo', function(){
	    	console.log('event => ' + index);
	    });
   	})(i);
}

object.trigger('eventTwo');
object.off('eventTwo');

// работает только когда Math передается не контекстом, а записывается на прямую т.е Math.random()
object.on('eventThree', function(){
	console.log('random ' + this.random());
}, Math);

object.trigger('eventThree');
object.off('eventThree');
object.trigger('eventThree');