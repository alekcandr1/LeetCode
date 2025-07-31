// Этот код реализует рекурсивное сложение двух чисел, представленных в виде связных списков (Linked Lists).
// Это классическая задача "Add Two Numbers" с LeetCode (№ 2), где цифры числа хранятся в обратном порядке.
//
//     Разбор паттерна:
//     Рекурсивный подход:
//
//     Функция addTwoNumbers вызывает саму себя для следующих узлов списков (l1.next, l2.next), пока не дойдет до конца.
//
//     Базовый случай: если оба списка закончились (!l1 && !l2) и нет переноса (carry === 0), возвращаем null.
//
//     Обработка текущего разряда:
//
//     Сумма текущих цифр (l1.val + l2.val) и переноса (carry).
//
//     Новая цифра: sum % 10 (остаток от деления на 10).
//
// Новый перенос: Math.floor(sum / 10) (целая часть от деления на 10).
//
// Создание нового узла:
//
//     new ListNode(sum % 10, ...) — создает узел с текущей цифрой и рекурсивно строит хвост списка.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2, carry = 0) {
    if (!l1 && !l2 && !carry) return null;
    const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    return new ListNode(sum % 10, addTwoNumbers(l1?.next, l2?.next, Math.floor(sum / 10)));
};
console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]))