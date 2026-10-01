import { NextResponse } from "next/server";
import {connect} from "@/dbConfig/dbConfig";
connect()
export async function GET(){
    try {
        const response = NextResponse.json({
            message:"logout successful",
            sucess:true,
        })
        response.cookies.set("token","",{
            httpOnly:true,expires:new Date(0)
        });
        return response

    } catch (error:any) {
        NextResponse.json({error:error.message},{status:400});
    }
}