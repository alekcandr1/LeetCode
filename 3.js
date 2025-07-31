// Решение: Метод "скользящего окна" (Two Pointers + Hash Set)
// Идея в том, чтобы использовать два указателя (left и right) и хэш-таблицу (или Set) для отслеживания уникальных символов в текущем окне.
//
//     Алгоритм:
// Инициализируем:
//
//     maxLen = 0 (максимальная длина подстроки).
//
// left = 0 (начало текущего окна).
//
// charSet = new Set() (множество для хранения символов текущего окна).
//
// Перебираем строку с right от 0 до s.length - 1:
//
// Пока текущий символ s[right] есть в charSet, удаляем s[left] из charSet и сдвигаем left вправо.
//
//     Добавляем s[right] в charSet.
//
//     Обновляем maxLen = Math.max(maxLen, right - left + 1).
//
//     Возвращаем maxLen.

function lengthOfLongestSubstring(s) {
    let maxLen = 0;
    let left = 0;
    const charSet = new Set();

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right]);
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}