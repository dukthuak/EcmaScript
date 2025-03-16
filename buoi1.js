var a = 8;
var b = 10;

function tinhTong() {
    var a = 10;
    var b = 8;
    alert('tổng của hai số là ' + (a + b));
}
console.log(a);

document.getElementById('bnt1').addEventListener('click', function () {
    tinhTong();
});

document.getElementById('bnt2').addEventListener('click', function () {
    alert('button 2 clicked');
});

document.getElementById('bnt3').addEventListener('click', function () {
    alert('button 3 clicked, a = ' + a);
});