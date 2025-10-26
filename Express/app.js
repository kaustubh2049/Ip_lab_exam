const express= require('express')
const app=express();
const PORT = 3000;
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('<p>this is the default page</p>')
})
router.get('/home',(req,res)=>{
    res.send('Welcome to the home page');
});
router.get('/about',(req,res)=>{
    res.send('<p>This is the about page Welcome</p>')
})
app.use('/', router);
app.listen(PORT,()=>{
    console.log(`Server Listening at http://localhost:${PORT}`);
})