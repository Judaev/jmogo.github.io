function fullBug(num) {
  for (let i = 0; i < num; i++) {
    if(i % 3 == 0){
      console.log("Full")
    } else if (i % 5 == 0) {
      console.log("Bug");
    } else if (i % 3 == 0 && i % 5 ==0) {
      console.log("FullBug");
    }
  }
}

fullBug(100);