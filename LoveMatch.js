const theObject = {
    userData(name, dob, mob, heart){
        return {
            name,
            mob,
            heart
        }
    }
}
let rita = theObject.userData('Rita', 12, 12)

console.log(rita.name)