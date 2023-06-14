var crypto = require('crypto');

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
        {
            id: crypto.randomUUID(),
            position: "",
            company: "",
            city: "",
            from: "",
            to: ""
        }
    ],
    education: {
        id: crypto.randomUUID(),
        universityName: "",
        location: "",
        degree: "",
        subject: "",
        from: "",
        to: ""
    }
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
            id: crypto.randomUUID(),
            position: "Junior Engineer",
            company: "Google",
            city: "Los Angeles",
            from: "2010",
            to: "2011"
        },
        {
            id: crypto.randomUUID(),
            position: "Junior Engineer",
            company: "Microsoft",
            city: "Los Angeles",
            from: "2012",
            to: "2015"
        },
        {
            id: crypto.randomUUID(),
            position: "Senior Engineer",
            company: "Google",
            city: "Venice, California",
            from: "2016",
            to: "2023"
        }
    ],
    education: {
        id: crypto.randomUUID(),
        universityName: "Harvard University",
        location: "Cambridge, MA",
        degree: "Bachelors",
        subject: "English",
        from: "2006",
        to: "2010"
    }
}
