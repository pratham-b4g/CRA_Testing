# Code Review Agent — Detailed Report

**Generated:** 2026-05-04 12:53:28
**Language:** typescript
**Framework:** nextjs
**Files scanned:** 46
**Rules applied:** 36

## Quick Summary

| Severity | Count | Action Required |
|----------|-------|-----------------|
| 🔴 Error | 7 | Must fix before commit |
| 🟡 Warning | 100 | Should fix for quality |
| 🔵 Info | 9 | Optional improvements |
| **Total** | **116** | |

## 📊 Code Duplication

| Metric | Value |
|--------|-------|
| Duplication Percentage | **0.5%** |
| Duplicated Lines | 8 |
| Total Code Lines | 1504 |
| Status | ✅ Within threshold |

---

## 🔴 Errors (Must Fix)

These issues **block your commit**. Fix them before pushing.

### 1. [JS015] Variable 'res' is already declared on line 14. Duplicate declarations cause bugs or shadowing.

- **File:** `D:/Learn/PriceChecker/pricechecker/hooks/useAuth.ts`
- **Location:** Line 32
- **Code:**
  ```
  const res = await fetch('/api/auth/login', {
  ```
- **Why this is an error:** Variable 'res' is already declared on line 14. Duplicate declarations cause bugs or shadowing.
- **How to fix:** Remove the duplicate declaration or rename one of them.

### 2. [JS015] Variable 'data' is already declared on line 16. Duplicate declarations cause bugs or shadowing.

- **File:** `D:/Learn/PriceChecker/pricechecker/hooks/useAuth.ts`
- **Location:** Line 37
- **Code:**
  ```
  const data = await res.json();
  ```
- **Why this is an error:** Variable 'data' is already declared on line 16. Duplicate declarations cause bugs or shadowing.
- **How to fix:** Remove the duplicate declaration or rename one of them.

### 3. [JS015] Variable 'res' is already declared on line 14. Duplicate declarations cause bugs or shadowing.

- **File:** `D:/Learn/PriceChecker/pricechecker/hooks/useAuth.ts`
- **Location:** Line 49
- **Code:**
  ```
  const res = await fetch('/api/auth/signup', {
  ```
- **Why this is an error:** Variable 'res' is already declared on line 14. Duplicate declarations cause bugs or shadowing.
- **How to fix:** Remove the duplicate declaration or rename one of them.

### 4. [JS015] Variable 'data' is already declared on line 16. Duplicate declarations cause bugs or shadowing.

- **File:** `D:/Learn/PriceChecker/pricechecker/hooks/useAuth.ts`
- **Location:** Line 54
- **Code:**
  ```
  const data = await res.json();
  ```
- **Why this is an error:** Variable 'data' is already declared on line 16. Duplicate declarations cause bugs or shadowing.
- **How to fix:** Remove the duplicate declaration or rename one of them.

### 5. [JS015] Variable 'logout' is already declared on line 9. Duplicate declarations cause bugs or shadowing.

- **File:** `D:/Learn/PriceChecker/pricechecker/hooks/useAuth.ts`
- **Location:** Line 64
- **Code:**
  ```
  const logout = async () => {
  ```
- **Why this is an error:** Variable 'logout' is already declared on line 9. Duplicate declarations cause bugs or shadowing.
- **How to fix:** Remove the duplicate declaration or rename one of them.

### 6. [JS015] Variable 'now' is already declared on line 31. Duplicate declarations cause bugs or shadowing.

- **File:** `D:/Learn/PriceChecker/pricechecker/lib/middleware/withRateLimit.ts`
- **Location:** Line 62
- **Code:**
  ```
  const now = Date.now();
  ```
- **Why this is an error:** Variable 'now' is already declared on line 31. Duplicate declarations cause bugs or shadowing.
- **How to fix:** Remove the duplicate declaration or rename one of them.

### 7. [JS015] Variable 'prev' is already declared on line 24. Duplicate declarations cause bugs or shadowing.

- **File:** `D:/Learn/PriceChecker/pricechecker/store/estimatorStore.ts`
- **Location:** Line 37
- **Code:**
  ```
  const prev = get().previewUrl;
  ```
- **Why this is an error:** Variable 'prev' is already declared on line 24. Duplicate declarations cause bugs or shadowing.
- **How to fix:** Remove the duplicate declaration or rename one of them.

---

## 🟡 Warnings (Should Fix)

These won't block your commit but indicate quality issues.

### 1. [JS001] Remove console statements before pushing. Use a logger instead.

- **File:** `D:/Learn/PriceChecker/pricechecker/app/api/auth/login/route.ts`
- **Location:** Line 48
- **Code:**
  ```
  console.error('Login error:', err);
  ```
- **Issue:** Remove console statements before pushing. Use a logger instead.
- **Suggestion:** Delete the console call or use a logger (winston, pino, etc.).

### 2. [JS014] Variable 'POST' is declared but never used. Remove it or use it.

- **File:** `D:/Learn/PriceChecker/pricechecker/app/api/auth/login/route.ts`
- **Location:** Line 53
- **Code:**
  ```
  export const POST = authRateLimit(handler);
  ```
- **Issue:** Variable 'POST' is declared but never used. Remove it or use it.
- **Suggestion:** Delete the unused variable or reference it where needed.

### 3. [JS001] Remove console statements before pushing. Use a logger instead.

- **File:** `D:/Learn/PriceChecker/pricechecker/app/api/auth/signup/route.ts`
- **Location:** Line 43
- **Code:**
  ```
  console.error('Signup error:', err);
  ```
- **Issue:** Remove console statements before pushing. Use a logger instead.
- **Suggestion:** Delete the console call or use a logger (winston, pino, etc.).

### 4. [JS014] Variable 'POST' is declared but never used. Remove it or use it.

- **File:** `D:/Learn/PriceChecker/pricechecker/app/api/auth/signup/route.ts`
- **Location:** Line 48
- **Code:**
  ```
  export const POST = authRateLimit(handler);
  ```
- **Issue:** Variable 'POST' is declared but never used. Remove it or use it.
- **Suggestion:** Delete the unused variable or reference it where needed.

### 5. [JS001] Remove console statements before pushing. Use a logger instead.

- **File:** `D:/Learn/PriceChecker/pricechecker/app/api/estimate/route.ts`
- **Location:** Line 51
- **Code:**
  ```
  console.error('Estimate error:', err);
  ```
- **Issue:** Remove console statements before pushing. Use a logger instead.
- **Suggestion:** Delete the console call or use a logger (winston, pino, etc.).

### 6. [JS014] Variable 'POST' is declared but never used. Remove it or use it.

- **File:** `D:/Learn/PriceChecker/pricechecker/app/api/estimate/route.ts`
- **Location:** Line 58
- **Code:**
  ```
  export const POST = estimateRateLimit(
  ```
- **Issue:** Variable 'POST' is declared but never used. Remove it or use it.
- **Suggestion:** Delete the unused variable or reference it where needed.

### 7. [JS001] Remove console statements before pushing. Use a logger instead.

- **File:** `D:/Learn/PriceChecker/pricechecker/app/api/history/route.ts`
- **Location:** Line 23
- **Code:**
  ```
  console.error('History error:', err);
  ```
- **Issue:** Remove console statements before pushing. Use a logger instead.
- **Suggestion:** Delete the console call or use a logger (winston, pino, etc.).

### 8. [JS014] Variable 'GET' is declared but never used. Remove it or use it.

- **File:** `D:/Learn/PriceChecker/pricechecker/app/api/history/route.ts`
- **Location:** Line 28
- **Code:**
  ```
  export const GET = withAuth(handler);
  ```
- **Issue:** Variable 'GET' is declared but never used. Remove it or use it.
- **Suggestion:** Delete the unused variable or reference it where needed.

### 9. [JS001] Remove console statements before pushing. Use a logger instead.

- **File:** `D:/Learn/PriceChecker/pricechecker/app/api/user/me/route.ts`
- **Location:** Line 18
- **Code:**
  ```
  console.error('Get user error:', err);
  ```
- **Issue:** Remove console statements before pushing. Use a logger instead.
- **Suggestion:** Delete the console call or use a logger (winston, pino, etc.).

### 10. [JS014] Variable 'GET' is declared but never used. Remove it or use it.

- **File:** `D:/Learn/PriceChecker/pricechecker/app/api/user/me/route.ts`
- **Location:** Line 23
- **Code:**
  ```
  export const GET = withAuth(handler);
  ```
- **Issue:** Variable 'GET' is declared but never used. Remove it or use it.
- **Suggestion:** Delete the unused variable or reference it where needed.

### 11. [JS008] Nesting depth 5 exceeds threshold 4. Extract nested logic into separate functions.

- **File:** `D:/Learn/PriceChecker/pricechecker/components/auth/SignupForm.tsx`
- **Location:** Line 23
- **Code:**
  ```
  Object.entries(result.errors).forEach(([field, message]) => {
  ```
- **Issue:** Nesting depth 5 exceeds threshold 4. Extract nested logic into separate functions.
- **Suggestion:** Break the deeply nested code into smaller, named functions or use async/await.

### 12. [COM010] Empty code block detected. Add the intended logic or remove the block.

- **File:** `D:/Learn/PriceChecker/pricechecker/components/estimator/ResultCard.tsx`
- **Location:** Line 10
- **Code:**
  ```
  value >= 75 ? 'bg-green-100 text-green-800' :
  ```
- **Issue:** Empty code block detected. Add the intended logic or remove the block.
- **Suggestion:** Add the missing implementation or add a comment explaining why it's intentionally empty.

### 13. [COM010] Empty code block detected. Add the intended logic or remove the block.

- **File:** `D:/Learn/PriceChecker/pricechecker/components/estimator/ResultCard.tsx`
- **Location:** Line 11
- **Code:**
  ```
  value >= 50 ? 'bg-yellow-100 text-yellow-800' :
  ```
- **Issue:** Empty code block detected. Add the intended logic or remove the block.
- **Suggestion:** Add the missing implementation or add a comment explaining why it's intentionally empty.

### 14. [JS009] Function has 8 parameters (max 5). Use an options/config object instead.

- **File:** `D:/Learn/PriceChecker/pricechecker/components/ui/Button.tsx`
- **Location:** Line 11
- **Code:**
  ```
  ({ children, variant = 'primary', size = 'md', loading, disabled, className, ...props }, ref) => {
  ```
- **Issue:** Function has 8 parameters (max 5). Use an options/config object instead.
- **Suggestion:** Group parameters into an object: function create({ name, age, email })

### 15. [JS009] Function has 6 parameters (max 5). Use an options/config object instead.

- **File:** `D:/Learn/PriceChecker/pricechecker/components/ui/Input.tsx`
- **Location:** Line 10
- **Code:**
  ```
  ({ label, error, className, id, ...props }, ref) => {
  ```
- **Issue:** Function has 6 parameters (max 5). Use an options/config object instead.
- **Suggestion:** Group parameters into an object: function create({ name, age, email })

### 16. [JS016] Function 'signToken' is defined but never called or referenced.

- **File:** `D:/Learn/PriceChecker/pricechecker/lib/auth/jwt.ts`
- **Location:** Line 10
- **Code:**
  ```
  export async function signToken(payload: JwtPayload): Promise<string> {
  ```
- **Issue:** Function 'signToken' is defined but never called or referenced.
- **Suggestion:** Delete the unused function or reference it somewhere. If it is an exported utility, ensure it is imported elsewhere.

### 17. [JS016] Function 'verifyToken' is defined but never called or referenced.

- **File:** `D:/Learn/PriceChecker/pricechecker/lib/auth/jwt.ts`
- **Location:** Line 18
- **Code:**
  ```
  export async function verifyToken(token: string): Promise<JwtPayload> {
  ```
- **Issue:** Function 'verifyToken' is defined but never called or referenced.
- **Suggestion:** Delete the unused function or reference it somewhere. If it is an exported utility, ensure it is imported elsewhere.

### 18. [JS016] Function 'hashPassword' is defined but never called or referenced.

- **File:** `D:/Learn/PriceChecker/pricechecker/lib/auth/password.ts`
- **Location:** Line 3
- **Code:**
  ```
  export async function hashPassword(plain: string): Promise<string> {
  ```
- **Issue:** Function 'hashPassword' is defined but never called or referenced.
- **Suggestion:** Delete the unused function or reference it somewhere. If it is an exported utility, ensure it is imported elsewhere.

### 19. [JS016] Function 'comparePassword' is defined but never called or referenced.

- **File:** `D:/Learn/PriceChecker/pricechecker/lib/auth/password.ts`
- **Location:** Line 7
- **Code:**
  ```
  export async function comparePassword(plain: string, hash: string): Promise<boolean> {
  ```
- **Issue:** Function 'comparePassword' is defined but never called or referenced.
- **Suggestion:** Delete the unused function or reference it somewhere. If it is an exported utility, ensure it is imported elsewhere.

### 20. [JS001] Remove console statements before pushing. Use a logger instead.

- **File:** `D:/Learn/PriceChecker/pricechecker/lib/db/index.ts`
- **Location:** Line 37
- **Code:**
  ```
  console.log('Database connection established successfully.');
  ```
- **Issue:** Remove console statements before pushing. Use a logger instead.
- **Suggestion:** Delete the console call or use a logger (winston, pino, etc.).

### 21. [JS001] Remove console statements before pushing. Use a logger instead.

- **File:** `D:/Learn/PriceChecker/pricechecker/lib/db/index.ts`
- **Location:** Line 39
- **Code:**
  ```
  console.error('Unable to connect to the database:', error);
  ```
- **Issue:** Remove console statements before pushing. Use a logger instead.
- **Suggestion:** Delete the console call or use a logger (winston, pino, etc.).

### 22. [JS002] 'var' is function-scoped and error-prone. Use 'const' or 'let' instead.

- **File:** `D:/Learn/PriceChecker/pricechecker/lib/db/index.ts`
- **Location:** Line 5
- **Code:**
  ```
  var __sequelize: Sequelize | undefined;
  ```
- **Issue:** 'var' is function-scoped and error-prone. Use 'const' or 'let' instead.
- **Suggestion:** Replace 'var' with 'const' if the binding is never reassigned, otherwise 'let'.

### 23. [JS016] Function 'connectDB' is defined but never called or referenced.

- **File:** `D:/Learn/PriceChecker/pricechecker/lib/db/index.ts`
- **Location:** Line 34
- **Code:**
  ```
  export async function connectDB(): Promise<void> {
  ```
- **Issue:** Function 'connectDB' is defined but never called or referenced.
- **Suggestion:** Delete the unused function or reference it somewhere. If it is an exported utility, ensure it is imported elsewhere.

### 24. [JS001] Remove console statements before pushing. Use a logger instead.

- **File:** `D:/Learn/PriceChecker/pricechecker/lib/db/models/index.ts`
- **Location:** Line 11
- **Code:**
  ```
  console.log('Database models synchronized.');
  ```
- **Issue:** Remove console statements before pushing. Use a logger instead.
- **Suggestion:** Delete the console call or use a logger (winston, pino, etc.).

### 25. [JS016] Function 'syncModels' is defined but never called or referenced.

- **File:** `D:/Learn/PriceChecker/pricechecker/lib/db/models/index.ts`
- **Location:** Line 9
- **Code:**
  ```
  export async function syncModels(force = false): Promise<void> {
  ```
- **Issue:** Function 'syncModels' is defined but never called or referenced.
- **Suggestion:** Delete the unused function or reference it somewhere. If it is an exported utility, ensure it is imported elsewhere.

### 26. [COM010] Empty code block detected. Add the intended logic or remove the block.

- **File:** `D:/Learn/PriceChecker/pricechecker/lib/gemini/client.ts`
- **Location:** Line 8
- **Code:**
  ```
  Return ONLY valid JSON (no markdown, no code blocks) with this exact structure:
  ```
- **Issue:** Empty code block detected. Add the intended logic or remove the block.
- **Suggestion:** Add the missing implementation or add a comment explaining why it's intentionally empty.

### 27. [JS016] Function 'analyzeCollectible' is defined but never called or referenced.

- **File:** `D:/Learn/PriceChecker/pricechecker/lib/gemini/client.ts`
- **Location:** Line 21
- **Code:**
  ```
  export async function analyzeCollectible(
  ```
- **Issue:** Function 'analyzeCollectible' is defined but never called or referenced.
- **Suggestion:** Delete the unused function or reference it somewhere. If it is an exported utility, ensure it is imported elsewhere.

### 28. [JS008] Nesting depth 5 exceeds threshold 4. Extract nested logic into separate functions.

- **File:** `D:/Learn/PriceChecker/pricechecker/lib/middleware/withRateLimit.ts`
- **Location:** Line 35
- **Code:**
  ```
  if (entry.count >= options.max) {
  ```
- **Issue:** Nesting depth 5 exceeds threshold 4. Extract nested logic into separate functions.
- **Suggestion:** Break the deeply nested code into smaller, named functions or use async/await.

### 29. [JS013] Import 'errorResponse' is never used. Remove the unused import.

- **File:** `D:/Learn/PriceChecker/pricechecker/lib/middleware/withRateLimit.ts`
- **Location:** Line 2
- **Code:**
  ```
  import { errorResponse } from '@/lib/utils/apiResponse';
  ```
- **Issue:** Import 'errorResponse' is never used. Remove the unused import.
- **Suggestion:** Delete the unused import statement or use the imported binding.

### 30. [JS014] Variable 'authRateLimit' is declared but never used. Remove it or use it.

- **File:** `D:/Learn/PriceChecker/pricechecker/lib/middleware/withRateLimit.ts`
- **Location:** Line 56
- **Code:**
  ```
  export const authRateLimit = withRateLimit({ max: 5, windowMs: 15 * 60 * 1000 });
  ```
- **Issue:** Variable 'authRateLimit' is declared but never used. Remove it or use it.
- **Suggestion:** Delete the unused variable or reference it where needed.

### 31. [JS014] Variable 'estimateRateLimit' is declared but never used. Remove it or use it.

- **File:** `D:/Learn/PriceChecker/pricechecker/lib/middleware/withRateLimit.ts`
- **Location:** Line 57
- **Code:**
  ```
  export const estimateRateLimit = withRateLimit({ max: 10, windowMs: 60 * 60 * 1000 });
  ```
- **Issue:** Variable 'estimateRateLimit' is declared but never used. Remove it or use it.
- **Suggestion:** Delete the unused variable or reference it where needed.

### 32. [JS016] Function 'fileToBase64' is defined but never called or referenced.

- **File:** `D:/Learn/PriceChecker/pricechecker/lib/utils/imageUtils.ts`
- **Location:** Line 14
- **Code:**
  ```
  export async function fileToBase64(file: File): Promise<{ base64: string; mimeType: string }> {
  ```
- **Issue:** Function 'fileToBase64' is defined but never called or referenced.
- **Suggestion:** Delete the unused function or reference it somewhere. If it is an exported utility, ensure it is imported elsewhere.

### 33. [JS010] String 'any.required' is duplicated 5 times. Extract to a named constant.

- **File:** `D:/Learn/PriceChecker/pricechecker/lib/validation/auth.schemas.ts`
- **Location:** Line 7
- **Code:**
  ```
  'any.required': 'Name is required',
  ```
- **Issue:** String 'any.required' is duplicated 5 times. Extract to a named constant.
- **Suggestion:** Define: const MY_CONSTANT = 'value'; and import where needed.

### 34. [JS014] Variable 'signupSchema' is declared but never used. Remove it or use it.

- **File:** `D:/Learn/PriceChecker/pricechecker/lib/validation/auth.schemas.ts`
- **Location:** Line 3
- **Code:**
  ```
  export const signupSchema = Joi.object({
  ```
- **Issue:** Variable 'signupSchema' is declared but never used. Remove it or use it.
- **Suggestion:** Delete the unused variable or reference it where needed.

### 35. [JS014] Variable 'loginSchema' is declared but never used. Remove it or use it.

- **File:** `D:/Learn/PriceChecker/pricechecker/lib/validation/auth.schemas.ts`
- **Location:** Line 19
- **Code:**
  ```
  export const loginSchema = Joi.object({
  ```
- **Issue:** Variable 'loginSchema' is declared but never used. Remove it or use it.
- **Suggestion:** Delete the unused variable or reference it where needed.

### 36. [JS014] Variable 'config' is declared but never used. Remove it or use it.

- **File:** `D:/Learn/PriceChecker/pricechecker/proxy.ts`
- **Location:** Line 43
- **Code:**
  ```
  export const config = {
  ```
- **Issue:** Variable 'config' is declared but never used. Remove it or use it.
- **Suggestion:** Delete the unused variable or reference it where needed.

### 37. [JS016] Function 'proxy' is defined but never called or referenced.

- **File:** `D:/Learn/PriceChecker/pricechecker/proxy.ts`
- **Location:** Line 11
- **Code:**
  ```
  export async function proxy(req: NextRequest) {
  ```
- **Issue:** Function 'proxy' is defined but never called or referenced.
- **Suggestion:** Delete the unused function or reference it somewhere. If it is an exported utility, ensure it is imported elsewhere.

### 38. [JS014] Variable 'useAuthStore' is declared but never used. Remove it or use it.

- **File:** `D:/Learn/PriceChecker/pricechecker/store/authStore.ts`
- **Location:** Line 13
- **Code:**
  ```
  export const useAuthStore = create<AuthState>((set) => ({
  ```
- **Issue:** Variable 'useAuthStore' is declared but never used. Remove it or use it.
- **Suggestion:** Delete the unused variable or reference it where needed.

### 39. [JS014] Variable 'useEstimatorStore' is declared but never used. Remove it or use it.

- **File:** `D:/Learn/PriceChecker/pricechecker/store/estimatorStore.ts`
- **Location:** Line 17
- **Code:**
  ```
  export const useEstimatorStore = create<EstimatorState>((set, get) => ({
  ```
- **Issue:** Variable 'useEstimatorStore' is declared but never used. Remove it or use it.
- **Suggestion:** Delete the unused variable or reference it where needed.

### 40. [CROSS001] Code block 'if@L15' is a duplicate of 'if@L16' in D:/Learn/PriceChecker/pricechecker/app/api/auth/lo

- **File:** `D:/Learn/PriceChecker/pricechecker/app/api/auth/signup/route.ts`
- **Location:** Line 15
- **Issue:** Code block 'if@L15' is a duplicate of 'if@L16' in D:/Learn/PriceChecker/pricechecker/app/api/auth/login/route.ts:16. Extract shared logic into a common utility module.
- **Suggestion:** Move the shared logic to a utils/ or helpers/ module and import it in both places.

### 41. [CROSS001] Code block 'handler' is a duplicate of 'handler' in D:/Learn/PriceChecker/pricechecker/app/api/histo

- **File:** `D:/Learn/PriceChecker/pricechecker/app/api/user/me/route.ts`
- **Location:** Line 7
- **Issue:** Code block 'handler' is a duplicate of 'handler' in D:/Learn/PriceChecker/pricechecker/app/api/history/route.ts:7. Extract shared logic into a common utility module.
- **Suggestion:** Move the shared logic to a utils/ or helpers/ module and import it in both places.

### 42. [CROSS003] Constant 'secret' has the same value as in page.tsx:8. Extract to a shared constants file.

- **File:** `D:/Learn/PriceChecker/pricechecker/app/page.tsx`
- **Location:** Line 5
- **Issue:** Constant 'secret' has the same value as in page.tsx:8. Extract to a shared constants file.
- **Suggestion:** Create a shared constants file (e.g. constants.ts or constants.py) and import 'secret' from there.

### 43. [CROSS003] Constant 'secret' has the same value as in page.tsx:8. Extract to a shared constants file.

- **File:** `D:/Learn/PriceChecker/pricechecker/lib/auth/jwt.ts`
- **Location:** Line 4
- **Issue:** Constant 'secret' has the same value as in page.tsx:8. Extract to a shared constants file.
- **Suggestion:** Create a shared constants file (e.g. constants.ts or constants.py) and import 'secret' from there.

### 44. [CROSS003] Constant 'secret' has the same value as in page.tsx:8. Extract to a shared constants file.

- **File:** `D:/Learn/PriceChecker/pricechecker/proxy.ts`
- **Location:** Line 4
- **Issue:** Constant 'secret' has the same value as in page.tsx:8. Extract to a shared constants file.
- **Suggestion:** Create a shared constants file (e.g. constants.ts or constants.py) and import 'secret' from there.

### 45. [CROSS003] Constant 'cookieStore' has the same value as in page.tsx:34. Extract to a shared constants file.

- **File:** `D:/Learn/PriceChecker/pricechecker/app/page.tsx`
- **Location:** Line 10
- **Issue:** Constant 'cookieStore' has the same value as in page.tsx:34. Extract to a shared constants file.
- **Suggestion:** Create a shared constants file (e.g. constants.ts or constants.py) and import 'cookieStore' from there.

### 46. [CROSS003] Constant 'token' has the same value as in page.tsx:35. Extract to a shared constants file.

- **File:** `D:/Learn/PriceChecker/pricechecker/app/page.tsx`
- **Location:** Line 11
- **Issue:** Constant 'token' has the same value as in page.tsx:35. Extract to a shared constants file.
- **Suggestion:** Create a shared constants file (e.g. constants.ts or constants.py) and import 'token' from there.

### 47. [CROSS003] Constant 'token' has the same value as in route.ts:35. Extract to a shared constants file.

- **File:** `D:/Learn/PriceChecker/pricechecker/app/api/auth/signup/route.ts`
- **Location:** Line 30
- **Issue:** Constant 'token' has the same value as in route.ts:35. Extract to a shared constants file.
- **Suggestion:** Create a shared constants file (e.g. constants.ts or constants.py) and import 'token' from there.

### 48. [CROSS003] Constant 'token' has the same value as in withAuth.ts:17. Extract to a shared constants file.

- **File:** `D:/Learn/PriceChecker/pricechecker/proxy.ts`
- **Location:** Line 13
- **Issue:** Constant 'token' has the same value as in withAuth.ts:17. Extract to a shared constants file.
- **Suggestion:** Create a shared constants file (e.g. constants.ts or constants.py) and import 'token' from there.

### 49. [CROSS003] Constant 'body' has the same value as in route.ts:13. Extract to a shared constants file.

- **File:** `D:/Learn/PriceChecker/pricechecker/app/api/auth/signup/route.ts`
- **Location:** Line 12
- **Issue:** Constant 'body' has the same value as in route.ts:13. Extract to a shared constants file.
- **Suggestion:** Create a shared constants file (e.g. constants.ts or constants.py) and import 'body' from there.

### 50. [CROSS003] Constant 'errors' has the same value as in route.ts:17. Extract to a shared constants file.

- **File:** `D:/Learn/PriceChecker/pricechecker/app/api/auth/signup/route.ts`
- **Location:** Line 16
- **Issue:** Constant 'errors' has the same value as in route.ts:17. Extract to a shared constants file.
- **Suggestion:** Create a shared constants file (e.g. constants.ts or constants.py) and import 'errors' from there.

### 51. [CROSS003] Constant 'POST' has the same value as in route.ts:53. Extract to a shared constants file.

- **File:** `D:/Learn/PriceChecker/pricechecker/app/api/auth/signup/route.ts`
- **Location:** Line 48
- **Issue:** Constant 'POST' has the same value as in route.ts:53. Extract to a shared constants file.
- **Suggestion:** Create a shared constants file (e.g. constants.ts or constants.py) and import 'POST' from there.

### 52. [CROSS003] Constant 'GET' has the same value as in route.ts:28. Extract to a shared constants file.

- **File:** `D:/Learn/PriceChecker/pricechecker/app/api/user/me/route.ts`
- **Location:** Line 23
- **Issue:** Constant 'GET' has the same value as in route.ts:28. Extract to a shared constants file.
- **Suggestion:** Create a shared constants file (e.g. constants.ts or constants.py) and import 'GET' from there.

### 53. [CROSS003] Constant 'data' has the same value as in useAuth.ts:16. Extract to a shared constants file.

- **File:** `D:/Learn/PriceChecker/pricechecker/hooks/useAuth.ts`
- **Location:** Line 37
- **Issue:** Constant 'data' has the same value as in useAuth.ts:16. Extract to a shared constants file.
- **Suggestion:** Create a shared constants file (e.g. constants.ts or constants.py) and import 'data' from there.

### 54. [CROSS003] Constant 'data' has the same value as in useAuth.ts:16. Extract to a shared constants file.

- **File:** `D:/Learn/PriceChecker/pricechecker/hooks/useAuth.ts`
- **Location:** Line 54
- **Issue:** Constant 'data' has the same value as in useAuth.ts:16. Extract to a shared constants file.
- **Suggestion:** Create a shared constants file (e.g. constants.ts or constants.py) and import 'data' from there.

### 55. [CROSS003] Constant 'data' has the same value as in useAuth.ts:16. Extract to a shared constants file.

- **File:** `D:/Learn/PriceChecker/pricechecker/hooks/useEstimator.ts`
- **Location:** Line 27
- **Issue:** Constant 'data' has the same value as in useAuth.ts:16. Extract to a shared constants file.
- **Suggestion:** Create a shared constants file (e.g. constants.ts or constants.py) and import 'data' from there.

### 56. [CROSS002] No test file found for 'page.tsx'. Expected one of: page.test.tsx, page.spec.tsx, page.test.js

- **File:** `D:/Learn/PriceChecker/pricechecker/app/(auth)/login/page.tsx`
- **Location:** File-level
- **Issue:** No test file found for 'page.tsx'. Expected one of: page.test.tsx, page.spec.tsx, page.test.js
- **Suggestion:** Create a test file, e.g. tests/page.test.tsx

### 57. [CROSS002] No test file found for 'page.tsx'. Expected one of: page.test.tsx, page.spec.tsx, page.test.js

- **File:** `D:/Learn/PriceChecker/pricechecker/app/(auth)/signup/page.tsx`
- **Location:** File-level
- **Issue:** No test file found for 'page.tsx'. Expected one of: page.test.tsx, page.spec.tsx, page.test.js
- **Suggestion:** Create a test file, e.g. tests/page.test.tsx

### 58. [CROSS002] No test file found for 'page.tsx'. Expected one of: page.test.tsx, page.spec.tsx, page.test.js

- **File:** `D:/Learn/PriceChecker/pricechecker/app/(dashboard)/estimator/page.tsx`
- **Location:** File-level
- **Issue:** No test file found for 'page.tsx'. Expected one of: page.test.tsx, page.spec.tsx, page.test.js
- **Suggestion:** Create a test file, e.g. tests/page.test.tsx

### 59. [CROSS002] No test file found for 'page.tsx'. Expected one of: page.test.tsx, page.spec.tsx, page.test.js

- **File:** `D:/Learn/PriceChecker/pricechecker/app/(dashboard)/history/page.tsx`
- **Location:** File-level
- **Issue:** No test file found for 'page.tsx'. Expected one of: page.test.tsx, page.spec.tsx, page.test.js
- **Suggestion:** Create a test file, e.g. tests/page.test.tsx

### 60. [CROSS002] No test file found for 'layout.tsx'. Expected one of: layout.test.tsx, layout.spec.tsx, layout.test.

- **File:** `D:/Learn/PriceChecker/pricechecker/app/(dashboard)/layout.tsx`
- **Location:** File-level
- **Issue:** No test file found for 'layout.tsx'. Expected one of: layout.test.tsx, layout.spec.tsx, layout.test.js
- **Suggestion:** Create a test file, e.g. tests/layout.test.tsx

### 61. [CROSS002] No test file found for 'route.ts'. Expected one of: route.test.ts, route.spec.ts, route.test.js

- **File:** `D:/Learn/PriceChecker/pricechecker/app/api/auth/login/route.ts`
- **Location:** File-level
- **Issue:** No test file found for 'route.ts'. Expected one of: route.test.ts, route.spec.ts, route.test.js
- **Suggestion:** Create a test file, e.g. tests/route.test.ts

### 62. [CROSS002] No test file found for 'route.ts'. Expected one of: route.test.ts, route.spec.ts, route.test.js

- **File:** `D:/Learn/PriceChecker/pricechecker/app/api/auth/logout/route.ts`
- **Location:** File-level
- **Issue:** No test file found for 'route.ts'. Expected one of: route.test.ts, route.spec.ts, route.test.js
- **Suggestion:** Create a test file, e.g. tests/route.test.ts

### 63. [CROSS002] No test file found for 'route.ts'. Expected one of: route.test.ts, route.spec.ts, route.test.js

- **File:** `D:/Learn/PriceChecker/pricechecker/app/api/auth/signup/route.ts`
- **Location:** File-level
- **Issue:** No test file found for 'route.ts'. Expected one of: route.test.ts, route.spec.ts, route.test.js
- **Suggestion:** Create a test file, e.g. tests/route.test.ts

### 64. [CROSS002] No test file found for 'route.ts'. Expected one of: route.test.ts, route.spec.ts, route.test.js

- **File:** `D:/Learn/PriceChecker/pricechecker/app/api/estimate/route.ts`
- **Location:** File-level
- **Issue:** No test file found for 'route.ts'. Expected one of: route.test.ts, route.spec.ts, route.test.js
- **Suggestion:** Create a test file, e.g. tests/route.test.ts

### 65. [CROSS002] No test file found for 'route.ts'. Expected one of: route.test.ts, route.spec.ts, route.test.js

- **File:** `D:/Learn/PriceChecker/pricechecker/app/api/history/route.ts`
- **Location:** File-level
- **Issue:** No test file found for 'route.ts'. Expected one of: route.test.ts, route.spec.ts, route.test.js
- **Suggestion:** Create a test file, e.g. tests/route.test.ts

### 66. [CROSS002] No test file found for 'route.ts'. Expected one of: route.test.ts, route.spec.ts, route.test.js

- **File:** `D:/Learn/PriceChecker/pricechecker/app/api/user/me/route.ts`
- **Location:** File-level
- **Issue:** No test file found for 'route.ts'. Expected one of: route.test.ts, route.spec.ts, route.test.js
- **Suggestion:** Create a test file, e.g. tests/route.test.ts

### 67. [CROSS002] No test file found for 'layout.tsx'. Expected one of: layout.test.tsx, layout.spec.tsx, layout.test.

- **File:** `D:/Learn/PriceChecker/pricechecker/app/layout.tsx`
- **Location:** File-level
- **Issue:** No test file found for 'layout.tsx'. Expected one of: layout.test.tsx, layout.spec.tsx, layout.test.js
- **Suggestion:** Create a test file, e.g. tests/layout.test.tsx

### 68. [CROSS002] No test file found for 'page.tsx'. Expected one of: page.test.tsx, page.spec.tsx, page.test.js

- **File:** `D:/Learn/PriceChecker/pricechecker/app/page.tsx`
- **Location:** File-level
- **Issue:** No test file found for 'page.tsx'. Expected one of: page.test.tsx, page.spec.tsx, page.test.js
- **Suggestion:** Create a test file, e.g. tests/page.test.tsx

### 69. [CROSS002] No test file found for 'LoginForm.tsx'. Expected one of: LoginForm.test.tsx, LoginForm.spec.tsx, Log

- **File:** `D:/Learn/PriceChecker/pricechecker/components/auth/LoginForm.tsx`
- **Location:** File-level
- **Issue:** No test file found for 'LoginForm.tsx'. Expected one of: LoginForm.test.tsx, LoginForm.spec.tsx, LoginForm.test.js
- **Suggestion:** Create a test file, e.g. tests/LoginForm.test.tsx

### 70. [CROSS002] No test file found for 'SignupForm.tsx'. Expected one of: SignupForm.test.tsx, SignupForm.spec.tsx, 

- **File:** `D:/Learn/PriceChecker/pricechecker/components/auth/SignupForm.tsx`
- **Location:** File-level
- **Issue:** No test file found for 'SignupForm.tsx'. Expected one of: SignupForm.test.tsx, SignupForm.spec.tsx, SignupForm.test.js
- **Suggestion:** Create a test file, e.g. tests/SignupForm.test.tsx

### 71. [CROSS002] No test file found for 'EstimatorForm.tsx'. Expected one of: EstimatorForm.test.tsx, EstimatorForm.s

- **File:** `D:/Learn/PriceChecker/pricechecker/components/estimator/EstimatorForm.tsx`
- **Location:** File-level
- **Issue:** No test file found for 'EstimatorForm.tsx'. Expected one of: EstimatorForm.test.tsx, EstimatorForm.spec.tsx, EstimatorForm.test.js
- **Suggestion:** Create a test file, e.g. tests/EstimatorForm.test.tsx

### 72. [CROSS002] No test file found for 'ImageUploader.tsx'. Expected one of: ImageUploader.test.tsx, ImageUploader.s

- **File:** `D:/Learn/PriceChecker/pricechecker/components/estimator/ImageUploader.tsx`
- **Location:** File-level
- **Issue:** No test file found for 'ImageUploader.tsx'. Expected one of: ImageUploader.test.tsx, ImageUploader.spec.tsx, ImageUploader.test.js
- **Suggestion:** Create a test file, e.g. tests/ImageUploader.test.tsx

### 73. [CROSS002] No test file found for 'ResultCard.tsx'. Expected one of: ResultCard.test.tsx, ResultCard.spec.tsx, 

- **File:** `D:/Learn/PriceChecker/pricechecker/components/estimator/ResultCard.tsx`
- **Location:** File-level
- **Issue:** No test file found for 'ResultCard.tsx'. Expected one of: ResultCard.test.tsx, ResultCard.spec.tsx, ResultCard.test.js
- **Suggestion:** Create a test file, e.g. tests/ResultCard.test.tsx

### 74. [CROSS002] No test file found for 'HistoryTable.tsx'. Expected one of: HistoryTable.test.tsx, HistoryTable.spec

- **File:** `D:/Learn/PriceChecker/pricechecker/components/history/HistoryTable.tsx`
- **Location:** File-level
- **Issue:** No test file found for 'HistoryTable.tsx'. Expected one of: HistoryTable.test.tsx, HistoryTable.spec.tsx, HistoryTable.test.js
- **Suggestion:** Create a test file, e.g. tests/HistoryTable.test.tsx

### 75. [CROSS002] No test file found for 'Sidebar.tsx'. Expected one of: Sidebar.test.tsx, Sidebar.spec.tsx, Sidebar.t

- **File:** `D:/Learn/PriceChecker/pricechecker/components/layout/Sidebar.tsx`
- **Location:** File-level
- **Issue:** No test file found for 'Sidebar.tsx'. Expected one of: Sidebar.test.tsx, Sidebar.spec.tsx, Sidebar.test.js
- **Suggestion:** Create a test file, e.g. tests/Sidebar.test.tsx

### 76. [CROSS002] No test file found for 'Button.tsx'. Expected one of: Button.test.tsx, Button.spec.tsx, Button.test.

- **File:** `D:/Learn/PriceChecker/pricechecker/components/ui/Button.tsx`
- **Location:** File-level
- **Issue:** No test file found for 'Button.tsx'. Expected one of: Button.test.tsx, Button.spec.tsx, Button.test.js
- **Suggestion:** Create a test file, e.g. tests/Button.test.tsx

### 77. [CROSS002] No test file found for 'Card.tsx'. Expected one of: Card.test.tsx, Card.spec.tsx, Card.test.js

- **File:** `D:/Learn/PriceChecker/pricechecker/components/ui/Card.tsx`
- **Location:** File-level
- **Issue:** No test file found for 'Card.tsx'. Expected one of: Card.test.tsx, Card.spec.tsx, Card.test.js
- **Suggestion:** Create a test file, e.g. tests/Card.test.tsx

### 78. [CROSS002] No test file found for 'Input.tsx'. Expected one of: Input.test.tsx, Input.spec.tsx, Input.test.js

- **File:** `D:/Learn/PriceChecker/pricechecker/components/ui/Input.tsx`
- **Location:** File-level
- **Issue:** No test file found for 'Input.tsx'. Expected one of: Input.test.tsx, Input.spec.tsx, Input.test.js
- **Suggestion:** Create a test file, e.g. tests/Input.test.tsx

### 79. [CROSS002] No test file found for 'useAuth.ts'. Expected one of: useAuth.test.ts, useAuth.spec.ts, useAuth.test

- **File:** `D:/Learn/PriceChecker/pricechecker/hooks/useAuth.ts`
- **Location:** File-level
- **Issue:** No test file found for 'useAuth.ts'. Expected one of: useAuth.test.ts, useAuth.spec.ts, useAuth.test.js
- **Suggestion:** Create a test file, e.g. tests/useAuth.test.ts

### 80. [CROSS002] No test file found for 'useEstimator.ts'. Expected one of: useEstimator.test.ts, useEstimator.spec.t

- **File:** `D:/Learn/PriceChecker/pricechecker/hooks/useEstimator.ts`
- **Location:** File-level
- **Issue:** No test file found for 'useEstimator.ts'. Expected one of: useEstimator.test.ts, useEstimator.spec.ts, useEstimator.test.js
- **Suggestion:** Create a test file, e.g. tests/useEstimator.test.ts

### 81. [CROSS002] No test file found for 'jwt.ts'. Expected one of: jwt.test.ts, jwt.spec.ts, jwt.test.js

- **File:** `D:/Learn/PriceChecker/pricechecker/lib/auth/jwt.ts`
- **Location:** File-level
- **Issue:** No test file found for 'jwt.ts'. Expected one of: jwt.test.ts, jwt.spec.ts, jwt.test.js
- **Suggestion:** Create a test file, e.g. tests/jwt.test.ts

### 82. [CROSS002] No test file found for 'password.ts'. Expected one of: password.test.ts, password.spec.ts, password.

- **File:** `D:/Learn/PriceChecker/pricechecker/lib/auth/password.ts`
- **Location:** File-level
- **Issue:** No test file found for 'password.ts'. Expected one of: password.test.ts, password.spec.ts, password.test.js
- **Suggestion:** Create a test file, e.g. tests/password.test.ts

### 83. [CROSS002] No test file found for 'index.ts'. Expected one of: index.test.ts, index.spec.ts, index.test.js

- **File:** `D:/Learn/PriceChecker/pricechecker/lib/db/index.ts`
- **Location:** File-level
- **Issue:** No test file found for 'index.ts'. Expected one of: index.test.ts, index.spec.ts, index.test.js
- **Suggestion:** Create a test file, e.g. tests/index.test.ts

### 84. [CROSS002] No test file found for 'Estimation.ts'. Expected one of: Estimation.test.ts, Estimation.spec.ts, Est

- **File:** `D:/Learn/PriceChecker/pricechecker/lib/db/models/Estimation.ts`
- **Location:** File-level
- **Issue:** No test file found for 'Estimation.ts'. Expected one of: Estimation.test.ts, Estimation.spec.ts, Estimation.test.js
- **Suggestion:** Create a test file, e.g. tests/Estimation.test.ts

### 85. [CROSS002] No test file found for 'User.ts'. Expected one of: User.test.ts, User.spec.ts, User.test.js

- **File:** `D:/Learn/PriceChecker/pricechecker/lib/db/models/User.ts`
- **Location:** File-level
- **Issue:** No test file found for 'User.ts'. Expected one of: User.test.ts, User.spec.ts, User.test.js
- **Suggestion:** Create a test file, e.g. tests/User.test.ts

### 86. [CROSS002] No test file found for 'index.ts'. Expected one of: index.test.ts, index.spec.ts, index.test.js

- **File:** `D:/Learn/PriceChecker/pricechecker/lib/db/models/index.ts`
- **Location:** File-level
- **Issue:** No test file found for 'index.ts'. Expected one of: index.test.ts, index.spec.ts, index.test.js
- **Suggestion:** Create a test file, e.g. tests/index.test.ts

### 87. [CROSS002] No test file found for 'client.ts'. Expected one of: client.test.ts, client.spec.ts, client.test.js

- **File:** `D:/Learn/PriceChecker/pricechecker/lib/gemini/client.ts`
- **Location:** File-level
- **Issue:** No test file found for 'client.ts'. Expected one of: client.test.ts, client.spec.ts, client.test.js
- **Suggestion:** Create a test file, e.g. tests/client.test.ts

### 88. [CROSS002] No test file found for 'withAuth.ts'. Expected one of: withAuth.test.ts, withAuth.spec.ts, withAuth.

- **File:** `D:/Learn/PriceChecker/pricechecker/lib/middleware/withAuth.ts`
- **Location:** File-level
- **Issue:** No test file found for 'withAuth.ts'. Expected one of: withAuth.test.ts, withAuth.spec.ts, withAuth.test.js
- **Suggestion:** Create a test file, e.g. tests/withAuth.test.ts

### 89. [CROSS002] No test file found for 'withRateLimit.ts'. Expected one of: withRateLimit.test.ts, withRateLimit.spe

- **File:** `D:/Learn/PriceChecker/pricechecker/lib/middleware/withRateLimit.ts`
- **Location:** File-level
- **Issue:** No test file found for 'withRateLimit.ts'. Expected one of: withRateLimit.test.ts, withRateLimit.spec.ts, withRateLimit.test.js
- **Suggestion:** Create a test file, e.g. tests/withRateLimit.test.ts

### 90. [CROSS002] No test file found for 'apiResponse.ts'. Expected one of: apiResponse.test.ts, apiResponse.spec.ts, 

- **File:** `D:/Learn/PriceChecker/pricechecker/lib/utils/apiResponse.ts`
- **Location:** File-level
- **Issue:** No test file found for 'apiResponse.ts'. Expected one of: apiResponse.test.ts, apiResponse.spec.ts, apiResponse.test.js
- **Suggestion:** Create a test file, e.g. tests/apiResponse.test.ts

### 91. [CROSS002] No test file found for 'imageUtils.ts'. Expected one of: imageUtils.test.ts, imageUtils.spec.ts, ima

- **File:** `D:/Learn/PriceChecker/pricechecker/lib/utils/imageUtils.ts`
- **Location:** File-level
- **Issue:** No test file found for 'imageUtils.ts'. Expected one of: imageUtils.test.ts, imageUtils.spec.ts, imageUtils.test.js
- **Suggestion:** Create a test file, e.g. tests/imageUtils.test.ts

### 92. [CROSS002] No test file found for 'auth.schemas.ts'. Expected one of: auth.schemas.test.ts, auth.schemas.spec.t

- **File:** `D:/Learn/PriceChecker/pricechecker/lib/validation/auth.schemas.ts`
- **Location:** File-level
- **Issue:** No test file found for 'auth.schemas.ts'. Expected one of: auth.schemas.test.ts, auth.schemas.spec.ts, auth.schemas.test.js
- **Suggestion:** Create a test file, e.g. tests/auth.schemas.test.ts

### 93. [CROSS002] No test file found for 'next.config.ts'. Expected one of: next.config.test.ts, next.config.spec.ts, 

- **File:** `D:/Learn/PriceChecker/pricechecker/next.config.ts`
- **Location:** File-level
- **Issue:** No test file found for 'next.config.ts'. Expected one of: next.config.test.ts, next.config.spec.ts, next.config.test.js
- **Suggestion:** Create a test file, e.g. tests/next.config.test.ts

### 94. [CROSS002] No test file found for 'proxy.ts'. Expected one of: proxy.test.ts, proxy.spec.ts, proxy.test.js

- **File:** `D:/Learn/PriceChecker/pricechecker/proxy.ts`
- **Location:** File-level
- **Issue:** No test file found for 'proxy.ts'. Expected one of: proxy.test.ts, proxy.spec.ts, proxy.test.js
- **Suggestion:** Create a test file, e.g. tests/proxy.test.ts

### 95. [CROSS002] No test file found for 'authStore.ts'. Expected one of: authStore.test.ts, authStore.spec.ts, authSt

- **File:** `D:/Learn/PriceChecker/pricechecker/store/authStore.ts`
- **Location:** File-level
- **Issue:** No test file found for 'authStore.ts'. Expected one of: authStore.test.ts, authStore.spec.ts, authStore.test.js
- **Suggestion:** Create a test file, e.g. tests/authStore.test.ts

### 96. [CROSS002] No test file found for 'estimatorStore.ts'. Expected one of: estimatorStore.test.ts, estimatorStore.

- **File:** `D:/Learn/PriceChecker/pricechecker/store/estimatorStore.ts`
- **Location:** File-level
- **Issue:** No test file found for 'estimatorStore.ts'. Expected one of: estimatorStore.test.ts, estimatorStore.spec.ts, estimatorStore.test.js
- **Suggestion:** Create a test file, e.g. tests/estimatorStore.test.ts

### 97. [CROSS002] No test file found for 'api.ts'. Expected one of: api.test.ts, api.spec.ts, api.test.js

- **File:** `D:/Learn/PriceChecker/pricechecker/types/api.ts`
- **Location:** File-level
- **Issue:** No test file found for 'api.ts'. Expected one of: api.test.ts, api.spec.ts, api.test.js
- **Suggestion:** Create a test file, e.g. tests/api.test.ts

### 98. [CROSS002] No test file found for 'next.d.ts'. Expected one of: next.d.test.ts, next.d.spec.ts, next.d.test.js

- **File:** `D:/Learn/PriceChecker/pricechecker/types/next.d.ts`
- **Location:** File-level
- **Issue:** No test file found for 'next.d.ts'. Expected one of: next.d.test.ts, next.d.spec.ts, next.d.test.js
- **Suggestion:** Create a test file, e.g. tests/next.d.test.ts

### 99. [ARCH003] '.env' is in .gitignore but no .env.example file exists for onboarding.

- **File:** `.env.example`
- **Location:** File-level
- **Issue:** '.env' is in .gitignore but no .env.example file exists for onboarding.
- **Suggestion:** Create .env.example with placeholder values so new developers know which env vars to set.

### 100. [ARCH005] File has 7347 lines (threshold: 300). Split into smaller modules with single responsibilities.

- **File:** `D:/Learn/PriceChecker/pricechecker/package-lock.json`
- **Location:** File-level
- **Issue:** File has 7347 lines (threshold: 300). Split into smaller modules with single responsibilities.
- **Suggestion:** Extract related functions into separate files following the Single Responsibility Principle.

---

## 🔵 Suggestions (Optional)

1. **[NEXT004]** `D:/Learn/PriceChecker/pricechecker/components/auth/LoginForm.tsx` Line 1 — 'use client' directive found. Verify this component needs client-side rendering — prefer Server Components.
2. **[NEXT004]** `D:/Learn/PriceChecker/pricechecker/components/auth/SignupForm.tsx` Line 1 — 'use client' directive found. Verify this component needs client-side rendering — prefer Server Components.
3. **[NEXT004]** `D:/Learn/PriceChecker/pricechecker/components/estimator/EstimatorForm.tsx` Line 1 — 'use client' directive found. Verify this component needs client-side rendering — prefer Server Components.
4. **[NEXT004]** `D:/Learn/PriceChecker/pricechecker/components/estimator/ImageUploader.tsx` Line 1 — 'use client' directive found. Verify this component needs client-side rendering — prefer Server Components.
5. **[NEXT004]** `D:/Learn/PriceChecker/pricechecker/components/layout/Sidebar.tsx` Line 1 — 'use client' directive found. Verify this component needs client-side rendering — prefer Server Components.
6. **[TS004]** `D:/Learn/PriceChecker/pricechecker/lib/db/models/Estimation.ts` Line 42 — Identifier uses 'ID' suffix. Use 'Id' instead (e.g., userId not userID).
7. **[TS004]** `D:/Learn/PriceChecker/pricechecker/lib/db/models/Estimation.ts` Line 47 — Identifier uses 'ID' suffix. Use 'Id' instead (e.g., userId not userID).
8. **[TS004]** `D:/Learn/PriceChecker/pricechecker/lib/db/models/User.ts` Line 37 — Identifier uses 'ID' suffix. Use 'Id' instead (e.g., userId not userID).
9. **[ARCH004]** `D:\Learn\PriceChecker\pricechecker` File-level — Framework 'nextjs' structure: missing src. Next.js projects should follow: app/ (page.tsx, layout.tsx), src/components/,

---

## How to Suppress Violations

Add an inline comment to suppress a specific line:
```python
eval('some_code')  # noqa
eval('some_code')  # cra-ignore
```
```javascript
console.log('debug'); // noqa
console.log('debug'); // cra-ignore
```

---
*Generated by Code Review Agent*