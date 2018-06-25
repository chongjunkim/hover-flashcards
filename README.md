# Hover Flashcards by Jun Kim

## Project Plan
<dl>
  <dt>The name of your project</dt>
  <dd>Hover Flashcards</dd>

  <dt>The elevator pitch</dt>
  <dd>I have always wanted to design my own flashcard app when learning vocabulary, making it as easy as to just hovering on the card to flip to the back. Also, I'm thinking of adding difficulty levels where the card would flip once and flip back to its front side in seconds. I'll adjust the amount of seconds we get to see the back side (answer). I could even hide parts of the answer so it'll seem like a quiz!</dd>
  
  <dt>The elevator pitch</dt>
  <dd>I have always wanted to design my own flashcard app when learning vocabulary, making it as easy as to just hovering on the card to flip to the back. Also, I'm thinking of adding difficulty levels where the card would flip once and flip back to its front side in seconds. I'll adjust the amount of seconds we get to see the back side (answer). I could even hide parts of the answer so it'll seem like a quiz!</dd>
  
  <dt>Wireframe</dt>
  <dd>https://wireframe.cc/Iz434D</dd>
  
  <dt>A list of dependencies you'll be using for your project (npm modules, APIs, Firebase, etc.)</dt>
  <dd>React, Bootstrap, Firebase, jQuery</dd>
  
  <dt>A list of tasks that need to be completed for your project</dt>
  <dd>
    - Setup React App
    - Setup Firebase and create JSON with custom data for the flashcards
    - Store and pull data using React
    - Render React state
  </dd>
  
  <dt>A plan for the next 3 weeks and what you plan to accomplish each week</dt>
  <dd>
    - 1 week: Setup the backbone of the React App and setup Firebase
    - 2 week: Create JSON data and implement code
    - 3 week: Integrate features using jQuery and use CSS to polish design
  </dd>
  
  <dt>A list of dependencies you'll be using for your project (npm modules, APIs, Firebase, etc.)</dt>
  <dd>React, Bootstrap, Firebase, jQuery</dd>
</dl>


## Final Thoughts
  - Through this project I have learned so much about creating React apps, using Firebase to store database, and deploying the app on Github.
  - I also learned that using jQuery helped a lot when creating transitions, animations and radio button functionalities.
  - Some frustrations I've had involved setting up the difficulty level. I knew that using jQuery with React wasn't best practice, but I wanted to use it because I wanted full control over the DOM elements.
  - The main trouble I had was setting different timers for the difficulties. If I use ```setTimeOut``` on one difficulty, it would conflict with the other fuction so the card would flip a million times for some reason. Also, it took me some to gather the database because I had trouble looking for the exact format I wanted.