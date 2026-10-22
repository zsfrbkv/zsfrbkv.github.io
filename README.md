# Publishing a blog post

Posts live in the `_articles` folder as Markdown files. To publish one from
GitHub:

1. Open the `_articles` folder and choose **Add file → Create new file**.
2. Name the file with a short, lowercase, hyphen-separated slug and the `.md`
   extension, for example `notes-on-a-new-project.md`.
3. Add the front matter and post text:

   ```markdown
   ---
   title: A clear post title
   date: "2026-10-22"
   category: note
   description: A short summary shown on the blog and home page.
   ---

   Write the post here in Markdown.
   ```

4. Preview the changes and commit them to `main`. GitHub Pages builds and
   publishes the site automatically.

The post URL is generated as `/blog/your-file-name/`. The blog and home page
lists update automatically from the files in `_articles`, sorted by the post
date.