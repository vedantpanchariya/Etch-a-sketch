# Etch-A-Sketch

[![Live Demo](https://img.shields.io/badge/Demo-Live-brightgreen)]((https://vedantpanchariya.github.io/Etch-a-sketch))

An interactive drawing web application that lets you create pixel art on a customizable grid. Features both desktop and mobile support with touch-optimized drawing experience.

## Features

- **Dynamic Grid System**: Adjustable grid size from 1x1 to 64x64 using a slider
- **Dual Color Modes**: 
  - Single color mode with custom color picker
  - Random color mode for rainbow effects
- **Cross-Platform Support**:
  - Desktop: Mouse-based drawing with double-click activation
  - Mobile: Touch-optimized with dedicated start/stop buttons
- **Real-time Drawing**: Smooth drawing experience with mouseover and touchmove events
- **Responsive Design**: Automatically adapts UI for mobile devices (≤768px)
- **Canvas Controls**: Easy reset and grid regeneration

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- DOM Manipulation
- Event Listeners (mouse & touch events)
- Responsive Design

## How to Use

### Desktop:
1. Adjust grid size using the slider (10x10 by default)
2. Choose color mode: **Single Color** (with color picker) or **Random Colors**
3. **Double-click** on the canvas to start drawing
4. Hover over grid cells to draw
5. **Single-click** to stop drawing
6. Use **Clear** button to reset canvas

### Mobile:
1. Adjust grid size using the slider
2. Choose your color mode
3. Tap **Start Drawing** button
4. Drag your finger across the canvas to draw
5. Tap **Stop Drawing** button when done
6. Use **Clear** button to reset

## Installation

1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/etch-a-sketch.git
```

2. Open `index.html` in your browser
```bash
cd etch-a-sketch
open index.html
```

## Project Structure
```bash
├── index.html
├── style.css
└── script.js
```

## What I Learned

- Advanced DOM manipulation and dynamic element creation
- Implementing touch events for mobile compatibility
- Using `touchmove` and `elementFromPoint()` for continuous touch tracking
- Responsive design with media query detection in JavaScript
- Event handling across different devices (mouse vs touch)
- Performance optimization for large grid rendering
- Preventing default browser behavior for better UX

## Key Technical Implementations

- **Dynamic Grid Generation**: Creates grid cells based on container width for perfect responsiveness
- **Touch Event Handling**: Uses `touchstart`, `touchmove`, and `preventDefault()` for smooth mobile drawing
- **Responsive Button System**: Automatically shows/hides mobile controls based on screen size
- **Efficient Event Delegation**: Uses container-level event listeners for better performance

## Future Enhancements

- [ ] Add eraser mode
- [ ] Implement grid border toggle
- [ ] Add download canvas as image feature
- [ ] Include color history/palette
- [ ] Add undo/redo functionality

## License

This project is open source and available under the MIT License.

## Contact

Vedant Panchariya - [GitHub](https://github.com/YOUR_USERNAME) | [LinkedIn](YOUR_LINKEDIN_URL)
