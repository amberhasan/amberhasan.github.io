# Personal Website – Quick README

**Repo:** `amberhasan.github.io` (user site)  
**Deploy:** GitHub Actions → GitHub Pages  
**Rule #1:** **Never edit `build/`**. Only edit source (`src/`, `public/`, config). Push to `main`. Actions builds & deploys.

---

## Update the resume (and other public assets)

- Put files in `public/` (e.g., `public/resume.pdf`).
- If you keep the **same filename**, you don’t need to change any code/links.
- Steps:
  ```bash
  # replace public/resume.pdf with the new file
  git add public/resume.pdf
  git commit -m "Update resume (Aug 2025)"
  git push
  ```

```

Everything is on GitHub Actions so you should be able to just push the code and see it a couple min later.
I actually had to change the name of the resume and then change the name in the iframe. (check last commit)
```
