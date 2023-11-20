// bài1
let ngan = +prompt("nhập ")
let con= [];
for (let i = 0; i <ngan; i++) {
    let newE = +prompt("ngan con: " + (i + 1));
    con.push(newE)
}
for (const ngan in con) {
    if (con[ngan] % 2 === 0){
        document.write(con[ngan]);
    }
}
// bài2
let n1 = [];
let number1  = +prompt("Nhập mảng: ");
for (let i = 1; i <= number1; i++) {
}
let c = 0;
for (let i = 1; i <= number1; i++) {
    n1[i] = prompt("Nhâp phần tử thứ: "+ i);
}
for (let i = 1; i <= number1 ; i++) {
    if (n1[i] === "5"){
        c++;
    }
}
alert("Có "+ c + " phần tử a là" );
// bài3
