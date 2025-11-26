import 'dotenv/config'

export default {
  // CORREÇÃO 1
  dialect: 'mysql',

  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,

  // CORREÇÃO 2: Essencial para MySQL 8.0
  allowPublicKeyRetrieval: true,

  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    'createdAt': 'created_at',
    'updatedAt': 'updated_at'
  },

  dialectOptions: {
    timezone: 'America/Sao_Paulo',
    // CORREÇÃO 3
    ssl: false
  },

  timezone: 'America/Sao_Paulo',
}

