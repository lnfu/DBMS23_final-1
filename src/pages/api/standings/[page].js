import { getStandingsByPage } from '../../../utils/queries'

export default async function handler(req, res) {
  const { page } = req.query;

  try {
    const result = await getStandingsByPage(page);
  
    res.status(200).json({
      success: true,
      message: 'Success',
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: 'Error executing SQL statement',
      error: err,
    });
  }
    

}