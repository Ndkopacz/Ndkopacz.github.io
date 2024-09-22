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
    "Operating Systems",
    "Python",
    "C++",
    "C",
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
        links: [],
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
        order: 3,
        links: [],
    },
    {
      title: 'Parent and Child Processes',
      preview_image: image_folder + 'projects/misc/parent_and_child_processes/preview1.jpg',
      preview_description: 'A project focused on process creation and management in operating systems using C programming with fork() and exec().',
      project_description: 'This project demonstrates how to manage parent and child processes in an operating system using C. The project involves reading input from a file, creating child processes with fork(), and executing programs like Fibonacci, Perrin, and Composite series calculations using exec(). Key challenges included managing inter-process communication and process synchronization with wait(). The outcome was a deeper understanding of process control in Unix-like systems.',
      tags: ['Programming', 'C', 'Operating Systems'], // Newly added tag "Operating Systems"
      detail_images: [
          // image_folder + 'projects/misc/parent_and_child_processes/detail_image_1.jpg',
          // image_folder + 'projects/misc/parent_and_child_processes/detail_image_2.jpg',
          // image_folder + 'projects/misc/parent_and_child_processes/detail_image_3.jpg'
      ],
      order: 3,
      links: [
          ['github', 'https://github.com/Ndkopacz/student_projects/tree/main/CS%20370/Parent%20and%20Child%20Processes'],
      ],
    },
    {
      title: 'Memory Allocation and Deallocation',
      preview_image: image_folder + 'projects/misc/memory_allocation_and_deallocation/preview.jpg',
      preview_description: 'A program designed to dynamically allocate and deallocate memory, analyzing prime numbers in randomly generated arrays.',
      project_description: 'This project focuses on dynamic memory allocation and deallocation in C. The program generates random-sized arrays, calculates the prime-to-composite ratio in each array, and tracks the iteration with the most primes. The project includes the use of the Valgrind tool to ensure no memory leaks occur, providing insights into memory management challenges. Tools used include C, Valgrind, and random number generation with seeded values.',
      tags: ['Programming', 'Operating Systems', 'C', 'Memory Management'],
      detail_images: [
          // image_folder + 'projects/misc/memory_allocation_and_deallocation/detail_image_1.jpg',
          // image_folder + 'projects/misc/memory_allocation_and_deallocation/detail_image_2.jpg',
          // image_folder + 'projects/misc/memory_allocation_and_deallocation/detail_image_3.jpg'
      ],
      order: 2,
      links: [
        ['github', 'https://github.com/Ndkopacz/student_projects/tree/main/CS%20370/Memory%20Allocation%20and%20Deallocation']
      ]
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