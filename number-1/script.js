class Person {
    constructor(name, contact, education, skills, interests) {
        this.name = name;
        this.contact = contact;
        this.education = education;
        this.skills = skills;
        this.interests = interests;
    }

    display() {
        console.log(`Name: ${this.name}`);
        console.log(`Contact:`);
        console.log(`  Email: ${this.contact.email}`);
        console.log(`  Phone: ${this.contact.phone}`);
        console.log(`  Address: ${this.contact.address}`);
        
        console.log(`Education:`);
        this.education.forEach(edu => {
            console.log(`  Degree: ${edu.degree}`);
            console.log(`  Institution: ${edu.institution}`);
            console.log(`  Location: ${edu.location}`);
            console.log(`  Graduation Year: ${edu.graduationYear}`);
        });
        
        console.log(`Skills:`);
        this.skills.forEach(skill => console.log(`  - ${skill}`));
        
        console.log(`Interests:`);
        this.interests.forEach(interest => console.log(`  - ${interest}`));
    }
}
    const resume = {
        "name": "surendher babu",
        "contact": {
            "email": "surendherbabu13@gmail.com",
            "phone": "6383451520",
            "address": "775/6,main road, kandaangalam"
        },
        "education": [
            {
                "degree": "Bachelor of Computer Application",
                "institution": "Bharathidasan university",
                "location": "Trichy",
                "graduationYear": 2020
            }
        ],
        "skills": [
            "JavaScript",
            "Node.js",
            "React",
            "Angular",
            "HTML",
            "CSS"
        ],
        "interests": [
            "Coding",
            "Open-source contributions",
            "Traveling",
            "Reading"
        ]
    };

const person = new Person(
    resume.name,
    resume.contact,
    resume.education,
    resume.skills,
    resume.interests
);

person.display();
