const relative = require('./relative-path.cjs');

module.exports = function({page}) {
  return `
  <div id="nav-main-wrapper">
    <nav id="nav-main">
      <a href="${relative(page.url, '/')}">
        <img 
          src="${relative(page.url, '/static/img/home.svg')}" 
          class="navbar-page-icon"
        />
        Home
      </a>
      <a href="${relative(page.url, '/examples/')}">
        <img 
          src="${relative(page.url, '/static/img/paperplane.svg')}" 
          class="navbar-page-icon"
        />
        Examples
      </a>
      <a href="${relative(page.url, '/api/')}">
        <img 
          src="${relative(page.url, '/static/img/book.svg')}" 
          class="navbar-page-icon"
        />
        API
      </a>
      <a href="${relative(page.url, '/install/')}">
        <img 
          src="${relative(page.url, '/static/img/package.svg')}" 
          class="navbar-page-icon"
        />
        Install
      </a>
      <a href="https://github.com/litetex/release-notes-displayer" target="_blank">
        <img 
          title="View on GitHub" 
          src="${relative(page.url, '/static/img/github.svg')}" 
          width="24px" 
          style="
            margin-right: 10px; 
            border-radius: 100%; 
            background: rgba(255, 255, 255, 0.8); 
            box-shadow: 0 0 10px 1px rgba(255, 255, 255, 0.9)"
        />
        GitHub
      </a>
    </nav>
  </div>`;
};
