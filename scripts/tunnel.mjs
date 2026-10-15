import { spawn } from "node:child_process";
import { createWriteStream, existsSync, mkdirSync, readFileSync, rmSync } from "node:fs";
import { resolve } from "node:path";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const port = String(process.env.PORT || 3000);
const binDir = resolve("scripts/bin");
const bin = resolve(binDir, process.platform === "win32" ? "ngrok.exe" : "ngrok");
const zipUrl =
  "https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-windows-amd64.zip";

function tokenFromEnvFile() {
  const file = resolve(process.cwd(), ".env.local");
  if (!existsSync(file)) return "";
  for (const line of readFileSync(file, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const match = trimmed.match(/^NGROK_AUTHTOKEN=(.*)$/);
    if (!match) continue;
    return match[1].trim().replace(/^["']|["']$/g, "");
  }
  return "";
}

async function ensureNgrok() {
  if (existsSync(bin)) return bin;
  if (process.platform !== "win32") {
    console.error("Install ngrok, then run npm run tunnel again.");
    process.exit(1);
  }
  mkdirSync(binDir, { recursive: true });
  const zipPath = resolve(binDir, "ngrok.zip");
  console.log("Downloading ngrok...");
  const response = await fetch(zipUrl);
  if (!response.ok || !response.body) {
    console.error(`ngrok download failed (${response.status}).`);
    process.exit(1);
  }
  await pipeline(Readable.fromWeb(response.body), createWriteStream(zipPath));
  await promisify(execFile)("powershell.exe", [
    "-NoProfile",
    "-Command",
    `Expand-Archive -LiteralPath '${zipPath}' -DestinationPath '${binDir}' -Force`,
  ]);
  rmSync(zipPath, { force: true });
  if (!existsSync(bin)) {
    console.error("ngrok download finished, but ngrok.exe was not found.");
    process.exit(1);
  }
  return bin;
}

const authtoken = process.env.NGROK_AUTHTOKEN || tokenFromEnvFile();
const configPath = process.env.LOCALAPPDATA
  ? resolve(process.env.LOCALAPPDATA, "ngrok", "ngrok.yml")
  : "";

if (!authtoken && !(configPath && existsSync(configPath))) {
  console.error(
    "Add NGROK_AUTHTOKEN to .env.local, then run npm run tunnel again.\nGet a token at https://dashboard.ngrok.com/get-started/your-authtoken",
  );
  process.exit(1);
}

const ngrokBin = await ensureNgrok();
const env = { ...process.env };
if (authtoken) env.NGROK_AUTHTOKEN = authtoken;

const child = spawn(ngrokBin, ["http", port, "--log=stdout"], {
  stdio: "inherit",
  env,
});

child.on("exit", (code) => process.exit(code ?? 0));
process.on("SIGINT", () => child.kill("SIGINT"));
process.on("SIGTERM", () => child.kill("SIGTERM"));
