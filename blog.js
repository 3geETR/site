document.addEventListener('DOMContentLoaded', () => {
    fetch('blog.json')
        .then(response => response.json())
        .then(data => {
            const blogPostsContainer = document.getElementById('blog-posts');
            data.forEach((post, index) => {
                const postElement = document.createElement('div');
                postElement.classList.add('blog-post');

                const contentContainer = document.createElement('div');
                contentContainer.classList.add('blog-content-container');

                const titleElement = document.createElement('h2');
                const linkElement = document.createElement('a');
                linkElement.href = `map-detail.html?post=${index}`;
                linkElement.textContent = post.title;
                titleElement.appendChild(linkElement);

                const dateElement = document.createElement('p');
                dateElement.textContent = post.date;
                dateElement.classList.add('blog-date');

                const contentElement = document.createElement('p');
                const shortContent = post.content.length > 100 ? post.content.substring(0, 100) + '...' : post.content;
                contentElement.innerHTML = shortContent; // HTML olarak içerik ekleniyor
                contentElement.classList.add('blog-content');

                const readMoreElement = document.createElement('a');
                readMoreElement.href = `map-detail.html?post=${index}`;
                readMoreElement.textContent = 'Read more';
                readMoreElement.classList.add('read-more');

                contentContainer.appendChild(titleElement);
                contentContainer.appendChild(dateElement);
                contentContainer.appendChild(contentElement);
                contentContainer.appendChild(readMoreElement);

                postElement.appendChild(contentContainer);

                if (post.thumbnail) {
                    const thumbnailElement = document.createElement('img');
                    thumbnailElement.src = post.thumbnail;
                    thumbnailElement.alt = "Blog thumbnail";
                    thumbnailElement.classList.add('normal-blog-thumbnail');
                    postElement.appendChild(thumbnailElement);
                }

                blogPostsContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error fetching blog posts:', error));
});
