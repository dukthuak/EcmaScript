// khai báo dữ liệu
var arrSinhVien = [
    { ten: "Quyền", tuoi: 25, diem: 9 },
    { ten: "Chiến", tuoi: 29, diem: 4 },
    { ten: "Thư", tuoi: 17, diem: 6 },
];
 
// Random màu
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// hiển màu ở table
function renderScreen() {
    var renderString = ``;
    arrSinhVien.forEach((sv, index) => {
        let randomColor = getRandomColor();
        renderString +=
            `<tr>
                <td class="item">${sv.ten}</td>
                <td class="item">${sv.tuoi}</td>
                <td style="background-color: ${randomColor}; color: white;">${sv.diem}</td>
                <td><button class="btn btn-danger btn-sm" onclick="xoa(${index})">Xóa</button></td>
            </tr>`;
    });
    document.getElementById("target").innerHTML = renderString;
}

// xử lý form nhập liệu
function valForm(event) {
    event.preventDefault();
    var hoTen = document.getElementById("hoTen").value.trim();
    var tuoi = parseInt(document.getElementById("tuoi").value);
    var diem = parseFloat(document.getElementById("diem").value);

    if (!hoTen || isNaN(tuoi) || isNaN(diem)) {
        alert("Vui lòng nhập đầy đủ thông tin hợp lệ!");
        return;
    }

    arrSinhVien.push({ ten: hoTen, tuoi, diem });
    document.getElementById("studentForm").reset();
    renderScreen();
}

