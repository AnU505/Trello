import React from "react";
import List from "../ReusableComponents/List";

function ImageAndText(props) {
  for (const d in props.data) {
    if (Array.isArray(props.data[d]) && d !== 'list') {
      props.data[d] = props.data[d].join(" ");
    }
  }

  return (
    <main>
      <section
        className={props.data.section == null ? "section" : props.data.section}
      >
        <div className={props.data.info == null ? "info" : props.data.info}>
          <h1
            className={
              props.data.headingClass == null
                ? "intro black"
                : props.data.headingClass
            }
          >
            {props.data.heading}
          </h1>
          <p
            className={
              props.data.sectionClass == null
                ? "p-intro"
                : props.data.sectionClass
            }
          >
            {props.data.p}
            {props.data.list !== null ? <List data={props.data}></List> : ''}
          </p>
        </div>
        {props.data.source !== null ? (
            <img
              src={props.data.source}
              className={
                props.data.imgClass == null ? "img1" : props.data.imgClass
              }
              style={{ float: "left" }}
            />
          ) : (
            ""
          )}
      </section>
    </main>
  );
}

export default ImageAndText;

//   // <div className={props.data.class == null ? "content" : props.data.class}>
//     //   <div
//     //     className={props.data.wrapper == null ? "wrapper" : props.data.wrapper}
//     //   >
//     //     <h1
//     //       className={
//     //         props.data.headingClass == null ? "intro" : props.data.headingClass
//     //       }
//     //     >
//     //       {props.data.heading}
//     //     </h1>
//     //     <section
//     //       className={
//     //         props.data.sectionClass == null
//     //           ? "p-intro"
//     //           : props.data.sectionClass
//     //       }
//     //     >
          // {props.data.source !== null ? (
          //   <img
          //     src={props.data.source}
          //     className={
          //       props.data.imgClass == null ? "img1" : props.data.imgClass
          //     }
          //     style={{ float: "left" }}
          //   />
          // ) : (
          //   ""
          // )}
//     //       {props.data.section}
//     //     </section>
//     //   </div>
//     // </div>
// <section className={props.data.class == null ? "section" : props.data.class}>
//   { props.data.source !== null ? (
//     <img className={props.data.imgClass == null ? "img1" : props.data.imgClass}
//     src={props.data.source}/>
//   ) : '' }
//     <div className={props.data.float}>
// <h1 className={props.data.headingClass == null ? "intro" : props.data.headingClass}>{props.data.heading}</h1>
//   <p className={ props.data.sectionClass == null ? "p-intro" : props.data.sectionClass}>{props.data.section}</p>
//       </div>
// </section>
