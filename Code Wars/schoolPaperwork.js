// Your classmates asked you to copy some paperwork for them.
// You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need.

function schoolPaperwork(n, m){
  return (n > 0 && m > 0) ? n * m : 0;
}
schoolPaperwork(0, 5); // --> 25
