import Knex from "knex";
import config from "../../libs/knexfile";


const environment = process.env.NODE_ENV || "development";
const knex = Knex(config[environment]);

export default knex;