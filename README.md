# Brain Games

A collection of five interactive mathematical games designed to train your brain. Built as a console application following the principles of popular brain-training mobile apps.

## 🎮 Available Games

- **brain-even** — Determine if a number is even or odd
- **brain-calc** — Solve basic arithmetic expressions
- **brain-gcd** — Find the greatest common divisor of two numbers
- **brain-prime** — Check if a number is prime
- **brain-progression** — Identify the missing number in an arithmetic progression

## Requirements

### System Requirements

This application has been tested on:

- macOS 10.15+
- Ubuntu 20.04+
- Windows 10 (version 1909)+

### Software Dependencies

- Node.js v14 or higher
- npm v6 or higher
- Git v2.25 or higher

Verify your installations:

```bash
node --version
npm --version
git --version
```

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-directory>
```

### 2. Install Dependencies

```bash
make install
```

### 3. Link the Package (Optional)

To use the games globally from anywhere in your terminal:

```bash
npm link
```

## Usage

After installation, you can run any game using `make` commands:

### Calculator

Solve arithmetic expressions:

```bash
make brain-calc
```

### Greatest Common Divisor

Find the GCD of two numbers:

```bash
make brain-gcd
```

### Parity Check

Determine if a number is even:

```bash
make brain-even
```

### Prime Number Check

Check if a number is prime:

```bash
make brain-prime
```

### Arithmetic Progression

Find the missing number in a sequence:

```bash
make brain-progression
```

Alternatively, after running `npm link`, you can use the global commands directly:

```bash
brain-games      # Main entry point
brain-even       # Even number game
brain-calc       # Calculator game
brain-gcd        # GCD game
brain-prime      # Prime number game
brain-progression # Progression game
```  

## Gameplay demos

### brain-calc

[![asciicast](https://asciinema.org/a/iSUH4qggS81PkZqvXLCZ8x2CM.svg)](https://asciinema.org/a/iSUH4qggS81PkZqvXLCZ8x2CM)

### brain-even

[![asciicast](https://asciinema.org/a/aKT2x6Us75Zff7lpsNZvOQu9M.svg)](https://asciinema.org/a/aKT2x6Us75Zff7lpsNZvOQu9M)

### brain-gcd

[![asciicast](https://asciinema.org/a/VnkeJZl4heSBFPHFWvf9abj70.svg)](https://asciinema.org/a/VnkeJZl4heSBFPHFWvf9abj70)

### brain-prime

[![asciicast](https://asciinema.org/a/YBVfxi1s16cHdEK1vWb5f1OMT.svg)](https://asciinema.org/a/YBVfxi1s16cHdEK1vWb5f1OMT)

### brain-progression

[![asciicast](https://asciinema.org/a/hRxmRgrtC5GcsG2e1jsjHPQGe.svg)](https://asciinema.org/a/hRxmRgrtC5GcsG2e1jsjHPQGe)

### Hexlet tests and linter status

[![Actions Status](https://github.com/chelninecz/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/chelninecz/frontend-project-44/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/7dba59053392875d431f/maintainability)](https://codeclimate.com/github/chelninecz/frontend-project-44/maintainability)
