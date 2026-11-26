# VideoKit Pro v2.0

A mobile-first, browser-based video utility suite. Files are processed locally in the browser.

## Features
- Drag-and-drop video import and media metadata
- Start/end trimming with numeric inputs and range sliders
- Preview selected range
- Output aspect ratios: original, 16:9, 9:16, 1:1, 4:5
- Source, 1080p max, 720p max and 480p max output sizing
- Fit or cover mode, playback speed, audio volume and mute
- Brightness, contrast and saturation adjustments
- 0/90/180/270 degree rotation
- Optional text watermark with position and size
- Export progress and WebM download via MediaRecorder
- Current-frame PNG capture
- Dark/light theme and responsive layout

## Export limitations
Export is rendered in real time through browser MediaRecorder and generally produces WebM. MP4 export is not guaranteed or provided. Keep the tab open and screen awake during export. Codec support and maximum usable video size depend on browser/device. Very large clips may fail on mobile. No server upload, no multi-track timeline, transitions, subtitles or guaranteed audio codec conversion.

## Use
Open `index.html` through GitHub Pages or a local static server in a recent browser. HTTPS is recommended for browser media APIs.
