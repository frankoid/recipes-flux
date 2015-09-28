var Biff = require("../biff");

// Creates a DataStore
var PlannerStore = Biff.createStore({
    // Initial setup
    _days: [
        {name: 'Monday', recipe: null},
        {name: 'Tuesday', recipe: null},
        {name: 'Wednesday', recipe: null},
        {name: 'Thursday', recipe: null},
        {name: 'Friday', recipe: null},
        {name: 'Saturday', recipe: null},
        {name: 'Sunday', recipe: null}
    ],
    getDays: function() {
        return this._days;
    },
    getDay: function(dayIndex) {
        return this._days[dayIndex];
    },
    setRecipeForDay: function(dayIndex, recipe) {
        this._days[dayIndex].recipe = recipe;
    }
}, function (payload) {
    if (payload.actionType === "SET_RECIPE_FOR_DAY") {
        this.setRecipeForDay(payload.dayIndex, payload.recipe);
        this.emitChange();
    }
});

module.exports = PlannerStore;
