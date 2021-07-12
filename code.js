function satish(X, Y,Z, m, n){

    let ans = 0;

    for(let i=0; i<m; i++ ){ 

        for(let j=0;j<n;j++){ 

            if ((Math.pow(X[i], 2) + Math.pow(Y[j], 2)==Math.pow(Z[i],2))){

                ans += 1;

             }

        }

    }

    return ans;
}
 
