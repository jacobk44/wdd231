import byuiCourse from './course.mjs';
import { setSectionSelection } from './sections.mjs';
import { setTitle, renderSections } from './output.mjs';


setTitle(byuiCourse);
setSectionSelection(byuiCourse.sections);
renderSections(byuiCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", () => {
    const sectionNum = parseInt(document.querySelector("#sectionNumber").value);
    if (sectionNum) {
        byuiCourse.changeEnrollment(sectionNum, true);
        renderSections(byuiCourse.sections);
    }
});

document.querySelector("#dropStudent").addEventListener("click", () => {
    const sectionNum = parseInt(document.querySelector("#sectionNumber").value);
    if (sectionNum) {
        byuiCourse.changeEnrollment(sectionNum, false);
        renderSections(byuiCourse.sections);
    }
});
