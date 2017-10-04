export function validate(values) {
  const errors = {};

  if(!values.meals) {
    console.log('No meals errors');
  } else {
    const mealsArrayErrors = [];
    values.meals.forEach((meal, mealIndex) => {
      const mealErrors = {};
      if(!meal || !meal.food) {
        mealErrors.food = 'Required';
        mealsArrayErrors[mealIndex] = mealErrors;
      }

      if (!meal || !meal.type) {
        mealErrors.type = 'Required';
        mealsArrayErrors[mealIndex] = mealErrors;
      }
    });

    if(mealsArrayErrors.length) {
      errors.meals = mealsArrayErrors;
    }
  }

  if(!values.diapers) {
    console.log('No diapers errors');
  } else {
    const diapersArrayErrors = [];
    values.diapers.forEach((diaper, diaperIndex) => {
      const diaperErrors = {};
      if(!diaper || !diaper.time) {
        diaperErrors.time = 'Required';
        diapersArrayErrors[diaperIndex] = diaperErrors;
      }

      if (!diaper || !diaper.type) {
        diaperErrors.type = 'Required';
        diapersArrayErrors[diaperIndex] = diaperErrors;
      }
    });

    if(diapersArrayErrors.length) {
      errors.diapers = diapersArrayErrors;
    }
  }

  if(!values.naps) {
    console.log('nothing');
  } else {
    const napsArrayErrors = [];
    values.naps.forEach((nap, napIndex) => {
      const napErrors = {};
      if(!nap || !nap.napStart) {
        napErrors.napStart = 'Required';
        napsArrayErrors[napIndex] = napErrors;
      }

      if (!nap || !nap.napEnd) {
        napErrors.napEnd = 'Required';
        napsArrayErrors[napIndex] = napErrors;
      }
    });

    if(napsArrayErrors.length) {
      errors.naps = napsArrayErrors;
    }
  }

  console.log('Errors:', errors);
  return errors;
}
