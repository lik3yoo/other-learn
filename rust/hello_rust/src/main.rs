use std::collections::HashMap;

// struct Person {
//     name: String,
//     age: u32,
//     email: String,
// }
fn main() {
    println!("Hello, world!");
    let x = 5;
    println!("The value of x is : {}", x);

    // let person = Person {
    //     name: String::from("Alice"),
    //     age: 30,
    //     email: String::from("email"),
    // };

    let mut person2 = HashMap::new();

    person2.insert("name", "Alice2");

    if let Some(hushName) = person2.get("name") {
        println!("Name: {}", hushName);
    };
}