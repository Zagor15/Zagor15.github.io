document.addEventListener('DOMContentLoaded', () => {
    const posts = [
        {
            title: "My First Blog Post",
            date: "July 10, 2024",
            content: "This is the content of my first blog post. I am excited to start this journey!",
            image: "images/blog1.jpg"
        },
    ];

    const postsContainer = document.getElementById('posts-container');

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p><em>${post.date}</em></p>
            <img src="${post.image}" alt="${post.title}">
            <p>${post.content}</p>
        `;

        postsContainer.appendChild(postElement);
    });
})
