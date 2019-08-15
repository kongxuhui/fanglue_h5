import axios from 'axios';
import qs from 'qs';
import { Indicator } from 'mint-ui';

Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};

const URL = '/bank/dis/prepose.action';

export default {
    post(param, open = true, close = true) {
        let data = qs.stringify({
			...param,
	    	corpCode: '1111',
            channelCode: '2222',
            reqDate: new Date().Format("yyyyMMdd"),
            reqTime: new Date().Format("hh:mm:ss")
        });
        open && Indicator.open();
        return axios({
            method: 'POST',
            url: URL,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Requested-With': 'XMLHttpRequest'
            },
            data,
            timeout: 20000
        })
        .then(res => {
            close && Indicator.close();
            return res.data;
        })
        .catch(error => {
            close && Indicator.close();
            if (error.response) {
                // The request was made, but the server responded with a status code 
                // that falls out of the range of 2xx 
                console.log(error.response);
            } else {
                // Something happened in setting up the request that triggered an Error 
                console.log('Error', error.message);
            }
        })
    }
}