import img1 from "../trello-images/hero-a.svg";
import img2 from "../trello-images/img2.webp";
import img3 from "../trello-images/img3.jpg";
import img4 from "../trello-images/img4.png"
const data = [
  {
    section: ["section", 'blue'],
    wrapper: "wrapper",
    headingClass: ["intro", "white"],
    heading:
      "With Trello, you can make your team work more efficiently and effectively.",
    p:
      "With Trello boards, columns, and cards, users can easily organize projects and prioritize them.",
    sectionClass: ["p-intro", "white"],
    source: img1,
    imgClass: ["img1"],
  },
  {
    headingClass: ["intro", "paddingLeft"],
    heading: "Work with  any team",
    p:
      "Trello helps organize teams at work, during a side project, or on a family weekend. ",
      sectionClass: ['p-intro', 'paddingLeft'],
    source: img2,
    imgClass: ["img1", "left"],
  },
  {
   
   
    heading: "All information in a visual form",
    p:
      "Add detailed information such as comments, attachments, due dates, and more directly to Trello cards. Work on projects with colleagues from start to finish.",
    source: img3,
    imgClass: ["img1"],
    float:['right', 'float']
  },
  {
    headingClass: ["intro", "paddingLeft"],
    heading: 'Built-in workflow automation with Butler enhancements',
    p:'Delegate tasks to robots! If you want to increase the productivity of your team, automate workflows with the Butler enhancement, and our powerful tools can handle the repetitive work:',
    sectionClass: ['p-intro', 'paddingLeft'],
    source:img4,
    imgClass:['img1', 'left']
  }
];
export default data;
