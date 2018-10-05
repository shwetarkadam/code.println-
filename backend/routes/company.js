var express = require('express');
var router = express.Router();
var Company = require("../model/company");

/* GET home page. */
router.get('/company', function(req, res) {
    Company.find({},(err,companys)=>{
        res.json(companys);

    });
});

router.post('/company',(req,res)=>{
    var newCompany = new Company();

    newCompany.name = req.body.name;
    newCompany.jobProfile = req.body.jobProfile;
    newCompany.desc = req.body.desc;
    newCompany.password = newCompany.generateHash(req.body.password);
    newCompany.minCrit.grade = req.body.grade;
    newCompany.minCrit.maxKt = req.body.kt;

    newCompany.save((err)=>{
        if(err)
            return res.json({sucess:false,msg:""});
        return res.json({sucess:true , msg:""});
    });


});

module.exports = router;