import { QuestionsDataType } from '../types';

//Initial reward for the right answer, reward doubles every time.
export const BasePrize = 500;

export const QuestionsData: QuestionsDataType = [
  {
    "id": "1",
    "question": "What is the virtual DOM?",
    "answers": [
      "A residual copy of the actual DOM",
      "A way to speed up server interactions",
      "A way to update the actual DOM efficiently",
      "All of the above"
    ],
    "correctIndex": 2
  },
  {
    "id": "2",
    "question": "What is JSX?",
    "answers": [
      "A way to write HTML in JavaScript",
      "A way to write JavaScript in HTML",
      "A syntax extension for JavaScript",
      "A way to describe UI"
    ],
    "correctIndex": 0
  },
  {
    "id": "3",
    "question": "Can web browsers read JSX directly?",
    "answers": [
      "Yes",
      "No",
      "Only using a special plugin",
      "Depends on the browser"
    ],
    "correctIndex": 1
  },
  {
    "id": "4",
    "question": "What is the purpose of a Higher-Order Component (HOC)?",
    "answers": [
      "To reuse component data",
      "To reuse component styling",
      "To reuse component logic",
      "All of the above"
    ],
    "correctIndex": 2
  },
  {
    "id": "5",
    "question": "What is state?",
    "answers": [
      "Array",
      "String",
      "Object",
      "None of above"
    ],
    "correctIndex": 2
  },
  {
    "id": "6",
    "question": "What is prop?",
    "answers": [
      "Object",
      "Array",
      "String",
      "None of above"
    ],
    "correctIndex": 0
  },
  {
    "id": "7",
    "question": "What is the purpose of Redux?",
    "answers": [
      "Styling components",
      "Handling server requests",
      "Debugging code",
      "Managing global state"
    ],
    "correctIndex": 3
  },
  {
    "id": "8",
    "question": "What is the difference between state and props in React?",
    "answers": [
      "State is internal, props are external",
      "Props are used for styling, state for functionality",
      "State can be changed, props cannot",
      "Props are only used in functional components"
    ],
    "correctIndex": 0
  },
  {
    "id": "9",
    "question": "What is a Higher Order Component (HOC)?",
    "answers": [
      "A component that holds other components",
      "A component that can accept a component as a prop",
      "A function that returns a component",
      "A component that is higher in order"
    ],
    "correctIndex": 2
  },
  {
    "id": "10",
    "question": "What is the useEffect hook?",
    "answers": [
      "Used for styling components",
      "Used for managing the component lifecycle",
      "Used for handling side effects in functional components",
      "Used for making server requests"
    ],
    "correctIndex": 2
  },
  {
    "id": "11",
    "question": "What is Redux?",
    "answers": [
      "Library for UI",
      "Library for state management",
      "Library for requests",
      "None of above"
    ],
    "correctIndex": 1
  },
 

{
  "id": "12",
  "question": "What is the useContext hook?",
  "answers": [
    "Used for accessing global state",
    "Used for handling server requests",
    "Used for handling form input",
    "Used for making network requests"
  ],
  "correctIndex": 0
}
]