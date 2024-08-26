// 저장공간

// setItem(key, value)
// getItem(key)
// removeItem(key)
// clear()

let students = ["kim", "Lee", "park"];
localStorage.setItem("students", JSON.stringify(students));

let localData;

if (localStorage.getItem("students") === null) localData = [];
else localData = JSON.parse(localStorage.getItem("students"));

localData.push("choi");
// localStorage.setItem("studemt", JSON.stringify("students"));

console.log(localData);
