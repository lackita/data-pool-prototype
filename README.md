# Data Pool

A Jekyll site for the Data Pool project, which helps you unite all your third-party data and build intelligent agents.

## Development

This site uses Jekyll and is configured for GitHub Pages.

### Prerequisites

- Ruby 2.7.0 or higher
- Jekyll and Bundler gems

### Local Development

1. Clone the repository
2. Install dependencies:
   ```
   bundle install
   ```
3. Run the development server:
   ```
   bundle exec jekyll serve --livereload
   ```
4. View the site at `http://localhost:4000/data-pool/`

### Project Structure

- `_layouts/` - Custom layouts
- `assets/` - CSS, JavaScript, and image files
- `workflows.html`, `reports.html`, `connections.html` - Main pages that match the prototype tabs

### Deployment to GitHub Pages

The site is configured to be deployed to GitHub Pages. To deploy:

1. Push the repository to GitHub
2. Go to the repository settings
3. In the "Pages" section, set the source to the main branch
4. The site will be available at `https://[username].github.io/data-pool/`

## Design

The site design is based on the React prototype in `data-pool-prototype.tsx`. The main features include:

- Tab-based navigation (Workflows, Reports, Connections)
- Card-based UI for workflows
- Table view for reports
- Connection management interface

## Customization

To customize the site:

1. Edit `_config.yml` to update site metadata
2. Modify the CSS in `assets/css/main.scss`
3. Update the content in the HTML files for each section