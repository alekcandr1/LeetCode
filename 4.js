// Объяснение:
//     Подход: Используем бинарный поиск для нахождения правильного разделения двух массивов, при котором элементы слева от разделения меньше элементов справа.
//
//     Алгоритм:
//
// Делаем бинарный поиск по более короткому массиву (nums1)
//
// Вычисляем разделение для второго массива (nums2) на основе разделения первого
//
// Проверяем, удовлетворяет ли текущее разделение условиям медианы
//
// Если нет, корректируем границы бинарного поиска
//
// Сложность: O(log(min(m, n))) - так как мы выполняем бинарный поиск по более короткому массиву.
//
//     Особые случаи:
//
//     Если один массив пустой, медиана находится во втором массиве
//
// Если общая длина чётная, медиана - среднее двух центральных элементов
//
// Если нечётная - центральный элемент
function findMedianSortedArrays(nums1, nums2) {
    // Убедимся, что nums1 - это более короткий массив
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const m = nums1.length;
    const n = nums2.length;
    let low = 0;
    let high = m;

    while (low <= high) {
        const partitionX = Math.floor((low + high) / 2);
        const partitionY = Math.floor((m + n + 1) / 2) - partitionX;

        const maxLeftX = (partitionX === 0) ? -Infinity : nums1[partitionX - 1];
        const minRightX = (partitionX === m) ? Infinity : nums1[partitionX];

        const maxLeftY = (partitionY === 0) ? -Infinity : nums2[partitionY - 1];
        const minRightY = (partitionY === n) ? Infinity : nums2[partitionY];

        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            // Нашли правильное разделение
            if ((m + n) % 2 === 0) {
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
            } else {
                return Math.max(maxLeftX, maxLeftY);
            }
        } else if (maxLeftX > minRightY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }

    throw new Error("Input arrays are not sorted or invalid");
}