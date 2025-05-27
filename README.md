# To-Do-List

A modern, elegant, and responsive to-do list application with a warm color scheme and dynamic grid layout.

## Features

✨ **Professional Design**
- Warm, elegant color palette with golden-brown tones
- Modern card-based layout with smooth animations
- Responsive design that works on all devices

📱 **Dynamic Grid Layout**
- Compact square task cards that fit more content on screen
- Responsive 2D grid that adapts to screen size
- Optimized for both desktop and mobile viewing

🚀 **Core Functionality**
- Add new tasks with Enter key or button click
- Mark tasks as complete/incomplete with checkbox
- Delete tasks with confirmation dialog
- Real-time statistics tracking (Total, Completed, Pending)
- Task creation date tracking

## File Structure

```
todo-app/
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── script.js       # JavaScript functionality
└── README.md       # This documentation file
```

## Installation & Setup

1. **Download Files**
   - Download all four files (index.html, styles.css, script.js, README.md)
   - Place them in the same folder/directory

2. **Launch the App**
   - Simply open `index.html` in any modern web browser
   - No server setup required - runs completely in the browser

3. **File Dependencies**
   - Make sure all files are in the same directory
   - The HTML file links to `styles.css` and `script.js`
   - Do not rename the CSS or JS files unless you update the HTML links

## Usage

### Adding Tasks
- Type your task in the input field
- Click "Add Task" button or press Enter
- Task will appear as a new card in the grid

### Managing Tasks
- **Complete Task**: Click the checkbox to mark as done
- **Delete Task**: Click the "Delete" button (confirms before deletion)
- **View Stats**: Check the statistics bar for task counts

### Responsive Features
- **Desktop**: Shows multiple columns of task cards
- **Tablet**: Adapts to medium-sized screens with fewer columns
- **Mobile**: Single or double column layout for optimal viewing

## Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Changing Colors
Edit `styles.css` to modify the color scheme:
- Main gradient: Look for `background: linear-gradient(135deg, #d4a574 0%, #b8860b 100%)`
- Header colors: Search for `.header` styles
- Button colors: Modify `.add-btn` and `.delete-btn` styles

### Adjusting Grid Size
In `styles.css`, modify the grid template:
```css
.tasks-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```
Change `200px` to make cards larger or smaller.

### Adding Features
The JavaScript is modular and easy to extend:
- Add new functions to `script.js`
- Task data is stored in the `tasks` array
- Use `renderTasks()` to refresh the display after changes

## Technical Details

- **No Dependencies**: Pure HTML, CSS, and JavaScript
- **Data Storage**: Tasks stored in memory (resets on page refresh)
- **Responsive Design**: CSS Grid with mobile-first approach
- **Performance**: Optimized for smooth animations and interactions

## Troubleshooting

**Tasks disappear on refresh**
- This is normal behavior - tasks are stored in browser memory only
- To persist data, you would need to add localStorage functionality

**Styling looks broken**
- Ensure `styles.css` is in the same folder as `index.html`
- Check that the file isn't corrupted or partially downloaded

**JavaScript not working**
- Ensure `script.js` is in the same folder as `index.html`
- Check browser console (F12) for any error messages
- Make sure you're opening the HTML file in a browser, not a text editor

## License

This project is open source and available under the MIT License. Feel free to modify and distribute as needed.

---

*For support or questions, check that all files are properly downloaded and in the same directory.*
