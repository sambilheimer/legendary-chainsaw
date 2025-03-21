# My Blog

A simple, clean static blog built with Jekyll and hosted on GitHub Pages.

## Getting Started

### Local Development

To run this blog locally:

1. Install Ruby and Jekyll if you haven't already:

   ```
   gem install bundler jekyll
   ```

2. Clone this repository:

   ```
   git clone https://github.com/yourusername/yourusername.github.io.git
   cd yourusername.github.io
   ```

3. Install dependencies:

   ```
   bundle install
   ```

4. Run the local server:

   ```
   bundle exec jekyll serve
   ```

5. Visit `http://localhost:4000` in your browser

### Adding a New Post

1. Create a new markdown file in the `_posts` directory with the format `YYYY-MM-DD-title.md`
2. Add the front matter at the top of the file:
   ```
   ---
   layout: post
   title: "Your Post Title"
   description: "A brief description"
   date: YYYY-MM-DD
   tags: [tag1, tag2]
   ---
   ```
3. Write your post content in markdown below the front matter
4. Save the file and push to GitHub to publish

## License

This project is open source and available under the [MIT License](LICENSE).
