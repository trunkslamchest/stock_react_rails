//   detectLeftButton = (event) => {
//     event = event || window.event;
//     if ("buttons" in event) {
//       return event.buttons === 1;
//     }
//     var button = event.which || event.button;
//     return button === 1;
// }

// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

export default function DetectMouseClick() {
    // var e = event || window.event
    // var e = window.event
    // if ("buttons" in e) { return e.buttons }
    // var button = e.which || e.button
    // return button
    return window.event
}