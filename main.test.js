//👉 Write your tests below here:
import uncorruptTheString from "./main.js";
// test("Given a corrupted string, remove the unusual characters and reform it as a sentence", function() {
//     //arrange
//     const expected = "the ducks have flown south for winter";
//     const string = "t5h3e d5u6c7k8s9 4h6a7v8e 4f6l6o5w6n7 s4o56u7t45h4 f47o5r7 7wi7n7t7e9r";
//     //act 
//     const actual = uncorruptTheString(corruptedString);
//     //assert
//     expect(actual).toBe(expected);
// });


// __________________________

const testArray = [
    ["t5h3e", "the"]
]

test.each(testArray)(`should read "%s" as "%s"`, function(corruptedString, correctString) {
    expect(uncorruptTheString(corruptedString)).toBe (correctString);
});