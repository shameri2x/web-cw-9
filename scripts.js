// 1
// moon.jpg قم بالوصول إلى الصورة وتغيرها إلى

// 2
// "قم بالوصول إلى كلمة الأرض وتحويلها إلى "القمر



// 3
// بحيث إن ضغطت على البطاقة تتغير الصورة للصورة الأخرى ويتغير الاسم onClick قم بإنشاء دالة واستخدام خاصية
// دون الحاجة إلى الخطوتين 2و1
let title = document.getElementById("caption");
let body = document.body;

function change(){


    if (title.innerHTML == "الشمس") {
        
        let change = document.getElementById("image");
        change.src =  " images/moon.jpg "
        let title = document.getElementById("caption");
        title.innerHTML="القمر";
        body.style.background = "#5D6D7E";

    
    } else {
        let change = document.getElementById("image");
        change.src =  " images/sun.jpg "
        let title = document.getElementById("caption");
        title.innerHTML="الشمس";
        body.style.background = "#EC401C";

    }
  
}
change()
// 4
// Night - Light Mode قم بالتعديل على الدالة بحيث تضم إليها خاصية

/*  الوضع الليلي
    يتغير لون خلفية الصفحة للرمادي
    تتغير الصورة لصورة القمر
    "يتغير الاسم أسفل الصورة ويصبح "القمر
*/

/*  الوضع النهاري
    يتغير لون خلفية الصفحة للأبيض
    تتغير الصورة لصورة الشمس
    "يتغير الاسم أسفل الصورة ويصبح "الشمس
*/
