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
    ["h156t75e1et y^^56n12a!!!!g5o6h99999a1m 15d::n19791979e-----i1313rf89lr1ig y0000m", "my girlfriend has mahogany teeth"], 
    ["n457ee+=+=rg t000000ser^^^^^^^^up!!!! f88888*o t90909egg!un><><><>< a\ d)(na???h latr33333333\|/om y0m n;i er_-eh d###lo!h .I. e*b t#i dl09090909u123456123oc", "could it be I hold here in my mortal hand a nugget of purest green"],
    []
]

test.each(testArray)(`should read "%s" as "%s"`, function(corruptedString, correctString) {
    expect(uncorruptTheString(corruptedString)).toBe (correctString);
});