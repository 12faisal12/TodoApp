const express = require("express");
const app = express();
const dotenv = require("dotenv");
const notes = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
const path = require('path')

dotenv.config();

app.use(express.json());

connectDB();

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);

__dirname = path.resolve()
if (process.env.NODE_ENV == 'production')
{
    app.use(express.static(path.resolve(__dirname, 'frontend', 'build')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
    })
}
    
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server running on ${PORT}`));
