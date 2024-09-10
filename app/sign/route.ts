import { NextResponse } from 'next/server';
import User from "../../models/User";
import connectDb from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");

export async function POST(request: { json: () => any; }) {
    await connectDb();
    const body = await request.json();
    let user = await User.findOne({"email": body.email});
    
    if (!user) {
        const { name, email } = body;
        let U = new User({
            name,
            email,
            password: CryptoJS.AES.encrypt(body.password, process.env.AES_SECRET).toString()
        });
        await U.save();
        return NextResponse.json({ success: "success" }, { status: 200 });
    } else {
        return NextResponse.json(
            { success: false, error: "This email is already registered" }, 
            { status: 400 }
        );
    }
}

export async function GET() {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}