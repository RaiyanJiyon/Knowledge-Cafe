# Knowledge Cafe - Blog Website

A modern blog website built with React where users can read articles, bookmark them, and track reading time. This project demonstrates advanced React concepts, state management, and responsive design principles.

## 🚀 Features

- **Article Reading**: Browse through various tech-related articles
- **Bookmark Management**: Save interesting articles for later reading
- **Reading Time Tracking**: Keep track of time spent reading articles
- **Responsive Design**: Fully responsive layout for all devices
- **Modern UI**: Clean and intuitive user interface

## 💻 Technologies Used

- **React.js** - Frontend library
- **Tailwind CSS** - Styling and UI components
- **JavaScript (ES6+)** - Programming language
- **Props Types** - Type checking
- **React Hooks** - useState, useEffect

## 🛠️ Installation Steps

1. Clone the repository
```bash
git clone https://github.com/RaiyanJiyon/Knowledge-Cafe.git
```

2. Change the working directory
```bash
cd knowledge-cafe
```

3. Install dependencies
```bash
npm install
```

4. Run the app
```bash
npm run dev
```

🌟 You are all set! Open [localhost:5173](http://localhost:5173) to see the app.

## 🔥 Key Components

### App.jsx
- Main component handling state management
- Controls reading time and bookmarks
- Manages data flow between components

### Blogs.jsx
- Displays list of blog posts
- Handles fetching blog data
- Manages blog interaction events

### Blog.jsx
- Individual blog post component
- Handles bookmark functionality
- Displays post metadata and content

### Bookmark.jsx
- Shows bookmarked articles
- Displays total reading time
- Manages bookmark list

## 📁 Project Structure

```
knowledge-cafe/
├── src/
│   ├── components/
│   │   ├── Blog/
│   │   │   └── Blog.jsx
│   │   ├── Blogs/
│   │   │   └── Blogs.jsx
│   │   ├── Bookmark/
│   │   │   └── Bookmark.jsx
│   │   └── Header/
│   │       └── Header.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── public/
│   └── blog.json
├── index.html
└── package.json
```

## 🌟 Core Functionalities

1. **Blog Listing**
   - Display blogs from JSON data
   - Show author information
   - Display reading time

2. **Bookmark System**
   - Add bookmarks
   - Store bookmarked articles
   - Show bookmark count

3. **Reading Time Calculator**
   - Track time spent reading
   - Calculate total reading time
   - Update reading progress


⭐️ Star this repo if you like what you see!