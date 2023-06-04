// 抓時間顯示在網頁上
function showTime(){
    // 現在時間
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    // 現在時間轉成字串
    let str_year = year.toString();
    let str_month = month.toString();
    if(str_month == 1) {str_month = "01"}
    if(str_month == 2) {str_month = "02"}
    if(str_month == 3) {str_month = "03"}
    if(str_month == 4) {str_month = "04"}
    if(str_month == 5) {str_month = "05"}
    if(str_month == 6) {str_month = "06"}
    if(str_month == 7) {str_month = "07"}
    if(str_month == 8) {str_month = "08"}
    if(str_month == 9) {str_month = "09"}
    let str_day = day.toString();
    if(str_day == 1) {str_day = "01"}
    if(str_day == 2) {str_day = "02"}
    if(str_day == 3) {str_day = "03"}
    if(str_day == 4) {str_day = "04"}
    if(str_day == 5) {str_day = "05"}
    if(str_day == 6) {str_day = "06"}
    if(str_day == 7) {str_day = "07"}
    if(str_day == 8) {str_day = "08"}
    if(str_day == 9) {str_day = "09"}
    let str_hour = hour.toString();
    if(str_hour == 0) {str_hour = "00"}
    if(str_hour == 1) {str_hour = "01"}
    if(str_hour == 2) {str_hour = "02"}
    if(str_hour == 3) {str_hour = "03"}
    if(str_hour == 4) {str_hour = "04"}
    if(str_hour == 5) {str_hour = "05"}
    if(str_hour == 6) {str_hour = "06"}
    if(str_hour == 7) {str_hour = "07"}
    if(str_hour == 8) {str_hour = "08"}
    if(str_hour == 9) {str_hour = "09"}
    let str_min = min.toString();
    if(str_min == 1) {str_min = "01"}
    if(str_min == 2) {str_min = "02"}
    if(str_min == 3) {str_min = "03"}
    if(str_min == 4) {str_min = "04"}
    if(str_min == 5) {str_min = "05"}
    if(str_min == 6) {str_min = "06"}
    if(str_min == 7) {str_min = "07"}
    if(str_min == 8) {str_min = "08"}
    if(str_min == 9) {str_min = "09"}
    let str_sec = sec.toString();
    if(str_sec == 0) {str_sec = "00"}
    if(str_sec == 1) {str_sec = "01"}
    if(str_sec == 2) {str_sec = "02"}
    if(str_sec == 3) {str_sec = "03"}
    if(str_sec == 4) {str_sec = "04"}
    if(str_sec == 5) {str_sec = "05"}
    if(str_sec == 6) {str_sec = "06"}
    if(str_sec == 7) {str_sec = "07"}
    if(str_sec == 8) {str_sec = "08"}
    if(str_sec == 9) {str_sec = "09"}
    // let time = year + "年" + month + "月" + day + "日" + hour + "點" + min + "分" + sec + "秒";
    document.querySelector(".clock_year").innerHTML = str_year; 
    document.querySelector(".clock_month").innerHTML = str_month; 
    document.querySelector(".clock_day").innerHTML = str_day; 
    document.querySelector(".clock_hour").innerHTML = str_hour; 
    document.querySelector(".clock_min").innerHTML = str_min; 
    document.querySelector(".clock_sec").innerHTML = str_sec; 
    setTimeout(showTime, 1000);
  }
showTime();

let list = document.querySelector(".list");
let sendData = document.querySelector(".send");
let data = JSON.parse(localStorage.getItem("listData")) || [];

// 增加清單
function addData(e){
    e.preventDefault();
    let txt = "<p>" + "<span class='remindOne'>" + document.querySelector(".content_text").value + "</span>" + "</p>"
            + "<p>" + "<span class='remindTwo'>" + document.querySelector(".content_date").value + "</span>" + "</p>"
            + "<p>" + "<span class='remindThree'>" + document.querySelector(".content_time").value + "</span>" + "</p>" ;
    let todo = {
        content : txt
    };
    if(document.querySelector(".content_text").value == "") {
        alert("請輸入代辦事項");
    }
    else if(document.querySelector(".content_date").value == "") {
        alert("請輸入日期")
    }
    else if(document.querySelector(".content_time").value == "") {
        alert("請輸入時間")
    }
    else {
        data.push(todo);
        updateList(data);
        localStorage.setItem("listData", JSON.stringify(data));
    }
};

// 更新清單
function updateList(items) {
    let str = "";
    let len = items.length;
    for(let i = 0; len > i; i++) {
        str += "<li><a href='#' data-index=" + i + "/>×</a>" + items[i].content + "</li>";
    }
    list.innerHTML = str;
    function judgeTime() {
        let catchDate = document.querySelectorAll(".remindTwo");
        let arr_catchDate = [];
        catchDate.forEach(spanElement => {
            arr_catchDate.push(spanElement.textContent);
        });
        let catchTime = document.querySelectorAll(".remindThree");
        let arr_catchTime = [];
        catchTime.forEach(spanElement => {
            arr_catchTime.push(spanElement.textContent);
        });
        // 現在時間
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth()+1;
        let day = date.getDate();
        let hour = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
        // 現在時間轉成字串
        let str_year = year.toString();
        let str_month = month.toString();
        if(str_month == 1) {str_month = "01"}
        if(str_month == 2) {str_month = "02"}
        if(str_month == 3) {str_month = "03"}
        if(str_month == 4) {str_month = "04"}
        if(str_month == 5) {str_month = "05"}
        if(str_month == 6) {str_month = "06"}
        if(str_month == 7) {str_month = "07"}
        if(str_month == 8) {str_month = "08"}
        if(str_month == 9) {str_month = "09"}
        let str_day = day.toString();
        if(str_day == 1) {str_day = "01"}
        if(str_day == 2) {str_day = "02"}
        if(str_day == 3) {str_day = "03"}
        if(str_day == 4) {str_day = "04"}
        if(str_day == 5) {str_day = "05"}
        if(str_day == 6) {str_day = "06"}
        if(str_day == 7) {str_day = "07"}
        if(str_day == 8) {str_day = "08"}
        if(str_day == 9) {str_day = "09"}
        let str_hour = hour.toString();
        if(str_hour == 0) {str_hour = "00"}
        if(str_hour == 1) {str_hour = "01"}
        if(str_hour == 2) {str_hour = "02"}
        if(str_hour == 3) {str_hour = "03"}
        if(str_hour == 4) {str_hour = "04"}
        if(str_hour == 5) {str_hour = "05"}
        if(str_hour == 6) {str_hour = "06"}
        if(str_hour == 7) {str_hour = "07"}
        if(str_hour == 8) {str_hour = "08"}
        if(str_hour == 9) {str_hour = "09"}
        let str_min = min.toString();
        if(str_min == 1) {str_min = "01"}
        if(str_min == 2) {str_min = "02"}
        if(str_min == 3) {str_min = "03"}
        if(str_min == 4) {str_min = "04"}
        if(str_min == 5) {str_min = "05"}
        if(str_min == 6) {str_min = "06"}
        if(str_min == 7) {str_min = "07"}
        if(str_min == 8) {str_min = "08"}
        if(str_min == 9) {str_min = "09"}
        let plus_str_date = str_year + "-" + str_month + "-" + str_day;
        let plus_str_time = str_hour + ":" + str_min;
        let compareDate = arr_catchDate.indexOf(plus_str_date);
        let compareTime = arr_catchTime.indexOf(plus_str_time);
        if(compareDate >= 0 && compareTime >= 0 && sec == 0) {
            // alert("水")
            popup.classList.add("active");
        }
        setTimeout(judgeTime, 1000);
    }
    judgeTime();
};

// 刪除清單
function toggleDone(e) {
    e.preventDefault();
    if(e.target.nodeName !== "A"){return};
    let index = e.target.dataset.index;
    data.splice(index,1);
    localStorage.setItem("listData",JSON.stringify(data));
    updateList(data);
};

sendData.addEventListener("click", addData);
list.addEventListener("click", toggleDone);
setTimeout(updateList(data), 1000);

// Popup
let popup = document.querySelector(".popup");
let cross = document.querySelector(".cross");

cross.addEventListener("click", (e) => {
    popup.classList.remove("active");
    e.target.body.remove("active");
});
  
window.addEventListener("click", (e) => {
    if (e.target == popup) {
        popup.classList.remove("active");
    }
});
