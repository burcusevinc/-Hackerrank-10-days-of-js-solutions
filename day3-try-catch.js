function reverseString(s) {
    try {
        var reverseS = s.split("").reverse().join("")
        console.log(reverseS)
    }catch(error){
        console.log(error.message)
        console.log(s)
    }
}