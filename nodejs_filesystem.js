// Load the File System module
const fs = require("fs");

// 1️⃣ Create a new file and write data
fs.writeFile(
  "example.txt",
  "Hello Kaustubh! Node.js File System Demo.",
  (err) => {
    if (err) throw err;
    console.log("File created successfully.");

    // 2️⃣ Read the file
    fs.readFile("example.txt", "utf8", (err, data) => {
      if (err) throw err;
      console.log("File content:", data);

      // 3️⃣ Append new data
      fs.appendFile(
        "example.txt",
        "\nThis line is appended to the file.",
        (err) => {
          if (err) throw err;
          console.log("Data appended successfully.");

          // 4️⃣ Read the updated file
          fs.readFile("example.txt", "utf8", (err, updatedData) => {
            if (err) throw err;
            console.log("Updated File content:", updatedData);

            // 5️⃣ Delete the file
            fs.unlink("example.txt", (err) => {
              if (err) throw err;
              console.log("File deleted successfully.");
            });
          });
        }
      );
    });
  }
);
