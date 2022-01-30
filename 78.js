//#78
function sequentialSizes(val) {
  let answer = "";
  // Змініть код лише під цим рядком
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }

  // Змініть код лише над цим рядком
  return answer;
}

sequentialSizes(1);
