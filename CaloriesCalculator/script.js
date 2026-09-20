//########################## count Man ##########################//
const mbMan = 66.5;
const weightConMan = 13.75;
const heightConMan = 5.003;
const ageConMan = 6.75;

const kcalMan = (weight, height, age) => {
    const kcalManDay = mbMan + (weightConMan * weight) + (heightConMan * height) - (ageConMan * age);
    return kcalManDay;
}

//########################## count Woman ###########################//
const mbWoman = 655.1;
const weightConWoman = 9.563;
const heightConWoman = 1.850;
const ageConWoman = 4.676;

const kcalWoman = (weight, height, age) => {
    const kcalWomanDay = mbWoman + (weightConWoman * weight) + (heightConWoman * height) - (ageConWoman * age);
    return kcalWomanDay;
}

//########################## Lifestyle Multipliers ###########################//
const lifeStyleMultiplier = (style) => {
    const multipliers = {
        "sedentary": 1.2,
        "light": 1.45,
        "moderate": 1.55,
        "active": 1.85,
        "very_active": 2.1
    };
    return multipliers[style];
}


//######################### Lifestyle Carbs Multipliers ##################//
const carbsMultiplier = (style) => {
  const multipliers = {
        "sedentary": 3,
        "light": 5,
        "moderate": 7,
        "active": 8,
        "very_active": 10
  }
  return multipliers[style];
}


//######################### Lifestyle Protein Multipliers ##################//
const proteinMultiplierMan = (style) => {
    const multipliers = {
        "sedentary": 1.1,
        "light": 1.3,
        "moderate": 1.5,
        "active": 1.8,
        "very_active": 2
  }
  return multipliers[style]
}

const proteinMultiplierWoman = (style) => {
    const multipliers = {
        "sedentary": 0.8,
        "light": 1,
        "moderate": 1.2,
        "active": 1.5,
        "very_active": 1.8
  }
  return multipliers[style]
}

//################### Fat Multiplier ###################//
const fatsMultiplier = (style) => {
    const multipliers = {
        "sedentary": 0.2,
        "light": 0.22,
        "moderate": 0.25,
        "active": 0.30,
        "very_active": 0.35
  }
  return multipliers[style]
}

//################### Fiber Multiplier ###################//
// const fiberMultiplier = (style) => {
//     const multipliers = {
//         "sedentary": 0.2,
//         "light": 0.22,
//         "moderate": 0.25,
//         "active": 0.30,
//         "very_active": 0.35
//   }
//   return multipliers[style]
// }

// ######################## Event Listener ########################## //
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Hide previous error messages
    document.getElementById("gender-message").classList.add("hidden");
    document.getElementById("lifestyle-message").classList.add("hidden");

    // Get user inputs
    const gender = document.getElementById("gender").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const age = parseInt(document.getElementById("age").value);
    const lifestyle = document.getElementById("lifestyle").value;

    // Validate if gender and lifestyle are selected
    let valid = true;

    if (!gender) {
        document.getElementById("gender-message").classList.remove("hidden");
        valid = false;
    }

    if (!lifestyle) {
        document.getElementById("lifestyle-message").classList.remove("hidden");
        valid = false;
    }

    // If any field is invalid, do not proceed with the calculation
    if (!valid) return;

    let baseCalories, totalCalories;

    // Calculate BMR and total calories based on gender
    if (gender === "male") {
        baseCalories = kcalMan(weight, height, age);
    } else {
        baseCalories = kcalWoman(weight, height, age);
    }

    // Apply lifestyle multiplier
    totalCalories = baseCalories * lifeStyleMultiplier(lifestyle);

    // Carbs results
    totalCarbs = weight * carbsMultiplier(lifestyle);

    // Protein results
    if (gender === "male") {
      totalProtein = weight * proteinMultiplierMan(lifestyle);
      } else {
        totalProtein = weight * proteinMultiplierWoman(lifestyle);
      }

    // Fat results
    totalFat = (totalCalories * fatsMultiplier(lifestyle) / 9 );

    //Fiber result
    const calculateFiber = (age, gender) => {
    if (age < 18) {
        // Gradually increase from 14 to 30 grams from age 1 to 18
        const minFiber = 14;
        const maxFiber = 30;
        const increment = (maxFiber - minFiber) / 17;
        return minFiber + increment * (age - 1);
    } else if (age >= 18 && age < 50) {
        return gender === "female" ? "25 to 28" : "31 to 34";
    } else {
        return 28; // Fixed for age 50 and above, both genders
    }
}

    const totalFiber = calculateFiber(age, gender);


    // Display results with rounded values
    document.getElementById("bmr").querySelector("span").textContent = Math.round(baseCalories);
    document.getElementById("totalCalories").querySelector("span").textContent = Math.round(totalCalories);
    document.getElementById("carbs").querySelector("span").textContent = Math.round(totalCarbs);
    document.getElementById("protein").querySelector("span").textContent = Math.round(totalProtein);
    document.getElementById("fat").querySelector("span").textContent = Math.round(totalFat);
    document.getElementById("fiber").querySelector("span").textContent = 
        typeof totalFiber === "string" ? totalFiber : `${Math.round(totalFiber)} grams`;

    // Show result section
    document.getElementById("result").classList.remove("hidden");
});
