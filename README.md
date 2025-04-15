# This GitHub Pages repo is hosted at https://www.pitware.tech

## Custom domain configuration

Note that the GitHub Pages documentation explains things complicated, unstructured and vague.

### Configuration Steps
1. Disable built-in website hosting from pitWare cPanel.
2. [Configure pitWare DNS](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain-and-the-www-subdomain-variant) for use with GitHub Pages.
3. Configure and verify pitWare availability from GitHub Pages.
4. Create GitHub Action to enable [hosting of static files](https://docs.github.com/en/pages/quickstart).

In case of pitWare domain takeover, consider [verifying manually](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages).

The most useful piece of documentation regarding DNS configuration is the following: <br>
*Navigate to your DNS provider and create a CNAME record for the www subdomain that points to your GitHub Pages default domain.
For example, if your site is located at <user>.github.io, you should create a CNAME record that points www.example.com to <user>.github.io
Similarly, for an organization site located at <organization>.github.io, you should create a CNAME record that points www.example.com to <organization>.github.io.
Ensure that the CNAME record points directly to <user>.github.io or <organization>.github.io without including the repository name.*

## Development methods

### Using website designers
1. Design the website using tools like Mozilla Solo or Adobe XD
2. Export the website or create a local copy with wget
3. Place the website files in this repo inside a folder
4. Update GitHub Actions to serve files from the added folder

### Using Next.js with React
1. Next.JS allows compiling the React application [into static files](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)
2. This [has limitations](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports#supported-features-1), but allows creating a more complex presentation website
3. Open `next-app` folder and run `npm run build` command to generate the static website in `out` folder
4. Install simple webserver with `npm i -g serve` and use it with `serve out`
5. Make sure that the Next.js welcome page is displayed properly, not just text
6. Completely overwrite `next-static` with the contents from `next-app/out` folder
7. Make sure GitHub Actions is configured to serve files from `next-static` folder

It takes a few minutes for https://www.pitware.tech to become available after changing the website contents. Note that opening `index.html` from the browser directly does not work because of cross-site requests.

More information about this development method can be found at [Geeks4Geeks](https://www.geeksforgeeks.org/next-js-static-html-export/)
