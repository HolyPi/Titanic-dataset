// ================================================================

// Titanic Dataset challenges! 

// Your goal is to write some functions that will extract
// relevant data from the dataset. 

// Write your code here in this file. 

// *************************************
// Test your code by running: `npm test`
// *************************************

// Each of the functions below expects to receive the Titanic data
// as the parameter data. Your goal is to extract the relevant 
// piece of information from the data and return it. 

// =================================================================

// 1 ---------------------------------------------------------------
// Return the total number of passengers. 
// Return a number.



function getTotalPassengers(data) {
		return data.length
	}
	

// 2 ---------------------------------------------------------------
// Return the number of surviving passengers. A passenger survived 
// if their survived property is "Yes".
// Return a number.

function getSurvivorCount(data) {
	const survivors = data.filter( p => p.fields.survived == "Yes")
	return survivors.length
}

// 3 ---------------------------------------------------------------
// Return the number of passengers who did not survive. A passenger
// Return a number.

function getCasualityCount(data) {
	const casualties = data.filter( p => p.fields.survived == "No")
	return casualties.length
}

// 4 ---------------------------------------------------------------
// Return the number of passengers in any class. This function 
// takes the data and the passenger class a string. Fins all of the 
// passengers whose pclass matches and return the count. 
// Return a number

function countPassengersInClass(data, pclass) {
	const classpass = data.filter( p => p.fields.pclass == (pclass))
	return classpass.length
}

// 5 ---------------------------------------------------------------
// Return the number of survivors in a class. This function takes 
// the data and passenger class. Return only passengers  

function getSurvivorCountForClass(data, pclass) {
	const survivedclass = data.filter( p => p.fields.pclass == (pclass))
	.filter(p => p.fields.survived === 'Yes')
	return survivedclass.length
}

// 6 ---------------------------------------------------------------
// Return the number of passengers who did not survive in a class.
// This function takes the data and the passenger class and returns 
// the number of passengers who did not survive for that class. 

function getCasualityCountForClass(data, pclass) {
	const nsurvivedclass = data.filter( p => p.fields.pclass == (pclass))
	.filter(p => p.fields.survived === 'No')
	return nsurvivedclass.length
}

// 7 ---------------------------------------------------------------
// Return the age of the youngest passenger. You'll need to filter
// passenger data where the age is missing. 

function getMinAge(data) {
	const minorP = data.filter (p => p.fields.age != undefined).map(p => p.fields.age)
	const minAge = Math.min(...minorP)
	return minAge
}

// 8 ---------------------------------------------------------------
// Return the age of the oldest passenger. 

function getMaxAge(data) {
	const maxP = data.filter (p => p.fields.age != undefined).map(p => p.fields.age)
	const maxAge = Math.max(...maxP)
	return maxAge
}

// 9 ---------------------------------------------------------------
// Return the number of passengers that embarked at a given stop. 
// Each passenger has a embarked property with a value of: S, C,
// or Q. 

function getEmbarkedCount(data, embarked) {
	const embarkC = data.filter( p => p.fields.embarked == (embarked))
	return embarkC.length
}

// 10 ---------------------------------------------------------------
// Return the lowest fair paid by any passenger. The fare is missing 
// for some passengers you'll need to filter this out! 

function getMinFare(data) {
	const fare = data.filter( p => p.fields.fare != undefined).map(p => p.fields
	.fare)
	const minFare = Math.min(...fare)
	return minFare
}

// 11 ---------------------------------------------------------------
// Return the highest fare paid by any passenger. Some of the 
// passengers are missing data for fare.

function getMaxFare(data) {
	const fare = data.filter( p => p.fields.fare != undefined).map(p => p.fields
	.fare)
	const maxFare = Math.max(...fare)
	return maxFare
}


// 12 ---------------------------------------------------------------
// Return the count of passengers by gender. 

function getPassengersByGender(data, gender) {
	const pGender = data.filter( p => p.fields.sex == (gender))
	return pGender.length
}

// 13 ---------------------------------------------------------------
// Return the number of passengers who survived by gender. 

function getSurvivorsByGender(data, gender) {
	const survivedG = data.filter( p => p.fields.sex == (gender))
	.filter(p => p.fields.survived === 'Yes')
	return survivedG.length
}

// 14 ---------------------------------------------------------------
// Return the number of passengers who did not survived by gender. 

function getCasualitiesByGender(data, gender) {
	const survivedG = data.filter( p => p.fields.sex == (gender))
	.filter(p => p.fields.survived === 'No')
	return survivedG.length
}

// 15 --------------------------------------------------------------
// Return the total of all fares paid. 

function getTotalFare(data) {
	const tFare = data.filter(p => p.fields.fare !== undefined).reduce
	((acc, p) => acc + p.fields.fare, 0)
	return tFare
}

// 16 --------------------------------------------------------------
// Return the average fare paid.

function getAverageFare(data) {
	const fares = data.filter(p => p.fields.fare !== undefined)
	.map(p => p.fields.fare)
	.sort( (a, b) => a - b)
	fareavg = (fares.reduce((acc, p) => acc + p, 0)) / fares.length
	return fareavg
}

// 17 --------------------------------------------------------------
// Return the median fare. The median is the value equal distance
// from the minimum and maximum values. 

function getMedianFare(data) {
	const mfare = data.filter(p => p.fields.fare !== undefined)
	.map(p => p.fields.fare)
	.sort( (a, b) => a - b)
	return mfare.length / 2
}

// 18 --------------------------------------------------------------
// Return the average age of all passengers. 

function getAverageAge(data) {
	const age = data.filter(p => p.fields.age !== undefined)
	.map(p => p.fields.age)
	.sort( (a, b) => a - b)
	ageavg = (age.reduce((acc, p) => acc + p, 0)) / age.length
	return ageavg
}

// 19 --------------------------------------------------------------
// Return the median age from passengers. 

function getMedianAge(data) {
	const age = data.filter(p => p.fields.age !== undefined)
	.map(p => p.fields.age)
	.sort( (a, b) => a - b)
	const mAge = age[age.length / 2]
	return mAge
}

// 20 --------------------------------------------------------------
// 

function getAverageAgeByGender(data, gender) {
	const ageG = data.filter(p => p.fields.sex == (gender))
	.filter(p => p.fields.age !== undefined)
	.map(p => p.fields.age)
	ageavg = (ageG.reduce((acc, p) => acc + p, 0)) / ageG.length
	return ageavg
}


// --------------------------------------------------------------
// --------------------------------------------------------------

module.exports.getTotalPassengers = getTotalPassengers
module.exports.getSurvivorCount = getSurvivorCount
module.exports.getCasualityCount = getCasualityCount
module.exports.countPassengersInClass = countPassengersInClass
module.exports.getSurvivorCountForClass = getSurvivorCountForClass
module.exports.getCasualityCountForClass = getCasualityCountForClass
module.exports.getMinAge = getMinAge
module.exports.getMaxAge = getMaxAge
module.exports.getEmbarkedCount = getEmbarkedCount
module.exports.getMaxFare = getMaxFare
module.exports.getMinFare = getMinFare
module.exports.getPassengersByGender = getPassengersByGender
module.exports.getSurvivorsByGender = getSurvivorsByGender
module.exports.getCasualitiesByGender = getCasualitiesByGender
module.exports.getTotalFare = getTotalFare
module.exports.getAverageFare = getAverageFare
module.exports.getMedianFare = getMedianFare
module.exports.getAverageAge = getAverageAge
module.exports.getMedianAge = getMedianAge
module.exports.getAverageAgeByGender = getAverageAgeByGender