const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming.',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students become more organized, efficient, and powerful computer programmers by learning to use and write functions, debug them, and handle errors.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces classes and objects. It presents encapsulation, inheritance, and polymorphism.',
        technology: ['C#'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Learn to create dynamic websites that use JavaScript to respond to events and create responsive user experiences.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];


function renderCourses(courseList) {
    const courseContainer = document.querySelector('.courses');
    courseContainer.innerHTML = '';

    courseList.forEach(course => {
        const div = document.createElement('div');
        div.classList.add('course');
        div.classList.add(course.completed ? 'completed' : 'not-completed');
        div.innerHTML = `
            <strong>${course.subject} ${course.number}</strong>: ${course.title}
            ${course.completed ? '<span class="badge">✅ Completed</span>' : ''}
        `;

        // Add click to show modal
        div.addEventListener("click", () => displayCourseDetails(course));
        courseContainer.appendChild(div);
    });
}

function filterCourses(filter) {
    let filteredCourses;

    if (filter === 'all') {
        filteredCourses = courses;
    } else {
        filteredCourses = courses.filter(course => course.subject === filter);
    }

    renderCourses(filteredCourses);
}


const courseDetails = document.querySelector("#course-details");

function displayCourseDetails(course) {
    courseDetails.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>${course.subject} ${course.number}</h2>
        <h3>${course.title}</h3>
        <p><strong>Credits:</strong> ${course.credits}</p>
        <p><strong>Certificate:</strong> ${course.certificate}</p>
        <p>${course.description}</p>
        <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
    `;

    courseDetails.showModal();

    document.querySelector("#closeModal").addEventListener("click", () => {
        courseDetails.close();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    filterCourses('all');
});




// courses.find(c => c.number === 110).completed = true;
// courses.find(c => c.number === 111).completed = true;
// courses.find(c => c.number === 131).completed = true;
// courses.find(c => c.number === 130).completed = true;


// function renderCourses(courseList) {
//     const courseContainer = document.querySelector(".courses");
//     courseContainer.innerHTML = " ";

//     courseList.forEach(course => {
//         const div = document.createElement("div");
//         div.classList.add("course");

//         if (course.completed) {
//             div.classList.add("completed");
//         } else {
//             div.classList.add("not-completed");
//         }

//         let courseHTML = `<strong>${course.subject} ${course.number}</strong>: ${course.title}
//             ${course.completed ? '<span class="badge">Completed✔</span>' : ''} <strong>Credit: ${course.credits} </strong>`;

//         div.innerHTML = courseHTML;
//         courseContainer.appendChild(div);

//     });
// }


// function filterCourses(filter) {
//     let filteredCourses;

//     if (filter === "all") {
//         filteredCourses = courses;
//     } else {
//         filteredCourses = courses.filter(course => course.subject === filter);
//     }
//     renderCourses(filteredCourses);
// }

// document.addEventListener("pointerdown", () => {
//     filterCourses("all");
// });




