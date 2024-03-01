# BRAIN GAMES

Console application, which is a set of five simple mathematical games. They are built on the principle of popular mobile applications for brain training.

## Minimum Requirements

This console application has been tested and is known to work on the following operating systems:

- macOS version 10.15 and above
- Ubuntu version 20.04 and above
- Windows 10 version 1909 and above

If you are using a different operating system, please let us know and we will do our best to ensure compatibility.

## Installation and launch

### Installing dependencies

Before installing the games, you need to make sure you have the following dependencies installed on your system:

- Node.js version 14 or above
- npm version 6 or above
- Git version 2.25 or above

To install these dependencies, follow these steps:

1. Install Node.js and npm by following the instructions on the [official Node.js website](https://nodejs.org/en/download/).
2. Install Git by following the instructions on the [official Git website](https://git-scm.com/downloads).
3. Verify that Node.js, npm, and Git are installed correctly by running the following commands in your terminal or command prompt:

node --version
npm --version
git --version

If these commands return version numbers that match the requirements above, you are ready to install the games.

### Games are installed in 3 steps

1. clone the repository with the **git clone** command
2. install dependencies with **make install** command
3. install games on the system using the **npm link** command

### After installation, games are launched with the commands

"Calculator"
**make brain-calc**  
"Greatest common divisor"
**make brain-gcd**  
"Parity check"
**make brain-even**  
"Is it a prime number?"
**make brain-prime**  
"Arithmetic progression"
**make brain-progression**  

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
