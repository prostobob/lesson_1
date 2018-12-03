const ITEA_COURSES = ["Курс HTML & CSS", "JavaScript базовый курс", "JavaScript продвинутый курс", 
                    "JavaScript Professional", "Angular 2.4 (базовый)", "Angular 2.4 (продвинутый)", 
                    "React.js", "React Native", "Node.js", "Vue.js"];


/*** 1  */

const arrLength = ITEA_COURSES.reduce((acc, current) => {
    acc.push(current.length);
    return acc;
}, []);

console.log(arrLength);

/** 2 */

ITEA_COURSES.sort((a, b) => a.localeCompare(b));
console.log(ITEA_COURSES);

/** 3 */

function findFunc(ITEA_COURSES, value) {

    for (var i = 0; i < ITEA_COURSES.length; i++) {
      if (ITEA_COURSES[i] == value) return i;
    }
    return -1;
  }
  console.log(findFunc(ITEA_COURSES, 'Node.js'));