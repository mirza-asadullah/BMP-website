import fs from "fs";
import fg from "fast-glob";
const files = await fg(["**/*.{js,jsx,ts,tsx,css}"], {
  dot: true,
  ignore: ["**/node_modules/**", "**/.git/**", "**/dist/**", "**/build/**"],
});
const removeComments = (code) => {
  let out = "";
  let i = 0;
  const len = code.length;
  while (i < len) {
    const ch = code[i];
    const next = code[i + 1];
    if (ch === "{") {
      let j = i + 1;
      while (j < len && /[ \t\r\n]/.test(code[j])) j++;
      if (code[j] === "/" && code[j + 1] === "*") {
        const after = code[j + 2];
        if (
          after === " " ||
          after === "\t" ||
          after === "\n" ||
          after === "\r"
        ) {
          i = j + 2;
          while (i < len && !(code[i] === "*" && code[i + 1] === "/")) i++;
          i += 2;
          while (i < len && /[ \t\r\n]/.test(code[i])) i++;
          if (code[i] === "}") i++;
          continue;
        }
      }
    }
    if (ch === "/") {
      if (next === "*") {
        const after = code[i + 2];
        if (
          after === " " ||
          after === "\t" ||
          after === "\n" ||
          after === "\r"
        ) {
          i += 2;
          while (i < len && !(code[i] === "*" && code[i + 1] === "/")) i++;
          i += 2;
          continue;
        }
        out += ch;
        i++;
        continue;
      }
      let j = out.length - 1;
      let prev = "";
      while (j >= 0) {
        const pc = out[j];
        if (!/\s/.test(pc)) {
          prev = pc;
          break;
        }
        j--;
      }
      const isRegexAllowedBefore = (c) => {
        if (!c) return true;
        return /[\(=\[:;,!&|?{}+\-~*/%^<>]/.test(c);
      };
      if (next !== "/" && isRegexAllowedBefore(prev)) {
        out += ch;
        i++;
        let escaped = false;
        while (i < len) {
          const rc = code[i];
          out += rc;
          if (!escaped && rc === "/") {
            i++;
            while (i < len && /[gimsuy]/.test(code[i])) {
              out += code[i];
              i++;
            }
            break;
          }
          escaped = !escaped && rc === "\\";
          i++;
        }
        continue;
      }
      if (next === "/") {
        const after = code[i + 2];
        if (
          after === " " ||
          after === "\t" ||
          after === "\n" ||
          after === "\r"
        ) {
          i += 2;
          while (i < len && code[i] !== "\n" && code[i] !== "\r") i++;
          continue;
        }
        out += ch;
        i++;
        continue;
      }
    }
    if (ch === "'") {
      out += ch;
      i++;
      while (i < len) {
        const c = code[i];
        out += c;
        if (c === "\\") {
          if (i + 1 < len) {
            out += code[i + 1];
            i += 2;
            continue;
          }
        }
        if (c === "'") {
          i++;
          break;
        }
        i++;
      }
      continue;
    }
    if (ch === '"') {
      out += ch;
      i++;
      while (i < len) {
        const c = code[i];
        out += c;
        if (c === "\\") {
          if (i + 1 < len) {
            out += code[i + 1];
            i += 2;
            continue;
          }
        }
        if (c === '"') {
          i++;
          break;
        }
        i++;
      }
      continue;
    }
    if (ch === "`") {
      out += ch;
      i++;
      while (i < len) {
        const c = code[i];
        if (c === "\\") {
          out += c;
          if (i + 1 < len) {
            out += code[i + 1];
            i += 2;
            continue;
          }
        }
        if (c === "$" && code[i + 1] === "{") {
          out += "${";
          i += 2;
          let depth = 1;
          while (i < len && depth > 0) {
            const cc = code[i];
            out += cc;
            if (cc === "{") depth++;
            else if (cc === "}") depth--;
            i++;
          }
          continue;
        }
        out += c;
        i++;
        if (c === "`") break;
      }
      continue;
    }
    out += ch;
    i++;
  }
  return out.replace(/^\s*[\r\n]/gm, "");
};
for (const file of files) {
  const src = fs.readFileSync(file, "utf8");
  const clean = removeComments(src);
  fs.writeFileSync(file, clean, "utf8");
  console.log(`✅ Cleaned comments from: ${file}`);
}
