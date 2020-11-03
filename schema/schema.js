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
                return Question.findById(parent.questions.id);
            }
        },
        scores: {
            type: new GraphQLList(ScoreType),
            resolve(parent, args) {
                return ScoreType.findById(parent.scores.id);
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
            resolve(parent, args){
                return AnswerType.findById(parent.answers.id);
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
        addQuestion: {

        },
        addQuizz: {
            type: QuizzType,
            args: {
                title: {type: GraphQLNonNull(GraphQLString)},
                password: { type: GraphQLNonNull(GraphQLString) },
                description: {type: GraphQLString}
            },
            resolve(parent, args) {
                let book = new Book({
                    name: args.name,
                    genre: args.genre,
                    authorId: args.authorId
                });
                return book.save();
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutations
});