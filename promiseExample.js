let promise = new Promise(function(resolve, reject) {
    let check = false;
    if(check){
      resolve({status:"success"})
    }
    else{
      reject({status: "failed"})
    }
  });

  promise.then((result)=>{
    console.log(result);
  })
  .catch((error)=>{
    console.log(error);
  })
