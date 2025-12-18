import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  const prerenderedPath = path.resolve(__dirname, "..", "prerendered");

  app.use(express.static(staticPath));

  // Serve pre-rendered HTML files with proper meta tags
  app.get("*", (req, res) => {
    const pathname = req.path === "/" ? "/index.html" : `${req.path}.html`;
    const prerenderedFile = path.join(prerenderedPath, pathname);

    // Check if pre-rendered file exists
    if (fs.existsSync(prerenderedFile)) {
      res.sendFile(prerenderedFile);
    } else {
      // Fallback to index.html for client-side routing
      res.sendFile(path.join(staticPath, "index.html"));
    }
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
