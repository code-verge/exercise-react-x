# Exercise: React X

## Learning Goals

By completing this exercise, you will be proficient:

- Create and structure a React application with multiple components
- Implement state management using the `useState` hook
- Pass data between components using `props`
- Handle user interactions in React

## Introduction

Welcome to the exciting world of social media development!

In this exercise, you’ll be creating a simplified version of X using React. This isn’t just any ordinary project - it’s your change to recreate parts of one of the world’s most popular social media platforms!

Imagine you’re a developer at a how new tech startup.

Your task is to create a prototype of a Twitter-like application that will revolutionize how people share their thoughts online. You’ll be using your React skills, along with your newfound knowledge of props and state, to bring this vision to life.

Are you ready to code your way to React mastery?

## Getting Started

Follow these steps below:

1. Fork this Repository // TODO
2. Clone the Repository to your Computer
3. Open the Repository in VS Code
4. Open the terminal and run `npm install`
5. Run `npm run dev`
6. Follow the instructions below

## Instructions

We have prepared a static version of a `Post` and a `NewPost` already for you. Your job is to bring these components to life by adding interactivity and state management. You'll need to implement features such as creating new posts and displaying a list of posts.

### Part 1: Thinking in React

Before you write any line of Code, we want you to take a screenshot of the static components first, and apply the techniques you’ve learned in “Thinking in React”.

To do this, follow these steps:

1. Take a screenshot of the current static components.
2. Identify the different components in the screenshot and draw boxes around them.
3. Arrange these components into a hierarchy, showing how they relate to each other.
4. Determine which components should have state and where that state should live.

If you’re finished, paste the image with your identified components to the `submissions` folder.

### Part 2: Pass the `post` as a Prop to `Post`

Now that you've analyzed the components, it's time to start implementing the functionality. In this part, you'll focus on passing data to the `Post` component using props.

We prepared a list of `posts` in the `App.jsx` file for you. Your `Post` Component should accept one prop called `post` and you should pass one of the available `posts` to the `Post` component.

```jsx
<Post post={posts[0]} />
```

Next, update the `Post` component to use the passed prop instead of hardcoded values.

### Part 3: Split `Post` into more smaller Components

Now that you've passed data to the `Post` component using props, it's time to refactor it into smaller, more manageable components.

Use the screenshot of Part 1 and refer to your component hierarchy to guide you in this refactoring process.

We do not want you to change `NewPost` but just focus on the `Post` component instead.

After creating these smaller components, combine them back into the `Post` component. Your final `Post` component should use these newly created subcomponents to render the complete post.

Here's an example of how your `Post` component might look after this process:

```
function Post({ post }) {
  return (
    <div className="post">
      <PostHeader author={post.author} timestamp={post.timestamp} />
      <PostContent content={post.content} />
      <PostActions likes={post.likes} comments={post.comments} />
    </div>
  );
}
```

### Part 4: Create a `PostList` Component

Now that you've created and refined your `Post` component, it's time to display multiple posts.

In this part, you'll create a new component called `PostList` that will render a list of `Post` components.

Start by creating a new file called `PostList.jsx` in your components folder. This component should accept an array of posts as a prop and map over them to render individual `Post` components.

Here's a basic structure to get you started:

```jsx
function PostList({ posts }) {
  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} post={post} />;
      ))}
    </div>
  );
}
```

Once you've created the `PostList` component, update your `App.jsx` to use it instead of rendering a single `Post`. Pass the entire `posts` array to `PostList` as a prop.

### Part 5: Enhance `NewPost` with State

Now that you've set up the structure for displaying multiple posts, it's time to add interactivity to the `NewPost` component.

In this part, you'll use the `useState` hook to manage the state of the new post being created. You'll need to update the component to handle user input and store it in state.

Start by importing the `useState` hook at the top of your `NewPost.jsx` file:

```jsx
import { useState } from "react"
```

Then, inside your `NewPost` component, create a state variable to hold the content of the new post.

You can hard-code the `avatar`, `username`, `name`, `verified`, `postedAt` and keep the values static. For `comments`, `retweets` and `likes` we want you to give an initial value of `0`.

Adjust the `textarea` element and pass the current `content` of the post to the `value` attribute.

Enhance the `textarea` with an `onChange` prop and create a handler function to update the state when the user types.

Change the `disabled` attribute in the `button` element to be disabled when there's no content in the post. Allow the submission otherwise.

### Part 6: Submit new Post

Now that you've set up the state management for the new post content, it's time to implement the functionality to submit the new post.

Start by adding a submit handler to the form in your `NewPost` component (use `onSubmit` in the `form` element). This handler should prevent the default form submission behavior, create a new post object with the current state values, and then clear the form input.

You'll need to lift the state up to the parent component (`App.jsx`) to manage the list of posts and pass down a function to add new posts as a prop to the `NewPost` component.

Before you can update the `posts` dynamically, you’ll need to create a state variable in the `App` component to hold the list of posts.

Use the `useState` hook to initialize this state with the existing `posts` array. Then, create a function to add new posts to this state and pass it down to the `NewPost` component as a prop.

Call the function you created and passed down to `NewPost` to add a new post when the form is submitted. This will update the state in the `App` component, which will then re-render the `PostList` component with the new post included.

Your `App.jsx` file could look something like this:

```jsx
import { useState } from "react"
import NewPost from "./components/NewPost"
import PostList from "./components/PostList"

function App() {
  const [posts, setPosts] = useState(initialPosts)

  const handleAddPost = (newPost) => {
    // add post here
  }

  return (
    <div className="app">
      <NewPost handleAddPost={handleAddPost} />
      <PostList posts={posts} />
    </div>
  )
}

export default App
```

After this step, you should have a fully functional React application that allows users to create and view posts.

## Submission

When you’re completed the exercise:

1. Run the following commands:

```jsx
git add .
git commit -m "Completed React X exercise"
git push origin main
```

1. Create a Pull Request and submit your assignment below:

<Submission>

Please provide a link to the Pull Request you’re created for the Exercise.

## Bonus Challenges

If you finish early, or you want to push your React skills further, here are some bonus challenges to explore:

### Part 7 (Optional): Implement Character Count

Enhance your `NewPost` component by adding a character count feature.

Display the current number of characters typed and set a maximum limit (e.g., 280 characters).

Update the UI to show how many characters are left as the user types, and disable the submit button when the limit is exceeded. This will give users immediate feedback on their post length, similar to popular social media platforms.

### Part 8 (Optional): Interactive “Like” Button

Implement an interactive "Like" button for each post. This feature will allow users to like and unlike posts, updating the like count in real-time.

While you implement this feature, think about where your actual state for the individual `post` is located.

Think of the inversion of control principle in React. You might need to lift the state up to a common ancestor component that can manage the state for all posts. This will allow you to update the like count for any post and have that change reflected across your entire application.

Consider creating a new function in your App component to handle liking/unliking posts, and pass this function down to your Post components as a prop. This approach will help maintain a single source of truth for your application's state.

If your Like button resides in a separate component, you'll need to pass the necessary props and event handlers down through the component hierarchy. This can be a good opportunity to practice prop drilling and consider whether you might benefit from more advanced state management solutions in larger applications (hint: coming soon).

## Let's Chat About Your Questions

<details>
  <summary>How do I pass data from a child component to a parent component?</summary>

In React, data typically flows down from parent to child components. However, to pass data up from a child to a parent, you can use callback functions.

Here's how:

1. Define a function in the parent component that will receive the data.
2. Pass this function as a prop to the child component.
3. Call the function from the child component with the data as an argument.

Example:

```jsx
// Parent component
function Parent() {
  const handleChildData = (data) => {
    console.log(data)
  }

  return <Child onDataReceived={handleChildData} />
}

// Child component
function Child({ onDataReceived }) {
  const sendDataToParent = () => {
    onDataReceived("Data from child")
  }

  return <button onClick={sendDataToParent}>Send Data</button>
}
```

</details>

<details>
  <summary>Why do I need to use the `key` prop when rendering a list of components?</summary>

The key prop is used by React to identify which items in a list have changed, been added, or been removed.

It helps React optimize the rendering of lists by minimizing DOM operations. When you don't use keys, or use index as keys, React might re-render more elements than necessary, leading to performance issues and potential bugs.

Always use a unique identifier from your data as the key:

```jsx
function PostList({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}
```

</details>

<details>
  <summary>How do I update an object in state?</summary>

When updating an object in state, you should create a new object with the updated values rather than modifying the existing object directly. This is due to React's immutability principle.

Here's an example:

```jsx
const [post, setPost] = useState({ title: "Hello", likes: 0 })

// Incorrect
post.likes += 1 // This modifies the original object
setPost(post)

// Correct
setPost({ ...post, likes: post.likes + 1 })
```

This creates a new object with all the properties of the previous post, but with an updated likes value.

</details>

<details>
  <summary>How do I handle form submission in React?</summary>

To handle form submission in React:

1. Prevent the default form submission behavior
2. Access form data (usually from state)
3. Perform any necessary actions (e.g., API calls, state updates)

Example:

```jsx
function NewPostForm({ onAddPost }) {
  const [content, setContent] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault() // Prevent default form submission
    if (content.trim()) {
      onAddPost({ content, timestamp: new Date().toISOString() })
      setContent("") // Clear the input after submission
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button type="submit">Post</button>
    </form>
  )
}
```

</details>

<details>
  <summary>How can I debug my React application?</summary>

There are several ways to debug a React application:

1. Use console.log() statements to print values at different points in your code.
2. Use the React Developer Tools browser extension to inspect your component tree, props, and state.
3. Use the browser's built-in debugger by adding debugger; statements in your code or setting breakpoints in the Sources tab.
</details>

## You've Got This!

Don’t worry if your clone doesn’t have all the features of the real X - what matters is that you’ve applied your knowledge of React, props, and state to create a functional application. You’ll manage state, pass data between components, and handle user interactions - these are the fundamental skills that form the backbone of any React application.

Keep coding, keep learning, and most importantly, keep building. Every project you complete makes you a better developer.
