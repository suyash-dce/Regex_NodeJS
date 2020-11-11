//UC-1 
let emailRegex1 = RegExp('^[a-z]{3,}$');
let eg1 = emailRegex1.test("abc");
console.log(eg1);
        
//UC-2
let emailRegex2 = RegExp('^[a-z]{3,}?(@[a-z]{2,})$');
let eg2 = emailRegex2.test("abc@bridgelabz");
console.log(eg2);

//UC-3
let emailRegex3 = RegExp('^[a-z]{3,}(.)?(@[a-z]{2,})(.([a-z]{2,}))$');
let eg3 = emailRegex3.test("abc.@bridgelabz.co");
console.log(eg3);

//UC-4
let emailRegex4 = RegExp("^[a-z][0-9a-z_+-]*\\.?[0-9a-z_+-]+@\\w+(\\.[a-z]{2,}){1,2}$");
let eg4 = emailRegex4.test("abc.x_yz@bridgelabz.co.in");
console.log(eg4);

//UC-5
const emailRegex = RegExp("^[a-z][0-9a-z_+-]*\\.?[0-9a-z_+-]+@\\w+(\\.[a-z]{2,}){1,2}$");
        
function testEmail(email) {
    if (emailRegex.test(email)) return true;
    else throw "Given email is in wrong format";
}

console.log("\nEmail UC5 - checking all test cases for emails: ");
let validEmails = [
    "abc@yahoo.com",
    "abc-100@yahoo.com",
    "abc.100@yahoo.com",
    "abc111@abc.com",
    "abc-100@abc.net",
    "abc.100@abc.com.au",
    "abc@1.com",
    "abc@gmail.com.co",
    "abc+100@gmail.com",
];

validEmails.forEach((email) => {
    try {
        console.log(testEmail(email));
    } catch (e) {
        console.error(e);
    }
});

let invalidEmails = [
    "abc",
    "abc@.com.my",
    "abc123@gmail.a",
    "abc123@.com",
    "abc123@.com.com",
    ".abc@abc.com",
    "abc()*@gmail.com",
    "abc@%*.com",
    "abc..2002@gmail.com",
    "abc.@gmail.com",
    "abc@abc@gmail.com",
    "abc@gmail.com.1a",
    "abc@gmail.com.aa.au",
];

invalidEmails.forEach((email) => {
    try {
        console.log(testEmail(email));
    } catch (e) {
        console.error(e);
    }
});
