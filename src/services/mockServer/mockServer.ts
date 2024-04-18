import { createServer } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  const server = createServer({
    environment,

    routes() {
      this.namespace = "api";

      this.get("/sample", () => {
        return "This is a sample response from Mirage JS";
      });
    },
  });

  return server;
}
