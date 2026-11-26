# Secure Password Toolkit

A mobile-friendly, privacy-first browser tool for generating passwords and passphrases and estimating password strength.

## Features
- Cryptographically secure random generation using the Web Crypto API.
- 8–64 character passwords with configurable uppercase, lowercase, digits and symbols.
- Optional exclusion of visually similar characters.
- Random-word passphrases with optional number, capitalization and separator.
- Local password-strength estimate and practical feedback.
- Copy buttons, responsive layout and dark/light theme.
- No account, backend, analytics or password storage.

## Run
Open `index.html` from a local web server or deploy the folder to a static HTTPS host. Web Crypto may be unavailable on insecure origins in some browsers.

## Privacy and limitations
All processing is client-side. Do not paste a real, currently-used password into the strength checker. The checker is a simple heuristic and does not query breached-password databases or guarantee security. Use a reputable password manager and enable multi-factor authentication.
