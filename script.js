let count = 0;
document.querySelector('#decre').onclick = function() {
    count -= 1;
    document.querySelector('#count-number').innerHTML = count;
}
document.querySelector('#rst').onclick = function() {
    count = 0;
    document.querySelector('#count-number').innerHTML = count;
}
document.querySelector('#incre').onclick = function() {
    count += 1;
    document.querySelector('#count-number').innerHTML = count;
}