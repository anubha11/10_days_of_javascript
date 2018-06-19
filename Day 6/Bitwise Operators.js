function getMaxLessThanK(n,k){
    let maxi=0;
    let curr=-1;
    for (var i=0; i<n; i++){
        for(var j=i+1;j<=n;j++){
            curr=i&j;
            if (curr<k && curr>maxi){
                maxi=curr;
            }
        }
    }
    return maxi;
}
