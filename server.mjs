import express from 'express';
// import cors from 'cors';
import path from "path"
const __dirname = path.resolve()
const app = express()
// app.use(corse())

app.get('/ranking/:formate', (req, res) => {
  console.log('This is test cricket Ranking!')

  let cricketRanking = {
    TEST: {
      POS_1: 'India',
      POS_2: 'Australia',
      POS_3: 'England',
      POS_4: 'South Africa',
      POS_5: 'New Zealand',
      POS_6: 'Pakistan',
      POS_7: 'Sri Lanka',
      POS_8: 'West Indies',
      POS_9: 'Bangladesh',
      POS_10: 'Zimbabwe',
      RAT_1: '121',
      RAT_2: '116',
      RAT_3: '114',
      RAT_4: '104',
      RAT_5: '100',
      RAT_6: '86',
      RAT_7: '84',
      RAT_8: '76',
      RAT_9: '45',
      RAT_10: '32',
    },
    ODI: {
      POS_1: 'Australia',
      POS_2: 'Pakistan',
      POS_3: 'India',
      POS_4: 'New Zealand',
      POS_5: 'England',
      POS_6: 'South Africa',
      POS_7: 'Bangladesh',
      POS_8: 'Afghanistan',
      POS_9: 'Sri Lanka',
      POS_10: 'West Indies',
      RAT_1: '118',
      RAT_2: '116',
      RAT_3: '115',
      RAT_4: '104',
      RAT_5: '101',
      RAT_6: '101',
      RAT_7: '98',
      RAT_8: '86',
      RAT_9: '81',
      RAT_10: '72',
    },
    T20: {
      POS_1: 'India',
      POS_2: 'England',
      POS_3: 'New Zealand',
      POS_4: 'Pakistan',
      POS_5: 'South Africa',
      POS_6: 'Australia',
      POS_7: 'West Indies',
      POS_8: 'Sri Lanka',
      POS_9: 'Bangladesh',
      POS_10: 'Afghanistan',
      RAT_1: '267',
      RAT_2: '259',
      RAT_3: '256',
      RAT_4: '254',
      RAT_5: '253',
      RAT_6: '248',
      RAT_7: '238',
      RAT_8: '237',
      RAT_9: '222',
      RAT_10: '219',
    },
  }

  let userInputCricketFormate = req.params.formate.toUpperCase();
  console.log("userInputCricketFormate ", userInputCricketFormate)

  let rankingFormate = cricketRanking[userInputCricketFormate]

  if (rankingFormate) {
    res.send(rankingFormate)
  } else {
    res.status(404).send(`Cricket Ranking is not available for ${req.params.formate}`);
  }

});

app.use('/', express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Example server listening on port ${PORT}`)
})