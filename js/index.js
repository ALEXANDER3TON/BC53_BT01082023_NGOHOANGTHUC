// BT1

// B1: tạo biến
// số ngày làm
// lương 1 ngày
// tiền lương
//  B2: gán giá trị và xử lý
var ngayLam = 30;
var luongNgay = 100000;
var x = 1000;
x = x.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
var tienLuong = (ngayLam * luongNgay).toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
// B3: in kết quả
console.log('Tiền lương: ', tienLuong);

//--------------------------------------------------------------------

// BT2

// B1: tạo biến
// a,b,c,d,e (lần lược là các  số thực)
// sum: là tổng 5 các số thực
// n: 5 số
// trungBinhCong: trung bình cộng của 5 số thực
// B2: gán giá trị và xử lý
var a = 5;
var b = 10;
var c = 15;
var d = 20;
var e = 25;
var sum = a + b + c + d + e;
var n = 5;
var trungBinhCong = sum/n;
// B3: in ra kết quả
console.log('Trung Bình Cộng: ', trungBinhCong);

//----------------------------------------------------------

// BT3

// B1: tạo biến
// giaUsd: là giá USD hiện ngayLam
// soUsd: là số tiền USD
// tienSauQuyDoi: là tiền sau quy đổi 
// B2: gán giá trị và xử lý
var giaUsd = 23500
var soUsd = 14
var x = 1000;
x = x.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
var tienSauQuyDoi = (giaUsd*soUsd).toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
// B3: in ra kết quả
console.log('Tiền sau quy đổi: ', tienSauQuyDoi)

//----------------------------------------------------------

// BT4 

// B1: tạo biến
// m: là chiều dài 
// n: là chiều rộng
// cv: là chu vi 
// dt: là diện tích
// B2: gán giá trị và xử lý
var m = 10
var n = 5
var cv = m+m + n+n
var dt = m*n
// B3: in ra kết quả
console.log('Diện tích = ', dt)
console.log('Chu vi = ', cv)

//------------------------------------------------------
// BT5:

// B1: tạo biến
// n: số có 2 chữ số
// unit: hàng đơn vị
// ten: hàng chục
// tong: sổ 2 ký số vừa nhập
// B2: gán giá trị và xử lý
var n = 45
var unit = Math.floor(45%10)
var ten = Math.floor(45/10)
var tong = unit + ten
// B3: in ra kết quả
console.log('Tổng 2 ký số = ', tong)