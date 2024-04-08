var students = [['david', 80], ['vinoth', 77], ['divya', 88], ['ishitha', 95], ['thomas', 68]];

var Avg = 0;

for(i=0; i<students.length; i++){
    Avg += students[i][1];
}
Avg /= students.length;
console.log("Average Marks: " + (Avg));

if(Avg < 60){
    console.log("Grade : F");
}else if(Avg >= 60 && Avg < 70){
    console.log("Grade : D");
}else if(Avg >= 70 && Avg < 80){
    console.log("Grade : C");
}else
    console.log("Grade : A");
