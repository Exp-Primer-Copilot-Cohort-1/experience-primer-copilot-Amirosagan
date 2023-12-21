function skillsMember() {
    var skills = ["HTML", "CSS", "JS", "React", "Node"];
    var member = {
        name: "John",
        age: 23,
        skills: skills,
        address: {
            street: "123 Main St",
            city: "Miami",
            state: "FL"
        }
    };
    console.log(member.skills[2]);
    console.log(member.address.city);
}