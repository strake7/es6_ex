module.exports = () => {
    const obj = { first: 'Jane', last: 'Doe', Middle:'Ulga' };
    const {first: f, last: l} = obj;
    console.log(f,l); // Jane, Doe
    
    const [x,y] = ['a', 'b', 'c']; // What is x and y
    // so if I want to grab the first element of an array now?
    
    const [w, ...z] = ['a', 'b', 'c']; // What is x and y
}