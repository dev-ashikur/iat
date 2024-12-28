

// // Adjust the height of the object dynamically
// const obj = document.getElementById('embedded-content');
// obj.addEventListener('load', () => {
//     const objDoc = obj.contentDocument || obj.contentWindow.document;
//     const objBody = objDoc.body;
//     // Set the object's height to match the content height
//     obj.style.height = objBody.scrollHeight + 'px';
// });

// accordion


function toggleAccordion(sectionId) {
    // Toggle the clicked section
    var section = document.getElementById(sectionId);
    section.classList.toggle('open');

    // Close other sections
    var allSections = document.querySelectorAll('.accordion-content');
    allSections.forEach(function (item) {
        if (item !== section) {
            item.classList.remove('open');
        }
    });
}

function toggleContent(contentId) {
    // Toggle the clicked content
    var content = document.getElementById(contentId);
    content.classList.toggle('open');

    // Close other content within the same section
    var allContents = content.parentElement.parentElement.querySelectorAll('.content');
    allContents.forEach(function (item) {
        if (item !== content) {
            item.classList.remove('open');
        }
    });
}

// include accordio

// target id for footer

/* <div id="accordion-container"></div> */

    // Function to dynamically include the footer HTML
    function includeFooter(url, containerId) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error loading ${url}: ${response.statusText}`);
                }
                return response.text();
            })
            .then(html => {
                document.getElementById(containerId).innerHTML = html;
            })
            .catch(error => console.error('Error:', error));
    }

    // Load the footer file
    includeFooter('accordion.html', 'accordion-container');
