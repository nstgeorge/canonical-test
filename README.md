# Canonical Test

[A deployed version of this project is available.](https://nstgeorge.github.io/canonical-test/)

This page was built from [my React template](https://github.com/nstgeorge/react-template).

## How To Run

```bash
npm install
npm run dev
```

Open up [localhost:5173](http://localhost:5173) and you should be set!

## Potential Inaccuracies
 - "Article" does not appear in the WordPress data, so it is hardcoded with the option to easily extend in the future.
 - `p-card` Y padding is a little larger on the default card styling. I decided to match existing styling and made slight adjustments to the overall spacing to account for this.

## Assumptions Made
 - "Cloud and Server" was the topic of the articles in the mockup (not the group or a different tag).
 - Strictly one author per article.
 - Card vertical size is determined by title length and not static.

## Future Improvements (If I Were To Continue)
 - Improve loading UI (fix jumping around)
 - Build mock page around these articles, including title and greyed-out article blocks below the existing one



