document.addEventListener('DOMContentLoaded', () => {
    const posts = [
        {
            title: "The use of AI in the Ukrainian-Russian conflict",
            date: "July 10, 2024",
            content: `This is a translation of a presentation I gave on June 5, 2024, at the conference on Data as a Strategic Resource in Contemporary Conflicts at the Raoul-Dandurand Chair in Montreal.
                <p>Artificial intelligence has become a technology that is increasingly used in various fields. The military field is no exception. While the use of AI on the battlefield remained a theoretical topic in the 2010s, the war in Ukraine marked a turning point. Ukraine has used this technology to seek strategic advantages. Whether it is, for example, the collection and processing of intelligence for the conduct of operations, counter-espionage to detect spies or adversaries, or the targeting of drones.</p>
                <p>Behind the use of artificial intelligence is the collection of data to train AI models. There are several methods for machine learning, such as supervised learning, unsupervised learning, or reinforcement learning. From all these cases, it is necessary to feed the autonomous agent with information to train it. Again, the conflict in Ukraine provides data that can be used to develop and refine AI systems. From satellite imagery and open-source data to drone imagery and field reports, this information is now an asset to the AI industry. Indeed, it appears that technologies related to artificial intelligence are developed by a partnership between private companies and governments, and particularly the American government.</p>
                <p>From this observation, two questions arise: How does the use of AI affect or can influence the conduct of operations? What are the challenges in terms of data used to train battlefield AIs?</p>
                <h3>Palantir and Clearview AI cases in Ukraine: How visual data is being used to help Ukrainian forces and authorities</h3>
                <p>The private sector is the major player in the development of AI, including for military purposes. Among the companies in this field that have deployed their technologies in Ukraine, this presentation will highlight two that have made the news and show the capabilities of using AI on a battlefield.</p>
                <p>The American company Palantir has a major role in Ukraine. Palantir's MetaConstellation platform enables real-time satellite image data, analysis, and target detection. This platform reduces the processing time from hours to minutes. In concrete terms, Palantir defines this platform in three parts:
                <ul>
                    <li>Integrate a network of existing satellites,</li>
                    <li>Optimize hundreds of orbital, ground, and airborne sensors, as well as AI models,</li>
                    <li>Enabling users to ask urgent questions from all over the world.</li>
                </ul></p>
                <p>The American facial recognition company Clearview AI has also offered its tools to more than 1,500 Ukrainian officials, who have used them to identify more than 230,000 Russians on their territory. It has also been used to identify the losses of both sides for propaganda and counterpropaganda purposes. The company's technology is based on a library of face images that now has 40 billion images, an average of five images for every person on the planet. The founder of Clearview also estimated that he has 2 million images from the social network VKontakte, the main social network in the Russian-speaking world. More generally, face photos come from all over the internet, including social media, news sites, and any other place where a face may appear.</p>
                <h3>The technical and ethical limits to the use of AI on the Ukrainian battlefield</h3>
                <p>The use of AI shows a number of technical and ethical limitations. The large-scale deployment of facial recognition sets a precedent that raises questions for the privacy of civilians: the collection of personal data. In 2024, the Ukrainian Ministry of Digital Transformation published guidelines for the use of AI, including data privacy. Technology is not a silver bullet that erases the other strategic and tactical realities of warfare.</p>
                <p>Moreover, some analysts consider that Ukraine's greatest military successes came from small, decentralized networks that could innovate. Conversely, artificial intelligence is centralizing decision-making to the detriment of the creativity of forces on the ground. This also includes centralizing data in the hands of organizations (public or private) responsible for managing AI.</p>`,
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
            ${post.content}
        `;

        postsContainer.appendChild(postElement);
    });
});
