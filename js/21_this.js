/* In JavaScript, the this keyword is a reference to the context in which a 
function is executed. 
Its value depends on how and where the function is called. */

nameValue = "Ramesh";

console.log(this); // In a browser, this refers to the global window object.

const obj = {
    nameValue: 'Alice',
    getName: function() {
      return this.nameValue;
    }
  };
console.log(obj.getName()); // 'Alice'. Here, this refers to the obj object.

///////////////////////////////

const objArrow = {
    nameValue: 'Alice',
    getName: () => {
      return this.nameValue;
    }
  };
console.log(objArrow.getName()); // 'Ramesh'. Here, this refers to the global object.

///////////////////////////////

const objNew = {
    nameValue: 'Alice',
    childObj :{
        nameValue : "Hitesh",
        getName: function() {
            return this.nameValue;
        }
    },
    getName: function() {
      return this.nameValue;
    }
  };
console.log(objNew.childObj.getName()); // 'Hitesh'. Here, this refers to the childObj object.

///////////////////////////////

const objNewArrow = {
    nameValue: 'Karan',
    childObj :{
        nameValue : "Hitesh",
        getName: () => {
            return this.nameValue;
        }
    },
    getName: function() {
      return this.nameValue;
    }
  };
console.log(objNewArrow.childObj.getName()); // 'Ramesh'. Here, this refers to the Global object.


////////////////////////////


const insideObj = {
    nameValue: 'Suresh',
    getName: function() {
      const nestedFunc = ()=>{
        console.log(this.nameValue)
      }  
      nestedFunc();
    }
  };
insideObj.getName() // 'Suresh'. Here, this refers to the insideObj object.