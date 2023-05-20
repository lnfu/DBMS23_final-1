import { getStandingsByPage } from '../../../utils/queries'

export default async function handler(req, res) {
  const { page } = req.query;

  try {
    const [data] = await getStandingsByPage(page);

    res.status(200).json({
      success: true,
      message: 'Success',
      data: data,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'Error executing SQL statement',
      error: error,
    });
  }
}