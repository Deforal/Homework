function words() {
    const arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    let newarr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    newarr = newarr.sort(() => Math.random() - 0.5);
    alert(newarr)
    let first = prompt('Какой был первый элемент массива? (элементы были перемешаны)')
    let last = prompt('Какой был последний элемент массива? (элементы были перемешаны)')
    if ((first.toLowerCase() === arr[0].toLowerCase()) && (last.toLowerCase() === arr[arr.length - 1].toLowerCase())){
        alert('Вы угадали!')
    } else if ((first.toLowerCase() === arr[0].toLowerCase()) || (last.toLowerCase() === arr[arr.length - 1].toLowerCase())) {
        alert('Вы были близки к победе!')
    } else {
        alert('Попробуйте еще раз.')
    }
}