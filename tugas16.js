deret1 =[45, 100, 99, 3, 2, 4, 1, 2, 3, 19, 22, 14, 10]
deret2=[45, 100, 99, 3, 2, 81, 22, 55, 1, 2, 3, 4, 5]

function cariMIN(nilai) {
	return Math.min.apply(Math,nilai)
}

function cariMAX(nilai) {
	return Math.max.apply(Math,nilai)
}

console.log("Nilai Minimal Deret-A adalah =",cariMIN(deret1))
console.log("Nilai Maximal Deret-A adalah =",cariMAX(deret1))

console.log("Nilai Minimal Deret-B adalah =",cariMIN(deret2))
console.log("Nilai Maximal Deret-B adalah =",cariMAX(deret2))