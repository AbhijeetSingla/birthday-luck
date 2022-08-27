function luckCheck(date, num) {
    const bDate = date
      .split("")
      .filter((e) => e !== "-")
      .reduce((x, y) => parseInt(x) + parseInt(y));
    const number = parseInt(num);
  
    return bDate % number === 0 ? true : false;
}

export default luckCheck;