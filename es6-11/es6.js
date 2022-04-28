//1. shorthand property names 객체초기자
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer
    //js의 객체는 key : value 형식. Object가 변수로서 사용될 때 key : value의 이름이 같다면 생략가능하다.

{
    //old ver
    const rachel1 = {
        name : 'rachel',
        age : '20',
    };

    const name = 'rachel';
    const age = '20';

    const rachel2 = {
        name : name,
        age : age,
    };

    
    //new ver
    const rachel3 = {
        name,
        age,
    };

    console.log(rachel1, rachel2, rachel3); //{ name: 'rachel', age: '20' } { name: 'rachel', age: '20' } { name: 'rachel', age: '20' }

}

// 2.Destructuring Assignment 구조분해할당
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    // 객체안에 있는 값을 꺼내 쓸 때 Object.key 로 가져다 사용함 -> 불편함을 줄이기 위해 객체 할당시 자동으로 해당하는 key의 value값이 할당됨
    // 구조분해할당 객체에서 사용시 {}, 배열에서는 [] 사용


{
    //Object
    const student = {
        name : 'morgan',
        age : '2',
    };

    //old ver
    {
        const name = student.name;
        const age = student.age;
        console.log(name,age);
    }

    //new ver
    //const { key1, key2} = Object;  
    //Object의 key이름을 {}안에 정의하면 해당 Object의 key가 할당이 되므로 간단하게 출력 가능
    {
        const {name, age} = student;
        console.log(name, age);
    }

    //만약 Object의 key값과 다른 이름으로 key를 정의하고 싶다면
    // const { originalKeyName : newKeyName} = Object

    {
        const {name : newName, age : newAge} = student;
        console.log(newName, newAge);
    }

    //배열에서 사용해보자

    const animals = ['dog', 'cat'];

    //old ver
    //배열의 인덱스를 통해 각 요소에 접근
    {
        const first = animals[0];
        const second = animals[1];
        console.log(first, second);
    }

    //new ver
    //배열의 순서에 맞게 각 요소가 할당이 됨
    {
        const [first, second] = animals;
        console.log(first, second);
    }
    

    // 3. Spread Syntax
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
        // Object는 주솟값을 가리침 -> 복사한 배열들은 주솟값만 복사, 다 동일한 값을 가지고 있음
        // 원 Object의 값을 변경시 가리키는 참조하는것들의 값도 다 같이 변경됨

    {
        const obj1 = {key : 'key1'};
        const obj2 = {key : 'key2'};
        const array = [obj1, obj2];  //Object가 담긴 Array
        
        // array copy : 새 배열 생성 후 전 배열의 요소를 하나하나씩 복사
        const arrayCopy = [...array];
        console.log(array, arrayCopy);

        // 배열 복사 + 새로운 요소 : spread syntax 사용후 추가할 요소 작성
        const arrayCopy2 = [...array, {key : 'key3'}];
        obj1.key = 'newKey';
        console.log(arrayCopy2);

        //Object copy
        const obj3 = {...obj1};
        console.log(obj3);

        //array concatenation
        const fruits1 = ['apple', 'berry'];
        const fruits2 = ['banana', 'melon'];
        const allFruits = [...fruits1, ...fruits2];  //하나로 병합

        console.log(allFruits);

        //Object merge
        const dog1 = {dog :'dog'};
        const cat1 = {cat :'cat'};
        const allAnimals = {...dog1, ...cat1};
        console.log(allAnimals);
        
        // 주의 : key가 같은것끼리 병합한다면 뒷요소가 앞요소를 덮어씌움 // { dog: 'cat' }
        const dog2 = {dog :'dog'};
        const cat2 = {dog :'cat'};
        const allAnimals2 = {...dog2, ...cat2};
        console.log(allAnimals2);
        
    }

    //4. Default Parameters 기본값 매개변수
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters
    {
        function printMessage(message) {
            //old ver
            if(message == null) {
                message = 'default message';
            }
            console.log(message);
        }

        printMessage('hello'); //hello
        printMessage(); //undefined : 매개변수가 있음에도 아무런 인자를 전달하지 않은경우

    }

    //new ver
    // 매개변수 안에 인자 = 초깃값 세팅해서 전달된 인자가 없을 때 초깃값이 출력됨
    {
        function printMessage(message = 'default message'){
            console.log(message); //default message
        } 
        printMessage('hello'); //hello
        printMessage(); //default message

    }

    //5. Ternary Operator 삼항조건 연산자
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
    
    //old ver
    const isCat = true;
    {
        let component;
        if(isCat){
            component = 'cat';
        }else {
            component = 'dog';
        }
        console.log(component);
    }

    //new ver
    {
        // 1
        const component = isCat ? 'cat' : 'dog';
        console.log(component);
        // 2
        console.log(isCat ? 'cat' : 'dog');
    }
   
    console.clear();
    

    //6. Template Literals
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals

    {
        const weather = 'sunny';
        const temparature = '20';

        //old ver
        console.log(
            'Today weather is ' + weather + ' and temparature is ' + temparature
        );

        // new ver : 백틱사용 
        console.log(`Today weather is ${weather} and temparature is ${temparature}`);
    }
    }