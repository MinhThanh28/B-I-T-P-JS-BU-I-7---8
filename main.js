// khai báo mảng các số nhập vào
var arrNumber = [];
function getNumber() {
  var number = document.getElementById("inputNum").value * 1;
  arrNumber.push(number);
  var show = document.getElementById("txtArray");
  show.innerHTML = arrNumber;
}

/**
 * tính tổng các số dương trong mảng
 */
function sumPositive() {
  var sum = 0;
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      sum += arrNumber[i];
    }
  }
  var show = document.getElementById("txtSumPositive");
  show.innerHTML = sum;
}
/**
 * Đếm các số dương trong mảng
 */
function countPositive() {
  var count = 0;
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      count++;
    }
  }
  var show = document.getElementById("txtCountPositive");
  show.innerHTML = count;
}

/**
 * Tìm số nhỏ nhất trong mảng
 */
function minNumber() {
  var min = arrNumber[0];
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] < min) {
      min = arrNumber[i];
    }
  }
  var show = document.getElementById("txtMinNumber");
  show.innerHTML = min;
}

/**
 * tìm số dương nhỏ nhất trong mảng
 * khai báo mảng mới chứa các số dương
 * tìm số nhỏ nhất trong mảng mới
 */
function minPositive() {
  var arrPositive = [];
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      arrPositive.push(arrNumber[i]);
    }
  }
  var min = arrPositive[0];
  for (var i = 0; i < arrPositive.length; i++) {
    if (arrPositive[i] < min) {
      min = arrPositive[i];
    }
  }
  var show = document.getElementById("txtMinPositive");
  show.innerHTML = min;
}

/**
 * tìm số chẵn cuối cùng trong mảng
 */
function lastEven() {
  var lastEven = -1;
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] % 2 == 0) {
      lastEven = arrNumber[i];
    }
  }
  var show = document.getElementById("txtLastEven");
  show.innerHTML = lastEven;
}

/**
 * đổi chỗ 2 số trong mảng
 */
function swapNumber() {
  var positionNumber1 = document.getElementById("positionNumber1").value * 1;
  var positionNumber2 = document.getElementById("positionNumber2").value * 1;
  var temp = arrNumber[positionNumber1];
  arrNumber[positionNumber1] = arrNumber[positionNumber2];
  arrNumber[positionNumber2] = temp;
  var show = document.getElementById("txtSwapNumber");
  show.innerHTML = arrNumber;
}

/**
 * sắp xếp mảng theo thứ tự tăng dần
 * duyệt qua từng phần tử trong mảng arrNumber (i=0)
 * duyệt qua từng phần tử trong mảng arrNumber (j=i+1)
 * so sánh phần tử arrNumber[i] và arrNumber[j]
 * nếu arrNumber[i] > arrNumber[j] thì đổi chỗ 2 phần tử đó
 */
function sortNumber() {
  for (var i = 0; i < arrNumber.length; i++) {
    for (var j = i + 1; j < arrNumber.length; j++) {
      if (arrNumber[i] > arrNumber[j]) {
        var temp = arrNumber[i];
        arrNumber[i] = arrNumber[j];
        arrNumber[j] = temp;
      }
    }
  }
  var show = document.getElementById("txtSortNumber");
  show.innerHTML = arrNumber;
}

/**
 * tìm số nguyên tố đầu tiên trong mảng
 * khi tìm thấy thì dùng break để dừng vòng lặp
 */
function firstPrime() {
  var firstPrime = -1;
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] < 2) {
      continue;
    }
    var check = true;
    for (var j = 2; j < arrNumber[i]; j++) {
      if (arrNumber[i] % j == 0) {
        check = false;
        break;
      }
    }
    if (check) {
      firstPrime = arrNumber[i];
      break;
    }
  }
  var show = document.getElementById("txtFirstPrime");
  show.innerHTML = firstPrime;
}
/**
 * Đếm số nguyên (integer) trong mảng
 */
var arrNumber1 = [];
function getNumber1() {
  var number = document.getElementById("inputNum1").value * 1;
  arrNumber1.push(number);
  var show = document.getElementById("txtArray1");
  show.innerHTML = arrNumber1;
}
function countInteger() {
  var count = 0;
  for (var i = 0; i < arrNumber1.length; i++) {
    if (Number.isInteger(arrNumber1[i])) {
      count++;
    }
  }
  var show = document.getElementById("txtCountInteger");
  show.innerHTML = count;
}

/**
 * so sánh số lượng sô dương và số lượng số âm
 */
function compareNumber() {
  var countPositive = 0;
  var countNegative = 0;
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      countPositive++;
    } else if (arrNumber[i] < 0) {
      countNegative++;
    }
  }
  var show = document.getElementById("txtCompareNumber");
  if (countPositive > countNegative) {
    show.innerHTML = "số dương > số âm";
  } else if (countPositive < countNegative) {
    show.innerHTML = "số âm > số dương";
  } else {
    show.innerHTML = "số âm = số dương";
  }
}
