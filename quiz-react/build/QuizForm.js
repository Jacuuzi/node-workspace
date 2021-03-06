var QuizForm = React.createClass({displayName: "QuizForm",
    render: function () {
        return (
            React.createElement("div", {className: "quizForm"}, 
                React.createElement(QuizError, null), 
                React.createElement("div", {className: "questionForm container well col-md-8 col-md-offset-2"}, 
                    React.createElement("h2", null, React.createElement("span", {id: "title"}, this.props.currentQuestion.id + ') ' + this.props.currentQuestion.title)), 
                    React.createElement("h3", null, React.createElement("span", {id: "subtitle"}, this.props.currentQuestion.subtitle)), 

                    React.createElement(QuestionForm, {question: this.props.currentQuestion})
                ), 
                React.createElement(QuizProgress, {count: "10"})
            )
        );
    }
});

var QuizError = React.createClass({displayName: "QuizError",
    render: function () {
        return (
            React.createElement("div", {className: "quizError alert alert-danger", role: "alert"}, 
                React.createElement("span", {className: "glyphicon glyphicon-exclamation-sign", ariaHidden: "true"}), 
                React.createElement("span", {className: "sr-only"}, "Error: "), 
                " You have to choose answer"
            )
        );
    }
});

var QuizProgress = React.createClass({displayName: "QuizProgress",
    render: function () {
        return (
            React.createElement("div", {className: "answersCounter container col-md-8 col-md-offset-2"}, 
                React.createElement("span", {className: "pull-left"}, "Total ", React.createElement("span", {id: "howManyAlreadyDone"}, "0"), "/", React.createElement("span", {id: "numberOfQuestions"}, this.props.count), " answers"), 
                React.createElement(TimeProgress, null)
            )
        )
    }
});
