// selecting elements 
const container = document.querySelector('.containers');

// arrY 
const career = ["YouTuber","Web Devoloper","Freelancer","Instrudaction"]
// variable 
let careerIndex = 0;
let craecterIndex = 0;



const updateValue = () =>{
    craecterIndex++;
    container.innerHTML = `<h1 class="logo">I am a ${career[careerIndex].slice(0,craecterIndex)}</h1>`;
    if(craecterIndex === career[careerIndex].length){
        careerIndex++;
        craecterIndex = 0;
    }
    if(careerIndex === career.length){
        careerIndex = 0;
    }
    setTimeout(updateValue,400)

}
updateValue();


// const updateText = () =>{
//     craecterIndex++;
//     container.innerHTML = `<h1 class="logo">I am a ${career[careerIndex].slice(0,craecterIndex)}</h1>`;
//     if(craecterIndex === career[careerIndex].length){
//         careerIndex++;
//         craecterIndex = 0;
//     }
//     if(careerIndex === career.length){
//         careerIndex = 0;
//     }
//     setTimeout(updateText,400)
// }

// updateText();


