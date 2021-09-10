const response = {
    data: [
      {
        username: "samuel",
        is_active: true,
        created_at: "2020-11-20T09:53:50.000000Z",
      },
      {
        username: "john",
        is_active: false,
        created_at: "2020-11-20T09:53:50.000000Z",
      },
      {
        username: "peter",
        is_active: false,
        created_at: "2020-11-20T09:53:50.000000Z",
      },
    ],
    meta: {
      paging: {
        current: 1,
        next: 2,
        prev: null,
        total: 14,
        per_page: 3,
      },
    },
  };

//   first exercise
  let {
      meta:{paging:{total}}
  } = response;
  let {
      data:[{is_active: isActive}]
  } = response;

  console.log(total);
  console.log(isActive);


// second task
  const user = {
    name: "gabriel",
    surname: "brown",
    age: 17,
    height: 178,
  };


  let {name, surname} = user;
  console.log(name, surname);
  let {age, height} = user;
  const options = {age, height};
  console.log(options);



//   third task
const max = (...args) => {
    console.log(args.reduce(function(a,b){return a>b ? a : b;}))
};
max(12, 9, 5, 7, 9, 2, 4, 76);


//  fourth task

const functionParametrs = {
    reciever: "John",
    text: "Hi!",
}

const createMessage = ({reciever, text, width = 100, height = 200}) => {
    console.log(reciever, text, width, height);
};

createMessage(functionParametrs);
  
