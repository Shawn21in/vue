<template>
  <div class="member"></div>
  <div v-for="item in dataList" :key="item.id">
    <!-- 上面的:是有跑程式的意思,用.id是因為不會重複 -->
    <!-- item是別名,可以自行更改 -->
    {{ item.userId }}<br />{{ item.userName }}
    <!-- <hr /><br />brhr後面要加空白斜線,不然會error -->
  </div>
  <hr />

  <div v-for="(item, index) in dataList" :key="index">
    <!-- 如果.id會重複,可以自己建立索引值,像上面這行  -->
    {{ item.userId }}
    <br />
    {{ item.userName }}
  </div>
</template>

<script>
import axios01 from "axios"; //import axios01的axios01是別名,可以改名稱但通常不會改,改了下方的const res = await axios01.get("http://localhost/"+ Member.search);就要寫對應名稱axios01
import Member from "@/service/Member.js";
//每一個vue網頁若要取用資料,都要用export default
export default {
  //每個vue網頁可以有個name,可用來做連結或網頁間傳遞資料
  name: "product",
  //所有要與網頁互動或將後端取回資料顯示在網頁上,都要寫在data()中,data()名稱不可以改

  data() {
    return {
      //一定要宣告一個下方methods:裡的this.dataList = res.data;才有地方可以丟值,dataList:變數名稱,可自行命名
      //因為後端取回的資料可能有多筆,所以要用陣列([])
      dataList: [],
    };
  },
  //mounted:網頁載入時
  mounted() {
    //當網頁在入時呼叫這個網頁getList()的方法
    //this:這個網頁,或這個物件,或這個程式
    this.getList();
  },
  methods: {
    //async:與await搭配,非同步到後端取資料
    async getList() {
      //axios到後端取資料的方法有get,post等
      //get():到後端要資料的網址及路徑
      //res:後端回傳資料的結果,名稱可自行命名,不一定要用res
      //res:為response的縮寫,後端回傳為response,到後端要資料為request
      const res = await axios01.get("http://localhost/" + Member.search);
      console.log(res.data);
      //res.data:後端傳回來的資料,會存在data中
      //this.dataList:這個dataList為data()中的dataList,要後端回傳的資料儲存在data()中的dataList
      this.dataList = res.data;
    },
  },
};
</script>
