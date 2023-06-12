import { getLifterGame } from '../../utils/queries'

export default async function handler(req, res) {

  if (req.method === 'POST') {
    const body = req.body;
    const idArray = body['LifterID'];
    console.log(idArray)
    try {

      const matches = await getLifterGame(idArray);

      res.status(200).json({
        success: true,
        message: 'Success',
        data: matches,
      });



    } catch (error) {
      res.status(404).json({
        success: false,
        message: 'Error executing SQL statement',
        error: error,
      });
    }

  } else {
    res.status(405).send({
      success: false,
      message: 'Only POST requests allowed',
    });
  }


}
