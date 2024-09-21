INTERVIEW  QUESTIONS:
====================
1. What is Real DOM and Virtual DOM?
> Virtual DOM: It means it will create a copy of real DOM. If we have any state updates then particular nodes will be updated rather than update entire DOM structure. So with this performance is very high. React is a virtual DOM.
> Real DOM: It means whatever we are seeing on the webpage that is real DOM. whenever virtual DOM is updated automatically Real DOM will update and we can see the changes in the webpage. 

2. Folder structure:
> node_modules, public, src, package.json
> node_modules: all the dependencies libraries available in node_modules folder. For Ex: If we are using bootstrap those dependencies needs to add into our project, then we need to use npm i bootstrap then related dependencies downloaded and its available in node_modules folder.
> src: src constist of all the source code which are related to our project.
> package.json: all the dependencies available in package.json. So as per package.json our node_modules will be downloaded.

3. What is JSX?
> JSX stands for JavaScript XML.
> JSX is used to write HTML code in our react.
> JSX converts HTML tags into react elements.
> You are not required to use JSX, but JSX makes it easier to write React applications in HTML code.

Ex: 
const myElement = React.createElement('h1', {}, 'I do not use JSX!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

4. What is React Fragment/Fragment?
> If we have multiple HTML elements we need to enclose with one main element then it is known as Fragment. If we are not using Fragment we will get an error.
> we can Fragment with empty angular brackets or we can use HTML Element like DIV
> If we are using Empty angular brackets in DOM that empty tag won't display and If you want to apply any internal styles or apply class it won't possible with empty angular brackets

Ex: 
  <> // <div>   -> Fragment we can enclose with empty brackets or DIV
    <h1>Heading</h1>
    <p>Paragraph</p>
  </> //</div>


5. What is binding?
> Binding is nothing but placeholder of the variable, we can defined bind with single flower brackets, in between the single curly braces we can place variable name. so whatever content it is there in the variable those will be displayed on the webpage.

6. useState or How to update the state?
> By using useState we can update the state. useState is a react hook. The syntax is wrap of sqaure brackets and need to specify variable name and update variable name.
> Whenever state is updated then our DOM will update (re-render)
Ex: const [userName, setUserName] = useState('');

7. What is props (How to share data b/w parent-child or child-parent)
> Props is used to share the data from parent to child or child to parent.
> How to use means in the ChildComponent selector we need to specify what we are sending to the child and at the sametime if we have any events (can specify events which are coming from child) from child to parent those are also specify in ChildComponent selector.

8. what is side effect or useEffect?
> useEffect is a functional hook. It is used for side effects. It will take two parameters first one is a callback function and second is a dependency.
> Dependency should be an array and If you mention empty array whenever our page gets loaded on this time it will call and it will call only one time. If you mention any dependency, whenever that dependency is updated then automatically useEffect will call.
> If you want to call any API's for the intialization then we need to use useEffect.

9. contextAPI or useContext/useProvider?
 > We can manage the state at one place and we can wrap that context provider as the parent element and we can manager the state with in that level that means we can access the state varialbe and we can able to set the data to the state.
 > Using useContext hook we can access the context state. useProvider is used to wrap the child elements so that we can manage the state in that level.
 > How to create context API means we can use createContext and we can store in one variable and we can create one callback function which is related to Provider and both context and provider we have export it then we can use it in other components.

10. How to handle API's and what are the methods?
 > Basically we can handle API call using four methods GET,POST,PUT and DELETE.
 > GET means we can fetch/retreive the data from the backend api(API Endpoint)
 > POST means we can send the details/payload/request object to the API, Inorder to save the details in DB.
 > PUT means, If you want to update the existing details we can use PUT API.
 > DELETE means, We can delete the existing details.
 > We can handle API's in different ways:
    > Promise (fetch)
    > async/await (fetch)
    > axios (axios.get, axios.put, axios.post, axios.delete)

NOTE: For request we have different properties. method, body, headers

11. Reusable or Custom Hooks?
 > We can create our own hooks based on requirement and we can create this hooks as reusable that means we can use it n no.of times.
 > This hooks starts with use and after this we can place our reusable name.
 > Usally Hooks we can't use inside other functions, we need to declare hooks at declaration part.
 
 Ex: I was created a custom hooks for GET, PUT, POST and DELETE. 


JUST KNOWN:
============
1. npx create-react-app app-name -> To create the project
2. npm i/install -> To install package.json dependencies
3. npm start -> To compile our application
4. npm run custom-script-name -> To customise the script 
(Ex: "start-server" : "react-scripts start") => Inorder to run the command we need to use npm run start-server.
5. JSX HTML <tags/>
6. React is a component based, one is class component and other is functional component.