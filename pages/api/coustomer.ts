import { costumerModel } from "@/models/coustomerModel";
import { connectdb } from "@/utils/connectDb";
import { log } from "console";
import { NextApiRequest, NextApiResponse } from "next";
type Data = {
  status: string;
  data: object;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    connectdb();
    if (req.method == "POST") {
      const data = req.body;
      log(req.body);

      if (data.name && data.email && data.lastName) {
        const user = await costumerModel.create(data);
        log(user);
        return res.status(200).json({
          status: "200",
          data: user,
        });
      } else {
        return res.status(400).json({
          status: "400",
          data: {
            massage: "data is not valid",
          },
        });
      }
    }
  } catch (error) {
    log(error);
  }
}
