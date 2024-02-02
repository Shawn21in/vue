<template>
  <article class="gw pos-r pb-5">
    <section class="container px-xl-3 px-lg-4 px-sm-4 px-xs-3">
      <h2 class="text-center title mb-5 mt-lg-5">產品介紹</h2>
      <div class="col-xxl-10 col-lg-11 col-sm-11 col-xs-12 mx-auto">
        <div class="gw mb-lg-5">
          <div class="css-dropdown">
            <input type="checkbox" id="drop" hidden />
            <label for="drop"></label>
            <div class="inner">
              <span v-for="item in dataList" :key="item.prId">
                <a
                  :class="prId == item.prId ? 'active' : ''"
                  @click="getProduct(item.prId)"
                  >{{ item.prname }}</a
                >
              </span>
            </div>
            <!--inner-->
          </div>
          <!--css-dropdown-->
        </div>
        <!--w-100-->
        <div class="gw img-wrap pb-5">{{ prcontent }}</div>
        <img :src="url + 'images/product/' + prphoto" />
        <!--img-wrap-->
      </div>
      <!--col-->
    </section>
  </article>
</template>

<script>
import axios from "axios";
import Product from "@/service/Product";

export default {
  //所有要輸出到網頁就要寫在export default裡面
  name: "Product",
  //所有與網頁互動或要將資料呈現在網頁中,都要寫在data()中,data()名稱不可改
  data() {
    //所有要丟的資料都要放在data()裡面
    return {
      prId: "",
      prcontent: "",
      prphoto: "",
      url: this.$urltest,
      //return固定寫法
      // 這個變數名稱可以自己設定,不一定要使用dataList
      // 因為從後端取回的資料可能多筆,所以要用陣列方式儲存
      dataList: [],
      // userName: "", 一筆寫法將資料丟進userName:
      // email: "",
    };
  },
  //mounted() : 當網頁載入時要啟動或執行的事項,可寫在這裡
  mounted() {
    //this:這個物件,這裡指的是下面methods中的function名稱
    this.getList1();
  },
  //methods : 所有使執行的function都寫在這裡

  methods: {
    say(message) {
      this.testt = message;
      //alert(message);
    },
    //async 與 await搭配,非同步到後端取資料
    async getList1() {
      //將後端取回的資料暫時存在res中(名稱可自訂,不一定要用res)
      const res = await axios(this.$basetest + Product.getList);
      //這裡的Qa.getList是service資料夾裡的Qa.js內的getList
      //後端取回來的資料會也在data中
      //取回資料後,存回dataList, this.dataList為data()中的dataList
      //通常判斷有沒有存取成功是判斷狀態馬是不是200
      console.log(res);
      if (res.status == 200) {
        //這裡的.status狀態碼 F12console看的到.status會等於200
        this.dataList = res.data;
        this.prId = res.data[0].prId;
        this.prcontent = res.data[0].prcontent;
        this.prphoto = res.data[0].prphoto;
      }
    },
    //getPrize(ids, num, content, photo) {
    getProduct(ids) {
      if (ids != "") {
        // this.Id = ids;
        // this.content = content;
        // this.num = num;
        // this.photo = photo;

        /*
        從dataList中尋找所選取的資料(用id來尋找)
        ids: 所選取的id(也就是選取的哪個獎項)
        如果dataList中發現id與所選取的id相同,將獎項資料存在prize變數中
        箭頭函數(式) : 例如function test() ==> test()==>()*/

        const product = this.dataList.find(({ prId }) => prId == ids);
        this.prId = product.prId;
        this.prcontent = product.prcontent;
        this.prphoto = product.prphoto;
      }
    },
  },
};
</script>
