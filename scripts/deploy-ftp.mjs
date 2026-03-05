import "dotenv/config";
import { Client } from "basic-ftp";
import path from "node:path";
import process from "node:process";

const {
  FTP_HOST,
  FTP_USER,
  FTP_PASS,
  FTP_PORT = "21",
  FTP_REMOTE_PATH = "/",
  FTP_CLEAN_ASSETS = "true",
} = process.env;

if (!FTP_HOST || !FTP_USER || !FTP_PASS) {
  console.error(
    "Missing FTP env vars. Set FTP_HOST, FTP_USER, FTP_PASS in .env",
  );
  process.exit(1);
}

const distDir = path.resolve("dist");

const client = new Client(30000);
client.ftp.verbose = true;

try {
  await client.access({
    host: FTP_HOST,
    user: FTP_USER,
    password: FTP_PASS,
    port: Number(FTP_PORT),
    secure: false, // plain FTP like you used successfully in FileZilla
  });

  // Go to the site root (your working remote folder)
  await client.cd(FTP_REMOTE_PATH);

  // Optional: delete /assets first so old hashed bundles don't accumulate
  if (FTP_CLEAN_ASSETS.toLowerCase() === "true") {
    try {
      await client.removeDir("assets");
      console.log("Removed remote /assets");
    } catch (e) {
      console.log(
        "No remote /assets to remove (or couldn't remove). Continuing...",
      );
    }
  }

  // Upload everything inside dist/ into remote root
  await client.uploadFromDir(distDir);
  console.log("✅ Deploy complete");
} catch (err) {
  console.error("❌ Deploy failed:", err);
  process.exitCode = 1;
} finally {
  client.close();
}
