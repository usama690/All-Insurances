const router  = require('express').Router()
const alfalah = require('../../banks f/ALFALAH.json')
const faisal = require('../../banks f/FAISAL.json')
const hbl = require('../../banks f/HBL.json')
const mcb = require('../../banks f/MCB.json')
const meezan = require('../../banks f/MEEZAN.json')

router.get("/car-loans/:bank_name", async (req, res) => {
    try {
        const bankName = req.params.bank_name
        let getData;
        if(bankName === 'alfalah')   getData  = await alfalah['AUTO_LOAN']
        if(bankName === 'faisal') getData  = await faisal['AUTO_LOAN']
        if(bankName === 'hbl') getData  = await hbl['AUTO_LOAN']
        if(bankName === 'mcb') getData  = await mcb['AUTO_LOAN']
        if(bankName === 'meezan') getData  = await meezan['AUTO_LOAN']
        console.log(getData)
        return res.status(200).json({
            success:true,
            message:'Successfully get data',
            data:getData
        })
    } catch (err) {
      console.error(err);
      }
  });
router.get("/credit-cards/:bank_name", async (req, res) => {
    try {
        const bankName = req.params.bank_name
        console.log(bankName,'my bankname')
        let getData;
        if(bankName === 'alfalah')   getData  = await alfalah['CREDIT_CARDS']
        if(bankName === 'faisal') getData  = await faisal['CREDIT_CARDS']
        if(bankName === 'hbl') getData  = await hbl['CREDIT_CARDS']
        if(bankName === 'mcb') getData  = await mcb['CREDIT_CARDS']
        if(bankName === 'meezan') getData  = await meezan['CREDIT_CARDS']
        console.log(getData)
        return res.status(200).json({
            success:true,
            message:'Successfully get data',
            data:getData
        })
    } catch (err) {
      console.error(err);
      }
  });
router.get("/life-insurance/:bank_name", async (req, res) => {
    try {
        const bankName = req.params.bank_name
        let getData;
        if(bankName === 'alfalah')   getData  = await alfalah['LIFE_INSURANCE']
        if(bankName === 'faisal') getData  = await faisal['LIFE_INSURANCE']
        if(bankName === 'hbl') getData  = await hbl['LIFE_INSURANCE']
        if(bankName === 'mcb') getData  = await mcb['LIFE_INSURANCE']
        if(bankName === 'meezan') getData  = await meezan['LIFE_INSURANCE']
        console.log(getData)
        return res.status(200).json({
            success:true,
            message:'Successfully get data',
            data:getData
        })
    } catch (err) {
      console.error(err);
      }
  });
  
router.get("/personal-loans/:bank_name", async (req, res) => {
    try {
        const bankName = req.params.bank_name
        let getData;
        if(bankName === 'alfalah')   getData  = await alfalah['PERSONAL_LOAN']
        if(bankName === 'faisal') getData  = await faisal['PERSONAL_LOAN']
        if(bankName === 'hbl') getData  = await hbl['PERSONAL_LOAN']
        if(bankName === 'mcb') getData  = await mcb['PERSONAL_LOAN']
        if(bankName === 'meezan') getData  = await meezan['PERSONAL_LOAN']
        console.log(getData)
        return res.status(200).json({
            success:true,
            message:'Successfully get data',
            data:getData
        })
    } catch (err) {
      console.error(err);
      }
  });
  
module.exports = router