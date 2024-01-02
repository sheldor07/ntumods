import Header from "./components/header";
import coursesDb from "./../data/db.json";
import { Card } from "./components/ui/card";
import CourseCard from "./components/course-card";
function App() {
  return (
    <main>
      <Header />
      <div className="grid grid-cols-1 gap-4 ">
        {Object.entries(coursesDb).map(([key, value]) => (
          <CourseCard
            code={key}
            name={value.name}
            description={value.description}
            numOfAUs={value.au}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
