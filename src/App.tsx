import { useState } from "react";
import Header from "./components/header";
import coursesDb from "./../data/db.json";
import CourseCard from "./components/course-card";
import { Input } from "./components/ui/input";
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const filteredCourses = Object.entries(coursesDb).filter(
    ([courseCode, courseDetails]) => {
      const courseText = `${courseDetails.name} ${courseDetails.description} ${courseDetails.au}`;
      return courseText.toLowerCase().includes(searchTerm.toLowerCase());
    }
  );
  return (
    <main>
      <Header />
      <Input value={searchTerm} onChange={handleChange}></Input>
      <div className="grid grid-cols-1 gap-4 my-4 ">
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
