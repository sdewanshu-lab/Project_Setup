import { mkdir, writeFile } from "fs/promises";
import path from "path";
import express from "express";

const projectName = "MyWebProject";
const folderName = path.join(projectName, "src");
const serverFile = path.join(projectName, "server.js");

async function setupProject() {
  try {
    await mkdir(folderName, { recursive: true });
    console.log(`Project folder of ${folderName} created successfully`);
  } catch (error) {
    console.log("Error", error);
  }

  const htmlContent = `
      <!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Web Project</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Welcome to My Web Project</h1>
    <script src="main.js"></script>
  </body>
</html>
    `;

  await writeFile(path.join(folderName, "index.html"), htmlContent);
  console.log("created: src/index.html");

  const cssContent = `
      body{
          font-family: 'Courier New', Courier, monospace;
          background-color: black;
          color: white;
      }
  `;

  await writeFile(path.join(folderName, "style.css"), cssContent);
  console.log("created: src/style.css");
  
  const jsContent = `console.log("Project is ready")`;
  await writeFile(path.join(folderName, "main.js"), jsContent);
  console.log("created: src/main.js");
}

setupProject();
