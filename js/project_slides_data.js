// Declare the image folder path as a constant
const image_folder = "../../images/";

export const selectable_tags = [
    ["Machine Learning", 0],
    ["Programming", 0],
    ["Edge Computing", 0],
    ["3D Printing/Modeling", 0],
    ["IOT", 0],
    ["Robotics", 0],
]

const all_tags = [
    "Artificial Intellegence",
    "Machine Learning",     // Searchable Tag
    "Deep Learning",
    "Data Science",
    "Computer Vision",
    "TensorFlow",
    "Pytorch",

    "Programming",          // Searchable Tag
    "Python",
    "C++",
    "Java",

    "Edge Computing",       // Searchable Tag - Arduino and NX
    "IoT",                  // Searchable Tag
    "Robotics",             // Searchable Tag

    "3D Printing/Modeling",  // Searchable Tag
    "Fusion 360",
]
const sample_tag = [
    {
        title: 'Sample Card',
        preview_image: image_folder + 'projects/misc/sample_card' + 'preview.jpg',
        preview_description: 'A quick description of the project goes here.',
        project_description: 'Detailed description for the project goes here. It can be much longer and provide in-depth information about the project.',
        tags: ['Programming', 'Python'],
        detail_images: [
            image_folder + 'projects/misc/sample_card' + 'detail_image_1.jpg',
            image_folder + 'projects/misc/sample_card' + 'detail_image_2.jpg',
            image_folder + 'projects/misc/sample_card' + 'detail_image_3.jpg',
        ],
        order: 3,
    },
]

export const slidesData = [
    {
        title: 'Shaving Bowl',
        preview_image: image_folder + 'projects/misc/shaving_bowl/preview_blue.jpg',
        preview_description: 'A quick 3D modeling and printing project to create a shaving bowl with a built-in holder for a shaving brush.',
        project_description: 'The Shaving Bowl project involved designing and 3D printing a simple yet functional bowl with a holder for a shaving brush. The project was completed quickly using CAD software to model the bowl, followed by 3D printing it in PLA. It was a practical one-off design to declutter the bathroom, and the project highlights rapid prototyping techniques.',
        tags: ['3D Printing/Modeling', 'CAD Design'],
        detail_images: [
            image_folder + 'projects/misc/shaving_bowl/detail_image_1.jpg',
            // image_folder + 'projects/misc/shaving_bowl/detail_image_2.jpg',
            // image_folder + 'projects/misc/shaving_bowl/detail_image_3.jpg'
        ],
        order: 3
    }

  ];


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