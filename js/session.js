var person = {
    name: "Ali",
    age: 50,
    gender: "male",
    country: ["Egypt", "USA"],
    married: true,
    sons: [
        { name: "Mohamed", gender: "male" },
        { name: "Alyaa", gender: "female" }
    ],
}

function showDetails(data = { name: "Unkown", age: 0, gender: undefined }) {
    var result = ""

    result += "Your name is " + data.name + " and your age is " + data.age + " and your gender is " + data.gender;

    if (data.married) {
        if (data.sons && data.sons.length > 0) {
            for (var index = 0; index < data.sons.length; index++) {
                var child = data.sons[index];

                switch (child.gender) {
                    case 'male':
                        result += " Your son num " + (index + 1) + " his name is " + child.name
                        break;
                    case 'female':
                        result += " Your daughter num " + (index + 1) + " her name is " + child.name
                    default:
                        break;
                }
            }
        }
        else { console.log("ربنا يكرم") }
    }
    else {
        console.log("يلا يا سنجل ")
    }
    return result
}

console.log(showDetails(person))