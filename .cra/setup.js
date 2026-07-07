#!/usr/bin/env node
/**
 * CRA Auto-Installer — runs via npm postinstall.
 * Downloads git hooks from the CRA server and installs them.
 */
const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');
const http = require('http');
const https = require('https');

const CONFIG_PATH = path.join(__dirname, 'config.json');
if (!fs.existsSync(CONFIG_PATH)) {
  console.log('CRA: No .cra/config.json found — skipping hook setup');
  process.exit(0);
}

const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
const SERVER = config.server_url.replace(/\/$/, '');

let gitRoot;
try {
  gitRoot = execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
} catch {
  console.log('CRA: Not inside a git repository — skipping hook setup');
  process.exit(0);
}

const HOOKS_DIR = path.join(gitRoot, '.git', 'hooks');
const CRA_DIR   = path.join(gitRoot, '.cra');
const IS_WIN    = os.platform() === 'win32';

function fetch(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, res => {
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => resolve(body));
    }).on('error', reject);
  });
}

async function installHook(hookName, endpoint) {
  const dest = path.join(HOOKS_DIR, hookName);
  const content = await fetch(`${SERVER}${endpoint}`);
  fs.writeFileSync(dest, content);
  if (!IS_WIN) fs.chmodSync(dest, '755');
  console.log(`CRA:   [ok] ${hookName} installed`);
}

async function main() {
  console.log(`\nCRA: Connecting to project ${config.project_id} ...`);
  try {
    await installHook('pre-commit', '/hooks/pre-commit');
    await installHook('pre-push',   '/hooks/pre-push');

    const localCheck = await fetch(`${SERVER}/hooks/local-check`);
    fs.writeFileSync(path.join(CRA_DIR, 'local_check.py'), localCheck);
    console.log('CRA:   [ok] local_check.py installed');

    console.log(`CRA: Score threshold : ${config.score_threshold}`);
    console.log(`CRA: Protected       : ${config.protected_branches.join(', ')}`);
    console.log('CRA: Setup complete — your commits are now monitored.\n');
  } catch (err) {
    console.error(`CRA: Setup failed — ${err.message}`);
    console.error(`CRA: Is the CRA server running at ${SERVER}?`);
    process.exit(1);
  }
}

main();
