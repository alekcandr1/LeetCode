/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i!==j) {
                if (nums[i] + nums[j]===target) {
                    return [i,j]
                }
            }
        }
    }
}


///////////


function twoSum(nums, target) {
    // Создаем объект для хранения чисел и их индексов
    const numMap = {};

    // Проходим по всем элементам массива
    for (let i = 0; i < nums.length; i++) {
        // Вычисляем какое число нам нужно для текущего элемента
        const complement = target - nums[i];

        // Проверяем, есть ли нужное число в нашем объекте
        if (complement in numMap) {
            // Если есть - возвращаем индексы
            return [numMap[complement], i];
        }

        // Если нет - сохраняем текущее число и его индекс
        numMap[nums[i]] = i;
    }

    return []; // По условию сюда никогда не дойдем
}