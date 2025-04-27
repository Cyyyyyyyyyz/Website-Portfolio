function generator(){

    let input = document.getElementById("num").value;

    let arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    let displayarr = arr[input];

    document.getElementById("output").innerHTML = displayarr;

}