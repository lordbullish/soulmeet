const zodiacCalculator =(dob, mob)=>{
    switch(mob){
        case 1:
            if(dob>=1 && dob<=20){return 'Capricorn'}else if(dob>=21 && dob<=31){return 'Aquarius'}
            break;
        case 2:
            if(dob>=1 && dob<=19){return 'Aquarius'}else if(dob>=20 && dob<=29){return 'Pisces'}
            break;
        case 3:
            if(dob>=1 && dob<=20){return 'Pisces'}else if(dob>=21 && dob<=31){return 'Aries'}
            break;
        case 4:
            if(dob>=1 && dob<=20){return 'Aries'}else if(dob>=21 && dob<=30){return 'Taurus'}
            break;
        case 5:
            if(dob>=1 && dob<=21){return 'Taurus'}else if(dob>=22 && dob<=31){return 'Gemini'}
            break;
        case 6:
            if(dob>=1 && dob<=21){return 'Gemini'}else if(dob>=22 && dob<=30){return 'Cancer'}
            break;
        case 7:
            if(dob>=1 && dob<=22){return 'Cancer'}else if(dob>=23 && dob<=31){return 'Leo'}
            break;
        case 8:
            if(dob>=1 && dob<=22){return 'Leo'}else if(dob>=23 && dob<=31){return 'Virgo'}
            break;
        case 9:
            if(dob>=1 && dob<=22){return 'Virgo'}else if(dob>=23 && dob<=30){return 'Libra'}
            break;
        case 10:
            if(dob>=1 && dob<=22){return 'Libra'}else if(dob>=23 && dob<=31){return 'Scorpio'}
            break;
        case 11:
            if(dob>=1 && dob<=22){return 'Scorpio'}else if(dob>=22 && dob<=31){return 'Sagittarius'}
            break;
        case 12:
            if(dob>=1 && dob<=21){return 'Sagittarius'}else if(dob>=22 && dob<=31){return 'Capricorn'}
            break;
    }
}
const theObject = {
    userData(name, dob, mob){
        return {
            name,
            dob,
            mob,
            zodiacSign: zodiacCalculator(dob,mob)
        }
    },
    crushData(name, dob, mob){
        return {
            name,
            dob,
            mob,
            zodiacSign: zodiacCalculator(dob, mob)
        }
    }
}


let user = theObject.userData('Rita', 12, 12)
let crush = theObject.crushData('Micheal', 18, 9)
//console.log(zodiacCalculator(16,10))
console.log(user.zodiacSign)