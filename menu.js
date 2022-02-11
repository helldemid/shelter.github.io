document.getElementById('butn1').onclick = Task1;
document.getElementById('butn2').onclick = Task2;
//document.getElementById('bavarages1').onclick = Task3;
//document.getElementById('bavarages2').onclick = Task4;
document.getElementById('food1').onclick = Task5;
document.getElementById('food2').onclick = Task6;


/*function addFood() {
    var parent = document.getElementById("catalog");
    let child = document.createElement('div');
    let child1 = document.createElement('div');

    child.className = "category_item item1";
    child1.className = "category_item item2";

    child.id = "food1";
    child1.id = "food2";

    child.innerHTML = "<h1>Сніданки</h1>";
    child1.innerHTML = "<h1>Ланчі</h1>";

    parent.append(child);
    parent.append(child1);

}

function removeFood() {
    var parent = document.getElementById("catalog");
    var child = document.getElementById("food1");
    var child2 = document.getElementById("food2");
    parent.removeChild(child);  
    parent.removeChild(child2);
}
function addBavarages() {
    var parent = document.getElementById("catalog");
    let child = document.createElement('div');
    let child1 = document.createElement('div');

    child.className = "category_item item3";
    child1.className = "category_item item4";

    child.id = "bavarages1";
    child1.id = "bavarages2";

    child.innerHTML = "<h1>Кава</h1>";
    child1.innerHTML = "<h1>Чай</h1>";

    parent.append(child);
    parent.append(child1);
}

function removeBavarages() {
    var parent = document.getElementById("catalog");
    var child = document.getElementById("bavarages1");
    var child2 = document.getElementById("bavarages2");
    parent.removeChild(child);  
    parent.removeChild(child2);
}
*/

function addFood() {
    document.getElementById("food1").style.display = "flex";
    document.getElementById("food2").style.display = "flex";
}

function removeFood() {
    document.getElementById("food1").style.display = "none";
    document.getElementById("food2").style.display = "none";
}

function addBavarages() {
    document.getElementById("bavarages1").style.display = "flex";
    document.getElementById("bavarages2").style.display = "flex";
}

function removeBavarages() {
    document.getElementById("bavarages1").style.display = "none";
    document.getElementById("bavarages2").style.display = "none";
}

function isActive(buttunID) {
    var temp = document.getElementById(buttunID).style.color;
    if(temp == "white") return true;
    else if(temp == "black") return false;

}

function Task1() {
    if(isActive("butn1"))return;
    if(document.getElementById('butn2').style.color = "white") { //second buttun active
        document.getElementById('butn2').style = "color: black; background: white";
        addBavarages();
    }
    document.getElementById('butn1').style = "color: white; background: black";
    removeFood();
}

function Task2() {
    if(isActive("butn2"))return;
    if(document.getElementById('butn1').style.color = "white") { //first buttun active
        document.getElementById('butn1').style = "color: black; background: white";
        addFood();
    }
    document.getElementById('butn2').style = "color: white; background: black";
    removeBavarages();
}

function Task5() {
    var temp2 = document.getElementById("snid");
    temp2.style.display = "block";
    removeFood();
    document.getElementById("butn1").style.display = "none";
    document.getElementById("butn2").style.display = "none";
}

function Task6() {
    var temp2 = document.getElementById("lanch");
    temp2.style.display = "block";
    removeFood();
    document.getElementById("butn1").style.display = "none";
    document.getElementById("butn2").style.display = "none";
}