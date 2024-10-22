const quizQuestions = [
    {
        question: "What is the correct syntax for referring to an external script called 'app.js'?",
        options: [
            "<script name='app.js'></script>",
            "<script href='app.js'></script>",
            "<script src='app.js'></script>",
            "<script link='app.js'></script>"
        ],
        correctAnswer: 2
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        options: [
            "msg('Hello World')",
            "alertBox('Hello World')",
            "alert('Hello World')",
            "msgBox('Hello World')"
        ],
        correctAnswer: 2
    },
    {
        question: "How do you create a function in JavaScript?",
        options: [
            "function:myFunction()",
            "function = myFunction()",
            "function myFunction()",
            "create myFunction()"
        ],
        correctAnswer: 2
    },
    {
        question: "How do you call a function named `myFunction`?",
        options: [
            "call myFunction()",
            "call function myFunction()",
            "myFunction()",
            "run myFunction()"
        ],
        correctAnswer: 2
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        options: [
            "*",
            "=",
            "-",
            "x"
        ],
        correctAnswer: 1
    },
    {
        question: "How to write an IF statement in JavaScript?",
        options: [
            "if (i == 5)",
            "if i = 5 then",
            "if i == 5 then",
            "if i = 5"
        ],
        correctAnswer: 0
    },
    {
        question: "How does a WHILE loop start?",
        options: [
            "while (i <= 10)",
            "while i = 1 to 10",
            "while (i <= 10; i++)",
            "while (i < 10 i++)"
        ],
        correctAnswer: 0
    },
    {
        question: "How can you add a comment in JavaScript?",
        options: [
            "<!--This is a comment-->",
            "//This is a comment",
            "/*This is a comment*/",
            "#This is a comment"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        options: [
            "var colors = 'red', 'green', 'blue'",
            "var colors = (1:'red', 2:'green', 3:'blue')",
            "var colors = ['red', 'green', 'blue']",
            "var colors = {'red', 'green', 'blue'}"
        ],
        correctAnswer: 2
    },
    {
        question: "How do you find the length of an array in JavaScript?",
        options: [
            "array.length()",
            "array.size",
            "array.length",
            "array.len"
        ],
        correctAnswer: 2
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        options: [
            "onmouseclick",
            "onmouseover",
            "onclick",
            "onchange"
        ],
        correctAnswer: 2
    },
    {
        question: "How do you round a number to the nearest integer in JavaScript?",
        options: [
            "Math.ceil()",
            "Math.round()",
            "Math.floor()",
            "Math.abs()"
        ],
        correctAnswer: 1
    },
    {
        question: "What does the `typeof` operator do in JavaScript?",
        options: [
            "Checks the data type of a variable",
            "Returns the length of a string",
            "Converts a value to a number",
            "Removes a property from an object"
        ],
        correctAnswer: 0
    },
    {
        question: "Which method can be used to join two arrays in JavaScript?",
        options: [
            "merge()",
            "concat()",
            "combine()",
            "link()"
        ],
        correctAnswer: 1
    },
    {
        question: "What will the following code output? `console.log(typeof null);`",
        options: [
            "\"object\"",
            "\"null\"",
            "\"undefined\"",
            "\"number\""
        ],
        correctAnswer: 0
    },
    {
        question: "Which method is used to remove the last element from an array?",
        options: [
            "pop()",
            "shift()",
            "removeLast()",
            "splice()"
        ],
        correctAnswer: 0
    },
    {
        question: "What will this output? `console.log(2 + \"2\");`",
        options: [
            "\"22\"",
            "4",
            "\"4\"",
            "undefined"
        ],
        correctAnswer: 0
    },
    {
        question: "What does the `map()` function do?",
        options: [
            "It creates a new array by modifying each element of an array.",
            "It removes elements from an array.",
            "It sorts the elements of an array.",
            "It filters elements of an array based on a condition."
        ],
        correctAnswer: 0
    },
    {
        question: "How do you declare a constant variable in JavaScript?",
        options: [
            "let",
            "var",
            "const",
            "constant"
        ],
        correctAnswer: 2
    },
    {
        question: "What will the following code output? `console.log(0.1 + 0.2 === 0.3);`",
        options: [
            "true",
            "false",
            "undefined",
            "NaN"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the result of the following expression? `[1, 2, 3] == [1, 2, 3]`",
        options: [
            "true",
            "false",
            "undefined",
            "null"
        ],
        correctAnswer: 1
    },
    {
        question: "Which keyword is used to handle exceptions in JavaScript?",
        options: [
            "catch",
            "try",
            "throw",
            "error"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of `JSON.stringify()` in JavaScript?",
        options: [
            "Convert a JSON object into a string",
            "Parse a string into JSON",
            "Check if a value is a JSON object",
            "Convert a string into an object"
        ],
        correctAnswer: 0
    },
    {
        question: "What will `console.log([...'Hello'])` output?",
        options: [
            "['Hello']",
            "['H', 'e', 'l', 'l', 'o']",
            "['H', 'ello']",
            "['H', 'Hell', 'o']"
        ],
        correctAnswer: 1
    },
    {
        question: "What does the `push()` method do in JavaScript?",
        options: [
            "Removes the last element from an array",
            "Adds one or more elements to the end of an array",
            "Adds one or more elements to the beginning of an array",
            "Removes the first element of an array"
        ],
        correctAnswer: 1
    },
    {
        question: "What does `===` mean in JavaScript?",
        options: [
            "Assigns a value",
            "Compares only values",
            "Compares both value and type",
            "Compares both value and length"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the output of the following code? `console.log(3 > 2 > 1);`",
        options: [
            "true",
            "false",
            "undefined",
            "NaN"
        ],
        correctAnswer: 1
    },
    {
        question: "How can you make an object immutable in JavaScript?",
        options: [
            "Object.preventExtensions()",
            "Object.freeze()",
            "Object.lock()",
            "Object.seal()"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the difference between `let` and `var` in JavaScript?",
        options: [
            "`let` has block scope, `var` has function scope",
            "`var` has block scope, `let` has function scope",
            "`var` is hoisted, `let` is not",
            "There is no difference"
        ],
        correctAnswer: 0
    },
    {
        question: "Which of the following is a valid way to create an object in JavaScript?",
        options: [
            "let obj = {}",
            "let obj = Object.create()",
            "let obj = new Object()",
            "Both a and c"
        ],
        correctAnswer: 3
    }
];


export default quizQuestions;
