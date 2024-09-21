// Declare the image folder path as a constant
const image_folder = "../../images/";

export const slidesData = [
    {
      title: 'Sample Card',
      preview_image: image_folder + 'Desktop_background.jpg',
      preview_description: 'A quick description of the project goes here.',
      project_description: 'Detailed description for the project goes here. It can be much longer and provide in-depth information about the project.',
      tags: ['Programming', 'Python'],     // Includes tags to search by and general tags
      detail_images: [
          image_folder + 'Desktop_background.jpg',
          image_folder + 'Desktop_background.jpg',
          image_folder + 'Desktop_background.jpg'
      ],
      order: 0,
    },  
    {
      preview_image: image_folder + 'Desktop_background.jpg',
      title: 'Project 1 O2',
      preview_description: 'Short description for Project 1.',
      project_description: 'Detailed description for Project 1 goes here. It can be much longer and provide in-depth information about the project.',
      tags: ['Python', 'Data Analysis'],
      detail_images: [
        image_folder + 'Desktop_background.jpg',
        image_folder + 'Desktop_background.jpg',
        image_folder + 'Desktop_background.jpg'
      ],
      order: 2,
    },
    {
      preview_image: image_folder + 'Desktop_background.jpg',
      title: 'Project 2 O10',
      preview_description: 'Short description for Project 1.',
      project_description: 'Detailed description for Project 1 goes here. It can be much longer and provide in-depth information about the project.',
      tags: ['Python', 'Data Analysis'],
      detail_images: [
        image_folder + 'Desktop_background.jpg',
        image_folder + 'Desktop_background.jpg',
        image_folder + 'Desktop_background.jpg'
      ],
      order: 10, 
    },
    {
        preview_image: image_folder + 'Desktop_background.jpg',
        title: 'Project 3 O2',
        preview_description: 'Short description for Project 1.',
        project_description: 'Detailed description for Project 1 goes here. It can be much longer and provide in-depth information about the project.',
        tags: ['Python', 'Data Analysis'],
        detail_images: [
          image_folder + 'Desktop_background.jpg',
          image_folder + 'Desktop_background.jpg',
          image_folder + 'Desktop_background.jpg'
        ],
        order: 2, 
    },
    {
        preview_image: image_folder + 'Desktop_background.jpg',
        title: 'Project 4 O2',
        preview_description: 'Short description for Project 1.',
        project_description: 'Detailed description for Project 1 goes here. It can be much longer and provide in-depth information about the project.',
        tags: ['Python', 'Data Analysis'],
        detail_images: [
          image_folder + 'Desktop_background.jpg',
          image_folder + 'Desktop_background.jpg',
          image_folder + 'Desktop_background.jpg'
        ],
        order: 2,
    },
    {
        preview_image: image_folder + 'Desktop_background.jpg',
        title: 'Project 5 O1',
        preview_description: 'Short description for Project 1.',
        project_description: 'Detailed description for Project 1 goes here. It can be much longer and provide in-depth information about the project.',
        tags: ['Python', 'Data Analysis'],
        detail_images: [
          image_folder + 'Desktop_background.jpg',
          image_folder + 'Desktop_background.jpg',
          image_folder + 'Desktop_background.jpg'
        ],
        order: 1,
    },
    {
        preview_image: image_folder + 'Desktop_background.jpg',
        title: 'Project 6 O10',
        preview_description: 'Short description for Project 1.',
        project_description: 'Detailed description for Project 1 goes here. It can be much longer and provide in-depth information about the project.',
        tags: ['Python', 'Data Analysis'],
        detail_images: [
          image_folder + 'Desktop_background.jpg',
          image_folder + 'Desktop_background.jpg',
          image_folder + 'Desktop_background.jpg'
        ],
        order: 10,
    },
    {
        preview_image: image_folder + 'Desktop_background.jpg',
        title: 'Project 7 O10',
        preview_description: 'Short description for Project 1.',
        project_description: 'Detailed description for Project 1 goes here. It can be much longer and provide in-depth information about the project.',
        tags: ['Python', 'Data Analysis', "Arduino"],
        detail_images: [
          image_folder + 'Desktop_background.jpg',
          image_folder + 'Desktop_background.jpg',
          image_folder + 'Desktop_background.jpg'
        ],
        order: 10,
    },
    {
        preview_image: image_folder + 'Desktop_background.jpg',
        title: 'Project 8 O10',
        preview_description: 'Short description for Project 1.',
        project_description: 'Detailed description for Project 1 goes here. It can be much longer and provide in-depth information about the project.',
        tags: ['Python', 'Data Analysis', 'IOT', "Arduino"],
        detail_images: [
          image_folder + 'Desktop_background.jpg',
          image_folder + 'Desktop_background.jpg',
          image_folder + 'Desktop_background.jpg'
        ],
        order: 10,
    },
    {
        preview_image: image_folder + 'Desktop_background.jpg',
        title: 'Project 9 O2',
        preview_description: 'Short description for Project 1.',
        project_description: 'Detailed description for Project 1 goes here. It can be much longer and provide in-depth information about the project.',
        tags: ['Python', 'Data Analysis', 'IOT', "Arduino"],
        detail_images: [
          image_folder + 'Desktop_background.jpg',
          image_folder + 'Desktop_background.jpg',
          image_folder + 'Desktop_background.jpg'
        ],
        order: 2,
    },

  ];

export const selectable_tags = [
    ["IOT", 0],
    ["Python", 0],
    ["C++", 0],
    ["Java", 0],
    ["Arduino", 0],
    ["Machine Learning (ML)", 0],
    ["3D Printing/Modeling", 0]
]

// Function to count tag occurrences in slidesData
export function countTags() {
    // Reset counts before counting again
    selectable_tags.forEach(tag => tag[1] = 0);
  
    slidesData.forEach(slide => {
      slide.tags.forEach(tag => {
        const foundTag = selectable_tags.find(t => t[0] === tag);
        if (foundTag) {
          foundTag[1] += 1;
        }
      });
    });
  }

// Run the countTags function to populate counts
countTags();