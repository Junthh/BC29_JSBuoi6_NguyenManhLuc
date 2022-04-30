/**
 * Bài 1: Tìm số nguyên dương nhỏ nhất
 */
 document.getElementById("subMit_1").onclick = function(){
    var sum = 0;
    var n = 0;
    while(sum < 10000){
        n++;
        sum = sum + n;
    }

    document.getElementById("show_1").innerHTML = "Số nguyên dương nhỏ nhất là: " + n;
}


/**
 * Bài 2: Tính tổng
 */

function tinhTong(){
    var num_x = document.getElementById("enNumber_1").value*1;
    var num_n = document.getElementById("enNumber_2").value*1;
    var c = 1;
    var s = 0;
    
    for(var i = 1; i <= num_n; i++){
        c = c*num_x;
        s += c;
    }

    return s;
}

document.getElementById("subMit_2").onclick = function(){
    var sum_n = tinhTong();
    document.getElementById("show_2").innerHTML = "Tổng " + sum_n;
}

/**
 * Bài 3: Tính giai thừa
 */

document.getElementById("subMit_3").onclick = function(){
    var num_1 = document.getElementById("enNumber_3").value;
    var tongGT = 1;

    for(var i = 1; i <= num_1; i++){
            tongGT =tongGT*i;
    }

    document.getElementById("show_3").innerHTML = "Giai thừa: " + tongGT;
}

/**
 * Bài 4: tạo thẻ div
 */

document.getElementById("subMit_4").onclick = function(){
    var list = [1,2,3,4,5,6,7,8,9,10];
    var lisDiv = "";

    for(var i = 1; i<= list.length; i++){
        if(i%2 === 0){
            lisDiv += "<div> Div chẵn</div>";
            document.getElementById("show_4").innerHTML = lisDiv;
        } else{
            lisDiv += "<div> Div lẻ</div>";
            document.getElementById("show_4").innerHTML =  lisDiv;
        }
    }
}