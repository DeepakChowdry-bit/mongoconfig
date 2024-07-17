import connect from "@/lib/connect";
import Product from "@/models/product.model";
import { NextResponse } from "next/server";

export async function GET() {
    await connect();
    try {

        // Handle GET requests specifically
        const products = await Product.find({});

        return NextResponse.json(products, { status: 200 });
    } catch (error) {
        console.error("Error fetching products:", error.message);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }

}

