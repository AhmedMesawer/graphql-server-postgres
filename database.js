const { Client } = require("pg");
const { DataSource } = require("apollo-datasource");

class Database extends DataSource {
  constructor() {
    super();
    this.client = new Client({
      connectionString: process.env.DATABASE_URL
    });
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllActivities() {
    try {
      const query = "SELECT * FROM location limit 5 ;";
      await this.client.connect();
      const res = await this.client.query(query, null);
      if (res !== null) {
        // console.log("query response", res);
        await this.client.end();
        return res.rows;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  // distanceBetween = (point1, point2) => {
  //   if (!point2) point2 = { latitude: 43.649358, longitude: -79.601992 };
  //   const toRadians = degrees => degrees * (Math.PI / 180);
  //   const R = 6371; // radius of earth in kilometres
  //   var φ1 = toRadians(point1.latitude);
  //   var φ2 = toRadians(point2.latitude);
  //   var Δφ = toRadians(point2.latitude - point1.latitude);
  //   var Δλ = toRadians(point2.longitude - point1.longitude);

  //   var a =
  //     Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
  //     Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  //   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  //   return R * c;
  // };
  // activitiesWithDistances = (activity, userPosition) => {
  //   return {
  //     activity: activity,
  //     distance: distanceBetween(
  //       {
  //         latitude: activity.latitude,
  //         longitude: activity.longitude
  //       },
  //       {
  //         latitude: userPosition.latitude,
  //         longitude: userPosition.longitude
  //       }
  //     )
  //   };
  // };
}

module.exports = Database;
