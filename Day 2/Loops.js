function vowelsAndConsonants(s) {
    var i;
    for (i=0;i<s.length;i++){
        if (s[i].match(/[aeiouAEIOU]/)){
            console.log(s[i]);
        }
    }
    for (i=0;i<s.length;i++){
        if (s[i].match(/[aeiouAEIOU]/)){
            continue;
        }else{
            console.log(s[i]);
        }
    }
}
