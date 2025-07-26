# @yelaiii configs

Configuration packages for unifying code style across projects.

## 📦 Packages

- **[@yelaiii/eslint](#eslint-config)** - ESLint configuration with React, Next.js and TypeScript support
- **[@yelaiii/prettier](#prettier-config)** - Prettier configuration for code formatting
- **[@yelaiii/stylelint](#stylelint-config)** - Stylelint configuration for CSS/SCSS

---

## ESLint Config

### Installation

#### Basic installation

```bash
bun add -d @yelaiii/eslint eslint
```

#### With React support

```bash
bun add -d @yelaiii/eslint eslint @eslint-react/eslint-plugin eslint-plugin-react eslint-plugin-react-refresh
```

#### With Next.js support

```bash
bun add -d @yelaiii/eslint eslint @next/eslint-plugin-next
```

#### With accessibility support

```bash
bun add -d @yelaiii/eslint eslint eslint-plugin-jsx-a11y
```

#### Full installation (all features)

```bash
bun add -d @yelaiii/eslint eslint @eslint-react/eslint-plugin @next/eslint-plugin-next eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-refresh
```

---

## Prettier Config

### Installation

```bash
bun add -d @yelaiii/prettier prettier
```

---

## Stylelint Config

### Installation

```bash
bun add -d @yelaiii/stylelint stylelint stylelint-config-standard stylelint-order
```

---

## 🚀 Quick Start

Install all configs for a new project:

```bash
bun add -d @yelaiii/eslint @yelaiii/prettier @yelaiii/stylelint eslint prettier stylelint stylelint-config-standard stylelint-order
```

If using React/Next.js:

```bash  
bun add -d @yelaiii/eslint @yelaiii/prettier @yelaiii/stylelint eslint prettier stylelint stylelint-config-standard stylelint-order @eslint-react/eslint-plugin @next/eslint-plugin-next eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-refresh
```
