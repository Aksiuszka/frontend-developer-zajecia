// mirageServer.ts
import { createServer, Model, Server } from "miragejs";

// Define the type for the day model
interface Day {
  id: number;
  date: string;
}

// Function to generate a date string for a given day index
function generateDate(index: number): string {
  const date = new Date();
  date.setDate(date.getDate() + index); // Increment date by index days
  const options: Intl.DateTimeFormatOptions = {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  };
  return date.toLocaleDateString(undefined, options); // Format date as 'mm/dd/yyyy'
}

// Function to seed the Mirage database with 7 days
function seedDays(server: Server): void {
  for (let i = 0; i < 7; i++) {
    server.create<Day>("day", { date: generateDate(i) });
  }
}

// Mirage server configuration
export function makeServer({
  environment = "development",
}: { environment?: string } = {}): Server {
  let server = createServer({
    environment,

    models: {
      day: Model as ModelConstructor<Day>, // Define a Mirage model for the days
    },

    seeds(server) {
      seedDays(server); // Seed the Mirage database with 7 days
    },

    routes() {
      this.namespace = "api";

      this.get("/days", (schema) => {
        // Return an array of objects containing id and date for each day
        return schema.db.days.map((day) => ({
          id: day.id,
          date: day.date,
        }));
      });
    },
  });

  return server;
}
