function power(num, degree) {
    if (degree === 0) {
      return 1;
    } else if (degree < 0) {
      return 1 / power(num, -degree);
    } else {
      return num * power(num, degree - 1);
    }
  }