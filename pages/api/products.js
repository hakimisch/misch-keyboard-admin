import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default async function handle(req, res) {
    const {method} = req;
    await mongooseConnect();

    if (method === 'GET') {
        res.json(await Product.find());
    }


    if (method === 'POST') {
        const {title,description,type,price} = req.body;
        const productDoc = await Product.create({
            title,description,type,price,
        })
        res.json(productDoc);
    }
}