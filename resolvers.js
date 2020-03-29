module.exports = {
    Query: {
        activities: async (_, __, { dataSources }) => dataSources.database.getAllActivities(),
    }
}