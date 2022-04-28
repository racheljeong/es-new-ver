// 1. Optional Chaining
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining
{
    const person1 = {
        name : 'rachel',
        job : {
            title : 'S/W Engineer',
            manager : {
                name : 'Bob',
            },
        },
    };

    const person2 = {
        name :'Bob',
    };

    //old ver
    {
        function printManager(person) {
            console.log(person.job.manager.name);
        }
        printManager(person1);
        //printManager(person2); : person2에는 이름외에 요소가 없어서 undefined 

    }

    //new ver
    {
        function printManager(person) {
            console.log(person.job?.manager?.name); // 잡이 있고 매니저가 있으면 이름을 출력
        }
        printManager(person1); //Bob
        printManager(person2); //undefined 출력
    }

    //2. Nullish Coalescing Operator
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
    {
        //Logical OP operator
        //false : false, ' ', 0, null, undefined

        //old ver
        {
            const name = 'rachel';
            const userName = name || 'guest';
            console.log(userName); //rachel
        }
        {
            const name = null;
            const userName = name || 'guest';
            console.log(userName); //guest
        }

        //new ver
        {
            const name = '';
            const userName = name ?? 'guest';  //name에 값이 있다면 사용하고 아니면 guest
            console.log(userName); //빈값

            const num = 0;
            const message = num ?? 'undefined'; //num에 값이 있다면 사용하고 아니면 undefined
            console.log(message); //0
        }

    }
}