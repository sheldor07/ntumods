import jsonfile from "jsonfile";
// Load the JSON file
const filePath = "data/db.json"; // Update the path
const data = jsonfile.readFileSync(filePath);
function capitalizeName(name) {
  if (name === name.toUpperCase()) {
    name = name.toLowerCase();
  }
  return name.replace(/\b\w/g, (char) => char.toUpperCase());
}
// Capitalize names
const capitalizedData = Object.keys(data).reduce((acc, key) => {
  const capitalizedName = capitalizeName(data[key].name);
  acc[key] = { ...data[key], name: capitalizedName };
  console.log(acc[key].name);
  return acc;
}, {});

// Write the modified data back to the JSON file
jsonfile.writeFileSync(filePath, capitalizedData, { spaces: 2 });

console.log("Names capitalized successfully.");
