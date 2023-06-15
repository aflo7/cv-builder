import { v4 as uuidv4 } from "uuid"

export const emptyFields = {
    personalInfo: {
        name: "",
        title: "",
        address: "",
        phoneNumber: "",
        email: "",
        description: ""
    },
    experience: [
        // {
        //     id: uuidv4(),
        //     position: "",
        //     company: "",
        //     city: "",
        //     from: "",
        //     to: ""
        // }
    ],
    education: [
        // {
        //     id: uuidv4(),
        //     universityName: "",
        //     location: "",
        //     degree: "",
        //     subject: "",
        //     from: "",
        //     to: ""
        // }
    ]
}

export const filledFields = {
    personalInfo: {
        name: "Matt Lake",
        title: "Engineer",
        address: "123 Street Ave",
        phoneNumber: "4402266521",
        email: "matt@lake.com",
        description:
            "I'm a student with a degree in English and minor in software engineering. I have experience with the Python programming language."
    },
    experience: [
        {
            id: uuidv4(),
            position: "Junior Engineer",
            company: "Google",
            city: "Los Angeles",
            from: "2010",
            to: "2011"
        },
        {
            id: uuidv4(),
            position: "Junior Engineer",
            company: "Microsoft",
            city: "Los Angeles",
            from: "2012",
            to: "2015"
        },
        {
            id: uuidv4(),
            position: "Senior Engineer",
            company: "Google",
            city: "Venice, California",
            from: "2016",
            to: "2023"
        }
    ],
    education: [
        {
            id: uuidv4(),
            universityName: "The Community College",
            location: "Pittsburgh, PA",
            degree: "Associate",
            subject: "Science",
            from: "2000",
            to: "2002"
        },
        {
            id: uuidv4(),
            universityName: "Harvard University",
            location: "Cambridge, MA",
            degree: "Bachelor",
            subject: "English",
            from: "2002",
            to: "2006"
        },
        {
            id: uuidv4(),
            universityName: "MIT",
            location: "Cambridge, MA",
            degree: "Master",
            subject: "Mathematics",
            from: "2006",
            to: "2010"
        }
    ]
}
