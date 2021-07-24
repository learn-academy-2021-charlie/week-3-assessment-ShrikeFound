# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


### 1. What is `this` in JavaScript?

  **Your answer:** this is a reserved word that represents the current context the program is working within. Inside of a class, this refers to the created instance of that class.

  **Researched answer:** if we use the `new` reserved word to create objects where `this` is automatically the context of that object. Using class syntax takes advantage of that. The default context is either `window` or `global`, depending on whether you're working within node.js or a browser, so `this` can be used as a shortcut. When we change the binding of `this` to a function or object, it allows us to use variables and methods associated with that specific function/object more safely.

  In all honesty, using `this` for the default context seems like more trouble than it's worth outside, so I'm hesitant to use it unless I'm working within an object with a new context.

  the .call() seems neat; It lets you call a function and set the context to another object at the same time.




### 2. What is yarn? What file(s) are modified in a React application when you run yarn?

  **Your answer:** yarn is a package manager; It handles the documentation of any packages our project requires and can take care of the installation when we ask it to.

  **Researched answer:** yarn also keeps a record of which versions of particular packages we install and will warn us if the wrong versions are used.



### 3. What are props in React?

  **Your answer:** props are properties of a component that are passed in like we'd pass in a normal html tag's properties. These properties are part of a `props` object that the component can access.

  **Researched answer:** When we're using functional components, we can destructure the props a component receives so we can use individual variables instead of `props.variable`. After some searching I've found you can do the same with class components, so I tested it out with the `react-debugging.html` app. Works great!



### 4. What is JSX?

  **Your answer:** JSX is an extension to javascript that allows us to write HTML directly into our code. It is still javascript, it just lets us write code that is easier for us to understand.

  **Researched answer:** because JSX is not normal javascript syntax, we need to use a javascript compiler like Babel. Babel will take the JSX and compile it into useable javascript.



### 5. What is a DOM event?

  **Your answer:** any event that happens on the page, e.g. mouse clicks, mouse movement, page loading, keypresses, etc. We can create listeners for these events in javascript that then complete tasks for us. For example, we can listen for a keypress, and when a key is pressed we can perform some logic using javascript (like checking which key it is and running different functions depending on which key was pressed). Information about the event itself is passed as an object that we can access through these listeners.

  **Researched answer:** the `event` that react works with is actually a synthetic event that wraps around the normal dom event. This has the benefit of normalizing events so that react events behave the same across browsers. 



### 6. STRETCH: What is an anonymous function in JavaScript?

  **Your answer:** an anonymous function is a function without a name. Because it doesn't have a name, we can't call this function directly, so we often use them inside of other functions or listeners that we can depend on.

  **Researched answer:** You can immediately invoke anonymous functions. for example:
  ```javascript
  //receive an input containing a first and last name
  const fullName = "Alfonso Martinez"

  //we can define and immediately call an anonymous function to split the string
  //then create the variables
  const [firstName,lastName] = ((fn)=>{return [fn.split(" ")[0],fn.split(" ")[1]]})(fullName)

  console.log(firstName,lastName)
  ```
  the resulting code seems a bit difficult to read. Perhaps with more complicated logic the benefits might be more obvious to me, but the above code would be easier to understand if I just split the function and the variable into their own bits. I did read that this helped with memory allocation, but I'd need to study that a bit more before I could speak to that.

## Looking Ahead: Terms for Next Week

*1. Conditional rendering:* rendering a component only if certain conditions are met. For example, we could render a welcome message component only if a user is signed in.

*2. Ruby:* Ruby is a dynamic language that is super fun. Everything is an object!

*3. Object oriented programming:* OOP is a model for programming that focuses on using classes and objects to focus on data as individual objects that can be manipulated. This lets us split our applications up into distinct components are modular and reusable.

*4. Ruby hash:* hashes in ruby are similar to objects in javascript, with some differences (like hashes not accepting methods as values)

*5. Ruby blocks:* ruby blocks are ~~magic~~ anonymous functions, and are used similarly to how anonymous functions are used in javascript methods like .map() or for loops.
