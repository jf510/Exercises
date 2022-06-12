import logo from './logo.svg';
import FirstComponent from './FirstComponent';
import NamedComponent from './NamedComponent';
import Person from './Person';
import Tweet from './Tweet';
import './App.css';

function App() {
  return (
    <div className="app">
      <FirstComponent />
      <NamedComponent name="bob" />
      <Tweet
        name="Matt Lane"
        username="mmmaaatttttt"
        date={new Date().toDateString()}
        message="This app will disrupt everything!!"
      />
            <Tweet
        name="Elie Schoppik"
        username="eschoppik"
        date={new Date().toDateString()}
        message="#Ilovehashtags"
      />
      <Tweet
        name="Tim Garcia"
        username="TimGarcia0"
        date={new Date().toDateString()}
        message="Follow me on Twitter!"
      />
            <Person
        name="Homer"
        age={38}
        hobbies={["bowling", "watching tv", "drinking beer"]}
      />
    </div>
  );
}

export default App;
