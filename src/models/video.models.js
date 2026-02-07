import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const vidoSchema= new Schema({
    videoFile:{
        type : String, // Clodinary URL
        required: true
    },
    thumbnail:{
        type : String,
        required:true
    },
    title:{
        type : String,
        required:true
    },
    description:{
        type : String,
        required:true
    },
    duration:{
        type : Number,
        required:true
    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:true
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref:"User"
    }
    
},
{
    timestamps:true
}
)

vidoSchema.plugin(mongooseAggregatePaginate)

export const Video=mongoose.model("Video",userSchema)