const graphql = require('graphql');
const bcrypt = require('bcrypt');

const { GraphQLObjectType, GraphQLSchema, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean, GraphQLInt, GraphQLID } = graphql;

const QuizzType = new GraphQLObjectType({
    name: 'Quizz',
    fields: ( ) => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        password: { type: GraphQLString },
        description: {type: GraphQLString},
        questions: {
            type: new GraphQLList(QuestionType),
            resolve(parent, args){
                return Question.find({quizzId: parent.id});
            }
        },
        scores: {
            type: new GraphQLList(ScoreType),
            resolve(parent, args) {
                return Score.findById({quizzId: parent.id});
            }
        }
    })
});

const QuestionType = new GraphQLObjectType({
    name: 'Question',
    fields: ( ) => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        answers: {
            type: new GraphQLList(AnswerType),
            resolve(parent, args) {
                return Answer.findById({questionId: parent.id});
            }
        }
    })
});

const AnswerType = new GraphQLObjectType({
    name: 'Answer',
    fields: ( ) => ({
        id: { type: GraphQLID },
        text: { type: GraphQLString },
        correct: {type: GraphQLBoolean}
    })
});

const ScoreType = new GraphQLObjectType({
    name: 'Score',
    fields: ( ) => ({
        id: { type: GraphQLID },
        username: { type: GraphQLString },
        score: {type: GraphQLInt}
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        quizz: {
            type: QuizzType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return Quizz.findById(args.id)
            }
        },
        quizzes: {
            type: new GraphQLList(QuizzType),
            resolve(parents, args){
                return Quizz.find({});
            }
        }
    }
});

const Mutations = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addQuizz: {
            type: QuizzType,
            args: {
                title: {type: GraphQLNonNull(GraphQLString)},
                password: { type: GraphQLNonNull(GraphQLString) },
                description: {type: GraphQLString}
            },
            resolve(parent, args) {
                let quizz = new Quizz({
                    title: args.title,
                    password: bcrypt(args.password),
                    description: args.description
                });
                return quizz.save();
            }
        },
        addQuestion: {
            type: QuestionType,
            args: {
                title: {type: GraphQLNonNull(GraphQLString)},
                quizzId: {type: GraphQLNonNull(GraphQLID)}
            },
            resolve(parent, args) {
                let question = new Question({
                    title: args.title,
                    quizzId: args.quizzId
                });
                return question.save();
            }
        },
        addScore: {
            type: ScoreType,
            args: {
                username: {type: GraphQLNonNull(GraphQLString)},
                score: {type: GraphQLNonNull(GraphQLInt)},
                quizzId: {type: GraphQLNonNull(GraphQLID)}
            },
            resolve(parent, args) {
                let score = new Score({
                    username: args.title,
                    score: args.score,
                    quizzId: args.quizzId
                });
                return quizz.save();
            }
        },
        addAnswer: {
            type: AnswerType,
            args: {
                text: {type: GraphQLNonNull(GraphQLString)},
                correct: {type: GraphQLNonNull(GraphQLBoolean)},
                questionId: {type: GraphQLNonNull(GraphQLID)}
            },
            resolve(parent, args) {
                let answer = new Answer({
                    text: args.text,
                    correct: args.correct,
                    questionId: args.questionId
                });
                return answer.save();
            }
        },
        updateQuizz: {
            type: QuizzType,
            args: {
                id: {type: GraphQLNonNull(GraphQLID)},
                title: {type: GraphQLNonNull(GraphQLString)},
                password: { type: GraphQLNonNull(GraphQLString) },
                description: {type: GraphQLString}
            },
            resolve(parent, args) {
                let quizz = RootQuery.quizz(args.id);
                quizz.title = args.title;
                quizz.password = bcrypt(args.password);
                quizz.description = args.description;
                quizz.save()
            }
        },
        deleteQuestion: {
            //flemme
        }


    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutations
});