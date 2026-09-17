# Selen Eski website

This is a simple static website for GitHub Pages.

## Files

- `index.html` is the homepage.
- `cv.html` is the CV page.
- `research.html` is the research page.
- `unpublished-findings.html` is the unpublished findings page.
- `contact.html` is the contact page.
- `assets/styles.css` controls the design.
- `assets/theme.js` controls the light/dark theme button.

## Publish on GitHub Pages

1. Go to https://github.com and sign in.
2. Click the `+` button in the top-right corner.
3. Click `New repository`.
4. Repository name: `seleneski.github.io`
5. Set it to `Public`.
6. Click `Create repository`.
7. Click `uploading an existing file`.
8. Drag all files from this folder into GitHub.
9. Click `Commit changes`.
10. Wait 1-3 minutes.
11. Visit `https://seleneski.github.io`.

## Important

The portrait and CV PDF currently point to the old public Netlify URLs. To make the GitHub site completely independent:

1. Put your portrait file in `assets/photo.JPG`.
2. Put your CV PDF in `assets/cv.pdf`.
3. In `index.html`, change the image link from `https://seleneski.netlify.app/media/site/photo.JPG` to `assets/photo.JPG`.
4. In `cv.html`, change the PDF link from `https://seleneski.netlify.app/media/cv/pdf.pdf` to `assets/cv.pdf`.
