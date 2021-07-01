## ToDoList

- Login
- Remember Information
- Clock
- GeoLocation
- Background
- Random Quote
- To-Do List

# 1.2 Requirements 이론 살펴보기

- HTML
  - <head>, <body>
  - <form>, <input>, <button>
- CSS
  - class vs. id
  - selector

# 1.3 Requirements 설치하기

- Browser: Chrome
- Text-Editor: VSCode
- Online IDE: replit

# 1.4 JavaScript란,

- Only Programming Language for FrontEnd
- JS is already bundled in Browser
- JS handles and modifies HTML Element

# 1.5 JavaScript Framework이란,

- React Native
  : Help create Android, iOS Application
- Electron JS
  : Help create Desktop App
- NodeJS
  : Create Backend with JS
- Socket.io
  : Configure Realtime Feature
- ml5.js
  : MachineLearning

# 2.0 Javascript 다루기

- Open Browser Console
  - `Ctrl+Shift+I`: Inspection Tool
- Connect CSS, JavaScript to HTML
  1. HTML: `!`
  2. `link:css` in <head>
  <link rel="stylesheet" href="style.css">
  3. `script:src` in end of <body>
  <script src="app.js"></script>
- Code Top to Bottom
- `console.log(~);` to check value
- `alert()`: show something with alert message

# 2.1 데이터 타입(Data Type) 알아보기

- NUMERIC
  - integer
    `2, 11, 31`
  - float
    `1.5, 3.1`
- STRING(=TEXT)
  - cover value with "" or ''
    `"hello"`
  - number can be string, `"2"`
- BOOLEAN
  true or false
- OTHERS:
  - null: empty state
  - undefined: variable exist but value is not assigned
    `let [NAME];`
  - NaN: Not a Number
-

- typeof [VARIABLE]
  : check datatype of variable
- parseInt()
  : convert string into integer
  if string, result is NaN.
- isNaN()

# 2.2 Variable 알아보기

- Variable: Save or Hold Value
- always `const`, something `let`, never `var`

- const
  : hold constant value
  `const [NAME] = [VALUE];`
  - `[NAME]`: instead of space, UPPERCASE(camel_case)
    `myNameIsNico`
- let
  : allow updating value
  - Declare Variable
    `let [NAME] = [VALUE];`
  - Modify Variable
    `[NAME] = [NEW_VALUE];`
- var
  : old version of variable
  - can be redeclared, update avaliable

# 2.5 Arrays, Objects 알아보기

- Arrays
  : lists of data using `[]`
  - Declare Arrays
    `const [NAME] = [items, items, ...];`
  - Get Items
    `NAME[seq]`
    - seq start from 0
  - Add Items on the end
    `[ARRAYS_NAME].push([ITEM]);`
- Objects
  : stores keyed data
  - Declare Object
    ```
    const [NAME] = {
        [PROP]: [VAL],
        [PROP]: [VAL], ...
    }
    ```
  - Use Object
    `[OBJECT].[PROPERTY]`
    `OBJECT["PROP"]`
    - can update or add value using object
      `player.name = ~;`
      `player.points = player.points + 15;`

# 2.7 Function 알아보기

- Function
  : Piece of reusable code
- Declare Function
  ```
  function [NAME]([ARG]) {
      ~
  }
  ```
- Execute Function
  `[FUNCTION]();`
- Get data with 'Argument'
- Return Result from Function
  `return ~;`
  - after `return`, code doesn't work

* Function inside of Object
  - How to Create
    ```
    const [OBJ_NAME] = {
        [FUNC_NAME]: function([ARG]) {
            ~
        },
        ~
    }
    ```
  - How to Use
    `[OBJ].[FUNC]([ARG])`

# 2.13 조건문(Conditionals) 알아보기

- Conditionals: check if statement is true or not

  - if statement
    ```
    if (conition) {
      // condition == true
    }
    ```
  - if/else statement
    ```
    if (condition) {
      // condition == true
    } else {
      //condition == false
    }
    ```
  - else if

  * &&: AND Operator
  * ||: OR Operator
  * ===: Equal Operator
  * !==: Not Equal Operator

* condition: determine true or false, it should be boolean

# 3.0 Browser에서 JavaScript 사용하기

- Document Object: representation of HTML for JS
  `document.~`
- Get HTML Element
  - `document.getElementById("[ID]")`
  - `document.getElementByClassName("[className]")`
- Modify HTML Element
  - `[ELEMENT].innerText`
