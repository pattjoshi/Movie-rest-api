import mongoos from "mongoose";

const db =
  "mongodb+srv://Omrest-apis:9090omop@cluster0.cbcgrgd.mongodb.net/moviApi?retryWrites=true&w=majority";

mongoos
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });
