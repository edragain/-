
function collectPuzzle(Puzzles1,Puzzles2,Puzzles3) {
    // TODO:在这里写入具体的实现逻辑
    // 对所有的碎片进行收集，获取不同拼图类型的结果，并返回
    const array1= Puzzles1.concat(Puzzles2).filter((item, index, arr) => arr.indexOf(item) === index);
    const array2= array1.concat(Puzzles3).filter((item, index, arr) => arr.indexOf(item) === index);
    return array2;
  }
  
  