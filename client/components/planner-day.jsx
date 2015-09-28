var React = require("react");

var PlannerStore = require("../stores/planner-store");
var RecipeStore = require("../stores/recipe-store");

var PlannerActions = require("../actions/planner-actions");

var PlannerDay = React.createClass({
    mixins: [PlannerStore.mixin],
    render: function() {
        return (
            <p>
                {this.getDayName()}
                <select onChange={this.onRecipeChange} value={this.getSelectedValue()} ref="recipeSelect">
                    <option key="-1" value="-1">- Nothing yet -</option>
                    {this.renderRecipeOptions()}
                </select>
            </p>
        );
    },
    getDayName: function() {
        return this.getDay().name;
    },
    getSelectedValue: function() {
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
    storeDidChange: function () {
    },
    onRecipeChange: function() {
        var recipeSelectNode = this.refs.recipeSelect.getDOMNode();
        var recipeId = recipeSelectNode.value;
        var recipe = recipeId == -1 ? null : RecipeStore.getRecipe(recipeId);
        PlannerActions.setRecipeForDay(this.props.dayIndex, recipe);
    }
});

module.exports = PlannerDay;
