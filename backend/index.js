const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    scalar DateTime
    scalar Latitude
    scalar Longitude

    input MachineWhereUniqInput {
        name: String!
        latitude: Latitude!
        longitude: Longitude!
    }

    type GPSPosition {
        latitude: Latitude!
        longitude: Longitude!
    }

    type Machine {
        name: String!
        sensor: [Sensor!]
        lastKnownPosition: GPSPosition
    }

    type Sensor {
        name: String!
        machine: Machine!
    }

    type SensorDataPoint {
        timestamp: DateTime!
        value: Float!
    }

    type Query {
        machine(where: MachineWhereUniqInput!): Machine
        machines: [Machine!]
        sensorData(id: ID!, from: DateTime!, to: DateTime!): [SensorDataPoint]
    }
`;

const machines = [{ name: 'm', sensor: [{ name: 's', machine: 'm' }], lastKnownPosition: { latitude: 45, longitude: 15 } }];
const sensorData = [{ timestamp: new Date(), value: 25 }];

const resolvers = {
    Query: {
        machine: (where) => {
            const sortedMachines = machines.sort((x, y) => (Math.pow(x.lastKnownPosition.latitude - where.latitude, 2) + Math.pow(x.lastKnownPosition.longitude - where.longitude, 2) < Math.pow(x.lastKnownPosition.latitude - where.latitude, 2) + Math.pow(y.lastKnownPosition.longitude - where.longitude, 2)));
            return sortedMachines[0];
        },
        machines: () => machines,
        sensorData: (id, from, to) => sensorData.filter(({ timestamp }) => (timestamp >= from && timestamp <= to))
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Server is up at ${url}`);
});