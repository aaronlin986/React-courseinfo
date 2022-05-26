import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

const App = () => {
  const course = {
    name: "Half Stack Application Development",
    parts: [
      {
        topic: "Fundamentals of React",
        exercises: 10
      },
      {
        topic: "Using Props to Pass Data",
        exercises: 7
      },
      {
        topic: "State of a Component",
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

export default App;
