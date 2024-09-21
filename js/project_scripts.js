// import { slidesData, selectable_tags } from './project_slides_testdata.js';
import { slidesData, selectable_tags } from './project_slides_data.js';

// Variables to store DOM elements
const tagCloud = document.getElementById('tag-cloud');
const projectCardsContainer = document.getElementById('project-cards-container');

// Add 'All' tag with total number of projects
const totalProjects = slidesData.length;
selectable_tags.unshift(['All', totalProjects]);

// Variable to keep track of selected tag
let selectedTag = 'All';

// Function to render tags
function renderTags() {
  tagCloud.innerHTML = ''; // Clear existing tags

  selectable_tags.forEach(tag => {
    const tagName = tag[0];
    const tagCount = tag[1];

    const tagElement = document.createElement('div');
    tagElement.classList.add('tag-item');
    if (tagName === selectedTag) {
      tagElement.classList.add('selected');
    }
    tagElement.textContent = `${tagName} (${tagCount})`;

    // Add click event listener
    tagElement.addEventListener('click', () => {
      if (selectedTag !== tagName) {
        selectedTag = tagName;
        renderTags();
        renderProjectCards();
      }
    });

    tagCloud.appendChild(tagElement);
  });
}

// Function to render project cards
function renderProjectCards() {
    projectCardsContainer.innerHTML = ''; // Clear existing cards
  
    // Sort projects based on 'order' field in ascending order
    const sortedProjects = slidesData.sort((a, b) => a.order - b.order);
  
    // Filter projects based on selected tag
    let filteredProjects;
    if (selectedTag === 'All') {
      filteredProjects = sortedProjects;
    } else {
      filteredProjects = sortedProjects.filter(project => project.tags.includes(selectedTag));
    }
  
    // Create project cards
    filteredProjects.forEach(project => {
      const card = document.createElement('div');
      card.classList.add('project-card');
  
      const img = document.createElement('img');
      img.src = project.preview_image;
      img.alt = project.title;
  
      const title = document.createElement('h3');
      title.textContent = project.title;
  
      const description = document.createElement('p');
      description.textContent = project.preview_description;
  
      // Append elements to card
      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(description);
  
      // Add click event to open detail panel
      card.addEventListener('click', () => {
        openDetailPanel(project);
      });
  
      // Append card to container
      projectCardsContainer.appendChild(card);
    });
  }

// Variables for detail panel
const detailPanel = document.getElementById('detail-panel');
const detailTitle = document.getElementById('detail-title');
const detailDescription = document.getElementById('detail-description');
const detailTags = document.getElementById('detail-tags');
const detailImages = document.getElementById('detail-images');
const closeButton = document.querySelector('.close-button');

// Function to open detail panel
function openDetailPanel(project) {
  // Populate detail panel with project data
  detailTitle.textContent = project.title;
  detailDescription.textContent = project.project_description;

  // Clear and populate tags
  detailTags.innerHTML = '';
  project.tags.forEach(tag => {
    const tagSpan = document.createElement('span');
    tagSpan.classList.add('tag');
    tagSpan.textContent = tag;
    detailTags.appendChild(tagSpan);
  });

  // Clear and populate images
  detailImages.innerHTML = '';
  project.detail_images.forEach(imageSrc => {
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = project.title;
    detailImages.appendChild(img);
  });

  // Show the detail panel
  detailPanel.classList.remove('hidden');

  // Prevent background scrolling
  document.body.classList.add('no-scroll');
}

// Function to close detail panel
function closeDetailPanel() {
  detailPanel.classList.add('hidden');

  // Restore background scrolling
  document.body.classList.remove('no-scroll');
}

// Close detail panel when clicking the close button or outside the content
closeButton.addEventListener('click', closeDetailPanel);
detailPanel.addEventListener('click', (event) => {
  if (event.target === detailPanel) {
    closeDetailPanel();
  }
});

// Prevent clicks inside detail-content from closing the panel
const detailContent = document.querySelector('.detail-content');
detailContent.addEventListener('click', (event) => {
  event.stopPropagation();
});

// Initial render
renderTags();
renderProjectCards();