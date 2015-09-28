var React = require("react");

var PlannerDay = require("./planner-day");

var Planner = React.createClass({
    render: function() {
        return (
            <div>
                {this.dayNodes()}
            </div>
        );
    },
    dayNodes: function() {
        var result = [];
        for (var dayIndex = 0; dayIndex < 7; dayIndex++) {
            result.push(
                <PlannerDay key={dayIndex} dayIndex={dayIndex} onRecipeChange={this.onRecipeChange} />
            );
        }
        return result;
    }
});

module.exports = Planner;
