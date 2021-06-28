export default async (req,res) => {
  if (req.body === process.env.WORK_PASSWORD) {
    res.status(200).send({auth:true})
  }
  else {
    res.status(200).send({auth:false})
  }
}