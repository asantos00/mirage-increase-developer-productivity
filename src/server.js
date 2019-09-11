import { Server } from "@miragejs/server";

const server = new Server({
  urlPrefix: "https://alexandrempsantos.com/",
  namespace: "api",
  seeds({ db }) {
    db.loadData({
      posts: [
        {
          id: 1,
          title: "Mocking an API with axios",
          author: "asantos00",
          createdAt: 1557937282,
          body: "Lorem ipsum dolor sit amet, consectetur."
        },
        {
          id: 2,
          title: "Forget axios interceptors. @miragejs/server",
          author: "asantos00",
          createdAt: 758851200,
          body: "Lorem ipsum dolor sit amet, consectetur."
        }
      ]
    });
  },
  routes() {
    this.get("/posts", schema => schema.db.posts);

    this.put("/posts/:id", (schema, request) => {
      schema.db.posts.update(request.params.id, {
        title: request.requestBody.title
      });
    });
  }
});

server.passthrough();
