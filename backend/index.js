const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Atlas connection
const uri = "mongodb+srv://ezranzioki:0710865376@cluster0.krinkqa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB using mongoose. Do not pass the low-level mongodb driver's
// `serverApi` option here (it can cause compatibility errors if a separate
// `mongodb` package with a different version is installed). Mongoose manages
// driver options internally; a simple connect(uri) is sufficient for most apps.
async function connectDB() {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}
connectDB();

//routes(users api eg)
const userRoutes= require("./routes/UserRoutes");
app.use('/api/users',userRoutes);

//start server
const PORT = process.env.PORT || 5173;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});