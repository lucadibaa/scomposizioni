function calc() {
    var num = document.getElementById('in').value
    let j = num.length - 1

    for ( let i = 0; i <= num.length - 1; i++ ) {
        var res = new String()
        if ( j > 0 ) {
            res = '(' + num[i] + ' x 10^' + j + ') + '
        } else if ( j == 0 ) {
            res = '(' + num[i] + ' x 10^' + j + ')'
        }
        var result = document.createElement('result' + i)
        result.innerHTML = res
        document.querySelector('.result').appendChild(result)
        console.log(result)
        j--
    }
}

function reset() {
    document.querySelector('.result').textContent = ''
}