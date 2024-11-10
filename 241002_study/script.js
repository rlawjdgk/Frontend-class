document.write("<table>");
for (let i = 2; i <= 9; i++) {
  document.write("<tr>");
  document.write(`<td>${i}단</td>`);
  for (let j = 1; j <= 9; j++) {
    document.write("<td>");
    document.write(`${i} x ${j} = ${i * j}`);
    document.write("</td>");
  }
  document.write("</tr>");
}
document.write("</table>");
