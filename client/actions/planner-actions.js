var Biff = require("../biff");

var PlannerActions = Biff.createActions({
    setRecipeForDay: function(dayIndex, recipe) {
        this.dispatch({
            actionType: "SET_RECIPE_FOR_DAY",
            dayIndex: dayIndex,
            recipe: recipe
        });
    }
});

module.exports = PlannerActions;
