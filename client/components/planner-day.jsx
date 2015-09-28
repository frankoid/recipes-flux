var React = require("react");

var PlannerStore = require("../stores/planner-store");
var RecipeStore = require("../stores/recipe-store");

var PlannerActions = require("../actions/planner-actions");

var PlannerDay = React.createClass({
    render: function() {
        return (
            <p>
                {this.getDayName()}
                <select onChange={this.onRecipeChange} value={this.getRecipeId()} ref="recipeSelect">
                {this.renderRecipeOptions()}
                </select>
            </p>
        );
    },
    getDayName: function() {
        return this.getDay().name;
    },
    getRecipeId: function() {
        //FJDTODO handle no recipe
        var recipe = this.getDay().recipe;
        return recipe ? recipe._id : null;
    },
    getDay: function () {
        return PlannerStore.getDay(this.props.dayIndex);
    },
    renderRecipeOptions: function() {
        return RecipeStore.getRecipes().map(function (recipe, index) {
            return (
                <option key={index} value={recipe._id}>{recipe.title}</option>
            );
        });
    },
    onRecipeChange: function() {
        var recipeSelectNode = this.refs.recipeSelect.getDOMNode();
        var recipeId = recipeSelectNode.value;
        var recipe = RecipeStore.getRecipe(recipeId);
        PlannerActions.setRecipeForDay(this.props.dayIndex, recipe);
    }
});

module.exports = PlannerDay;
