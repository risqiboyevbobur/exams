// BOBUR RISQIBOYEV



// 1)
// Istalgan uzunlikdagi 2 ta  massivlari berilgan a va b, har bir massivning birinchi elementi bilan yangi massivni qaytaring. Agar massiv uzunligi 0 bo'lsa, bu massivga e'tibor bermang.

// front11([1, 2, 3], [7, 9, 8]) → 1,7
// front11([1], [2]) → 1,2
// front11([1, 7], []) → 1

// let front11 = [[1, 2, 3], [7,9,8]]
// console.log(front11[0][0],front11[1][0]);
// if(front11[1][0].length === 0){
//     console.log(false);
// }
// else{
//     console.log(front11[0][0],front11[1][0]);
// }

/////////////////////////////////////////////////////

// 2)
// massiv berilgan bo'lsa, massiv 1-elementidan keyingi elementlarida 2 bolsa true ni qaytaring aks holda false qaytisin

// has12([1, 3, 2]) → true
// has12([3, 1, 2]) → true


// let has12 = [1, 3, 2]
// if(has12[2] === 2){
//     console.log(true);
// }else{
//   console.log(false);
// }

//////////////////////////////////////////////////////////

// 3)
// Istalgan uzunlikdagi 2 ta  massiv keladi, a va b.Massivlarda nechta 1 borligni aniqlang

// start1([1, 2, 3], [1, 3]) → 2
// start1([7, 2, 3], [1]) → 1
// start1([1, 2], []) → 1

// let start1 = [[1, 2, 3], [1,3]]

// if(start1[0], start1[1].includes(1)){
//     console.log(start1[0][0] + start1[1][0]);

// }

// else{
//   console.log(start1[0][0]);
// }

////////////////////////////////////////////////////////////////////
// 4) massiv berilgan bolsa massivning boshidagi 2 ta element yig’indisni qaytaring.
// Agar massiv uzunligi 2 dan kichik bo'lsa, mavjud elementlarni chiqaring, agar massiv uzunligi 0 bo'lsa, 0 ni qaytaring.

// sum2([1, 2, 3]) → 3
// sum2([1, 1]) → 2
// sum2([1, 1, 1, 1]) → 2

// let sum2 = [1, 2, 1]

// if(sum2.length === 0){
//     console.log(0);
// }
// else{
//     console.log(sum2[0] + sum2[1]);
// }



// 5) bizga massiv berilgan bolsa. Massiv boshidagi element yoki ohiridagi element 6 ga teng bolsa true qaytaring aks holda false qaytsin

// firstLast6([1, 2, 6]) → true
// firstLast6([6, 1, 2, 3]) → true
// firstLast6([13, 6, 1, 2, 3]) → false


// let firstLast6 = [1, 2, 6]
// if(firstLast6.includes(6)){
//     console.log(true);
// }else {
//     console.log(false);
// }
