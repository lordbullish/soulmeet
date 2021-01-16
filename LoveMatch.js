const theObject = {
    userData(name, dob, mob){
        return {
            name,
            dob,
            mob
        }
    }
}
let rita = theObject.userData('Rita', 12, 12)

console.log(rita.name)