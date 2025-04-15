## This GitHub Pages repo is hosted at https://www.pitware.tech

Note that the GitHub Pages documentation explains things complicated, unstructured and vague.

### Custom domain configuration

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

### Development methods

