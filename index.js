function rectangular(s1,s2,s3){
    let a = Math.sqrt(s1*s2/s3);
    let b = Math.sqrt(s2*s3/s1);
    let c = Math.sqrt(s3*s1/s2);
    return (a+b+c)*4;
}