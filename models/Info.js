const mongoose = require('mongoose')

// 이미지 업로드 기능 추가하기 
// 검색 기능, 정렬 기능 추가하기

const newsSchema = mongoose.Schema({
    title:{
        type : String,
        required : [true, 'Title is required!']
    },
    body:{
        type : String,
        required : [true, 'Content is Required!']
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    updatedAt :{
        type : Date
    }
});

const News = mongoose.model('news', newsSchema);
module.exports = { News };
// 모듈의 사용성을 늘리기 위한 exports