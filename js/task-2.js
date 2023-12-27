function calcAverageCalories(days) {
  let totalCalories = 0;
  for (const day of days) {
    totalCalories += day.calories;
  }
  if (days.length === 0) {
    return 0;
  }
  return totalCalories / days.length;
}
