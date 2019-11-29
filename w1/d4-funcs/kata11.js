 // bayad ye object e khali tarif konam, bad ye for of mizaram ke doone doone too object haye arrray of objects begarde , mesle hamoon ke too count letter dashtim ye if mizaram ke agar result e un course dar item e object bood, push  kone esmesho,age na inst .course ro ke masalan bara avvali mishe ios ro mosavie inst .name bokone,masalan alan dar khate aval e arraye,miad course ro check mikone ke esmesh ios e ,chon to result nist(chon khodemoon result o khali tarif kardim,) pas mire else ro ejra mikone va ios ro mosavi name gharar mide ke mishe ios: ["samuel"],chon uno neveshtim result[inst.cours] mibare too object key mikone va rooberoosh chon inst.name too kroshe hast pas mishe value,bad mire badi bazam chn jadide mosavi esm gharr mide,badi chn tekrarie,mire kjate avale shart va esm ro push mikone be course ke alan key hast
const organizeInstructors = function(instructors) {
  let results = {};
 for (let inst of instructors) {
   if (results[inst.course]) {
     results[inst.course].push(inst.name);
   } else {
    results[inst.course] = [inst.name];
   }
 } return results;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));