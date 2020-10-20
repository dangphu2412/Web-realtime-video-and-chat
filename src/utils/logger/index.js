import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error',
      format: winston.format.simple(),

    }),
    new winston.transports.Console({
      level: 'info',
      format: winston.format.combine(
        winston.format.simple(),
        winston.format.splat(),
        // Time format
        winston.format.timestamp({
          format: 'DD-MM-YYYY HH:mm:ss',
        }),
        // Color format
        winston.format.colorize(),
        // Setting log format
        winston.format.printf(log => {
          if (log.stack) return `[${log.timestamp}] [${log.level}] ${log.stack}`;
          return `[${log.timestamp}] [${log.level}] ${log.message}`;
        }),
      ),
    }),
  ],
});

export { logger };
