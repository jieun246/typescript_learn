//function logMessage(value: any){
 //   console.log(value);
//}
//logMessage('hello');
//logMessage(100);

var seho: string | number | boolean;
function logMessage(value: string | number){
    if(typeof value === 'number'){
        value.toLocaleString();
    }

    if(typeof value === 'string'){
        value.toString();
    }
    throw new TypeError('value must be string or number');
}
logMessage("hello");
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}

interface Person{
    name: string;
    age: number;
}

/*function askSomeone(someone: Developer | Person){
    //someone.name; 
    //someone.skill // 타입을 확인하여 접근 가능하나, 공통된 속성이 아니라서 접근 불가능
    //someone.age
}
askSomeone({name: '디벨로퍼', skill: '웹 개발'});
askSomeone({name: '캡틴', age: 100});
*/

function askSomeone(someone: Developer & Person){
    someone
    someone.name; 
    someone.skill 
    someone.age
}
askSomeone({name: '디벨로퍼', skill: '웹 개발'});
//askSomeone({name: '캡틴', age: 100});

//var john: string | number | boolean; 
//var capt: string & number & boolean;