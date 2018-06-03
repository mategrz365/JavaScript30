const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = 'green';
      p.style.fontSize = '50px';
    }

    // Regular

    console.log ('Hello World');

    // Interpolated

     console.log ('Hello %s','World');

    // Styled

    console.log ('%c Hello World','color:red; font-size:30px;');

    // warning!
    
    console.warn('Hello World');

    // Error :|

     console.error('Hello World');

    // Info
    
     console.info('Hello World');

    // Testing

    console.assert(1==2, 'that is wrong');

    // clearing
    
    console.clear();

    // Viewing DOM Elements
    const p = document.querySelector('p');
    console.log(p);
    console.dir(p);

    // Grouping together

    dogs.forEach(dog =>{
                console.groupCollapsed(`${dog.name}`);
                 console.log(`This is ${dog.name}`);
                 console.log(`${dog.name} is ${dog.age} years old`);         
                 console.log(`${dog.name} is ${dog.age *7} dog years old`);
                console.groupEnd(`${dog.name}`);
    });

    // counting

    console.count('Mat');
    console.count('Mat');
    console.count('Mat');
    console.count('Mat');

    // timing

    console.time('fetching time');
    fetch('https://api.github.com/users/mategrz365')
        .then(data => data.json())
        .then(data => {
        console.log(data);
        console.timeEnd('fetching time');
    });

