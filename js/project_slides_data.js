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

    'Docker', 
    'Environment Setup',
    'CI/CD',

    "Edge Computing",       // Searchable Tag - Arduino and NX
    "IoT",                  // Searchable Tag
    "Robotics",             // Searchable Tag

    "3D Printing/Modeling",  // Searchable Tag
    "Fusion 360",
    "Laser Cutting",
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
      order: 3,
      links: [
          ['github', 'https://github.com/Ndkopacz/student_projects/tree/main/CS%20370/Memory%20Allocation%20and%20Deallocation']
      ]
    },
    {
      title: 'Server',
      preview_image: image_folder + 'projects/misc/server/preview.jpg',
      preview_description: 'A high-performance server used for machine learning projects and serving this website! Powered by an NVIDIA RTX 3090.',
      project_description: 'A special thanks to my brother Justin for gifting me the equipment needed for this server. After flashing Ubuntu 20.04, I configured the server with essential tools such as CUDA, cuDNN, TensorFlow, Docker, OpenSSH, and Jupyter Notebooks. The server\'s primary purpose is to serve as a dedicated environment for developing machine learning models in Jupyter, powered by an RTX 3090 GPU. In addition to the ML environment, the server is set up to automatically pull and deploy the latest release of my website from GitHub. Both the website and the machine learning environment are contained within Docker containers, showcasing the seamless integration of AI and web technologies with a focus on scalability, resource management, and efficient hardware utilization. Recently added a dual booting option to Windows 10 for family gaming.',
      tags: ['Machine Learning', 'Artificial Intelligence', 'Deep Learning', 'Programming', 'Operating Systems', 'Docker', 'Environment Setup', 'TensorFlow', 'CI/CD'],
      detail_images: [
          // image_folder + 'projects/misc/server/detail_image_1.jpg',
          // image_folder + 'projects/misc/server/detail_image_2.jpg',
          // image_folder + 'projects/misc/server/detail_image_3.jpg'
      ],
      order: 2,
      links: []
    },
    {
      title: 'PAIR',
      preview_image: image_folder + 'projects/misc/pair/preview.png',
      preview_description: 'A machine learning-based system for indoor drone navigation in GPS-denied environments, leveraging image pairs to determine relative positioning.',
      project_description: 'The Paired Automated Image Range (PAIR) project aims to enable drones to navigate in GPS-denied environments by estimating relative positioning through image pairs. Utilizing Unreal Engine 5, I generate synthetic datasets for training, complemented by real-world data collected via a Raspberry Pi 5 equipped with a Pi Camera. The machine learning model processes these image pairs to estimate six degrees of freedom (x, y, z positions, roll, pitch, and yaw). Currently a model of sufficient size as not been trained to be deployed on the Raspberry Pi.',
      tags: ['Artificial Intelligence', 'Machine Learning', 'Computer Vision', 'TensorFlow', 'Programming', 'Python', 'Edge Computing', 'Robotics'],
      detail_images: [
          image_folder + 'projects/misc/pair/detail_image_1.png',
          image_folder + 'projects/misc/pair/detail_image_2.png',
          image_folder + 'projects/misc/pair/detail_image_3.png'
      ],
      order: 2,
      links: [
        ['github', 'https://github.com/Ndkopacz/PAIR/tree/main']
      ]
    },
    {
      title: 'Bolt Sorter',
      preview_image: image_folder + 'projects/misc/bolt_sorter/preview.png',
      preview_description: 'A simple organizational tool to sort hardware.',
      project_description: 'Following the gridfinity paradigm, this box fits neetly into any gridfinity ecosystem by maintaining the stackability and fit of the standard size. For my purposes, it fits in my drawers where I can easily sort through miscellaneous bolts.',
      tags: ['3D Printing/Modeling'],
      detail_images: [
          image_folder + 'projects/misc/bolt_sorter/detail_image_1.jpg',
          image_folder + 'projects/misc/bolt_sorter/detail_image_2.jpg',
          // image_folder + 'projects/misc/bolt_sorter/detail_image_3.png'
      ],
      order: 3,
      links: []
    },
    {
        title: 'Shower Caddy',
        preview_image: image_folder + 'projects/misc/shower_caddy/preview.png',
        preview_description: 'A custom 3D-printed shower caddy to hold soap and razors.',
        project_description: 'This project was my first major fail of a print. I was attempting to make the design completely print in place with no supports; however it turned out that for the thin spires, they needed a little extra help. This was also a gently introduction to material type for 3D printing. Becuase this project goes in the shower, I chose to print with PETG instead of PLA.',
        tags: ['3D Printing/Modeling', 'Fusion 360'],
        detail_images: [
            image_folder + 'projects/misc/shower_caddy/detail_image_1.jpg'
        ],
        order: 3,
        links: []
    },
    {
        title: 'Fuel Cap',
        preview_image: image_folder + 'projects/misc/fuel_cap/preview.png',
        preview_description: 'A simple fuel cap for the detachable hose on my dirtbike gas tank.',
        project_description: 'This project was a simple necessity as I put the detatchable fuel hose into my dirtbiking box next to my nice boots. I don\'t want them to bet messy! So I design a simply cap (threads included) to make the hose a closed system. Additionally a key was printed to open up the gas tank. After the key broke, I reprinted it in PETG to make it just a little stronger. It should be noted that the cap is also printed in PETG, which, while moderately chemical resistance, is not robust enough for constant contact with gasoline. This isn\'t a problem though since the cap isn\'t really holding any gas back.',
        tags: ['3D Printing/Modeling', 'Fusion 360'],
        detail_images: [
        //     image_folder + 'projects/misc/fuel_cap/detail_image_1.jpg',
        //     image_folder + 'projects/misc/fuel_cap/detail_image_2.jpg',
        ],
        order: 3,
        links: []
    },
    {
        title: 'Personal PC',
        preview_image: image_folder + 'projects/misc/personal_pc/preview.jpg',
        preview_description: 'My first PC build. With 128gb ram and an RTX 3090, this has been my workhorse for modeling, ML training, and gaming.',
        project_description: 'This project involved assembling a high-performance personal PC from carefully selected components to meet both work and entertainment needs. The build focuses on performance for machine learning specific tasks and, of course, aesthetics! Key components include a powerful GPU, a fast CPU, ample RAM, efficient cooling, and stylish RGB lighting. Additionally I 3d printed and designed an SD card reader mount that is attached to the case for easy access. Since this build I have aquired a server that is now my primary work horse for ML training.',
        tags: ['Programming', 'Operating Systems', 'Artificial Intelligence', 'Machine Learning', '3D Printing/Modeling', 'Hardware'],
        detail_images: [],
        order: 2,
        links: []
    },
    {
        title: 'Monstera Coaster Plant',
        preview_image: image_folder + 'projects/misc/monstera/preview.jpg',
        preview_description: 'A 3D-printed Monstera plant with magnetically detachable leaves that double as coasters.',
        project_description: 'This project features a decorative Monstera plant model with leaves designed to detach and function as coasters. Magnetic inserts were used to ensure easy attachment and removal of the leaves. The project highlights my skills in 3D modeling and design for functional decor. The model was created in Fusion 360 and printed using a mix of PLA for the plant and flexible TPU for the leaves to allow easy coaster functionality and durability.',
        tags: ['3D Printing/Modeling', 'Fusion 360'],
        detail_images: [
            // image_folder + 'projects/misc/monstera/detail_image_1.jpg',
            // image_folder + 'projects/misc/monstera/detail_image_2.jpg',
        ],
        order: 3,
        links: []
    },
    {
        title: 'Screw Driver Holder',
        preview_image: image_folder + 'projects/misc/screw_driver_holder/preview.jpg',
        preview_description: 'A custom 3D modeled case for a screwdriver tool set with a press-fit lid and tension-secured slots.',
        project_description: 'Designed specifically to hold a set of screwdriver bits securely, this model includes a press-fit lid to ensure the tools stay in place even when upside down. Tension pieces are strategically placed to hold each bit in its designated slot. This highly functional design was created using Fusion 360, focusing on precise dimensions and material flexibility for a custom fit. The robust build was executed using PETG for added strength and durability.',
        tags: ['3D Printing/Modeling', 'Fusion 360'],
        detail_images: [
            // image_folder + 'projects/misc/screw_driver_holder/detail_image_1.jpg',
            // image_folder + 'projects/misc/screw_driver_holder/detail_image_2.jpg',
        ],
        order: 3,
        links: []
    },
    {
        title: 'Glow Knife v1',
        preview_image: image_folder + 'projects/misc/glow_knife_v1/preview.jpg',
        preview_description: 'A vibrant knife prop designed for a Halloween costume, featuring a 3D-printed handle and an acrylic blade illuminated by LEDs.',
        project_description: 'The Glow Knife v1 is an accessory created for a Halloween costume modeled after a roman galdiator\'s pugio. The knife comprises a custom-designed and 3D-printed handle coupled with a handmade acrylic blade. The blade\'s edges are sanded for a diffused glow effect when lit from within by LEDs, as well as sanded channels (using a dremmel) to look like circuit traces. Trying to do this by hard was a mistake! In the next version of the knife I used a far more efficient and effective method.',
        tags: ['3D Printing/Modeling', 'Fusion 360'],
        detail_images: [
            image_folder + 'projects/misc/glow_knife_v1/detail_image_1.jpg',
            // image_folder + 'projects/misc/glow_knife_v1/detail_image_2.jpg',
        ],
        order: 3,
        links: []
    },
    {
      title: 'Bracer',
      preview_image: image_folder + 'projects/misc/bracer/preview.jpg',
      preview_description: 'A quick prop used for a halloween costume. Paired with the Glow Knife V1',
      project_description: 'This bracer was a quick and fun project that let me expand out to wearable devices and the difficulty of creating them. The back is lined with a soft fabric to make it a bit more comfortable, but the fit isn\'t perfect to my wrist. The leather straps on the back were difficult to sew without a thick needle, and they were tricky to get the sizing right with a single attempt. The bracer is painted and sealed which worked out great. All in all it was a great introduction to something I will revisit at a later date.',
      tags: ['3D Printing/Modeling', 'Fusion 360'],
      detail_images: [
          // image_folder + 'projects/misc/glow_knife_v1/detail_image_1.jpg',
          // image_folder + 'projects/misc/glow_knife_v1/detail_image_2.jpg',
      ],
      order: 3,
      links: []
  },
    {
        title: 'Glow Knife v2',
        preview_image: image_folder + 'projects/misc/glow_knife_v2/preview.jpg',
        preview_description: 'My second, and far better attempt, at the glow knife concept. Features customized laser-cut blades and distributed as gifts to family members.',
        project_description: 'Glow Knife v2 builds on the original concept by making the knife smaller, making the button feel better, and laser cutting the blades instead of hand cutting them. Each knife was crafted with a customized blade design, tailored to each family member. My sister came to my rescue on this project, helping me laser cut out each blade and saving a massive amount of time. Rather than spending 2 hours and quite the mess on cutting out glow knife v1, we managed to cut 12 unique blades in under 30 minutes. Plus, she taught me a ton about using a laser cutter including vector, raster, and material selections.',
        tags: ['3D Printing/Modeling', 'Fusion 360', "Laser Cutting"],
        detail_images: [
            image_folder + 'projects/misc/glow_knife_v2/detail_image_1.png',
            image_folder + 'projects/misc/glow_knife_v2/detail_image_2.jpg',
        ],
        order: 1,
        links: []
    },
    {
        title: 'Desk Nameplate',
        preview_image: image_folder + 'projects/misc/desk_nameplate/preview.jpg',
        preview_description: 'A personalized desk nameplate project featuring laser-cut designs and embedded LEDs, crafted collaboratively with my sister.',
        project_description: 'The Desk Nameplate project involves creating customized nameplates for each family member. We used laser cutting to shape the acrylic plates and 3D printing to incorporate the structure. During the 3D printing process, we embedded electronics and LEDs that glow through the acrylic. The nameplate can be toggled on and off using a capacitive button for a sleek and interactive design. Collaborating on this project with my sister enabled us to efficiently combine our skills in laser cutting and 3D printing techniques.',
        tags: ['3D Printing/Modeling', 'Fusion 360', 'Laser Cutting', 'Electronics'],
        detail_images: [
            image_folder + 'projects/misc/desk_nameplate/detail_image_1.jpg',
            image_folder + 'projects/misc/desk_nameplate/detail_image_2.jpg',
            image_folder + 'projects/misc/desk_nameplate/detail_image_3.jpg',
        ],
        order: 2,
        links: []
    },
    {
      title: 'Charging Car',
      preview_image: image_folder + 'projects/misc/charging_car/preview.jpg',
      preview_description: 'A custom RC Car that has the capability to begin charging once it connects to its magnetic docking station.',
      project_description: 'This was a project completed in my second year of college. For many different fields, this was a first attempt at something larger than a toy project. There is a custom bumper that I 3d printed that attaches to the from of the car. There are alluminum plates on this bumper that connect to a charging circuit on the robot. There is a custom printed dock which has charged springs and an electromagnet that activates when the car pushes into the dock. This project was completed, but not without trouble! The electromagnet would get incredibly hot and ended up melting its housing, the power source used for pass through charging on the car didn\'t have the voltage to drive the motors except for at the lowest speed, and the additional programming for the car was abandonded out of concern for time. It was troublesome! But it taught me a great amount about robotics.',
      tags: ['3D Printing/Modeling', 'Fusion 360', 'Electronics', "Programming", "Operating Systems", "Robotics"],
      detail_images: [
          image_folder + 'projects/misc/charging_car/detail_image_1.jpg',
          image_folder + 'projects/misc/charging_car/detail_image_2.jpg',
          image_folder + 'projects/misc/charging_car/detail_image_3.jpg',
      ],
      order: 1,
      links: []
  },
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