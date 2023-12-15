/* Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.

The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.

20_year_estimate = one_year_total * 20

You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.

stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
Make sure your solution takes into account all of the nesting within the stairs array.

Each weekday in the stairs array is an array.

sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]
Your function should return the 20 year estimate of the stairs climbed using the formula above.
перевод Судзуки — монах, который поднимается по большой лестнице в монастырь в рамках ритуала. В некоторые дни он поднимается по большему количеству ступенек, чем в другие, в зависимости от количества учеников, которых он должен тренировать утром. Ему любопытно, сколько ступенек можно будет преодолеть за следующие 20 лет, и он провел год, отмечая свой ежедневный прогресс.

Сумма всех лестниц, пройденных за год, будет использована для оценки количества лестниц, на которые он сможет подняться за 20 лет.

20_year_estimate = one_year_total * 20

Вы получите следующую структуру данных, представляющую лестницы, на которые Suzuki вошел за год. У вас будут все данные за весь год, поэтому независимо от того, как они регистрируются, проблему должно быть легко решить.

stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
Убедитесь, что ваше решение учитывает все вложения в массиве лестниц.

Каждый день недели в массиве лестниц представляет собой массив.

sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]
Ваша функция должна вернуть оценку количества пройденных лестниц за 20 лет, используя приведенную выше формулу.*/

//solutions
function stairsIn20(s){
 
  return SUKA=20*(s[0].reduce((sum, current) => sum + current, 0)+
    s[1].reduce((sum, current) => sum + current, 0)+
    s[2].reduce((sum, current) => sum + current, 0)+
    s[3].reduce((sum, current) => sum + current, 0)+
    s[4].reduce((sum, current) => sum + current, 0)+
    s[5].reduce((sum, current) => sum + current, 0)+
    s[6].reduce((sum, current) => sum + current, 0));
}

//best practice
function stairsIn20(a) {
  return 20 * a.reduce((s, a) => s + a.reduce((s, n) => s + n, 0), 0);
}