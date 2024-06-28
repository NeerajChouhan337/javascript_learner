// const tinderUser= new Object() singleton object

// const tinderUser = {}

// tinderUser.id = "123abc";
// tinderUser.name = "sammy";

// const user ={
//     email:"neeraj@gmail.com",
//     fullname:{
//         userFullname:{
//             firstName:"neeraj",
//             lastName:"chouhan"
//         }
//     }
// }
// // console.log(user.fullname.userFullname.firstName);

// const obj1 = {1:"a",2:"b",3:"c"};
// const obj2 = {4:"d",5:"e",6:"f"}
// // const obj3 = {obj1,obj2};
// // console.log(obj3);

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);


const course ={
    name:"Neeraj",
    courseFee: 999,
    courseInstructor:"hitesh"
}
const{courseInstructor}=course;
console.log(courseInstructor);