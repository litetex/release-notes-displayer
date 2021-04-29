const page = require('./page.11ty.cjs');
const relative = require('./relative-path.cjs');

/**
 * This template extends the page template and adds an examples list.
 */
module.exports = function(data) {

  return page({
    ...data,
    content: renderExample(data),
  });
};

const renderExample = ({name, content, collections, page}) => {
  return `
    <h1>Example: ${name}</h1>
    <section class="examples">
      <nav class="collection">
        <span>
          Click on the links to view the examples:
        </span>
        <ul>
          ${collections.example === undefined
              ? ''
              : collections.example
                .sort((post1,post2) => {
                  var prio1 = post1.data?.prio ?? 1000;
                  var prio2 = post2.data?.prio ?? 1000;

                  if(prio1 > prio2) {
                    return 1;
                  }
                  else if(prio1 < prio2) {
                    return -1;
                  }

                  return 0;
                })
                .map((post) => `
                  <script>console.log('${post.data.prio}');</script>
                  <li class=${post.url === page.url ? 'selected' : ''}>
                    <a href="${relative(page.url, post.url)}">${post.data.description.replace('<', '&lt;')}</a>
                  </li>
                `).join('')}
        </ul>
      </nav>
      <div>
        ${content}
      </div>
    </section>
  `;
};
