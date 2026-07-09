// CRA Rule Violation Test File

// VIOLATION 1: Hardcoded password (red flag — -4.0)
const password = "supersecret123";

// VIOLATION 2: Hardcoded API key (red flag — -4.0, but only first secret counts)
const api_key = "sk-abcdef1234567890";

// VIOLATION 3: console.log left in code (-0.5)
console.log("debug: app started");
console.log("debug: user loaded");

// VIOLATION 4: TODO comment (-0.5)
// TODO: remove hardcoded credentials before going live

// VIOLATION 5: eval() usage (red flag — -4.0)
const result = eval("2 + 2");

function loadUser(id) {
  return { id, name: "test" };
}
