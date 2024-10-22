const quizQuestions = [
    {
        question: "Which is the correct way to include 'app.js' as a script?",
        options: [
            "<script src='app.js'>",
            "<script link='app.js'>",
            "<script href='app.js'>",
            "<script name='app.js'>"
        ],
        correctAnswer: 0
    },
    {
        question: "How do you display 'Hello' in an alert?",
        options: [
            "alert('Hello')",
            "msg('Hello')",
            "alertBox('Hello')",
            "message('Hello')"
        ],
        correctAnswer: 0
    },
    {
        question: "How do you declare a function in JavaScript?",
        options: [
            "function myFunc()",
            "myFunc = function()",
            "function:myFunc()",
            "create myFunc()"
        ],
        correctAnswer: 0
    },
    {
        question: "How do you call `myFunc()`?",
        options: [
            "call myFunc()",
            "run myFunc()",
            "myFunc()",
            "invoke myFunc()"
        ],
        correctAnswer: 2
    },
    {
        question: "Which operator assigns a value?",
        options: [
            "+",
            "=",
            "-",
            "*"
        ],
        correctAnswer: 1
    },
    {
        question: "How do you write an IF statement?",
        options: [
            "if (x == 5)",
            "if x = 5 then",
            "if x == 5 then",
            "if (x = 5)"
        ],
        correctAnswer: 0
    },
    {
        question: "How does a WHILE loop start?",
        options: [
            "while (i <= 10)",
            "while (i < 10; i++)",
            "while i = 1 to 10",
            "while (i++ < 10)"
        ],
        correctAnswer: 0
    },
    {
        question: "How do you write a comment in JS?",
        options: [
            "// comment",
            "<!-- comment -->",
            "# comment",
            "/* comment */"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the correct array syntax?",
        options: [
            "['a', 'b', 'c']",
            "var array = 'a', 'b'",
            "{'a', 'b', 'c'}",
            "(a, b, c)"
        ],
        correctAnswer: 0
    },
    {
        question: "How do you get an array's length?",
        options: [
            "array.len",
            "array.length",
            "array.size()",
            "array.len()"
        ],
        correctAnswer: 1
    },
    {
        question: "Which event fires on a click?",
        options: [
            "onclick",
            "onmouseclick",
            "onmouseover",
            "onchange"
        ],
        correctAnswer: 0
    },
    {
        question: "How to round a number in JS?",
        options: [
            "Math.ceil()",
            "Math.floor()",
            "Math.round()",
            "Math.abs()"
        ],
        correctAnswer: 2
    },
    {
        question: "What does `typeof` do?",
        options: [
            "Returns type",
            "Returns length",
            "Converts to number",
            "Removes property"
        ],
        correctAnswer: 0
    },
    {
        question: "How do you join two arrays?",
        options: [
            "concat()",
            "merge()",
            "combine()",
            "add()"
        ],
        correctAnswer: 0
    },
    {
        question: "What does `typeof null` return?",
        options: [
            "\"object\"",
            "\"null\"",
            "\"undefined\"",
            "\"number\""
        ],
        correctAnswer: 0
    },
    {
        question: "How do you remove the last element of an array?",
        options: [
            "pop()",
            "shift()",
            "removeLast()",
            "splice()"
        ],
        correctAnswer: 0
    },
    {
        question: "What does `2 + '2'` return?",
        options: [
            "\"22\"",
            "4",
            "\"4\"",
            "undefined"
        ],
        correctAnswer: 0
    },
    {
        question: "What does `map()` do?",
        options: [
            "Modifies array",
            "Removes elements",
            "Sorts array",
            "Filters array"
        ],
        correctAnswer: 0
    },
    {
        question: "How do you declare a constant?",
        options: [
            "let",
            "var",
            "const",
            "constant"
        ],
        correctAnswer: 2
    },
    {
        question: "What does `0.1 + 0.2 === 0.3` return?",
        options: [
            "true",
            "false",
            "NaN",
            "undefined"
        ],
        correctAnswer: 1
    },
    {
        question: "What is `[1, 2, 3] == [1, 2, 3]`?",
        options: [
            "true",
            "false",
            "undefined",
            "null"
        ],
        correctAnswer: 1
    },
    {
        question: "Which keyword handles exceptions?",
        options: [
            "catch",
            "throw",
            "try",
            "error"
        ],
        correctAnswer: 0
    },
    {
        question: "What does `JSON.stringify()` do?",
        options: [
            "Converts to string",
            "Parses string",
            "Converts to JSON",
            "Removes JSON"
        ],
        correctAnswer: 0
    },
    {
        question: "What does `[...'Hello']` output?",
        options: [
            "['Hello']",
            "['H', 'e', 'l', 'l', 'o']",
            "['H', 'Hell', 'o']",
            "['H', 'ello']"
        ],
        correctAnswer: 1
    },
    {
        question: "What does `push()` do?",
        options: [
            "Adds at end",
            "Removes last",
            "Adds at start",
            "Removes first"
        ],
        correctAnswer: 0
    },
    {
        question: "What does `===` check?",
        options: [
            "Assigns value",
            "Compares value",
            "Compares value and type",
            "Compares length"
        ],
        correctAnswer: 2
    },
    {
        question: "What does `3 > 2 > 1` return?",
        options: [
            "true",
            "false",
            "undefined",
            "NaN"
        ],
        correctAnswer: 1
    },
    {
        question: "How do you make an object immutable?",
        options: [
            "Object.preventExtensions()",
            "Object.freeze()",
            "Object.lock()",
            "Object.seal()"
        ],
        correctAnswer: 1
    },
    {
        question: "What's the main difference between `let` and `var`?",
        options: [
            "`let` has block scope",
            "`var` has block scope",
            "`var` isn't hoisted",
            "No difference"
        ],
        correctAnswer: 0
    }
];

export default quizQuestions;
