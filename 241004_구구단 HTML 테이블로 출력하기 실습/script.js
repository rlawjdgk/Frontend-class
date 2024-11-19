// document.write("<table>");
// for (let i = 0; i <= 9; i++) {
//   document.write("<tr>");
//   for (let j = 2; j <= 9; j++) {
//     document.write("<td>");
//     if (i === 0) {
//       document.write(`${j}단`);
//     } else {
//       document.write(`${j} x ${i} = ${i * j}`);
//     }

//     document.write("</td>");
//   }
//   document.write("</tr>");
// }
// document.write("</table>");

document.write("<table>");
for (let i = 2; i <= 9; i++) {
  document.write("<tr>");
  document.write(`<tr>${i}단</tr>`);
  for (let j = 1; j <= 9; j++) {
    document.write("<td>");
    document.write(`${i} x ${j} = ${i * j}`);
    document.write("</td>");
  }
  document.write("</tr>");
}
document.write("</table>");
